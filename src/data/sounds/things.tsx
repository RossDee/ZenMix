import { Category } from '../types'
import { Bird, Dog, BugPlay } from '@tamagui/lucide-icons'

export const things: Category = {
  icon: Bird,
  id: 'things',
  sounds: [
    {
      icon: Bird,
      id: 'birds',
      label: 'Birds',
      src: '@public/sounds/things/birds.mp3',
    },
    {
      icon: BugPlay,
      id: 'seagulls',
      label: 'Seagulls',
      src: '@public/sounds/things/seagulls.mp3',
    },
    {
      icon: Dog,
      id: 'crickets',
      label: 'Crickets',
      src: '@public/sounds/things/crickets.mp3',
    },
  ],
  title: 'things',
}
