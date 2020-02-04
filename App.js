import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ContextProvider from './Context';
import Monsters from './screens/Monsters';
import SingleMonster from './screens/SingleMonster';
import Comparison from './screens/Comparison';

export const GameStack = createStackNavigator({
  Monsters: Monsters,
  SingleMonster: SingleMonster,
  Comparison: Comparison
});
const AppContainer = createAppContainer(GameStack);

export default class App extends React.Component {
  render() {
    return (
      <ContextProvider>
        <AppContainer />
      </ContextProvider>
    );
  }
}
