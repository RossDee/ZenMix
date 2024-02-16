import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs } from 'expo-router'
import { Pressable, StatusBar } from 'react-native'
import { themes } from '@tamagui/config/v3'
import { Stack } from 'tamagui'

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return (
    <FontAwesome
      size={28}
      style={{ marginBottom: -3 }}
      {...props}
    />
  )
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: themes.dark_blue.background,
        },
        headerTintColor: themes.dark_blue.color,
        tabBarActiveTintColor: themes.dark_blue.color,
        tabBarStyle: {
          backgroundColor: themes.dark_blue.background,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'ZenMix',
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name='code'
              color={themes.dark_blue.color}
            />
          ),
          headerRight: () => (
            <Link
              href='/soundlist'
              asChild
            >
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='info-circle'
                    size={25}
                    color={themes.dark_blue.color}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Tab Two',

          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name='code'
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
