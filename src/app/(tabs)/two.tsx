import { useEffect, useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Audio } from 'expo-av'

export default function App() {
  const [sound, setSound] = useState()

  async function playSound() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('@public/sounds/nature/campfire.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return (
    <View style={styles.container}>
      <Button
        title='Play Sound'
        onPress={playSound}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
})

// <XStack
//   maxWidth={250}
//   padding='$2'
//   alignSelf='stretch'
// >
//   <MusicCard
//     CardProps={{
//       size: '$4',
//       width: '$15',
//       height: '250',
//       animation: 'bouncy',
//       hoverStyle: { scale: 0.925 },
//       pressStyle: { scale: 0.9, backgroundColor: '$background0' },
//     }}
//     MusicInfo={{ name: 'nature', catalog: 'nature' }}
//   />
//   <SimpleSlider
//     height={200}
//     orientation='vertical'
//   />
// </XStack>
