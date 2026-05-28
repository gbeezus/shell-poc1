import { Fragment, JSX } from 'react';
import { isNotNullNorUndefined } from '~/util/isNullOrUndefined';
import { Data, flatListToHierarchical } from '~/util/wp/flatListToHierarchical';
import customBlocks from '../blocks/custom';
import FaustBlockViewer from './FaustBlockViewer';

interface BlocksViewerProps {
  /**
   * If given, these will be flattened before rendering.
   */
  blocks?: Array<Record<string | number, unknown> | null>;
  /**
   * If given, these will not be flattened on the assumption that the main list
   * was already flattened.
   */
  innerBlocks?: Array<Record<string | number, unknown> | null>;
}

async function BlocksViewer({
  blocks,
  innerBlocks,
}: BlocksViewerProps): Promise<JSX.Element> {
  // Only flatten blocks; leave innerBlocks as-is.
  let blockList: Data[] = [];
  if (blocks) {
    blockList = flatListToHierarchical(blocks?.filter(isNotNullNorUndefined), {
      idKey: 'clientId',
      parentKey: 'parentClientId',
      childrenKey: 'innerBlocks',
    });
  } else if (innerBlocks) {
    blockList = innerBlocks.filter(isNotNullNorUndefined) as Data[];
  }

  const blockPromises = blockList.map((blockProps, idx) => {
    try {
      if (
        !('__typename' in blockProps) ||
        typeof blockProps.__typename !== 'string' ||
        blockProps.__typename === ''
      ) {
        console.error('blockProps.__typename is invalid');
        return <Fragment key={idx} />;
      }

      const Component = customBlocks[blockProps.__typename];
      if (!Component) {
        return <FaustBlockViewer block={blockProps} key={idx} />;
      }

      return <Component {...blockProps} key={idx} />;
    } catch (error) {
      if (process.env.WP_ENVIRONMENT_TYPE !== 'production') {
        throw new Error(
          `Block import failed. ${error instanceof Error ? error.message : typeof error === 'string' ? error : undefined}`,
        );
      }
    }
  });

  const renderedBlocks = await Promise.all(blockPromises);
  return <div className="wp-blocks">{renderedBlocks}</div>;
}

export default BlocksViewer;
