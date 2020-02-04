import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AppContext } from '../Context';

export default function SingleMonster(props) {
  const monster = props.navigation.state.params.monster;
  const { addToComparison } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 20 }}>
        {monster.name}
      </Text>
      <Text>
        {monster.type} {monster.subtype}
      </Text>
      <Button title="Compare" onPress={() => addToComparison(monster)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 10
  }
});
