import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;
const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
const sampleTotals = [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100];

export default function MonthlyTrackingScreen() {
  const data = { labels: months, datasets: [{ data: sampleTotals }] };

  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0,122,255,${opacity})`
        }}
        style={{ marginVertical: 8 }}
      />
      <FlatList
        data={months.map((m, i) => ({ key: String(i), month: m, total: sampleTotals[i] }))}
        keyExtractor={i => i.key}
        ListHeaderComponent={() => (
          <View style={styles.headerRow}>
            <Text style={[styles.cell, { flex: 2 }]}>الشهر</Text>
            <Text style={styles.cell}>الإجمالي</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={[styles.cell, { flex: 2 }]}>{item.month}</Text>
            <Text style={styles.cell}>{item.total}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  headerRow: { flexDirection: 'row', borderBottomWidth: 1, paddingBottom: 8 },
  row: { flexDirection: 'row', paddingVertical: 8 },
  cell: { flex: 1, textAlign: 'center' },
});