import { RouteInternal } from '~/types/__generated__/graphql';
import entityIsType from '~/util/entityIsType';

function routeIsInternal(
  route: { __typename?: string } | null | undefined,
): route is RouteInternal {
  return !!route && route.__typename === 'RouteInternal';
}

function entityExists<T extends { __typename?: string }>(
  entity: { __typename?: string } | null | undefined,
  typename: string,
): entity is T {
  return !!entity && entityIsType<T>(entity, typename);
}

function canShowEntity(
  entity: {
    __typename?: string;
    status?: boolean;
  },
  inDraftMode = false,
): boolean {
  return ('status' in entity && entity.status) || inDraftMode;
}

export { canShowEntity, entityExists, routeIsInternal };
