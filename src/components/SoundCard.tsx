import { View, Text } from 'tamagui'

import React from 'react'
import type { CardProps } from 'tamagui'
import type { Category } from '../data/types'
import { Button, Card, H2, Image, Paragraph, XStack } from 'tamagui'
import { useSound } from '../providers/SoundProvider'

interface SoundGroupProps {
  soundCategory: Category
}
export default function SoundCard(
  {
    SoundProps,
  }: {
    soundCategory: Category
  },
  props: { CardProps?: CardProps }
) {
  return (
    <View flex={2}>
      <Card
        elevate
        size='$4'
        bordered
        {...props.CardProps}
      >
        <Card.Header padded>
          <H2>Sony A7IV</H2>
          <Paragraph theme='alt2'>Now available</Paragraph>
        </Card.Header>
        <Card.Footer padded>
          <XStack flex={1} />
          <Button borderRadius='$10'>Purchase</Button>
        </Card.Footer>
      </Card>
    </View>
  )
}
