import { StyleSheet, Platform } from "react-native";

import { COLORS } from "../../config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageProfile: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  header: {
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Platform.OS === "ios" ? 150 : 120,
    backgroundColor: COLORS.blue.main,
    zIndex: 1000,
    elevation: 1000,
    paddingTop: Platform.OS === "ios" ? 45 : 20,
  },
});

export default styles;
