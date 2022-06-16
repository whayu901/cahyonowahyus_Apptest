import Snackbar from "react-native-snackbar";

import { COLORS, FONTS } from "../../../config";

interface Props {
  errorText: string;
  type?: "success" | "error";
}

export const SnackBar = ({ errorText, type = "error" }: Props) => {
  setTimeout(() => {
    Snackbar.show({
      text: errorText,
      textColor: COLORS.white.main,
      // fontFamily: FONTS.GothamMedium,
      duration: Snackbar.LENGTH_INDEFINITE,
      backgroundColor:
        type === "success" ? COLORS.green.main : COLORS.red.lighter,
      action: {
        text: "OK",
        textColor: "white",
        onPress: () => {
          Snackbar.dismiss();
        },
      },
    });
  }, 500);
};
