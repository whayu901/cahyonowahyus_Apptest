import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import ListContact from "../screen/ListContact";
import AddContact from "../screen/AddContact";
import UpdateContact from "../screen/UpdateContact";

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator
    initialRouteName="ListContact"
    screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
    <Stack.Screen
      name="ListContact"
      options={{ headerShown: false }}
      component={ListContact}
    />
    <Stack.Screen
      name="AddContact"
      options={{ headerShown: false }}
      component={AddContact}
    />
    <Stack.Screen
      name="UpdateContact"
      options={{ headerShown: false }}
      component={UpdateContact}
    />
  </Stack.Navigator>
);

export default MainStack;
