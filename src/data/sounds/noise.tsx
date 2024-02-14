import { Category } from '../types'
import { Bird, Dog, BugPlay } from '@tamagui/lucide-icons'

export const noise: Category = {
  icon: Bird,
  id: 'noise',
  sounds: [
    {
      icon: Bird,
      id: 'birds',
      label: 'Birds',
      src: '@public/sounds/noise/birds.mp3',
    },
    {
      icon: BugPlay,
      id: 'seagulls',
      label: 'Seagulls',
      src: '@public/sounds/noise/seagulls.mp3',
    },
    {
      icon: Dog,
      id: 'crickets',
      label: 'Crickets',
      src: '@public/sounds/noise/crickets.mp3',
    },
  ],
  title: 'noise',
}
