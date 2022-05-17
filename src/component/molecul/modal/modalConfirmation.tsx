import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import LottieView from "lottie-react-native";
import { Button } from "react-native-paper";

import { COLORS, TYPHOGRAPHY } from "../../../config";
import MyLottie from "../../../../assets/lottie";

interface Props {
  isVisible: boolean;
  message?: string;
  typeButton: "contained" | "outlined";
  typeError?: "location" | "general";
  textButton?: string;
  textButtonNegatif?: string;
  onDismis?: () => void;
  onDismissNegatif?: () => void;
  color?: string;
  isConfirmation?: boolean;
  textColor?: string;
}

const ModalError = ({
  isVisible,
  message,
  typeButton,
  textButton,
  textButtonNegatif,
  onDismis,
  onDismissNegatif,
  typeError = "general",
  color,
  isConfirmation,
  textColor,
}: Props) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      useNativeDriver={true}>
      <View style={style.containerModal}>
        <View style={style.insideModal}>
          <LottieView
            source={
              typeError === "location"
                ? MyLottie.locationRequired
                : MyLottie.error
            }
            style={{ height: 120, width: 120, alignSelf: "center" }}
            autoPlay
            loop
          />
          <View style={{ marginTop: 10 }}>
            <Text style={{ ...TYPHOGRAPHY.GothamRegular, textAlign: "center" }}>
              {message}
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: isConfirmation ? "row" : "column",
              justifyContent: "space-between",
            }}>
            <>
              <View style={{ width: "45%", marginRight: 10 }}>
                <Button
                  mode="outlined"
                  onPress={onDismissNegatif}
                  color={COLORS.red.main}>
                  {textButtonNegatif}
                </Button>
              </View>
              <View style={{ width: "45%" }}>
                <Button
                  color={COLORS.red.main}
                  mode="contained"
                  onPress={onDismis}>
                  <Text style={{ color: COLORS.white.main }}>{textButton}</Text>
                </Button>
              </View>
            </>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  containerModal: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  insideModal: {
    backgroundColor: COLORS.white.main,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
  },
});

export default memo(ModalError);
