import {SchemaTypeDefinition} from 'sanity'

import article from './article.js'
import author from './author'
import youtube from './youtube'

export const schemaTypes = [article, author, youtube]
export const schema: {types: SchemaTypeDefinition[]} = {
  types: [article, author, youtube],
}
