import React from 'react';
import {Game, GameLetter, GameWord} from './interface';
import './CryptogramGameBoard.css';
import './shared.css';
import {Button} from '@material-ui/core';

interface GamePieceProps {
  letter: GameLetter;
}

export const GamePiece: React.FC<GamePieceProps> = ({letter}: GamePieceProps) => {
  return (
    <div className="game-piece">
      <input className="game-input" type="text"/>
      <span className="game-letter">{letter.placeholder}</span>
    </div>
  );
};

export const CryptogramGameBoard: React.FC<{ game: Game }> = () => {
  const words: GameWord[] = [
    {letters: [{placeholder: 'Q'}, {placeholder: 'B'}, {placeholder: 'C'}, {placeholder: 'D'}]},
    {letters: [{placeholder: 'A'}, {placeholder: 'B'}, {placeholder: 'C'}, {placeholder: 'D'}, {placeholder: 'E'}]},
    {letters: [{placeholder: 'T'}, {placeholder: 'R'}, {placeholder: 'O'}, {placeholder: 'W'}, {placeholder: 'M'}]},
    {letters: [{placeholder: 'R'}, {placeholder: 'S'}, {placeholder: 'Y'}]},
  ];

  return (
    <div className="game-board">
      <div className="game-pieces">
        {words.map(w => {
          return (
            <div className="game-word">
              {w.letters.map(l => {
                return (<GamePiece letter={l}/>);
              })
              }
            </div>
          );
        })}
      </div>
      <Button variant="contained" color="primary">Check</Button>
    </div>
  );
};
