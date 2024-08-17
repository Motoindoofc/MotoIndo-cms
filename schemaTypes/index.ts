import {SchemaTypeDefinition} from 'sanity'

import article from './article'
import author from './author'
import category from './category'
import product from './product'
import youtube from './youtube'

export const schemaTypes = [article, author, youtube, category, product]
export const schema: {types: SchemaTypeDefinition[]} = {
  types: [article, author, youtube, category, product],
}
