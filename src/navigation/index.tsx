import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainStack from "./mainStack";

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigator;
