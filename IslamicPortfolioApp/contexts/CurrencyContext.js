import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();

const defaultRates = {
  KWD: 1,
  USD: 0.31,
  EUR: 0.33,
  SAR: 0.082,
};

export function CurrencyProvider({ children }) {
  const [selectedCurrency, setSelectedCurrency] = useState('KWD');
  const [rates, setRates] = useState(defaultRates);

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, rates, setSelectedCurrency, setRates }}>
      {children}
    </CurrencyContext.Provider>
  );
}