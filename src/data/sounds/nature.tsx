import { Category } from '../types'
import { Bird, Dog, BugPlay } from '@tamagui/lucide-icons'

export const nature: Category = {
  icon: Bird,
  id: 'nature',
  sounds: [
    {
      icon: Bird,
      id: 'birds',
      label: 'Birds',
      src: '@public/sounds/nature/birds.mp3',
    },
    {
      icon: BugPlay,
      id: 'seagulls',
      label: 'Seagulls',
      src: '@public/sounds/nature/seagulls.mp3',
    },
    {
      icon: Dog,
      id: 'crickets',
      label: 'Crickets',
      src: '@public/sounds/nature/crickets.mp3',
    },
  ],
  title: 'nature',
}
