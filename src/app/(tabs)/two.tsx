// App.tsx
import React, { useState } from 'react'
import { Button, View, Modal, TouchableOpacity, Text } from 'react-native'
import SoundPlayer from '@/src/components/PlaySound'
import { Slider } from 'tamagui'

const App = () => {
  const [playSound, setPlaySound] = useState(false)
  const [volume, setVolume] = useState([1])
  const [modalVisible, setModalVisible] = useState(false)
  const [action, setAction] = useState<
    'play' | 'pause' | 'stop' | 'volume up' | 'volume down'
  >('stop')
  const handlePlayPause = () => {
    console.log('Play/Pause button pressed')
    setPlaySound(!playSound)
    setAction((action) => (action === 'play' ? 'pause' : 'play'))
  }
  const handlePlayStop = () => {
    console.log('Stop button pressed')
    setAction('stop')
    console.log('Stop action:', action)
  }
  const handleVolumeChange = (value: number[]) => {
    setVolume(value)
  }

  const handleTimerChange = (value: number) => {
    setModalVisible(false)
    if (value > 0) {
      setTimeout(handlePlayPause, value * 60 * 1000)
    }
  }

  return (
    <View>
      <Button
        title={playSound ? 'Pause' : 'Play'}
        onPress={handlePlayPause}
      />
      <Slider
        min={0}
        max={1}
        value={volume}
        onValueChange={handleVolumeChange}
      />
      <Button
        title='Set Timer'
        onPress={() => setModalVisible(true)}
      />
      <Button
        title='stop'
        onPress={handlePlayStop}
      />
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity onPress={() => handleTimerChange(15)}>
          <Text>15 minutes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTimerChange(30)}>
          <Text>30 minutes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTimerChange(45)}>
          <Text>45 minutes</Text>
        </TouchableOpacity>
      </Modal>

      <SoundPlayer
        sounds={[
          {
            soundSrc:
              'https://ceemgxflokskjnmmvjsc.supabase.co/storage/v1/object/sign/zenmix/sounds/animals/birds.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ6ZW5taXgvc291bmRzL2FuaW1hbHMvYmlyZHMubXAzIiwiaWF0IjoxNzA4MDc1NDMxLCJleHAiOjE3Mzk2MTE0MzF9.ylZXq3bbmPtk_ctnyVA1GMEmadIUh9QYYPcCXuuy_Bg&t=2024-02-16T09%3A23%3A51.836Z',
            volume: 0.5,
          },
        ]}
        action={action}
        onStatusUpdate={(status) => {}}
        onVolumeUpdate={(volume) => {}}
      />
    </View>
  )
}

export default App
