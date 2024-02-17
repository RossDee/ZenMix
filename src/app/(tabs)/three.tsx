import React, { useEffect } from 'react'
import {
  useSupaSounds,
  useSupaSoundUrls,
  useSupaUpdateSoundUrls,
} from '@/src/api/sounds'

const SoundComponent = () => {
  const { data: sound, error: soundError } = useSupaSounds('soundId')
  const { data: url, error: urlError } = useSupaSoundUrls(
    'soundId',
    'soundPath'
  )
  const { mutate: updateUrl, error: updateError } = useSupaUpdateSoundUrls(
    'soundId',
    'newUrl'
  )

  useEffect(() => {
    if (soundError || urlError || updateError) {
      console.error('Error:', soundError || urlError || updateError)
    }
    if (sound) {
      console.log('Sound:', sound)
    }
    if (url) {
      console.log('URL:', url)
      updateUrl()
    }
  }, [sound, url, soundError, urlError, updateError, updateUrl])

  return (
    <div>
      <h1>Sound Information</h1>
      {sound && (
        <div>
          <p>Sound ID: {sound.id}</p>
          <p>Sound URL: {url}</p>
        </div>
      )}
    </div>
  )
}

export default SoundComponent
