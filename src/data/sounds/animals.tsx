import { Category } from '../types'
import { Bird, Dog, BugPlay } from '@tamagui/lucide-icons'

export const animals: Category = {
  icon: Bird,
  id: 'animals',
  sounds: [
    {
      icon: Bird,
      id: 'birds',
      label: 'Birds',
      src: 'https://ceemgxflokskjnmmvjsc.supabase.co/storage/v1/object/sign/zenmix/sounds/animals/birds.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ6ZW5taXgvc291bmRzL2FuaW1hbHMvYmlyZHMubXAzIiwiaWF0IjoxNzA4MDc1NDMxLCJleHAiOjE3Mzk2MTE0MzF9.ylZXq3bbmPtk_ctnyVA1GMEmadIUh9QYYPcCXuuy_Bg&t=2024-02-16T09%3A23%3A51.836Z',
    },
    {
      icon: BugPlay,
      id: 'seagulls',
      label: 'Seagulls',
      src: 'https://ceemgxflokskjnmmvjsc.supabase.co/storage/v1/object/sign/zenmix/sounds/animals/seagulls.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ6ZW5taXgvc291bmRzL2FuaW1hbHMvc2VhZ3VsbHMubXAzIiwiaWF0IjoxNzA4MDc1ODMxLCJleHAiOjE3Mzk2MTE4MzF9.OfBzjTOK0qUQs3RMilLXUkLySeqQL1zKP7f4tO70IUA&t=2024-02-16T09%3A30%3A30.952Z',
    },
    {
      icon: Dog,
      id: 'dogs',
      label: 'Dog',
      src: 'https://ceemgxflokskjnmmvjsc.supabase.co/storage/v1/object/sign/zenmix/sounds/animals/seagulls.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ6ZW5taXgvc291bmRzL2FuaW1hbHMvc2VhZ3VsbHMubXAzIiwiaWF0IjoxNzA4MDc1ODMxLCJleHAiOjE3Mzk2MTE4MzF9.OfBzjTOK0qUQs3RMilLXUkLySeqQL1zKP7f4tO70IUA&t=2024-02-16T09%3A30%3A30.952Z',
    },
  ],
  title: 'Animals',
}
