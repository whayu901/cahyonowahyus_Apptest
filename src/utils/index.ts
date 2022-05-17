import { Platform } from "react-native";

import RFPercentage from "./RFPercentage";
import { isIphoneX } from "./notchDetect";

export const IS_ANDROID = Platform.OS === "android";

export { RFPercentage, isIphoneX };
