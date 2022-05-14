import * as React from "react";
import { View, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import { TYPHOGRAPHY } from "./src/config";

export default function Main() {
  return (
    <PaperProvider>
      <View>
        <Text style={{ ...TYPHOGRAPHY.GothamRegular }}>Hello world</Text>
      </View>
    </PaperProvider>
  );
}
