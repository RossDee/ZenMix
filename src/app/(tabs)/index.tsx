import { ScrollView, Stack, YStack, ListItem } from 'tamagui'
import { Bird, Bus, Home } from '@tamagui/lucide-icons'
import { urban } from '@/src/data/sounds/urban'
import { nature } from '@/src/data/sounds/nature'
import { places } from '@/src/data/sounds/places'
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
        <YStack
          $sm={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          justifyContent='space-between'
          padding={5}
        >
          <YStack id='nature'>
            <ListItem
              id='nature'
              fontSize={'$8'}
              icon={Bird}
            >
              {nature.title}
            </ListItem>

            <SoundCard
              soundCategory={nature}
              pressStyle={{ scale: 0.85 }}
              scale={0.9}
              width={200}
              borderBlockColor={themes.dark_blue.borderColor}
              elevate
              borderWidth={1}
              backgroundColor={themes.dark_blue.background05}
            />
          </YStack>
          <YStack id='urban'>
            <ListItem
              fontSize={'$8'}
              icon={Bus}
            >
              {urban.title}
            </ListItem>
            <SoundCard
              soundCategory={urban}
              pressStyle={{ scale: 0.85 }}
              scale={0.9}
              width={200}
              borderBlockColor={themes.dark_blue.borderColor}
              elevate
              borderWidth={1}
              backgroundColor={themes.dark_blue.background05}
            />
          </YStack>
          <YStack id='places'>
            <ListItem
              fontSize={'$8'}
              icon={Home}
            >
              {places.title}
            </ListItem>
            <SoundCard
              soundCategory={places}
              pressStyle={{ scale: 0.85 }}
              scale={0.9}
              width={200}
              borderBlockColor={themes.dark_blue.borderColor}
              elevate
              borderWidth={1}
              backgroundColor={themes.dark_blue.background05}
            />
          </YStack>
        </YStack>
      </ScrollView>
      <MiniPlayer />
    </Stack>
  )
}
