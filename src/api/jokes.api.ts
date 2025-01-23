import axios from 'axios'
import type { Joke, JokeType } from '@/types/joke.types'

const BASE_URL = 'https://official-joke-api.appspot.com'

export const fetchRandomJokes = async (): Promise<Joke[]> => {
  const { data } = await axios.get(`${BASE_URL}/jokes/random/10`)
  return data
}

export const fetchJokesByType = async (type: JokeType): Promise<Joke[]> => {
  const { data } = await axios.get(`${BASE_URL}/jokes/${type}/ten`)
  return data
}
