import { IconProps } from 'react-native-vector-icons/Icon'

export type Category = {
  icon: IconProps
  id: string
  sounds: Sound[]
  title: string
}

export type Sound = {
  icon: IconProps
  id: string
  label: string
  src: string
}

export type CategoriesList = {
  id: string
  category: Categories[]
  icon: IconProps
}[]

export type Categories =
  | 'animals'
  | 'nature'
  | 'noise'
  | 'places'
  | 'rain'
  | 'things'
  | 'transport'
  | 'urban'
