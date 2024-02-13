import { Category } from '../types'
import { Bird, Dog, BugPlay } from '@tamagui/lucide-icons'

export const animals: Category = {
  icon: <Bird />,
  id: 'animals',
  sounds: [
    {
      icon: <Bird />,
      id: 'birds',
      label: 'Birds',
      src: '@public/sounds/animals/birds.mp3',
    },
    {
      icon: <BugPlay />,
      id: 'seagulls',
      label: 'Seagulls',
      src: '@public/sounds/animals/seagulls.mp3',
    },
    {
      icon: <Dog />,
      id: 'crickets',
      label: 'Crickets',
      src: '@public/sounds/animals/crickets.mp3',
    },
  ],
  title: 'Animals',
}
