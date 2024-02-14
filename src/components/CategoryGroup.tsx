import { Button, ListItem, XGroup, YGroup } from 'tamagui'
import { Category } from '../data/types'
import { useSound } from '../providers/SoundProvider'
interface SoundGroupProps {
  soundCategory: Category
}
export default function SoundGroup({
  soundCategory,
}: {
  soundCategory: Category
}) {
  const { handleAddSound } = useSound()
  return (
    <YGroup
      size='$15'
      borderRadius={10}
      elevate
      paddingBottom={1}
      pressTheme
    >
      <XGroup.Item>
        <Button
          size='$3'
          icon={soundCategory.icon}
        >
          {soundCategory.title}
        </Button>
      </XGroup.Item>

      <YGroup.Item>
        {soundCategory.sounds.map((sound) => (
          <ListItem
            key={sound.id}
            title={sound.label}
            icon={sound.icon}
            onPress={() => {
              handleAddSound(sound)
            }}
          />
        ))}
      </YGroup.Item>
    </YGroup>
  )
}
