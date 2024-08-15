// schemas/youtube.ts
export default {
  name: 'youtube',
  title: 'YouTube',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'YouTube Video URL',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['http', 'https'],
          allowRelative: false,
        }).required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
  ],
}
