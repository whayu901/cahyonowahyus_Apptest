import { StyleSheet } from "react-native";

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
    zIndex: 1000,
  },
  header: {
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 70,
    backgroundColor: COLORS.blue.main,
    zIndex: 1000,
    elevation: 1000,
  },
});

export default styles;
