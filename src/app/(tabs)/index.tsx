import { XStack, ScrollView, Stack } from 'tamagui'
import { urban } from '@/src/data/sounds/urban'
import { nature } from '@/src/data/sounds/nature'
import MiniPlayer from '@/src/components/MiniPlayer'
import { themes } from '@tamagui/config/v3'
import SoundCard from '@/src/components/SoundCard'

export default function TabOneScreen() {
  return (
    <Stack
      flex={1}
      backgroundColor={themes.dark_blue.background}
    >
      <ScrollView>
        <XStack
          $sm={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          justifyContent='space-between'
          padding={5}
        >
          <SoundCard
            soundCategory={nature}
            pressStyle={{ scale: 0.85 }}
            scale={0.9}
            width={200}
            borderBlockColor={themes.dark_blue.borderColor}
            elevate
            borderWidth={3}
            backgroundColor={themes.dark_blue.background05}
          />
          <SoundCard
            soundCategory={urban}
            pressStyle={{ scale: 0.85 }}
            scale={0.9}
            width={200}
            borderBlockColor={themes.dark_blue.borderColor}
            elevate
            borderWidth={3}
            backgroundColor={themes.dark_blue.background05}
          />
        </XStack>
      </ScrollView>
      <MiniPlayer />
    </Stack>
  )
}
