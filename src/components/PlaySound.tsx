import React, { useEffect, useState } from 'react'
import { Audio } from 'expo-av'
import { Asset } from 'expo-asset'
import { animals } from '../data/sounds/animals'

const SoundPlayer = ({
  soundSrc,
  play,
}: {
  soundSrc: string
  play: boolean
}) => {
  const [sound, setSound] = useState()

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  useEffect(() => {
    if (play) {
      startPlaying()
    } else {
      stopPlaying()
    }
  }, [play])

  async function startPlaying() {
    console.log('Loading Sound')
    console.log('Sound source: ', soundSrc)

    try {
      const { sound } = await Audio.Sound.createAsync(require(''))
      console.log('Playing Sound') // Print when the sound starts playing
      setSound(sound)
      await sound.playAsync()
    } catch (error) {
      console.error('Error loading sound: ', error)
    }
  }

  async function stopPlaying() {
    console.log('Stopping Sound')
    await sound.stopAsync()
  }

  return null
}

export default SoundPlayer
