/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query GetNodeByPath($path: String!) {\n    route(path: $path) {\n      __typename\n      ... on RouteInternal {\n        entity {\n          __typename\n          ... on NodeInterface {\n            status\n          }\n          ...BasicPageFragment\n          ...LandingPageFragment\n        }\n      }\n    }\n  }\n": types.GetNodeByPathDocument,
    "\n  fragment ArticleCardFragment on NodeArticle {\n    title\n    body {\n      summary\n    }\n    path\n    image {\n      variations(styles: LARGE) {\n        width\n        url\n        name\n        height\n      }\n      alt\n    }\n  }\n": types.ArticleCardFragmentFragmentDoc,
    "\n  fragment ArticleFullFragment on NodeArticle {\n    title\n    created {\n      timestamp\n    }\n    body {\n      processed\n    }\n  }\n": types.ArticleFullFragmentFragmentDoc,
    "\n  fragment BasicPageCardFragment on NodePage {\n    title\n    body {\n      summary\n    }\n    path\n  }\n": types.BasicPageCardFragmentFragmentDoc,
    "\n  fragment BasicPageFragment on NodePage {\n    title\n    body {\n      processed\n    }\n  }\n": types.BasicPageFragmentFragmentDoc,
    "\n  fragment LandingPageFragment on NodeLandingPage {\n    title\n    content {\n      __typename\n      ...AllParagraphsFragment\n    }\n  }\n": types.LandingPageFragmentFragmentDoc,
    "\n  fragment MenuItemFragment on MenuItem {\n    title\n    id\n    url\n    attributes {\n      class\n    }\n    internal\n  }\n": types.MenuItemFragmentFragmentDoc,
    "\n  fragment AccordionItemParagraphFragment on ParagraphAccordionItem {\n    id\n    accordionHeading: title\n    accordionBody: wysiwyg {\n      processed\n    }\n  }\n": types.AccordionItemParagraphFragmentFragmentDoc,
    "\n  fragment AccordionParagraphFragment on ParagraphAccordion {\n    id\n    accordionItems: paragraphs {\n      __typename\n      ...AccordionItemParagraphFragment\n    }\n  }\n": types.AccordionParagraphFragmentFragmentDoc,
    "\n  fragment AllParagraphsFragment on ParagraphUnion {\n    __typename\n    ... on ParagraphInterface {\n      id\n    }\n    ...AccordionParagraphFragment\n    ...BlockEmbedParagraphFragment\n    ...CallToActionParagraphFragment\n    ...CardParagraphFragment\n    ...CardsParagraphFragment\n    ...HeroParagraphFragment\n    ...WysiwygParagraphFragment\n  }\n": types.AllParagraphsFragmentFragmentDoc,
    "\n  fragment BlockEmbedParagraphFragment on ParagraphBlockEmbed {\n    block {\n      ... on BlockInterface {\n        render\n      }\n    }\n  }\n": types.BlockEmbedParagraphFragmentFragmentDoc,
    "\n  fragment CallToActionParagraphFragment on ParagraphCallToAction {\n    id\n    ctaTitle: title\n    ctaContent: wysiwyg {\n      processed\n    }\n    ctaLink: link {\n      title\n      url\n    }\n  }\n": types.CallToActionParagraphFragmentFragmentDoc,
    "\n  fragment CardParagraphFragment on ParagraphCard {\n    id\n    cardLink {\n      url\n    }\n    cardMedia {\n      ... on MediaImage {\n        mediaImage {\n          alt\n          variations(styles: LARGE) {\n            height\n            url\n            width\n          }\n        }\n      }\n    }\n    cardSubtitle\n    cardTitle\n  }\n": types.CardParagraphFragmentFragmentDoc,
    "\n  fragment CardsParagraphFragment on ParagraphCards {\n    cards {\n      __typename\n      ... on ParagraphInterface {\n        id\n      }\n      ...CardParagraphFragment\n    }\n  }\n": types.CardsParagraphFragmentFragmentDoc,
    "\n  fragment DynamicCardParagraphFragment on ParagraphDynamicCard {\n    cardReference {\n      __typename\n      ... on NodeInterface {\n        id\n        status\n      }\n      ...ArticleCardFragment\n      ...BasicPageCardFragment\n    }\n  }\n": types.DynamicCardParagraphFragmentFragmentDoc,
    "\n  fragment HeroParagraphFragment on ParagraphHero {\n    id\n    heroAlignment\n    heroBody: wysiwyg {\n      processed\n    }\n    heroHasOverlay\n    heroHeading: title\n    heroImage: mediaItem {\n      ... on MediaImage {\n        id\n        name\n        mediaImage {\n          alt\n          height\n          width\n          url\n        }\n      }\n    }\n    heroLink: link {\n      title\n      url\n    }\n  }\n": types.HeroParagraphFragmentFragmentDoc,
    "\n  fragment WysiwygParagraphFragment on ParagraphWysiwyg {\n    wysiwyg {\n      processed\n    }\n  }\n": types.WysiwygParagraphFragmentFragmentDoc,
    "\n  query GetArticleByPath($path: String!) {\n    route(path: $path) {\n      __typename\n      ... on RouteInternal {\n        entity {\n          __typename\n          ... on NodeInterface {\n            status\n          }\n          ...ArticleFullFragment\n        }\n      }\n    }\n  }\n": types.GetArticleByPathDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetNodeByPath($path: String!) {\n    route(path: $path) {\n      __typename\n      ... on RouteInternal {\n        entity {\n          __typename\n          ... on NodeInterface {\n            status\n          }\n          ...BasicPageFragment\n          ...LandingPageFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetNodeByPath($path: String!) {\n    route(path: $path) {\n      __typename\n      ... on RouteInternal {\n        entity {\n          __typename\n          ... on NodeInterface {\n            status\n          }\n          ...BasicPageFragment\n          ...LandingPageFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ArticleCardFragment on NodeArticle {\n    title\n    body {\n      summary\n    }\n    path\n    image {\n      variations(styles: LARGE) {\n        width\n        url\n        name\n        height\n      }\n      alt\n    }\n  }\n"): (typeof documents)["\n  fragment ArticleCardFragment on NodeArticle {\n    title\n    body {\n      summary\n    }\n    path\n    image {\n      variations(styles: LARGE) {\n        width\n        url\n        name\n        height\n      }\n      alt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ArticleFullFragment on NodeArticle {\n    title\n    created {\n      timestamp\n    }\n    body {\n      processed\n    }\n  }\n"): (typeof documents)["\n  fragment ArticleFullFragment on NodeArticle {\n    title\n    created {\n      timestamp\n    }\n    body {\n      processed\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BasicPageCardFragment on NodePage {\n    title\n    body {\n      summary\n    }\n    path\n  }\n"): (typeof documents)["\n  fragment BasicPageCardFragment on NodePage {\n    title\n    body {\n      summary\n    }\n    path\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BasicPageFragment on NodePage {\n    title\n    body {\n      processed\n    }\n  }\n"): (typeof documents)["\n  fragment BasicPageFragment on NodePage {\n    title\n    body {\n      processed\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LandingPageFragment on NodeLandingPage {\n    title\n    content {\n      __typename\n      ...AllParagraphsFragment\n    }\n  }\n"): (typeof documents)["\n  fragment LandingPageFragment on NodeLandingPage {\n    title\n    content {\n      __typename\n      ...AllParagraphsFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MenuItemFragment on MenuItem {\n    title\n    id\n    url\n    attributes {\n      class\n    }\n    internal\n  }\n"): (typeof documents)["\n  fragment MenuItemFragment on MenuItem {\n    title\n    id\n    url\n    attributes {\n      class\n    }\n    internal\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AccordionItemParagraphFragment on ParagraphAccordionItem {\n    id\n    accordionHeading: title\n    accordionBody: wysiwyg {\n      processed\n    }\n  }\n"): (typeof documents)["\n  fragment AccordionItemParagraphFragment on ParagraphAccordionItem {\n    id\n    accordionHeading: title\n    accordionBody: wysiwyg {\n      processed\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AccordionParagraphFragment on ParagraphAccordion {\n    id\n    accordionItems: paragraphs {\n      __typename\n      ...AccordionItemParagraphFragment\n    }\n  }\n"): (typeof documents)["\n  fragment AccordionParagraphFragment on ParagraphAccordion {\n    id\n    accordionItems: paragraphs {\n      __typename\n      ...AccordionItemParagraphFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AllParagraphsFragment on ParagraphUnion {\n    __typename\n    ... on ParagraphInterface {\n      id\n    }\n    ...AccordionParagraphFragment\n    ...BlockEmbedParagraphFragment\n    ...CallToActionParagraphFragment\n    ...CardParagraphFragment\n    ...CardsParagraphFragment\n    ...HeroParagraphFragment\n    ...WysiwygParagraphFragment\n  }\n"): (typeof documents)["\n  fragment AllParagraphsFragment on ParagraphUnion {\n    __typename\n    ... on ParagraphInterface {\n      id\n    }\n    ...AccordionParagraphFragment\n    ...BlockEmbedParagraphFragment\n    ...CallToActionParagraphFragment\n    ...CardParagraphFragment\n    ...CardsParagraphFragment\n    ...HeroParagraphFragment\n    ...WysiwygParagraphFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BlockEmbedParagraphFragment on ParagraphBlockEmbed {\n    block {\n      ... on BlockInterface {\n        render\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment BlockEmbedParagraphFragment on ParagraphBlockEmbed {\n    block {\n      ... on BlockInterface {\n        render\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CallToActionParagraphFragment on ParagraphCallToAction {\n    id\n    ctaTitle: title\n    ctaContent: wysiwyg {\n      processed\n    }\n    ctaLink: link {\n      title\n      url\n    }\n  }\n"): (typeof documents)["\n  fragment CallToActionParagraphFragment on ParagraphCallToAction {\n    id\n    ctaTitle: title\n    ctaContent: wysiwyg {\n      processed\n    }\n    ctaLink: link {\n      title\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CardParagraphFragment on ParagraphCard {\n    id\n    cardLink {\n      url\n    }\n    cardMedia {\n      ... on MediaImage {\n        mediaImage {\n          alt\n          variations(styles: LARGE) {\n            height\n            url\n            width\n          }\n        }\n      }\n    }\n    cardSubtitle\n    cardTitle\n  }\n"): (typeof documents)["\n  fragment CardParagraphFragment on ParagraphCard {\n    id\n    cardLink {\n      url\n    }\n    cardMedia {\n      ... on MediaImage {\n        mediaImage {\n          alt\n          variations(styles: LARGE) {\n            height\n            url\n            width\n          }\n        }\n      }\n    }\n    cardSubtitle\n    cardTitle\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CardsParagraphFragment on ParagraphCards {\n    cards {\n      __typename\n      ... on ParagraphInterface {\n        id\n      }\n      ...CardParagraphFragment\n    }\n  }\n"): (typeof documents)["\n  fragment CardsParagraphFragment on ParagraphCards {\n    cards {\n      __typename\n      ... on ParagraphInterface {\n        id\n      }\n      ...CardParagraphFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DynamicCardParagraphFragment on ParagraphDynamicCard {\n    cardReference {\n      __typename\n      ... on NodeInterface {\n        id\n        status\n      }\n      ...ArticleCardFragment\n      ...BasicPageCardFragment\n    }\n  }\n"): (typeof documents)["\n  fragment DynamicCardParagraphFragment on ParagraphDynamicCard {\n    cardReference {\n      __typename\n      ... on NodeInterface {\n        id\n        status\n      }\n      ...ArticleCardFragment\n      ...BasicPageCardFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HeroParagraphFragment on ParagraphHero {\n    id\n    heroAlignment\n    heroBody: wysiwyg {\n      processed\n    }\n    heroHasOverlay\n    heroHeading: title\n    heroImage: mediaItem {\n      ... on MediaImage {\n        id\n        name\n        mediaImage {\n          alt\n          height\n          width\n          url\n        }\n      }\n    }\n    heroLink: link {\n      title\n      url\n    }\n  }\n"): (typeof documents)["\n  fragment HeroParagraphFragment on ParagraphHero {\n    id\n    heroAlignment\n    heroBody: wysiwyg {\n      processed\n    }\n    heroHasOverlay\n    heroHeading: title\n    heroImage: mediaItem {\n      ... on MediaImage {\n        id\n        name\n        mediaImage {\n          alt\n          height\n          width\n          url\n        }\n      }\n    }\n    heroLink: link {\n      title\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment WysiwygParagraphFragment on ParagraphWysiwyg {\n    wysiwyg {\n      processed\n    }\n  }\n"): (typeof documents)["\n  fragment WysiwygParagraphFragment on ParagraphWysiwyg {\n    wysiwyg {\n      processed\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetArticleByPath($path: String!) {\n    route(path: $path) {\n      __typename\n      ... on RouteInternal {\n        entity {\n          __typename\n          ... on NodeInterface {\n            status\n          }\n          ...ArticleFullFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetArticleByPath($path: String!) {\n    route(path: $path) {\n      __typename\n      ... on RouteInternal {\n        entity {\n          __typename\n          ... on NodeInterface {\n            status\n          }\n          ...ArticleFullFragment\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;