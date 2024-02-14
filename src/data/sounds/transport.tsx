import { Category } from '../types'
import { Bird, Dog, BugPlay } from '@tamagui/lucide-icons'

export const transport: Category = {
  icon: Bird,
  id: 'transport',
  sounds: [
    {
      icon: Bird,
      id: 'birds',
      label: 'Birds',
      src: '@public/sounds/transport/birds.mp3',
    },
    {
      icon: BugPlay,
      id: 'seagulls',
      label: 'Seagulls',
      src: '@public/sounds/transport/seagulls.mp3',
    },
    {
      icon: Dog,
      id: 'crickets',
      label: 'Crickets',
      src: '@public/sounds/transport/crickets.mp3',
    },
  ],
  title: 'transport',
}
