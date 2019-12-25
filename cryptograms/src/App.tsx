import React, {Reducer, useReducer} from 'react';
import './App.css';
import {Game} from './interface';
import {TitleBar} from './TitleBar';
import {CryptogramGameBoard} from './CryptogramGameBoard';
import {HelpSection} from './HelpSection';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

type GameAction = 'reset' | 'hint' | 'newGame';

function gameReducer(state: Game, action: GameAction): Game {
  return state;
}

const App: React.FC = () => {
  const [game, dispatch] = useReducer<Reducer<Game, GameAction>>(gameReducer, {words: []});
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#26C6DA',
        contrastText: '#FFF'
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <TitleBar/>
      <CryptogramGameBoard game={game}/>
      <HelpSection
        resetClicked={() => dispatch('reset')}
        hintClicked={() => dispatch('hint')}
        newGameClicked={() => dispatch('newGame')}/>
    </MuiThemeProvider>
  );
};

export default App;
