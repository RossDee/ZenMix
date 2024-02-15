import { View, Text } from 'react-native'
import React from 'react'
import { useSound } from '../providers/SoundProvider'
import { ListItem, Separator, YGroup } from 'tamagui'
import { ChevronRight, Moon, Star } from '@tamagui/lucide-icons'

export default function CurrentSoundList() {
  const { currentSoundTracks } = useSound()
  return (
    <YGroup
      alignSelf='center'
      bordered
      width={240}
      size='$5'
    >
      {currentSoundTracks.map((sound) => (
        <YGroup.Item key={sound.id}>
          <ListItem
            hoverTheme
            pressTheme
            title={sound.label}
            subTitle={sound.id}
            icon={sound.icon}
            iconAfter={ChevronRight}
          />
        </YGroup.Item>
      ))}
    </YGroup>
  )
}
