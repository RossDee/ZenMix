import { Category } from '../types'
import {
  FlameKindling,
  Shrub,
  Wind,
  Waves,
  Droplets,
} from '@tamagui/lucide-icons'

export const urban: Category = {
  icon: Shrub,
  id: 'urban',
  sounds: [
    {
      icon: FlameKindling,
      id: 'campfire',
      label: 'Campfire',
      src: '@public/sounds/urban/campfire.mp3',
    },
    {
      icon: Droplets,
      id: 'droplets',
      label: 'Droplets',
      src: '@public/sounds/urban/droplets.mp3',
    },
    {
      icon: Wind,
      id: 'howling-wind',
      label: 'Howling wind',
      src: '@public/sounds/urban/howling-wind.mp3',
    },
    {
      icon: Waves,
      id: 'river',
      label: 'River',
      src: '@public/sounds/urban/river.mp3',
    },
    {
      icon: Waves,
      id: 'Waves',
      label: 'Waves',
      src: '@public/sounds/urban/waves.mp3',
    },
    {
      icon: Wind,
      id: 'Wind',
      label: 'Howling wind',
      src: '@public/sounds/urban/howling-wind.mp3',
    },
  ],
  title: 'urban',
}
