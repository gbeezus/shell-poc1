// Do not alter this file. Instead, use `npm run generate:all
/* eslint-disable */

import { gql } from '@apollo/client';

const WpBlocksFragment = gql`
  
  fragment WpBlocksFragment on EditorBlock {
    __typename
    clientId
    name
    renderedHtml
    parentClientId

    ... on CoreParagraph {
      attributes {
        cssClassName
        backgroundColor
        content
        style
        textColor
        fontSize
        fontFamily
        direction
        dropCap
        gradient
        align
      }
    }
    ... on CoreColumns {
      attributes {
        align
        anchor
        layout
        cssClassName
        isStackedOnMobile
        verticalAlignment
        borderColor
        backgroundColor
        fontSize
        fontFamily
        style
        textColor
        gradient
      }
    }
    ... on CoreColumn {
      attributes {
        anchor
        borderColor
        backgroundColor
        cssClassName
        fontSize
        fontFamily
        gradient
        layout
        style
        textColor
        verticalAlignment
        width
      }
    }
    ... on CoreCode {
      attributes {
        anchor
        backgroundColor
        borderColor
        className
        content
        cssClassName
        fontFamily
        fontSize
        gradient
        lock
        style
        textColor
      }
    }
    ... on CoreQuote {
      attributes {
        textAlign
        anchor
        backgroundColor
        textAlign
        className
        fontFamily
        fontSize
        gradient
        lock
        style
        textColor
        value
        cssClassName
      }
    }
    ... on CoreImage {
      attributes {
        align
        alt
        anchor
        borderColor
        
        className
        width
        url
        title
        style
        src
        sizeSlug
        rel
        lock
        linkTarget
        linkDestination
        linkClass
        href
        height
        cssClassName
      }
    }
    ... on CoreSeparator {
      attributes {
        align
        anchor
        opacity
        gradient
        backgroundColor
        style
        cssClassName
      }
    }
    ... on CoreList {
      attributes {
        anchor
        backgroundColor
        className
        fontFamily
        fontSize
        gradient
        lock
        ordered
        reversed
        start
        style
        textColor
        type
        values
        cssClassName
      }
    }
    ... on CoreButton {
      attributes {
        anchor
        gradient
        textAlign
        textAlign
        textColor
        style
        fontSize
        fontFamily
        linkTarget
        rel
        url
        backgroundColor
        cssClassName
        linkClassName
      }
    }
    ... on CoreButtons {
      attributes {
        cssClassName
        align
        anchor
        fontFamily
        fontSize
        layout
        style
      }
    }
    ... on CoreHeading {
      attributes {
        align
        anchor
        backgroundColor
        
        fontFamily
        fontSize
        gradient
        level
        style
        textAlign
        textColor
        cssClassName
      }
    }
  }
`;

export default WpBlocksFragment;
