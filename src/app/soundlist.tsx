import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CurrentSoundList from '@/src/components/CurrentSoundList'
import InnerSheet from '../components/InnerSheet'
import { Button, H1, Sheet, YStack } from 'tamagui'
import { ChevronUp } from '@tamagui/lucide-icons'
export default function SoundList() {
  const [open, setOpen] = useState(false)
  return (
    <YStack space>
      <H1>Hello</H1>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Sheet
        dismissOnSnapToBottom
        zIndex={100_000}
        animation='medium'
      >
        <Sheet.Overlay
          animation='lazy'
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle />
        <Sheet.Frame
          padding='$4'
          justifyContent='center'
          alignItems='center'
          space='$5'
        >
          <InnerSheet
            open={open}
            onOpenChange={setOpen}
          />
        </Sheet.Frame>
      </Sheet>
    </YStack>
  )
}
