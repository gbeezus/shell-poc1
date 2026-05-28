/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An email address. */
  Email: { input: any; output: any; }
  /**
   * An HTML string
   *
   * Content of this type is deemed safe by the server for raw output given the
   * origin and the context of its usage. The HTML can still contain scripts or style
   * tags where the creating user had permission to input these.
   */
  Html: { input: any; output: any; }
  /** A field whose value conforms to the standard E.164 */
  PhoneNumber: { input: any; output: any; }
  /** RFC 3339 compliant time string. */
  Time: { input: any; output: any; }
  /** A field whose value exists in the standard IANA Time Zone Database. */
  TimeZone: { input: any; output: any; }
  /** Type represents date and time as number of milliseconds from start of the UNIX epoch. */
  Timestamp: { input: any; output: any; }
  /** Untyped structured data. Eg JSON, configuration, settings, attributes. */
  UntypedStructuredData: { input: any; output: any; }
  /** A string that will have a value of format ±hh:mm */
  UtcOffset: { input: any; output: any; }
};

/** Block content is a modular piece of content that can be displayed in various regions of a website's layout. */
export type BlockContent = BlockInterface & {
  __typename?: 'BlockContent';
  /** The Content Block entity to be displayed within the block. */
  entity: UnsupportedType;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The rendered output of the block. */
  render?: Maybe<Scalars['Html']['output']>;
  /** The title of the block if provided. */
  title?: Maybe<Scalars['String']['output']>;
};

/** Blocks are a modular piece of content that can be displayed in various regions of a website's layout. */
export type BlockInterface = {
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The rendered output of the block. */
  render?: Maybe<Scalars['Html']['output']>;
  /** The title of the block if provided. */
  title?: Maybe<Scalars['String']['output']>;
};

/** A generic block plugin is a modular piece of content that can be displayed in various regions of a website's layout. */
export type BlockPlugin = BlockInterface & {
  __typename?: 'BlockPlugin';
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The rendered output of the block. */
  render?: Maybe<Scalars['Html']['output']>;
  /** The title of the block if provided. */
  title?: Maybe<Scalars['String']['output']>;
};

/** Block types that can exist in the system. */
export type BlockUnion = BlockContent | BlockPlugin;

/** A DateTime object. */
export type DateTime = {
  __typename?: 'DateTime';
  /** A string that will have a value of format ±hh:mm */
  offset: Scalars['UtcOffset']['output'];
  /** RFC 3339 compliant time string. */
  time: Scalars['Time']['output'];
  /** Type represents date and time as number of milliseconds from start of the UNIX epoch. */
  timestamp: Scalars['Timestamp']['output'];
  /** A field whose value exists in the standard IANA Time Zone Database. */
  timezone: Scalars['TimeZone']['output'];
};

/** A file object to represent an managed file. */
export type File = {
  __typename?: 'File';
  /** The description of the file. */
  description?: Maybe<Scalars['String']['output']>;
  /** The mime type of the file. */
  mime?: Maybe<Scalars['String']['output']>;
  /** The name of the file. */
  name?: Maybe<Scalars['String']['output']>;
  /** The size of the file in bytes. */
  size: Scalars['Int']['output'];
  /** The URL of the file. */
  url: Scalars['String']['output'];
};

/** A image object to represent an managed file. */
export type Image = {
  __typename?: 'Image';
  /** The alt text of the image. */
  alt?: Maybe<Scalars['String']['output']>;
  /** The height of the image. */
  height: Scalars['Int']['output'];
  /** The mime type of the image. */
  mime?: Maybe<Scalars['String']['output']>;
  /** The size of the image in bytes. */
  size: Scalars['Int']['output'];
  /** The title text of the image. */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL of the image. */
  url: Scalars['String']['output'];
  /** Image variations control different sizes and formats for images. */
  variations?: Maybe<Array<ImageStyleDerivative>>;
  /** The width of the image. */
  width: Scalars['Int']['output'];
};


/** A image object to represent an managed file. */
export type ImageVariationsArgs = {
  styles?: InputMaybe<Array<InputMaybe<ImageStyleAvailable>>>;
};

