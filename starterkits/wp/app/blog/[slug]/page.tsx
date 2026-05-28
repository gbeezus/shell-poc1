import { ApolloClient } from '@apollo/client';
import { getAuthClient, getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LoginForm from '~/app/[slug]/LoginForm';
import BlocksViewer from '~/app/_components/content/BlocksViewer';
import getPostQuery from '~/app/blog/[slug]/getPostQuery';
import { NextSearchParamsProp } from '~/types/NextSearchParams';
import {
  GetPostQuery,
  GetPostQueryVariables,
  PostIdType,
} from '~/types/__generated__/graphql';
import { hasPreviewProps } from '~/util/wp/hasPreviewProp';
import Article from '~components/Article/Article';
import LandingPage from '~templates/LandingPage/LandingPage';

async function getWpPostData(
  id: string,
  isPreview: boolean,
  client: ApolloClient<unknown>,
) {
  const { data } = await client.query<GetPostQuery, GetPostQueryVariables>({
    query: getPostQuery,
    variables: {
      id,
      idType: isPreview ? PostIdType.DatabaseId : PostIdType.Slug,
      asPreview: isPreview,
    },
  });

  const { post } = data;
  if (!post) {
    return null;
  }

  if (post.isRestricted || post.status !== 'publish') {
    return null;
  }

  return post;
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
  const post = await getWpPostData(slug, false, client);
  if (!post) {
    notFound();
  }

  const metadata: Metadata = {
    title: post?.title,
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

  const post = await getWpPostData(idString, isPreview, client);
  if (!post) {
    // Content not found in WordPress.
    notFound();
  }

  const { author, title, editorBlocks, date } = post;

  return (
    <LandingPage title={title || ''}>
      <Article author={author?.node.name} date={date}>
        <BlocksViewer blocks={editorBlocks || []} />
      </Article>
    </LandingPage>
  );
}
