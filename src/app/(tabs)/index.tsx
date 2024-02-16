import SoundGroup from '@/src/components/CategoryGroup'
import { View, XStack, YStack, ScrollView, Button, Stack } from 'tamagui'
import { animals } from '@/src/data/sounds/animals'
import { noise } from '@/src/data/sounds/noise'
import { urban } from '@/src/data/sounds/urban'
import { nature } from '@/src/data/sounds/nature'
import { Airplay } from '@tamagui/lucide-icons'
import MiniPlayer from '@/src/components/MiniPlayer'
import { themes } from '@tamagui/config/v3'

export default function TabOneScreen() {
  return (
    <Stack
      flex={1}
      backgroundColor={themes.dark_blue.background}
    >
      <ScrollView>
        <YStack
          flex={1}
          paddingHorizontal={10}
          paddingVertical={10}
        >
          <SoundGroup soundCategory={urban} />
          <SoundGroup soundCategory={animals} />
        </YStack>
      </ScrollView>
      <MiniPlayer />
    </Stack>
  )
}
