import { ApolloClient } from '@apollo/client';
import { getAuthClient, getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LoginForm from '~/app/[slug]/LoginForm';
import getPageQuery from '~/app/[slug]/getPageQuery';
import BlocksViewer from '~/app/_components/content/BlocksViewer';
import { NextSearchParamsProp } from '~/types/NextSearchParams';
import {
  GetPageQuery,
  GetPageQueryVariables,
  PageIdType,
} from '~/types/__generated__/graphql';
import { hasPreviewProps } from '~/util/wp/hasPreviewProp';
import Article from '~components/Article/Article';
import LandingPage from '~templates/LandingPage/LandingPage';

async function getWpPageData(
  id: string,
  isPreview: boolean,
  client: ApolloClient<unknown>,
) {
  const { data } = await client.query<GetPageQuery, GetPageQueryVariables>({
    query: getPageQuery,
    variables: {
      id,
      idType: isPreview ? PageIdType.DatabaseId : PageIdType.Uri,
      asPreview: isPreview,
    },
  });

  const { page } = data;
  if (!page) {
    return null;
  }

  if (page.isRestricted || page.status !== 'publish') {
    return null;
  }

  return page;
}

interface BasicPageProps extends NextSearchParamsProp {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  props: BasicPageProps,
): Promise<Metadata> {
  const params = await props.params;

  const { slug } = params;

  // We do not care about using preview data for metadata,
  // so use the regular client.
  const client = await getClient();
  const page = await getWpPageData(slug, false, client);
  if (!page) {
    notFound();
  }

  const metadata: Metadata = {
    title: page?.title,
  };
  return metadata;
}

export default async function Page(props: BasicPageProps) {
  const isPreview = await hasPreviewProps(props);
  const id = isPreview
    ? (await props.searchParams).p
    : (await props.params).slug;

  const client = isPreview ? await getAuthClient() : await getClient();
  if (!client) {
    // If no client, this means that the user is attempting to see preview
    // and that the user is currently not "logged in" on the app.
    // Show the login form so user can do so.
    return <LoginForm />;
  }

  const idString = Array.isArray(id) ? id[0] : id;
  if (!idString) {
    // Page ID/slug not found in props.
    notFound();
  }

  const page = await getWpPageData(idString, isPreview, client);
  if (!page) {
    // Content not found in WordPress.
    notFound();
  }

  const { title, editorBlocks } = page;

  return (
    <LandingPage title={title || ''}>
      <Article title={title}>
        <BlocksViewer blocks={editorBlocks || []} />
      </Article>
    </LandingPage>
  );
}
