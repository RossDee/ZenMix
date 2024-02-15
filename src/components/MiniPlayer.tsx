import {
  Text,
  XStack,
  Button,
  Card,
  YStack,
  Progress,
  Group,
  CardProps,
  SizeTokens,
} from 'tamagui'
import React, { useState } from 'react'
import { useSound } from '../providers/SoundProvider'
import { Play } from '@tamagui/lucide-icons'

export default function MiniPlayer(props: CardProps) {
  const [progress, setProgress] = useState(40)
  const [size, setSize] = useState(0.5)
  const sizeProp = `$${size}` as SizeTokens
  const { currentSoundTracks } = useSound()
  const soundNum = currentSoundTracks.length
  return (
    <XStack padding='$2'>
      <Card
        elevate
        size='$5'
        height={80}
        width='100%'
        flexDirection='row'
        alignContent='center'
        alignItems='center'
        {...props}
      >
        <XStack>
          <YStack>
            {currentSoundTracks.map((sound) => (
              <XStack key={sound.id}>
                <XStack
                  alignContent='center'
                  justifyContent='space-between'
                  alignItems='center'
                  flexDirection='column'
                  space
                >
                  <Button
                    key={sound.id}
                    borderRadius='$10'
                    size='$5'
                    icon={sound.icon}
                    onPress={() => {
                      setProgress(Math.floor(Math.random() * 100))
                    }}
                  />
                </XStack>
              </XStack>
            ))}
          </YStack>
          <YStack>
            <Button
              borderRadius='$12'
              icon={Play}
            >
              <Text>{soundNum}</Text>
            </Button>
          </YStack>
        </XStack>
        <Card.Background></Card.Background>
      </Card>
    </XStack>
  )
}
