import { Platform, Dimensions, StatusBar } from "react-native";

const { height, width } = Dimensions.get("window");
const standardLength = width > height ? width : height;
const offset: any =
  width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight;

const deviceHeight =
  Platform.OS === "android" ? standardLength - offset : standardLength;

const RFPercentage = (percent: number) => {
  const heightPercent = (percent * deviceHeight) / 150;
  return Math.round(heightPercent);
};

export default RFPercentage;
