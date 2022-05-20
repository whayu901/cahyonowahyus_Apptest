import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import LottieView from "lottie-react-native";
import { Button } from "react-native-paper";

import { COLORS, TYPHOGRAPHY } from "../../../config";
import MyLottie from "../../../../assets/lottie";
import { RFPercentage } from "../../../utils";

interface Props {
  isVisible: boolean;
  message?: string;
  onDismis?: () => void;
  textButton: string;
}

const ModalSuccess = ({ isVisible, message, onDismis, textButton }: Props) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      useNativeDriver={true}>
      <View style={style.containerModal}>
        <View style={style.insideModal}>
          <LottieView
            source={MyLottie.successCheck}
            style={{ height: 120, width: 120, alignSelf: "center" }}
            autoPlay
            loop
          />
          <View style={{ marginTop: 10 }}>
            <Text style={{ ...TYPHOGRAPHY.GothamRegular, textAlign: "center" }}>
              {message}
            </Text>
          </View>
          <View style={{ marginTop: RFPercentage(12) }}>
            <Button
              mode="contained"
              onPress={onDismis}
              color={COLORS.green.main}>
              <Text style={{ color: COLORS.white.main }}>{textButton}</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  containerModal: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: "90%",
  },
  insideModal: {
    backgroundColor: COLORS.white.main,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    width: "70%",
  },
});

export default memo(ModalSuccess);
