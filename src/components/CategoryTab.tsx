import { SizableText, Tabs, Separator } from 'tamagui'
import { categoriesList } from '../data/sounds/categoriesList'

export default function CategoryTab() {
  return (
    <Tabs
      defaultValue='tab1'
      flexDirection='column'
      width={'20%'}
      height={'100%'}
      borderRadius='$4'
      borderWidth='$0.25'
      overflow='scroll'
      borderColor='$borderColor'
      orientation='vertical'
    >
      {categoriesList.map(({ id, category, icon: Icon }) => (
        <Tabs.List
          disablePassBorderRadius='bottom'
          aria-label='Manage your account'
        >
          <Tabs.Tab
            flex={1}
            value={category[0]}
          >
            <SizableText fontFamily='$body'>{category[0]}</SizableText>
          </Tabs.Tab>
        </Tabs.List>
      ))}
    </Tabs>
  )
}
