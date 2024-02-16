import React, { useState, useEffect } from 'react'
import { Audio } from 'expo-av'

type Sound = {
  soundSrc: string
  volume: number
}

type SoundPlayerProps = {
  sounds: Sound[]
  action: 'play' | 'pause' | 'stop' | 'volume up' | 'volume down'
  onStatusUpdate: (status: 'playing' | 'paused' | 'stopped') => void
  onVolumeUpdate: (volume: number[]) => void
}

const SoundPlayer: React.FC<SoundPlayerProps> = ({
  sounds,
  action,
  onStatusUpdate,
  onVolumeUpdate,
}) => {
  const [soundObjects, setSoundObjects] = useState<(Audio.Sound | null)[]>([])
  const [volumes, setVolumes] = useState<number[]>([])

  useEffect(() => {
    if (sounds.length > 0) {
      console.log('Loading sounds...')
      load(sounds)
    }
  }, [sounds])

  useEffect(() => {
    console.log('Action changed:', action)
    switch (action) {
      case 'play':
        soundObjects.forEach((sound) => play(sound))
        break
      case 'pause':
        soundObjects.forEach((sound) => pause(sound))
        break
      case 'stop':
        soundObjects.forEach((sound) => stop(sound))
        break
      case 'volume up':
        setVolumes((prevVolumes) =>
          prevVolumes.map((volume) => Math.min(volume + 0.1, 1))
        )
        break
      case 'volume down':
        setVolumes((prevVolumes) =>
          prevVolumes.map((volume) => Math.max(volume - 0.1, 0))
        )
        break
    }
  }, [action])

  useEffect(() => {
    console.log('Volumes changed:', volumes)
    soundObjects.forEach((sound, index) =>
      sound?.setVolumeAsync(volumes[index])
    )
    onVolumeUpdate(volumes)
  }, [volumes])

  async function load(sounds: Sound[]) {
    const newSoundObjects = []
    const newVolumes = []
    for (const sound of sounds) {
      console.log('Loading sound:', sound.soundSrc)
      const { sound: soundObject } = await Audio.Sound.createAsync(
        { uri: sound.soundSrc },
        { shouldPlay: true }
      )
      await soundObject.setIsLoopingAsync(true)
      newSoundObjects.push(soundObject)
      newVolumes.push(sound.volume)
    }
    console.log('Sounds loaded:', newSoundObjects)
    setSoundObjects(newSoundObjects)
    setVolumes(newVolumes)
  }

  async function play(sound: Audio.Sound | null) {
    console.log('Playing sound:', sound)
    await sound?.playAsync()
    onStatusUpdate('playing')
  }

  async function pause(sound: Audio.Sound | null) {
    console.log('Pausing sound:', sound)
    await sound?.pauseAsync()
    onStatusUpdate('paused')
  }

  async function stop(sound: Audio.Sound | null) {
    console.log('Stopping sound:', sound)
    await sound?.stopAsync()
    onStatusUpdate('stopped')
  }

  return null
}

export default SoundPlayer
