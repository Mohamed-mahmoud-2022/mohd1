import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { PieChart } from 'react-native-chart-kit';
import { CurrencyContext } from '../contexts/CurrencyContext';

const screenWidth = Dimensions.get('window').width;
const dataItems = [
  { key: '1', category: 'أسهم شرعية / صناديق مؤشرات', percent: 35, amount: 700 },
  { key: '2', category: 'صكوك إسلامية', percent: 30, amount: 600 },
  { key: '3', category: 'صناديق ريت إسلامية', percent: 25, amount: 500 },
  { key: '4', category: 'مرابحة / سيولة', percent: 10, amount: 200 },
];
const colors = ['#C6EFCE', '#D9E1F2', '#FCE4D6', '#E7E6E6'];

export default function PortfolioScreen({ navigation }) {
  const { selectedCurrency, setSelectedCurrency, rates } = useContext(CurrencyContext);

  const chartData = dataItems.map((item, i) => ({
    name: item.category,
    population: item.percent,
    color: colors[i],
    legendFontColor: '#7F7F7F',
    legendFontSize: 12
  }));

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedCurrency}
        onValueChange={setSelectedCurrency}
        style={styles.picker}
      >
        {Object.keys(rates).map(code => (
          <Picker.Item key={code} label={code} value={code} />
        ))}
      </Picker>

      <FlatList
        data={dataItems}
        keyExtractor={i => i.key}
        ListHeaderComponent={() => (
          <View style={styles.headerRow}>
            <Text style={[styles.cell, { flex: 3 }]}>الفئة</Text>
            <Text style={styles.cell}>%</Text>
            <Text style={styles.cell}>المبلغ</Text>
            <Text style={styles.cell}>بـ{selectedCurrency}</Text>
          </View>
        )}
        renderItem={({ item, index }) => {
          const converted = (item.amount / rates[selectedCurrency]).toFixed(2);
          return (
            <View style={styles.row}>
              <Text style={[styles.cell, { flex: 3 }]}>{item.category}</Text>
              <Text style={styles.cell}>{item.percent}%</Text>
              <Text style={styles.cell}>{item.amount}</Text>
              <Text style={styles.cell}>{converted}</Text>
            </View>
          );
        }}
      />

      <PieChart
        data={chartData}
        width={screenWidth}
        height={220}
        chartConfig={{ color: (opacity = 1) => `rgba(0,0,0,${opacity})` }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>إعدادات العملة</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  picker: { height: 50, width: 150, alignSelf: 'flex-end' },
  headerRow: { flexDirection: 'row', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 8 },
  row: { flexDirection: 'row', paddingVertical: 8 },
  cell: { flex: 1, textAlign: 'center' },
  button: { marginTop: 16, backgroundColor: '#007AFF', padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center' },
});