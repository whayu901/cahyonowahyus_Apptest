import React, { memo } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { COLORS, TYPHOGRAPHY } from "../../../config";

interface Props {
  onPress: () => void;
  data?: any;
}

const CardListContact = ({ onPress, data }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.containerCardList}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Image
            style={styles.imageProfile}
            source={{
              uri: data?.photo,
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{ marginLeft: 15 }}>
          <Text style={{ ...TYPHOGRAPHY.GothamSemiLargeBold }}>
            {data?.name}
          </Text>
          <Text style={{ ...TYPHOGRAPHY.GothamLight }}>{data?.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerCardList: {
    backgroundColor: COLORS.white.main,
    borderRadius: 10,
    shadowColor: COLORS.black.main,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    padding: 10,
    zIndex: 1,
  },
  imageProfile: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});

export default memo(CardListContact);
