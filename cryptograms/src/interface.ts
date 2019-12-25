export interface GameLetter {
  value?: string;
  placeholder: string;
}

export interface GameWord {
  letters: GameLetter[];
}

export interface Game {
  words: GameWord[];
}
