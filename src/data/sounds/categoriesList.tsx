import { CategoriesList, Categories } from '../types'
import {
  Home,
  Car,
  Dog,
  Fan,
  Rainbow,
  CloudRain,
  Building2,
  Guitar,
} from '@tamagui/lucide-icons'

export const categoriesList: CategoriesList = [
  {
    id: '1',
    category: ['nature'],
    icon: Rainbow,
  },
  {
    id: '2',
    category: ['animals'],
    icon: Dog,
  },
  {
    id: '3',
    category: ['noise'],
    icon: Fan,
  },
  {
    id: '4',
    category: ['places'],
    icon: Home,
  },
  {
    id: '5',
    category: ['rain'],
    icon: CloudRain,
  },
  {
    id: '6',
    category: ['things'],
    icon: Guitar,
  },
  {
    id: '7',
    category: ['transport'],
    icon: Car,
  },
  {
    id: '8',
    category: ['urban'],
    icon: Building2,
  },
]
