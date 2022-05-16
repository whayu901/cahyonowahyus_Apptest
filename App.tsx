import * as React from "react";
import { LogBox } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Navigator from "./src/navigation";
import { COLORS } from "./src/config";
import { persistor, store } from "./src/redux/store";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);
LogBox.ignoreAllLogs(true);

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.blue.main,
    accent: "#f1c40f",
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Navigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
