import SoundGroup from '@/src/components/CategoryGroup'
import { View, XStack, YStack, ScrollView, Button } from 'tamagui'
import { animals } from '@/src/data/sounds/animals'
import { noise } from '@/src/data/sounds/noise'
import { urban } from '@/src/data/sounds/urban'
import { nature } from '@/src/data/sounds/nature'
import { Airplay } from '@tamagui/lucide-icons'
import MiniPlayer from '@/src/components/MiniPlayer'

export default function TabOneScreen() {
  return (
    <>
      <ScrollView>
        <YStack
          flex={2}
          backgroundColor='$background'
          elevation={1}
          borderRadius={10}
          paddingHorizontal={10}
          paddingVertical={10}
        >
          <SoundGroup soundCategory={urban} />
          <SoundGroup soundCategory={nature} />
          <SoundGroup soundCategory={animals} />
          <SoundGroup soundCategory={noise} />
        </YStack>
      </ScrollView>
      <MiniPlayer />
    </>
  )
}
