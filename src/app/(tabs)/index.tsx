import { StyleSheet } from 'react-native'
import { View } from '@tamagui/core'
import { ListItem, YGroup } from 'tamagui'
import { BadgeCheck } from '@tamagui/lucide-icons'
import { animals } from '@/src/data/sounds/animals'
import { useState } from 'react'
import SoundPlayer from '@/src/components/PlaySound'
const animalSounds = animals

export default function TabOneScreen() {
  const [isSelected, setIsSelected] = useState(false)
  const [selectedSoundId, setSelectedSoundId] = useState<
    Record<string, boolean>
  >({})

  return (
    <View margin={10}>
      <View>
        <YGroup
          alignSelf='center'
          bordered
          width='$25'
          size='$4'
        >
          {animalSounds.sounds.map((sound) => (
            <YGroup.Item key={sound.id}>
              <SoundPlayer
                soundSrc={sound.src}
                play={selectedSoundId[sound.id]}
              />
              <ListItem
                hoverTheme
                pressTheme
                bordered
                icon={sound.icon}
                title={sound.label}
                subTitle={sound.id}
                iconAfter={selectedSoundId[sound.id] && BadgeCheck}
                onPress={() => {
                  setSelectedSoundId((preSelectedSoundId) => {
                    return {
                      ...preSelectedSoundId,
                      [sound.id]: !preSelectedSoundId[sound.id],
                    }
                  })
                }}
              />
            </YGroup.Item>
          ))}
        </YGroup>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
