// App.tsx
import React, { useEffect, useState } from 'react'
import {
  Button,
  View,
  Modal,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native'
import SoundPlayer from '@/src/components/PlaySound'
import { Slider, Spinner } from 'tamagui'
import { supabase } from '@/src/lib/supabase'
import { useQuery } from '@tanstack/react-query'
import {
  useSupaCategories,
  useSupaSoundUrl,
  useSupaSounds,
  useSupaUpdateSoundUrls,
} from '@/src/api/sounds'

const App = () => {
  const [playSound, setPlaySound] = useState(false)
  const [volume, setVolume] = useState([1])
  const [modalVisible, setModalVisible] = useState(false)
  const [action, setAction] = useState<
    'play' | 'pause' | 'stop' | 'volume up' | 'volume down'
  >('stop')
  const [id, setId] = useState('')
  const [path, setPath] = useState('')
  const [signedUrl, setSignedUrl] = useState('')
  const { data } = useSupaSoundUrl(id, path)

  // const {
  //   data: sounds,
  //   isLoading: soundsLoading,
  //   error: soundsError,
  // } = useSupaSounds()

  // if (soundsLoading) {
  //   return <Spinner />
  // }

  // if (soundsError) {
  //   return <div>Error: {soundsError.message}</div>
  // }

  // const handleGenerateLink = (id: string, path: string) => {
  //   console.log('Generate link button pressed')
  //   setId(id)
  //   setPath(path)
  //   if (data && data.signedUrl) {
  //     setSignedUrl(data.signedUrl)
  //   }
  //   console.log('data_generated:', data)
  // }

  return (
    <Text>xxx</Text>
    // <FlatList
    //   data={sounds}
    //   renderItem={({ item }) => (
    //     <View
    //       style={{
    //         alignContent: 'space-between',
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //       }}
    //     >
    //       <Text>{item.id}</Text>
    //       <Text>{item.sound_path}</Text>
    //       <Text>{item.sound_src}</Text>
    //     </View>
    //   )}
    // />
  )
}

export default App
