// @tamagui/core doesn't include `createMedia` so that it can avoid

// a dependency on react-native. If you are using tamagui, you can

// import createMedia from there directly and avoid this line:

import { createMedia } from '@tamagui/react-native-media-driver'

import { createFont, createTamagui, createTokens } from 'tamagui'
import { createAnimations } from '@tamagui/animations-moti'

// Create a font:
// To work with the tamagui UI kit styled components (which is optional)

// you'd want the keys used for `size`, `lineHeight`, `weight` and

// `letterSpacing` to be consistent. The `createFont` function

// will fill-in any missing values if `lineHeight`, `weight` or

// `letterSpacing` are subsets of `size`.
const interFont = createFont({
  family: 'Inter, Helvetica, Arial, sans-serif',

  size: {
    1: 12,

    2: 14,

    3: 15,
  },

  lineHeight: {
    // 1 will be 22

    2: 22,
  },

  weight: {
    1: '300',

    // 2 will be 300

    3: '600',
  },

  letterSpacing: {
    1: 0,

    2: -1,

    // 3 will be -1
  },

  // (native only) swaps out fonts by face/style

  face: {
    300: { normal: 'InterLight', italic: 'InterItalic' },
    600: { normal: 'InterBold' },
  },
})
// Set up our tokens
// The keys can be whatever you want, but we do recommend keeping them

// consistent across the different token categories and intended for

// usage together to make nice designs - eg for a Button to use.
const size = {
  0: 0,
  1: 5,
  2: 10,

  // ....
}
export const tokens = createTokens({
  size,
  space: { ...size, '-1': -5, '-2': -10 },
  radius: { 0: 0, 1: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    white: '#fff',
    black: '#000',
  },
})

export const animations = createAnimations({
  fast: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  medium: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  slow: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
})

const config = createTamagui({
  fonts: {
    // for tamagui, heading and body are assumed
    heading: interFont,
    body: interFont,
  },

  tokens, // passed into createTamagui
  animations,
  themes: {
    light: {
      bg: '#f2f2f2',
      color: tokens.color.black,
    },
    dark: {
      bg: '#111',
      color: tokens.color.white,
    },
  },

  media: createMedia({
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),

  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    m: 'margin',
    w: 'width',
    ac: 'alignContent',
    ai: 'alignItems',
    als: 'alignSelf',
    bblr: 'borderBottomLeftRadius',
    bbrr: 'borderBottomRightRadius',
    bg: 'backgroundColor',
    br: 'borderRadius',
    btlr: 'borderTopLeftRadius',
    btrr: 'borderTopRightRadius',
  } as const,

  defaultProps: {
    Text: {
      color: 'green',
    },
  },
})

type AppConfig = typeof config
// this will give you types for your components

// note - if using your own design system, put the package name here instead of tamagui

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
  // if you want types for group styling props, define them like so:

  interface TypeOverride {
    groupNames(): 'a' | 'b' | 'c'
  }
}
export default config
