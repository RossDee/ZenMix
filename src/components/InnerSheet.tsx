import { ChevronDown, ChevronRight } from '@tamagui/lucide-icons'
import {
  Button,
  Group,
  ListItem,
  Sheet,
  SheetProps,
  YGroup,
  YStack,
} from 'tamagui'
import { useSound } from '../providers/SoundProvider'
export default function InnerSheet(props: SheetProps) {
  const { currentSoundTracks } = useSound()
  return (
    <Sheet
      animation='medium'
      modal
      snapPoints={[90]}
      dismissOnSnapToBottom
      {...props}
    >
      <Sheet.Overlay
        animation='medium'
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle />
      <Sheet.Frame
        flex={1}
        justifyContent='center'
        alignItems='center'
        space='$5'
      >
        <Sheet.ScrollView>
          <YStack
            p='$5'
            gap='$8'
          >
            <Button
              size='$6'
              circular
              alignSelf='center'
              icon={ChevronDown}
              onPress={() => props.onOpenChange?.(false)}
            />
            {currentSoundTracks.map((sound) => (
              <Group>
                <YGroup.Item key={sound.id}>
                  <ListItem
                    hoverTheme
                    pressTheme
                    title={sound.label}
                    subTitle={sound.id}
                    icon={sound.icon}
                    iconAfter={ChevronRight}
                  />
                </YGroup.Item>
              </Group>
            ))}
          </YStack>
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  )
}
