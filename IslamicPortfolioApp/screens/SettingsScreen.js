import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { CurrencyContext } from '../contexts/CurrencyContext';

export default function SettingsScreen() {
  const { rates, setRates } = useContext(CurrencyContext);
  const [localRates, setLocalRates] = useState(rates);

  const save = () => setRates(localRates);

  return (
    <View style={styles.container}>
      {Object.entries(localRates).map(([code, value]) => (
        <View key={code} style={styles.row}>
          <Text style={styles.label}>{code}</Text>
          <TextInput
            style={styles.input}
            value={String(value)}
            keyboardType="numeric"
            onChangeText={t => setLocalRates({ ...localRates, [code]: parseFloat(t) || 0 })}
          />
        </View>
      ))}
      <Button title="حفظ" onPress={save} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  label: { flex: 1, fontSize: 16 },
  input: { flex: 2, borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 4 },
});