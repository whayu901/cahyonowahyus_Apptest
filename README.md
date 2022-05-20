# RGA Test CRUD Contact App

MailBook is a contact organizer application. You can store various info about your contact. Easily maintainable, there are features like search contact, contact detail, create a new contact, delete contact, and update an existing contact.

## Demo

Screen List Contact

![Screenshot_1652885560](https://user-images.githubusercontent.com/32776398/169071670-c31aaa2d-4d11-4974-82f7-04c7c9820e73.png)

Screen Detail Contact

![Screenshot_1652885578](https://user-images.githubusercontent.com/32776398/169080780-70f3dcc1-d3d3-4fc6-8129-ced17997156d.png)

Screen Update Contact

![Screenshot_1652885581](https://user-images.githubusercontent.com/32776398/169081085-8a9dace8-4246-4700-a79b-0e4a700c61c4.png)

Screen Add Contact

![Screenshot_1652885572](https://user-images.githubusercontent.com/32776398/169081481-6ac1c868-c888-4c2a-9f67-6ce5f3add9fe.png)

Delete Contact

![Screenshot_1652885587](https://user-images.githubusercontent.com/32776398/169081807-e319658d-ed96-4137-9250-dfbe6aa677b4.png)

### Installation

Clone this [repo](https://github.com/whayu901/mobile-test) then open the directory with your terminal by executing

```
git clone https://github.com/whayu901/mobile-test.git
```

```
cd mobile-test
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
