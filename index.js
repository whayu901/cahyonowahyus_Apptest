/**
 * @format
 */
import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import dayjs from "dayjs";

import App from "./App";
import { name as appName } from "./app.json";

var idLocale = require("dayjs/locale/id");
dayjs.locale(idLocale);

AppRegistry.registerComponent(appName, () => App);
