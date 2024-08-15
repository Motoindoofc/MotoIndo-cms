import {Rule} from 'sanity'

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required().max(100).warning('Title should be less than 100 characters.'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A brief summary of the post',
      rows: 3,
      validation: (Rule: Rule) => Rule.required().max(200),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
        {type: 'youtube'}, // Reference the YouTube object here
      ],
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.max(60).warning('SEO titles should be under 60 characters.'),
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      validation: (Rule: Rule) =>
        Rule.max(160).warning('SEO descriptions should be under 160 characters.'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection: {title: string; author: string; media: any}) {
      return {
        title: selection.title,
        subtitle: selection.author ? `by ${selection.author}` : '',
        media: selection.media,
      }
    },
  },
}
