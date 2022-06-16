# JENIUS Test CRUD Contact App

MailBook is a contact organizer application. You can store various info about your contact. Easily maintainable, there are features like search contact, contact detail, create a new contact, delete contact, and update an existing contact.

## Demo

Screen List Contact

![Screenshot_1655398302](https://user-images.githubusercontent.com/32776398/174125109-25b074b5-aa81-4bdc-a9b2-12c4950c1a25.png)

Screen Detail Contact

![Screenshot_1655398312](https://user-images.githubusercontent.com/32776398/174125180-30c135ec-6363-4989-aaf0-0c3ae4c84704.png)

Screen Update & Delete Contact

![Screenshot_1655398299](https://user-images.githubusercontent.com/32776398/174136014-bc5887a9-96ed-4149-8e10-ebdde39a6b56.png)

Screen Add Contact

![Screenshot_1655398305](https://user-images.githubusercontent.com/32776398/174125317-0e97f3f5-d873-451a-9005-978f6453c688.png)

### Installation

Clone this [repo](https://github.com/whayu901/cahyonowahyus_Apptest.git) then open the directory with your terminal by executing

```
git clone https://github.com/whayu901/cahyonowahyus_Apptest.git
```

```
cd cahyonowahyus_Apptest
```

Install all the packages

```
yarn install
```

If you want to run in iOS and you are using Mac OS, please execute pod

```
npx pod-install
```

[Run](https://reactnative.dev/docs/running-on-device) the application on your device or use an [iOS simulator](https://reactnative.dev/docs/running-on-simulator-ios)

### Generate Android Debug APK

Developer who runs in a Windows operating system could use this command

```
yarn assembleDebug
```

For Mac OS simply run

```
yarn assembleDebugIos
```

The generated app would be stored in

```
mobile-test/android/app/build/outputs/apk/debug/app-debug.apk
```

## Library that used

### @react-navigation/native

requires

```
yarn add @react-navigation/stack react-native-gesture-handler react-native-safe-area-context react-native-screens
```

Manage application's navigation between screens.

### axios

Manage API calls and handles its responses.

## redux-persist & redux & react-redux

requires

```
@react-native-async-storage/async-storage redux react-redux
```

Persist storage data in local storage and state management data

### react-native-image-picker

Use native image picker on each platforms. i am using launch gallery for take photo.

### formik & yup

Helps to maintain text input abilities to manage user's inputs. and created rules for form inputs.

### react-native-modal-datetime-picker

requires

```
@react-native-community/datetimepicker react-native-modal-datetime-picker
```

Provides date picker in native version on each platform.

### react-native-skeleton-placeholder

requires

```
react-native-skeleton-placeholder
```

Display skeleton loading.

### lottie-react-native & lottie-ios

requires

```
lottie-react-native  lottie-ios
```

Display animation content for loading, warning, success.

## Future Updates

Going to make automated testing with jest and detox.
