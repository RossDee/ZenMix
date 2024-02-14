import { PropsWithChildren, createContext, useContext, useState } from 'react'
import { Sound } from '../data/types'

type SoundType = {
  currentSoundTracks: Sound[]
  handleAddSound: (soundTrack: Sound) => void
  handlePlaySound: () => void
}
const SoundContext = createContext<SoundType>({
  currentSoundTracks: [],
  handleAddSound: () => {},
  handlePlaySound: () => {},
})
const SoundProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentSoundTracks, setCurrentSoundTracks] = useState<Sound[]>([])

  const handleAddSound = (soundTrack: Sound) => {
    console.log(soundTrack.id, soundTrack.icon, soundTrack.src)
    setCurrentSoundTracks([soundTrack, ...currentSoundTracks])
    console.log(currentSoundTracks.length)
  }

  const handlePlaySound = () => {}

  return (
    <SoundContext.Provider
      value={{
        currentSoundTracks,
        handleAddSound,
        handlePlaySound,
      }}
    >
      {children}
    </SoundContext.Provider>
  )
}
export default SoundProvider
export const useSound = () => useContext(SoundContext)
