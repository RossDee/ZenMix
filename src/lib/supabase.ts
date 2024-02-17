import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ceemgxflokskjnmmvjsc.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlZW1neGZsb2tza2pubW12anNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNzQxMjQsImV4cCI6MjAyMzY1MDEyNH0.zSDQmPet5u1jStmlKlb1J8QvdMk3Jk0sgYk38bC9XBo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
