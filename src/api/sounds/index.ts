import { supabase } from '@/src/lib/supabase'
import { useQuery } from '@tanstack/react-query'

/**
 * Fetches category data from Supabase and returns it via React Query.
 *
 * The queryKey 'categorylist' is used to uniquely identify this query.
 *
 * The queryFn fetches the 'id', 'category_name', and 'icon' fields from
 * the 'categorylist' table in Supabase.
 *
 * The result data is returned for use in the app. Any errors are thrown.
 */
export const useSupaCategories = () => {
  return useQuery({
    queryKey: ['categorylist'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categorylist')
        .select('id, category_name,icon')
      if (error) {
        throw new Error(error.message)
      }
      console.log('data:', data)
      return data
    },
  })
}
/**
 * Fetches sound data from the 'soundlist' table in Supabase.
 *
 * Uses React Query to make the async request and return the data.
 * Handles errors by throwing if there is a request error.
 * Logs the returned data to the console.
 *
 * @returns The sound data array from Supabase.
 */
export const useSupaSounds = () => {
  return useQuery({
    queryKey: ['soundlist'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('soundlist')
        .select('id,sound_path')
      if (error) {
        throw new Error(error.message)
      }
      console.log('data:', data)
      return data
    },
  })
}

/**
 * Creates a signed URL for retrieving a sound file from Supabase storage.
 *
 * @param id - The id of the sound file
 * @param path - The path to the sound file in storage
 * @returns A React Query result containing the signed URL
 */
export const useSupaSoundUrls = (id: string, path: Array<string>) => {
  return useQuery({
    queryKey: ['sound', id],
    queryFn: async () => {
      const { data, error } = await supabase.storage
        .from('zenmix')
        .createSignedUrls(path, 60 * 60 * 24 * 7)
      if (error) {
        throw new Error(error.message)
      }
      console.log('data:', data)
      return data
    },
  })
}

/**
 * Updates the sound URL for the sound with the given ID.
 *
 * @param id - The ID of the sound to update.
 * @param url - The new URL for the sound.
 * @returns A React Query result containing the update response.
 */
export const useSupaUpdateSoundUrls = (id: string, url: string) => {
  return useQuery({
    queryKey: ['soundurlupdate', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('soundlist')
        .update({ sound_src: url })
        .eq('id', id)

      if (error) {
        throw new Error(error.message)
      }
      console.log('data:', data)
      return data
    },
  })
}
