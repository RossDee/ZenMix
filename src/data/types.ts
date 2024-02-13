export type Category = {
  icon: React.ReactNode | string // Allow strings
  id: string
  sounds: Sound[]
  title: string
}

export type Sound = {
  icon: React.ReactNode | string
  id: string
  label: string
  src: string
}
