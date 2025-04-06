import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const returnsData = [
  { key: '1', category: 'أسهم شرعية', amount: 700, rate: 0.09 },
  { key: '2', category: 'صكوك إسلامية', amount: 600, rate: 0.045 },
  { key: '3', category: 'صناديق ريت إسلامية', amount: 500, rate: 0.055 },
  { key: '4', category: 'مرابحة / سيولة', amount: 200, rate: 0.025 },
];

export default function ReturnsScreen() {
  const totalReturn = returnsData.reduce((sum, i) => sum + i.amount * i.rate, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={returnsData}
        keyExtractor={i => i.key}
        ListHeaderComponent={() => (
          <View style={styles.headerRow}>
            <Text style={[styles.cell, { flex: 3 }]}>الفئة</Text>
            <Text style={styles.cell}>المبلغ</Text>
            <Text style={styles.cell}>%</Text>
            <Text style={styles.cell}>العائد</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={[styles.cell, { flex: 3 }]}>{item.category}</Text>
            <Text style={styles.cell}>{item.amount}</Text>
            <Text style={styles.cell}>{(item.rate * 100).toFixed(1)}%</Text>
            <Text style={styles.cell}>{(item.amount * item.rate).toFixed(2)}</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={[styles.row, { borderTopWidth: 1, marginTop: 8 }]}>
            <Text style={[styles.cell, { flex: 3 }]}>الإجمالي</Text>
            <Text style={styles.cell}></Text>
            <Text style={styles.cell}></Text>
            <Text style={styles.cell}>{totalReturn.toFixed(2)}</Text>
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