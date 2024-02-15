import {
  XStack,
  Button,
  Card,
  Paragraph,
  H2,
  YStack,
  Progress,
  Avatar,
  H4,
  Group,
  CardProps,
  SizeTokens,
} from 'tamagui'
import React, { useState } from 'react'
import { Airplay, Bird } from '@tamagui/lucide-icons'
import { useSound } from '../providers/SoundProvider'

export default function MiniPlayer(props: CardProps) {
  const [progress, setProgress] = useState(40)
  const [size, setSize] = useState(0.5)
  const sizeProp = `$${size}` as SizeTokens
  return (
    <XStack padding='$2'>
      <YStack
        flex={1}
        borderRadius='$4'
        padding='$2'
        alignSelf='center'
        alignContent='center'
        justifyContent='space-between'
      >
        <Card
          elevate
          size='$5'
          bordered
          height={80}
          width='100%'
          flexDirection='row'
          alignContent='space-between'
          {...props}
        >
          <Group
            flexDirection='row'
            borderRadius='$10'
            alignItems='center'
            justifyContent='space-around'
          >
            <Group.Item>
              <Bird
                size={40}
                alignSelf='center'
                alignItems='center'
                alignContent='center'
              />
              <Card.Header padded>
                <H4>Bird</H4>
                <Paragraph theme='alt2'>Nature</Paragraph>
              </Card.Header>
              <Button
                borderRadius='$12'
                icon={Airplay}
              >
                Play
              </Button>
            </Group.Item>
          </Group>
          <Card.Background></Card.Background>
        </Card>

        <Progress
          size={sizeProp}
          value={progress}
        >
          <Progress.Indicator animation='bouncy' />
        </Progress>
      </YStack>
    </XStack>
  )
}
