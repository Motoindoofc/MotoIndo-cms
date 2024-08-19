import {Rule} from 'sanity'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required().max(50).warning('Shorter Values are usually better'),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required().max(50).warning('Shorter names are usually better'),
    },
  ],
}
