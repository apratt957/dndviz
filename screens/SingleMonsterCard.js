import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

function SingleMonsterCard(props) {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>{props.monster.name}</Text>

      <Button
        title="Monster Details"
        onPress={() =>
          props.navigation.navigate('SingleMonster', { monster: props.monster })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 3,
    marginVertical: 10,
    padding: 3
  }
});

export default withNavigation(SingleMonsterCard);
