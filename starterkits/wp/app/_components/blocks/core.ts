import { CoreBlocks } from '@faustwp/blocks';

/**
 * Blocks included here will have their fragments combined into the
 * custom fragment WpBlocksFragment, handled by the script block-fragments.ts
 */
const coreBlocks = {
  CoreParagraph: CoreBlocks.CoreParagraph,
  CoreColumns: CoreBlocks.CoreColumns,
  CoreColumn: CoreBlocks.CoreColumn,
  CoreCode: CoreBlocks.CoreCode,
  CoreQuote: CoreBlocks.CoreQuote,
  CoreImage: CoreBlocks.CoreImage,
  CoreSeparator: CoreBlocks.CoreSeparator,
  CoreList: CoreBlocks.CoreList,
  CoreButton: CoreBlocks.CoreButton,
  CoreButtons: CoreBlocks.CoreButtons,
  CoreHeading: CoreBlocks.CoreHeading,
};

export default coreBlocks;
