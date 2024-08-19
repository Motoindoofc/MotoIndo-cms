import {defineField} from 'sanity'

import {PlayIcon} from '@sanity/icons'

// @ts-ignore
import YouTubePreview from './YouTubePreview'

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    }),
  ],
  preview: {
    select: {title: 'url'},
  },
  components: {
    preview: YouTubePreview,
  },
}
