import { ChevronDown } from '@tamagui/lucide-icons'
import { Button, H2, Paragraph, Sheet, SheetProps, YStack } from 'tamagui'

export default function InnerSheet(props: SheetProps) {
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
            <H2>Hello world</H2>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Paragraph
                key={i}
                size='$8'
              >
                Eu officia sunt ipsum nisi dolore labore est laborum laborum in
                esse ad pariatur. Dolor excepteur esse deserunt voluptate labore
                ea. Exercitation ipsum deserunt occaecat cupidatat consequat est
                adipisicing velit cupidatat ullamco veniam aliquip reprehenderit
                officia. Officia labore culpa ullamco velit. In sit occaecat
                velit ipsum fugiat esse aliqua dolor sint.
              </Paragraph>
            ))}
          </YStack>
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  )
}
