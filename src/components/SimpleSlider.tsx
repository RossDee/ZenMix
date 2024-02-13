import type { SliderProps } from 'tamagui'
import { Slider } from 'tamagui'

export const SimpleSlider = (props: SliderProps) => {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      {...props}
    >
      <Slider.Track>
        <Slider.TrackActive />
      </Slider.Track>
      <Slider.Thumb
        index={0}
        circular
        elevate
      />
    </Slider>
  )
}
