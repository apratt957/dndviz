import React, { useContext, useState } from 'react';
import { StyleSheet, View, Dimensions, Picker } from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';
import { AppContext } from '../Context';

export default function Monsters() {
  const handleFilterChange = value => {
    setFilter(value);
  };
  const context = useContext(AppContext);
  const comparison = context.comparison;
  const { height, width } = Dimensions.get('window');
  const [filter, setFilter] = useState('Hit Points');

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Picker
          selectedValue={filter}
          onValueChange={handleFilterChange}
          style={{ height: 50, width: 100 }}
        >
          <Picker.Item label="Hit Points" value="Hit Points" />
          <Picker.Item label="Armor Class" value="Armor Class" />
        </Picker>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <VictoryChart
          width={width * 0.75}
          height={500}
          domainPadding={100}
          padding={{ bottom: 130, left: 35 }}
        >
          {filter === 'Hit Points' ? (
            <VictoryBar
              data={comparison}
              style={{ data: { fill: 'tomato' } }}
              animate={{
                duration: 1500,
                onLoad: { duration: 1000 }
              }}
              x="name"
              y="hit_points"
              alignment="end"
            />
          ) : (
            <VictoryBar
              data={comparison}
              style={{ data: { fill: 'pink' } }}
              animate={{
                duration: 1500,
                onLoad: { duration: 1000 }
              }}
              alignment="end"
              x="name"
              y="armor_class"
            />
          )}
          <VictoryAxis dependentAxis />
          <VictoryAxis
            style={{
              tickLabels: {
                angle: 90,
                padding: 50
              }
            }}
          />
        </VictoryChart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  }
});
