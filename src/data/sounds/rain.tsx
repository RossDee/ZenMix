import { Category } from '../types'
import { Bird, Dog, BugPlay } from '@tamagui/lucide-icons'

export const rain: Category = {
  icon: Bird,
  id: 'rain',
  sounds: [
    {
      icon: Bird,
      id: 'birds',
      label: 'Birds',
      src: '@public/sounds/rain/birds.mp3',
    },
    {
      icon: BugPlay,
      id: 'seagulls',
      label: 'Seagulls',
      src: '@public/sounds/rain/seagulls.mp3',
    },
    {
      icon: Dog,
      id: 'crickets',
      label: 'Crickets',
      src: '@public/sounds/rain/crickets.mp3',
    },
  ],
  title: 'rain',
}
