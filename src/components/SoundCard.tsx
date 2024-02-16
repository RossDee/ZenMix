import React from 'react'
import type { CardProps } from 'tamagui'
import type { Category } from '../data/types'
import { Button, Card, H4, Paragraph, XGroup } from 'tamagui'

interface SoundGroupProps {
  soundCategory: Category
}
export default function SoundCard({
  soundCategory,
  ...CardProps
}: SoundGroupProps & CardProps) {
  return (
    <XGroup flexWrap='wrap'>
      {soundCategory.sounds.map((sound) => (
        <Card
          elevate
          size='$4'
          key={sound.id}
          {...CardProps}
        >
          <Card.Header padded>
            <H4>{sound.id}</H4>
            <Paragraph theme='alt2'>{sound.label}</Paragraph>
          </Card.Header>
          <Card.Footer padded>
            <Button
              borderRadius='$10'
              icon={sound.icon}
            >
              {sound.id}
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </XGroup>
  )
}
