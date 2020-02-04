import React, { useContext } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { AppContext } from '../Context';
import SingleMonsterCard from './SingleMonsterCard';

export default function Monsters(props) {
  const context = useContext(AppContext);
  const monsters = context.monsters;

  return (
    <View style={styles.container}>
      {monsters.map(monster => {
        return <SingleMonsterCard key={monster.slug} monster={monster} />;
      })}
      <Button
        title="See Comparison"
        onPress={() => props.navigation.navigate('Comparison')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
