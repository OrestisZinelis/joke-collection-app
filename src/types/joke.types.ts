export type Joke = {
  id: number
  type: string
  setup: string
  punchline: string
  rating?: number
}

export type JokeType = 'random' | 'programming'
