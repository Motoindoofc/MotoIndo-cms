import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { visionTool } from '@sanity/vision';

import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Motoindo',

  projectId: 'ob7ot1m1',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