/** Entity type image_style. */
export type ImageStyle = ImageStyleInterface & {
  __typename?: 'ImageStyle';
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** List of image styles available to use. */
export enum ImageStyleAvailable {
  /** Large (480×480) */
  Large = 'LARGE'
}

/** ImageStyle derivatives for an Image. */
export type ImageStyleDerivative = {
  __typename?: 'ImageStyleDerivative';
  height: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

/** Entity type image_style. */
export type ImageStyleInterface = {
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Entity type image_style. */
export type ImageStyleUnion = ImageStyle;

/** Generic input for key-value pairs. */
export type KeyValueInput = {
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

/** A language definition provided by the CMS. */
export type Language = {
  __typename?: 'Language';
  /** The language direction. */
  direction?: Maybe<Scalars['String']['output']>;
  /** The language code. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** A link. */
export type Link = {
  __typename?: 'Link';
  /** Whether the link is internal to this website. */
  internal: Scalars['Boolean']['output'];
  /** The title of the link. */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL of the link. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Use local images for reusable media. */
export type MediaImage = MediaInterface & {
  __typename?: 'MediaImage';
  /** The time the media item was last edited. */
  changed: DateTime;
  /** The time the media item was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** Image */
  mediaImage: Image;
  /** Name */
  name: Scalars['String']['output'];
  /** URL alias */
  path: Scalars['String']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** Entity type media. */
export type MediaInterface = {
  /** The time the media item was last edited. */
  changed: DateTime;
  /** The time the media item was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** Name */
  name: Scalars['String']['output'];
  /** URL alias */
  path: Scalars['String']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** Entity type media. */
export type MediaUnion = MediaImage;

/** Entity type menu. */
export type Menu = MenuInterface & {
  __typename?: 'Menu';
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The menu items. */
  items: Array<MenuItem>;
  /** The menu name. */
  name: Scalars['String']['output'];
};

/** List of menus available to load. */
export enum MenuAvailable {
  /** No menus have been enabled. */
  Undefined = 'UNDEFINED'
}

/** Entity type menu. */
export type MenuInterface = {
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The menu items. */
  items: Array<MenuItem>;
  /** The menu name. */
  name: Scalars['String']['output'];
};

/** A menu item defined in the CMS. */
export type MenuItem = {
  __typename?: 'MenuItem';
  /** Attributes of this menu item. */
  attributes: MenuItemAttributes;
  /** Child menu items of this menu item. */
  children: Array<MenuItem>;
  /** The description of the menu item. */
  description?: Maybe<Scalars['String']['output']>;
  /** Whether this menu item is intended to be expanded. */
  expanded: Scalars['Boolean']['output'];
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Whether this menu item links to an internal route. */
  internal: Scalars['Boolean']['output'];
  /** The language of the menu item. */
  langcode: Language;
  /** The route this menu item uses. Route loading can be disabled per menu type. */
  route?: Maybe<RouteUnion>;
  /** The title of the menu item. */
  title: Scalars['String']['output'];
  /** The URL of the menu item. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Menu item options set within the CMS. */
export type MenuItemAttributes = {
  __typename?: 'MenuItemAttributes';
  class?: Maybe<Scalars['String']['output']>;
};

/** Entity type menu. */
export type MenuUnion = Menu;

/** The schema's entry-point for mutations. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Placeholder for mutation extension. */
  _: Scalars['Boolean']['output'];
};

/** Use <em>articles</em> for time-sensitive content like news, press releases or blog posts. */
export type NodeArticle = NodeInterface & {
  __typename?: 'NodeArticle';
  /** Body */
  body?: Maybe<TextSummary>;
  /** The time that the node was last edited. */
  changed: DateTime;
  /** The date and time that the content was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Image */
  image?: Maybe<Image>;
  /** Language */
  langcode: Language;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Promoted to front page */
  promote: Scalars['Boolean']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean']['output'];
  /** Enter a comma-separated list. For example: Amsterdam, Mexico City, "Cleveland, Ohio" */
  tags?: Maybe<Array<UnsupportedType>>;
  /** Title */
  title: Scalars['String']['output'];
};

/** Entity type node. */
export type NodeInterface = {
  /** The time that the node was last edited. */
  changed: DateTime;
  /** The date and time that the content was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Promoted to front page */
  promote: Scalars['Boolean']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean']['output'];
  /** Title */
  title: Scalars['String']['output'];
};

/** Use <em>Landing Pages</em> for primary content, such as pages in the main menu or pages that need an internal hero. */
export type NodeLandingPage = NodeInterface & {
  __typename?: 'NodeLandingPage';
  /** The time that the node was last edited. */
  changed: DateTime;
  /** Content */
  content: Array<ParagraphUnion>;
  /** The date and time that the content was created. */
  created: DateTime;
  /** Hero */
  hero: ParagraphUnion;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Promoted to front page */
  promote: Scalars['Boolean']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean']['output'];
  /** Title */
  title: Scalars['String']['output'];
};

/** Use <em>basic pages</em> for your static content, such as an 'About us' page. */
export type NodePage = NodeInterface & {
  __typename?: 'NodePage';
  /** Body */
  body?: Maybe<TextSummary>;
  /** The time that the node was last edited. */
  changed: DateTime;
  /** The date and time that the content was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Promoted to front page */
  promote: Scalars['Boolean']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean']['output'];
  /** Title */
  title: Scalars['String']['output'];
};

/** Entity type node. */
export type NodeUnion = NodeArticle | NodeLandingPage | NodePage;

/** An accordion component for information that can be collapsed and expanded. */
export type ParagraphAccordion = ParagraphInterface & {
  __typename?: 'ParagraphAccordion';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Accordion Items */
  paragraphs: Array<ParagraphUnion>;
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** Entity type paragraph. */
export type ParagraphAccordionItem = ParagraphInterface & {
  __typename?: 'ParagraphAccordionItem';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Heading text for the accordion. A user will be able to click on the heading to show/hide the accordion body. */
  title: Scalars['String']['output'];
  /** Body */
  wysiwyg?: Maybe<Text>;
};

/** Entity type paragraph. */
export type ParagraphBlockEmbed = ParagraphInterface & {
  __typename?: 'ParagraphBlockEmbed';
  /** Block */
  block?: Maybe<BlockUnion>;
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** A simple callout component. */
export type ParagraphCallToAction = ParagraphInterface & {
  __typename?: 'ParagraphCallToAction';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Link */
  link?: Maybe<Link>;
  /** Media */
  mediaItem?: Maybe<MediaUnion>;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Heading */
  title: Scalars['String']['output'];
  /** Body */
  wysiwyg?: Maybe<Text>;
};

/** Entity type paragraph. */
export type ParagraphCard = ParagraphInterface & {
  __typename?: 'ParagraphCard';
  /** Card Link */
  cardLink?: Maybe<Link>;
  /** Card Media */
  cardMedia: MediaUnion;
  /** Card Subtitle */
  cardSubtitle?: Maybe<Scalars['String']['output']>;
  /** Card Title */
  cardTitle: Scalars['String']['output'];
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** Entity type paragraph. */
export type ParagraphCards = ParagraphInterface & {
  __typename?: 'ParagraphCards';
  /** Cards */
  cards: Array<ParagraphUnion>;
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** A Card that references any node and can be selected via the Card(s) paragraph. */
export type ParagraphDynamicCard = ParagraphInterface & {
  __typename?: 'ParagraphDynamicCard';
  /** Card Reference */
  cardReference?: Maybe<NodeUnion>;
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** A predefined Dynamic List of content. */
export type ParagraphDynamicList = ParagraphInterface & {
  __typename?: 'ParagraphDynamicList';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** A component providing a banner area with image, heading, summary text and an optional link. */
export type ParagraphHero = ParagraphInterface & {
  __typename?: 'ParagraphHero';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /**
   * Sets the alignment of the heading, body, & button within the hero. The default
   * is centered. If left is selected, elements are aligned left and left
   * justified. If right is selected, elements are centered and left justified.
   */
  heroAlignment?: Maybe<Scalars['String']['output']>;
  /** Flag to display semi-transparent color block over image. */
  heroHasOverlay?: Maybe<Scalars['Boolean']['output']>;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Optional hero link. */
  link?: Maybe<Link>;
  /** Background image used for the hero. */
  mediaItem: MediaUnion;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Title text for the hero. */
  title?: Maybe<Scalars['String']['output']>;
  /** Summary text displayed in hero below title text. */
  wysiwyg?: Maybe<Text>;
};

/** Entity type paragraph. */
export type ParagraphInterface = {
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
};

/**
 * Comprised of a heading and content, this individual component represents a
 * single Tab item to be used in a collection with the <em>Tabs</em> paragraph
 */
export type ParagraphTab = ParagraphInterface & {
  __typename?: 'ParagraphTab';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Title */
  title: Scalars['String']['output'];
  /** Content */
  wysiwyg?: Maybe<Text>;
};

/** Use <em>"Tabs"</em> to help you organize and display content in a user-friendly, tabbed interface. */
export type ParagraphTabs = ParagraphInterface & {
  __typename?: 'ParagraphTabs';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Tabs */
  paragraphs: Array<ParagraphUnion>;
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** Entity type paragraph. */
export type ParagraphUnion = ParagraphAccordion | ParagraphAccordionItem | ParagraphBlockEmbed | ParagraphCallToAction | ParagraphCard | ParagraphCards | ParagraphDynamicCard | ParagraphDynamicList | ParagraphHero | ParagraphTab | ParagraphTabs | ParagraphWysiwyg;

/** A WYSIWYG rich text field. */
export type ParagraphWysiwyg = ParagraphInterface & {
  __typename?: 'ParagraphWysiwyg';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** WYSIWYG */
  wysiwyg: Text;
};

/** The schema's entry-point for queries. */
export type Query = {
  __typename?: 'Query';
  /** Load a Block plugin. */
  block?: Maybe<BlockUnion>;
  /** Schema information. */
  info: SchemaInformation;
  /** Load a Menu by name. */
  menu?: Maybe<Menu>;
  /** Load a Route by path. */
  route?: Maybe<RouteUnion>;
};


/** The schema's entry-point for queries. */
export type QueryBlockArgs = {
  id: Scalars['ID']['input'];
};


/** The schema's entry-point for queries. */
export type QueryMenuArgs = {
  name: MenuAvailable;
};


/** The schema's entry-point for queries. */
export type QueryRouteArgs = {
  path: Scalars['String']['input'];
};

/** Routes represent incoming requests that resolve to content. */
export type Route = {
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean']['output'];
  /** URL of this route. */
  url: Scalars['String']['output'];
};

/** A list of possible entities that can be returned by URL. */
export type RouteEntityUnion = NodeArticle | NodeLandingPage | NodePage;

/** Route outside of this website. */
export type RouteExternal = Route & {
  __typename?: 'RouteExternal';
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean']['output'];
  /** URL of this route. */
  url: Scalars['String']['output'];
};

/** Route within this website. */
export type RouteInternal = Route & {
  __typename?: 'RouteInternal';
  /** Breadcrumb links for this route. */
  breadcrumbs?: Maybe<Array<Link>>;
  /** Content assigned to this route. */
  entity?: Maybe<RouteEntityUnion>;
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean']['output'];
  /** URL of this route. */
  url: Scalars['String']['output'];
};

/** Route types that can exist in the system. */
export type RouteUnion = RouteExternal | RouteInternal;

/** Schema information provided by the system. */
export type SchemaInformation = {
  __typename?: 'SchemaInformation';
  /** The schema description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The internal path to the front page. */
  home?: Maybe<Scalars['String']['output']>;
  /** The schema version. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Sort direction. */
export enum SortDirection {
  /** Ascending */
  Asc = 'ASC',
  /** Descending */
  Desc = 'DESC'
}

/** The schema's entry-point for subscriptions. */
export type Subscription = {
  __typename?: 'Subscription';
  /** Placeholder for subscription extension. */
  _: Scalars['Boolean']['output'];
};

/** A processed text format defined by the CMS. */
export type Text = {
  __typename?: 'Text';
  /** The text format used to process the text value. */
  format?: Maybe<Scalars['String']['output']>;
  /** The processed text value. */
  processed?: Maybe<Scalars['Html']['output']>;
  /** The raw text value. */
  value?: Maybe<Scalars['String']['output']>;
};

/** A processed text format with summary defined by the CMS. */
export type TextSummary = {
  __typename?: 'TextSummary';
  /** The text format used to process the text value. */
  format?: Maybe<Scalars['String']['output']>;
  /** The processed text value. */
  processed?: Maybe<Scalars['Html']['output']>;
  /** The processed text summary. */
  summary?: Maybe<Scalars['Html']['output']>;
  /** The raw text value. */
  value?: Maybe<Scalars['String']['output']>;
};

/**
 * Unsupported entity or field type in the schema.
 * This entity may not have been enabled in the schema yet and is being referenced via entity reference.
 */
export type UnsupportedType = {
  __typename?: 'UnsupportedType';
  /** Unsupported type, always TRUE. */
  unsupported?: Maybe<Scalars['Boolean']['output']>;
};

/** Views represent collections of curated data from the CMS. */
export type View = {
  /** The description of the view. */
  description?: Maybe<Scalars['String']['output']>;
  /** The machine name of the display. */
  display: Scalars['String']['output'];
  /** The ID of the view. */
  id: Scalars['ID']['output'];
  /** The human friendly label of the view. */
  label?: Maybe<Scalars['String']['output']>;
  /** The language code of the view. */
  langcode?: Maybe<Scalars['String']['output']>;
  /** Information about the page in the view. */
  pageInfo: ViewPageInfo;
  /** The machine name of the view. */
  view: Scalars['String']['output'];
};

/** An exposed filter option for the view. */
export type ViewFilter = {
  __typename?: 'ViewFilter';
  /** The filter element attributes. */
  attributes: Scalars['UntypedStructuredData']['output'];
  /** The filter element description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The filter identifier. */
  id: Scalars['ID']['output'];
  /** The filter element label. */
  label?: Maybe<Scalars['String']['output']>;
  /** Whether the filter allows multiple values. */
  multiple: Scalars['Boolean']['output'];
  /** The filter element options if any are defined. */
  options?: Maybe<Scalars['UntypedStructuredData']['output']>;
  /** The filter plugin type. */
  plugin: Scalars['String']['output'];
  /** Whether the filter is required. */
  required: Scalars['Boolean']['output'];
  /** The filter field type. */
  type: Scalars['String']['output'];
  /** The value for the filter. Could be an array for multiple values. */
  value?: Maybe<Scalars['UntypedStructuredData']['output']>;
};

/** Information about the page in a view. */
export type ViewPageInfo = {
  __typename?: 'ViewPageInfo';
  /** Any result offset being used. */
  offset: Scalars['Int']['output'];
  /** The current page being returned. */
  page: Scalars['Int']['output'];
  /** How many results per page. */
  pageSize: Scalars['Int']['output'];
  /** How many results total. */
  total: Scalars['Int']['output'];
};

/** A reference to an embedded view */
export type ViewReference = {
  __typename?: 'ViewReference';
  /** The contextual filter values used. */
  contextualFilter?: Maybe<Array<Scalars['String']['output']>>;
  /** The machine name of the display. */
  display: Scalars['String']['output'];
  /** How many results per page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** The name of the query used to fetch the data, if the view is a GraphQL display. */
  query?: Maybe<Scalars['String']['output']>;
  /** The machine name of the view. */
  view: Scalars['String']['output'];
};

/** All available view result types. */
export type ViewResultUnion = UnsupportedType;

export type GetNodeByPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type GetNodeByPathQuery = { __typename?: 'Query', route?: { __typename: 'RouteExternal' } | { __typename: 'RouteInternal', entity?: { __typename: 'NodeArticle', status: boolean } | (
      { __typename: 'NodeLandingPage', status: boolean }
      & { ' $fragmentRefs'?: { 'LandingPageFragmentFragment': LandingPageFragmentFragment } }
    ) | (
      { __typename: 'NodePage', status: boolean }
      & { ' $fragmentRefs'?: { 'BasicPageFragmentFragment': BasicPageFragmentFragment } }
    ) | null } | null };

export type ArticleCardFragmentFragment = { __typename?: 'NodeArticle', title: string, path: string, body?: { __typename?: 'TextSummary', summary?: any | null } | null, image?: { __typename?: 'Image', alt?: string | null, variations?: Array<{ __typename?: 'ImageStyleDerivative', width: number, url: string, name: string, height: number }> | null } | null } & { ' $fragmentName'?: 'ArticleCardFragmentFragment' };

export type ArticleFullFragmentFragment = { __typename?: 'NodeArticle', title: string, created: { __typename?: 'DateTime', timestamp: any }, body?: { __typename?: 'TextSummary', processed?: any | null } | null } & { ' $fragmentName'?: 'ArticleFullFragmentFragment' };

export type BasicPageCardFragmentFragment = { __typename?: 'NodePage', title: string, path: string, body?: { __typename?: 'TextSummary', summary?: any | null } | null } & { ' $fragmentName'?: 'BasicPageCardFragmentFragment' };

export type BasicPageFragmentFragment = { __typename?: 'NodePage', title: string, body?: { __typename?: 'TextSummary', processed?: any | null } | null } & { ' $fragmentName'?: 'BasicPageFragmentFragment' };

export type LandingPageFragmentFragment = { __typename?: 'NodeLandingPage', title: string, content: Array<(
    { __typename: 'ParagraphAccordion' }
    & { ' $fragmentRefs'?: { 'AllParagraphsFragment_ParagraphAccordion_Fragment': AllParagraphsFragment_ParagraphAccordion_Fragment } }
  ) | (
    { __typename: 'ParagraphAccordionItem' }
    & { ' $fragmentRefs'?: { 'AllParagraphsFragment_ParagraphAccordionItem_Fragment': AllParagraphsFragment_ParagraphAccordionItem_Fragment } }
  ) | (
    { __typename: 'ParagraphBlockEmbed' }
    & { ' $fragmentRefs'?: { 'AllParagraphsFragment_ParagraphBlockEmbed_Fragment': AllParagraphsFragment_ParagraphBlockEmbed_Fragment } }
  ) | (
    { __typename: 'ParagraphCallToAction' }
    & { ' $fragmentRefs'?: { 'AllParagraphsFragment_ParagraphCallToAction_Fragment': AllParagraphsFragment_ParagraphCallToAction_Fragment } }
  ) | (
    { __typename: 'ParagraphCard' }
    & { ' $fragmentRefs'?: { 'AllParagraphsFragment_ParagraphCard_Fragment': AllParagraphsFragment_ParagraphCard_Fragment } }
  ) | (
    { __typename: 'ParagraphCards' }
    & { ' $fragmentRefs'?: { 'AllParagraphsFragment_ParagraphCards_Fragment': AllParagraphsFragment_ParagraphCards_Fragment } }
  ) | (
    { __typename: 'ParagraphDynamicCard' }
    & { ' $fragmentRefs'?: { 'AllParagraphsFragment_ParagraphDynamicCard_Fragment': AllParagraphsFragment_ParagraphDynamicCard_Fragment } }
  ) | (
    { __typename: 'ParagraphDynamicList' }
    & { ' $fragmentRefs'?: { 'AllParagraphsFragment_ParagraphDynamicList_Fragment': AllParagraphsFragment_ParagraphDynamicList_Fragment } }
  ) | (
    { __typename: 'ParagraphHero' }
    & { ' $fragmentRefs'?: { 'AllParagraphsFragment_ParagraphHero_Fragment': AllParagraphsFragment_ParagraphHero_Fragment } }
  ) | (
    { __typename: 'ParagraphTab' }
    & { ' $fragmentRefs'?: { 'AllParagraphsFragment_ParagraphTab_Fragment': AllParagraphsFragment_ParagraphTab_Fragment } }
  ) | (
    { __typename: 'ParagraphTabs' }
    & { ' $fragmentRefs'?: { 'AllParagraphsFragment_ParagraphTabs_Fragment': AllParagraphsFragment_ParagraphTabs_Fragment } }
  ) | (
    { __typename: 'ParagraphWysiwyg' }
    & { ' $fragmentRefs'?: { 'AllParagraphsFragment_ParagraphWysiwyg_Fragment': AllParagraphsFragment_ParagraphWysiwyg_Fragment } }
  )> } & { ' $fragmentName'?: 'LandingPageFragmentFragment' };

export type MenuItemFragmentFragment = { __typename?: 'MenuItem', title: string, id: string, url?: string | null, internal: boolean, attributes: { __typename?: 'MenuItemAttributes', class?: string | null } } & { ' $fragmentName'?: 'MenuItemFragmentFragment' };

export type AccordionItemParagraphFragmentFragment = { __typename?: 'ParagraphAccordionItem', id: string, accordionHeading: string, accordionBody?: { __typename?: 'Text', processed?: any | null } | null } & { ' $fragmentName'?: 'AccordionItemParagraphFragmentFragment' };

export type AccordionParagraphFragmentFragment = { __typename?: 'ParagraphAccordion', id: string, accordionItems: Array<{ __typename: 'ParagraphAccordion' } | (
    { __typename: 'ParagraphAccordionItem' }
    & { ' $fragmentRefs'?: { 'AccordionItemParagraphFragmentFragment': AccordionItemParagraphFragmentFragment } }
  ) | { __typename: 'ParagraphBlockEmbed' } | { __typename: 'ParagraphCallToAction' } | { __typename: 'ParagraphCard' } | { __typename: 'ParagraphCards' } | { __typename: 'ParagraphDynamicCard' } | { __typename: 'ParagraphDynamicList' } | { __typename: 'ParagraphHero' } | { __typename: 'ParagraphTab' } | { __typename: 'ParagraphTabs' } | { __typename: 'ParagraphWysiwyg' }> } & { ' $fragmentName'?: 'AccordionParagraphFragmentFragment' };

type AllParagraphsFragment_ParagraphAccordion_Fragment = (
  { __typename: 'ParagraphAccordion', id: string }
  & { ' $fragmentRefs'?: { 'AccordionParagraphFragmentFragment': AccordionParagraphFragmentFragment } }
) & { ' $fragmentName'?: 'AllParagraphsFragment_ParagraphAccordion_Fragment' };

type AllParagraphsFragment_ParagraphAccordionItem_Fragment = { __typename: 'ParagraphAccordionItem', id: string } & { ' $fragmentName'?: 'AllParagraphsFragment_ParagraphAccordionItem_Fragment' };

type AllParagraphsFragment_ParagraphBlockEmbed_Fragment = (
  { __typename: 'ParagraphBlockEmbed', id: string }
  & { ' $fragmentRefs'?: { 'BlockEmbedParagraphFragmentFragment': BlockEmbedParagraphFragmentFragment } }
) & { ' $fragmentName'?: 'AllParagraphsFragment_ParagraphBlockEmbed_Fragment' };

type AllParagraphsFragment_ParagraphCallToAction_Fragment = (
  { __typename: 'ParagraphCallToAction', id: string }
  & { ' $fragmentRefs'?: { 'CallToActionParagraphFragmentFragment': CallToActionParagraphFragmentFragment } }
) & { ' $fragmentName'?: 'AllParagraphsFragment_ParagraphCallToAction_Fragment' };

type AllParagraphsFragment_ParagraphCard_Fragment = (
  { __typename: 'ParagraphCard', id: string }
  & { ' $fragmentRefs'?: { 'CardParagraphFragmentFragment': CardParagraphFragmentFragment } }
) & { ' $fragmentName'?: 'AllParagraphsFragment_ParagraphCard_Fragment' };

type AllParagraphsFragment_ParagraphCards_Fragment = (
  { __typename: 'ParagraphCards', id: string }
  & { ' $fragmentRefs'?: { 'CardsParagraphFragmentFragment': CardsParagraphFragmentFragment } }
) & { ' $fragmentName'?: 'AllParagraphsFragment_ParagraphCards_Fragment' };

type AllParagraphsFragment_ParagraphDynamicCard_Fragment = { __typename: 'ParagraphDynamicCard', id: string } & { ' $fragmentName'?: 'AllParagraphsFragment_ParagraphDynamicCard_Fragment' };

type AllParagraphsFragment_ParagraphDynamicList_Fragment = { __typename: 'ParagraphDynamicList', id: string } & { ' $fragmentName'?: 'AllParagraphsFragment_ParagraphDynamicList_Fragment' };

type AllParagraphsFragment_ParagraphHero_Fragment = (
  { __typename: 'ParagraphHero', id: string }
  & { ' $fragmentRefs'?: { 'HeroParagraphFragmentFragment': HeroParagraphFragmentFragment } }
) & { ' $fragmentName'?: 'AllParagraphsFragment_ParagraphHero_Fragment' };

type AllParagraphsFragment_ParagraphTab_Fragment = { __typename: 'ParagraphTab', id: string } & { ' $fragmentName'?: 'AllParagraphsFragment_ParagraphTab_Fragment' };

type AllParagraphsFragment_ParagraphTabs_Fragment = { __typename: 'ParagraphTabs', id: string } & { ' $fragmentName'?: 'AllParagraphsFragment_ParagraphTabs_Fragment' };

type AllParagraphsFragment_ParagraphWysiwyg_Fragment = (
  { __typename: 'ParagraphWysiwyg', id: string }
  & { ' $fragmentRefs'?: { 'WysiwygParagraphFragmentFragment': WysiwygParagraphFragmentFragment } }
) & { ' $fragmentName'?: 'AllParagraphsFragment_ParagraphWysiwyg_Fragment' };

export type AllParagraphsFragmentFragment = AllParagraphsFragment_ParagraphAccordion_Fragment | AllParagraphsFragment_ParagraphAccordionItem_Fragment | AllParagraphsFragment_ParagraphBlockEmbed_Fragment | AllParagraphsFragment_ParagraphCallToAction_Fragment | AllParagraphsFragment_ParagraphCard_Fragment | AllParagraphsFragment_ParagraphCards_Fragment | AllParagraphsFragment_ParagraphDynamicCard_Fragment | AllParagraphsFragment_ParagraphDynamicList_Fragment | AllParagraphsFragment_ParagraphHero_Fragment | AllParagraphsFragment_ParagraphTab_Fragment | AllParagraphsFragment_ParagraphTabs_Fragment | AllParagraphsFragment_ParagraphWysiwyg_Fragment;

export type BlockEmbedParagraphFragmentFragment = { __typename?: 'ParagraphBlockEmbed', block?: { __typename?: 'BlockContent', render?: any | null } | { __typename?: 'BlockPlugin', render?: any | null } | null } & { ' $fragmentName'?: 'BlockEmbedParagraphFragmentFragment' };

export type CallToActionParagraphFragmentFragment = { __typename?: 'ParagraphCallToAction', id: string, ctaTitle: string, ctaContent?: { __typename?: 'Text', processed?: any | null } | null, ctaLink?: { __typename?: 'Link', title?: string | null, url?: string | null } | null } & { ' $fragmentName'?: 'CallToActionParagraphFragmentFragment' };

export type CardParagraphFragmentFragment = { __typename?: 'ParagraphCard', id: string, cardSubtitle?: string | null, cardTitle: string, cardLink?: { __typename?: 'Link', url?: string | null } | null, cardMedia: { __typename?: 'MediaImage', mediaImage: { __typename?: 'Image', alt?: string | null, variations?: Array<{ __typename?: 'ImageStyleDerivative', height: number, url: string, width: number }> | null } } } & { ' $fragmentName'?: 'CardParagraphFragmentFragment' };

export type CardsParagraphFragmentFragment = { __typename?: 'ParagraphCards', cards: Array<{ __typename: 'ParagraphAccordion', id: string } | { __typename: 'ParagraphAccordionItem', id: string } | { __typename: 'ParagraphBlockEmbed', id: string } | { __typename: 'ParagraphCallToAction', id: string } | (
    { __typename: 'ParagraphCard', id: string }
    & { ' $fragmentRefs'?: { 'CardParagraphFragmentFragment': CardParagraphFragmentFragment } }
  ) | { __typename: 'ParagraphCards', id: string } | { __typename: 'ParagraphDynamicCard', id: string } | { __typename: 'ParagraphDynamicList', id: string } | { __typename: 'ParagraphHero', id: string } | { __typename: 'ParagraphTab', id: string } | { __typename: 'ParagraphTabs', id: string } | { __typename: 'ParagraphWysiwyg', id: string }> } & { ' $fragmentName'?: 'CardsParagraphFragmentFragment' };

export type DynamicCardParagraphFragmentFragment = { __typename?: 'ParagraphDynamicCard', cardReference?: (
    { __typename: 'NodeArticle', id: string, status: boolean }
    & { ' $fragmentRefs'?: { 'ArticleCardFragmentFragment': ArticleCardFragmentFragment } }
  ) | { __typename: 'NodeLandingPage', id: string, status: boolean } | (
    { __typename: 'NodePage', id: string, status: boolean }
    & { ' $fragmentRefs'?: { 'BasicPageCardFragmentFragment': BasicPageCardFragmentFragment } }
  ) | null } & { ' $fragmentName'?: 'DynamicCardParagraphFragmentFragment' };

export type HeroParagraphFragmentFragment = { __typename?: 'ParagraphHero', id: string, heroAlignment?: string | null, heroHasOverlay?: boolean | null, heroHeading?: string | null, heroBody?: { __typename?: 'Text', processed?: any | null } | null, heroImage: { __typename?: 'MediaImage', id: string, name: string, mediaImage: { __typename?: 'Image', alt?: string | null, height: number, width: number, url: string } }, heroLink?: { __typename?: 'Link', title?: string | null, url?: string | null } | null } & { ' $fragmentName'?: 'HeroParagraphFragmentFragment' };

export type WysiwygParagraphFragmentFragment = { __typename?: 'ParagraphWysiwyg', wysiwyg: { __typename?: 'Text', processed?: any | null } } & { ' $fragmentName'?: 'WysiwygParagraphFragmentFragment' };

export type GetArticleByPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type GetArticleByPathQuery = { __typename?: 'Query', route?: { __typename: 'RouteExternal' } | { __typename: 'RouteInternal', entity?: (
      { __typename: 'NodeArticle', status: boolean }
      & { ' $fragmentRefs'?: { 'ArticleFullFragmentFragment': ArticleFullFragmentFragment } }
    ) | { __typename: 'NodeLandingPage', status: boolean } | { __typename: 'NodePage', status: boolean } | null } | null };

export const ArticleFullFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleFullFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeArticle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"created"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}}]} as unknown as DocumentNode<ArticleFullFragmentFragment, unknown>;
export const BasicPageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}}]} as unknown as DocumentNode<BasicPageFragmentFragment, unknown>;
export const AccordionItemParagraphFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordionItemParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphAccordionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionHeading"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionBody"},"name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}}]} as unknown as DocumentNode<AccordionItemParagraphFragmentFragment, unknown>;
export const AccordionParagraphFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordionParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionItems"},"name":{"kind":"Name","value":"paragraphs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccordionItemParagraphFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordionItemParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphAccordionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionHeading"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionBody"},"name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}}]} as unknown as DocumentNode<AccordionParagraphFragmentFragment, unknown>;
export const BlockEmbedParagraphFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockEmbedParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphBlockEmbed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlockInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"render"}}]}}]}}]}}]} as unknown as DocumentNode<BlockEmbedParagraphFragmentFragment, unknown>;
export const CallToActionParagraphFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CallToActionParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCallToAction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"ctaTitle"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"ctaContent"},"name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ctaLink"},"name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<CallToActionParagraphFragmentFragment, unknown>;
export const CardParagraphFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mediaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"variations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"styles"},"value":{"kind":"EnumValue","value":"LARGE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitle"}}]}}]} as unknown as DocumentNode<CardParagraphFragmentFragment, unknown>;
export const CardsParagraphFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardsParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardParagraphFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mediaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"variations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"styles"},"value":{"kind":"EnumValue","value":"LARGE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitle"}}]}}]} as unknown as DocumentNode<CardsParagraphFragmentFragment, unknown>;
export const HeroParagraphFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphHero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heroAlignment"}},{"kind":"Field","alias":{"kind":"Name","value":"heroBody"},"name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroHasOverlay"}},{"kind":"Field","alias":{"kind":"Name","value":"heroHeading"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"mediaItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mediaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"heroLink"},"name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<HeroParagraphFragmentFragment, unknown>;
export const WysiwygParagraphFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WysiwygParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphWysiwyg"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}}]} as unknown as DocumentNode<WysiwygParagraphFragmentFragment, unknown>;
export const AllParagraphsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllParagraphsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphUnion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccordionParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockEmbedParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CallToActionParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WysiwygParagraphFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordionItemParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphAccordionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionHeading"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionBody"},"name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mediaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"variations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"styles"},"value":{"kind":"EnumValue","value":"LARGE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitle"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordionParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionItems"},"name":{"kind":"Name","value":"paragraphs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccordionItemParagraphFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockEmbedParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphBlockEmbed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlockInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"render"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CallToActionParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCallToAction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"ctaTitle"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"ctaContent"},"name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ctaLink"},"name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardsParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardParagraphFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphHero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heroAlignment"}},{"kind":"Field","alias":{"kind":"Name","value":"heroBody"},"name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroHasOverlay"}},{"kind":"Field","alias":{"kind":"Name","value":"heroHeading"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"mediaItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mediaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"heroLink"},"name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WysiwygParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphWysiwyg"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}}]} as unknown as DocumentNode<AllParagraphsFragmentFragment, unknown>;
export const LandingPageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LandingPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeLandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllParagraphsFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordionItemParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphAccordionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionHeading"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionBody"},"name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordionParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionItems"},"name":{"kind":"Name","value":"paragraphs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccordionItemParagraphFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockEmbedParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphBlockEmbed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlockInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"render"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CallToActionParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCallToAction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"ctaTitle"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"ctaContent"},"name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ctaLink"},"name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mediaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"variations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"styles"},"value":{"kind":"EnumValue","value":"LARGE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitle"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardsParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardParagraphFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphHero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heroAlignment"}},{"kind":"Field","alias":{"kind":"Name","value":"heroBody"},"name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroHasOverlay"}},{"kind":"Field","alias":{"kind":"Name","value":"heroHeading"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"mediaItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mediaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"heroLink"},"name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WysiwygParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphWysiwyg"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllParagraphsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphUnion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccordionParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockEmbedParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CallToActionParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WysiwygParagraphFragment"}}]}}]} as unknown as DocumentNode<LandingPageFragmentFragment, unknown>;
export const MenuItemFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"class"}}]}},{"kind":"Field","name":{"kind":"Name","value":"internal"}}]}}]} as unknown as DocumentNode<MenuItemFragmentFragment, unknown>;
export const ArticleCardFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleCardFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeArticle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"styles"},"value":{"kind":"EnumValue","value":"LARGE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]} as unknown as DocumentNode<ArticleCardFragmentFragment, unknown>;
export const BasicPageCardFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicPageCardFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]} as unknown as DocumentNode<BasicPageCardFragmentFragment, unknown>;
export const DynamicCardParagraphFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DynamicCardParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphDynamicCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cardReference"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleCardFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BasicPageCardFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleCardFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeArticle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"styles"},"value":{"kind":"EnumValue","value":"LARGE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicPageCardFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]} as unknown as DocumentNode<DynamicCardParagraphFragmentFragment, unknown>;
export const GetNodeByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNodeByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RouteInternal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BasicPageFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LandingPageFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordionItemParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphAccordionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionHeading"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionBody"},"name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccordionParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphAccordion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"accordionItems"},"name":{"kind":"Name","value":"paragraphs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccordionItemParagraphFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockEmbedParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphBlockEmbed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlockInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"render"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CallToActionParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCallToAction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"ctaTitle"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"ctaContent"},"name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ctaLink"},"name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mediaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"variations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"styles"},"value":{"kind":"EnumValue","value":"LARGE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitle"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardsParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphCards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardParagraphFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphHero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heroAlignment"}},{"kind":"Field","alias":{"kind":"Name","value":"heroBody"},"name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroHasOverlay"}},{"kind":"Field","alias":{"kind":"Name","value":"heroHeading"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"mediaItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mediaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"heroLink"},"name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WysiwygParagraphFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphWysiwyg"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wysiwyg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllParagraphsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphUnion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccordionParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockEmbedParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CallToActionParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroParagraphFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WysiwygParagraphFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LandingPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeLandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllParagraphsFragment"}}]}}]}}]} as unknown as DocumentNode<GetNodeByPathQuery, GetNodeByPathQueryVariables>;
export const GetArticleByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticleByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RouteInternal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleFullFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleFullFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeArticle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"created"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}}]} as unknown as DocumentNode<GetArticleByPathQuery, GetArticleByPathQueryVariables>;