// Code: include music informations in the MusicCard component, and use the MusicProvider to provide and consume the music information through the app.

// Path: src/components/MusicCard.tsx
import { View, Text } from 'tamagui'
//content : music catalog,music title, slider to contol the volume, and a button to play the music, and a button to  star the music.
import React from 'react'
import type { CardProps } from 'tamagui'
import { Button, Card, H2, Image, Paragraph, XStack } from 'tamagui'

type MusicCardProps = {
  CardProps: CardProps
  MusicInfo: {
    name: string
    catalog: string
  }
}
export default function MusicCard(props: MusicCardProps) {
  return (
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
  )
}
