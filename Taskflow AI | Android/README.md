# Taskflow AI - React Native

A mobile application for Taskflow AI, built with React Native and Firebase Authentication.

## Features

- User authentication (Email/Password, Google, GitHub)
- Password reset functionality
- Modern UI with smooth animations
- Cross-platform (iOS & Android)

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- Firebase account

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/taskflow-ai-rn.git
   cd taskflow-ai-rn
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Firebase**
   - Create a new project in the [Firebase Console](https://console.firebase.google.com/)
   - Enable Email/Password authentication
   - Set up Google and GitHub authentication (optional)
   - Create a web app in Firebase and copy the configuration
   - Update the `firebaseConfig.js` file with your Firebase configuration

4. **Run the app**
   - For iOS:
     ```bash
     cd ios && pod install && cd ..
     npx react-native run-ios
     ```
   - For Android:
     ```bash
     npx react-native run-android
     ```
   - Using Expo Go (development):
     ```bash
     npx expo start
     ```
     Then scan the QR code with your phone using the Expo Go app.

## Project Structure

- `/src` - Source code
  - `/screens` - App screens
  - `/components` - Reusable components
  - `/navigation` - Navigation configuration
  - `/services` - API and service integrations
  - `/utils` - Utility functions
  - `/assets` - Images, fonts, and other static assets
  - `/context` - React context providers
  - `/hooks` - Custom React hooks

## Dependencies

- React Navigation
- React Native Firebase
- React Native Vector Icons
- React Native Reanimated
- React Native Gesture Handler
- React Native Safe Area Context

## Contributing

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
