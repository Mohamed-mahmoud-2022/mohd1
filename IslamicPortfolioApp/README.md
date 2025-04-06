# Islamic Portfolio App

## Overview
The Islamic Portfolio App is a mobile application designed to help users manage their investment portfolios in accordance with Islamic finance principles. The app provides features for tracking investments, calculating returns, and managing currency exchange rates.

## Project Structure
```
IslamicPortfolioApp
├── assets          # Directory for static assets (images, fonts, etc.)
├── components      # Directory for reusable components
├── contexts        # Directory for context providers
│   └── CurrencyContext.js  # Manages currency selection and exchange rates
├── screens         # Directory for application screens
│   ├── PortfolioScreen.js    # Displays investment portfolio distribution
│   ├── MonthlyTrackingScreen.js # Shows monthly investment tracking
│   ├── ReturnsScreen.js      # Calculates and displays annual returns
│   └── SettingsScreen.js     # Allows modification of currency exchange rates
├── App.js          # Entry point of the application
├── package.json    # npm configuration file
└── README.md       # Documentation for the project
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd IslamicPortfolioApp
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the App
To start the application, use the following command:
```
npm start
```
This will open the Expo DevTools in your browser. You can run the app on an Android emulator, iOS simulator, or a physical device by scanning the QR code.

## Features
- **Portfolio Distribution**: Visual representation of investment distribution using pie charts.
- **Monthly Tracking**: Bar charts to track monthly investment performance.
- **Returns Calculation**: Displays annual returns for different investment categories.
- **Currency Settings**: Allows users to modify and manage currency exchange rates.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.