'use client';

import { WordPressBlocksProvider } from '@faustwp/blocks';
import { PropsWithChildren } from 'react';
import coreBlocks from '~/app/_components/blocks/core';

type ClientProviderProps = PropsWithChildren;
/**
 * Wrapper for client side providers.
 * If a provider requires client side things like `useContext`, throw it in here.
 */
function ClientProvider({ children }: ClientProviderProps) {
  return (
    <WordPressBlocksProvider
      config={{
        blocks: coreBlocks,
        // Note: we need to pass a defined object into the theme,
        // or else the WordPressBlocksViewer will get mad that theme is undefined.
        theme: {},
      }}
    >
      {children}
    </WordPressBlocksProvider>
  );
}

export default ClientProvider;
