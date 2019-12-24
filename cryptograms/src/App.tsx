import React, {useReducer} from 'react';
import './App.css';
import {Game} from './interface';
import {TitleBar} from './TitleBar';
import {CryptogramGameBoard} from './CryptogramGameBoard';
import {HelpSection} from './HelpSection';

type GameAction = 'reset' | 'hint' | 'newGame';

function gameReducer(state: Game, action: GameAction): Game {
  // TODO
  return state;
}

const App: React.FC = () => {
  const [game, dispatch] = useReducer<(game: Game, action: GameAction) => Game>(gameReducer, {words: []});

  return (
    <div>
      <TitleBar/>
      <CryptogramGameBoard game={game}/>
      <HelpSection
        resetClicked={() => dispatch('reset')}
        hintClicked={() => dispatch('hint')}
        newGameClicked={() => dispatch('newGame')}/>
    </div>
  );
};

export default App;
