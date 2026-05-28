'use client';

import { WordPressBlocksViewer } from '@faustwp/blocks';
import { JSX } from 'react';
import { Data } from '~/util/wp/flatListToHierarchical';

function FaustBlockViewer(block: Data): JSX.Element | null {
  if (block?.block && typeof block.block === 'object') {
    return <WordPressBlocksViewer blocks={[block.block]} />;
  }
  return null;
}

export default FaustBlockViewer;
