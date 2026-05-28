import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import BasicPageFull from '~/app/_components/content/BasicPageFull';
import LandingPageFull from '~/app/_components/content/LandingPageFull';
import { graphql } from '~/types/__generated__';
import {
  GetNodeByPathQuery,
  GetNodeByPathQueryVariables,
  NodeLandingPage,
  NodePage,
} from '~/types/__generated__/graphql';
import {
  canShowEntity,
  entityExists,
  routeIsInternal,
} from '~/util/drupal/dataIsEntityType';
import query from '~/util/drupal/query';
import entityIsType from '~/util/entityIsType';

const getNodeByPath = graphql(`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      __typename
      ... on RouteInternal {
        entity {
          __typename
          ... on NodeInterface {
            status
          }
          ...BasicPageFragment
          ...LandingPageFragment
        }
      }
    }
  }
`);

async function NodeFull(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  const { isEnabled } = await draftMode();
  const data = await query<GetNodeByPathQuery, GetNodeByPathQueryVariables>(
    getNodeByPath,
    {
      path: `/${params.slug.join('/')}`,
    },
  );
  if (
    !!data &&
    routeIsInternal(data.route) &&
    (entityExists<NodePage>(data.route.entity, 'NodePage') ||
      entityExists<NodeLandingPage>(data.route.entity, 'NodeLandingPage')) &&
    canShowEntity(data.route.entity, isEnabled)
  ) {
    return entityIsType<NodeLandingPage>(
      data.route.entity,
      'NodeLandingPage',
    ) ? (
      <LandingPageFull entity={data.route.entity} />
    ) : (
      <BasicPageFull entity={data.route.entity} />
    );
  } else {
    notFound();
  }
}

export default NodeFull;
