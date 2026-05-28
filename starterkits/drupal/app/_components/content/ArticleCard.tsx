import Image from 'next/image';
import { JSX } from 'react';
import { FragmentType, getFragmentData, graphql } from '~/types/__generated__';
import Card from '~components/Card/Card';

const ArticleCardFragment = graphql(`
  fragment ArticleCardFragment on NodeArticle {
    title
    body {
      summary
    }
    path
    image {
      variations(styles: LARGE) {
        width
        url
        name
        height
      }
      alt
    }
  }
`);

function ArticleCard(props: {
  entity: FragmentType<typeof ArticleCardFragment>;
}): JSX.Element {
  const article = getFragmentData(ArticleCardFragment, props.entity);
  return (
    <Card
      title={article.title}
      url={article.path}
      media={
        article.image && article.image.variations ? (
          <Image
            src={article.image.variations[0].url}
            alt={article.image.alt || ''}
            width={article.image.variations[0].width}
            height={article.image.variations[0].height}
          />
        ) : undefined
      }
    >
      {article.body?.summary}
    </Card>
  );
}

export { ArticleCardFragment };
export default ArticleCard;
