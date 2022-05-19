import React, { useState, memo } from "react";
import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS, FONTS, TYPHOGRAPHY } from "../../../config";
import { RFPercentage } from "../../../utils";

type keyboardType = "number-pad" | "email-address" | "default";
interface Props {
  label: string;
  placeholder?: string;
  isPassword?: boolean;
  onChangeText?: (e: any) => void;
  value?: any;
  keyboardType?: keyboardType;
  enabled?: boolean;
  backgroundColor?: string;
  maxLength?: any;
  multiline?: boolean;
  isError?: any;
  onEndEditing?: () => void;
  onBlur?: any;
  height?: any;
  autoCapitlize?: "characters" | "none";
}

const Input = ({
  label,
  isPassword,
  keyboardType = "default",
  placeholder,
  enabled = true,
  onChangeText,
  onEndEditing,
  value,
  multiline,
  height,
  onBlur,
  isError,
  maxLength,
  autoCapitlize = "none",
  backgroundColor = COLORS.grey.light,
}: Props) => {
  const [secure, setSecure] = useState(true);
  const [focus, setFocus] = useState(false);

  return (
    <View>
      <View
        style={{
          top: 7,
          marginLeft: 10,
          zIndex: 1,
          alignSelf: "flex-start",
          paddingHorizontal: 5,
          backgroundColor: backgroundColor,
        }}>
        <Text
          style={{
            fontSize: RFPercentage(3.2),
            color: isError
              ? COLORS.red.lighter
              : focus
              ? COLORS.green.main
              : COLORS.black.lighter,
          }}>
          {label}
        </Text>
      </View>

      <View
        style={{
          borderRadius: RFPercentage(2),
          backgroundColor: backgroundColor,
          borderWidth: 1,
          borderColor: isError
            ? COLORS.red.lighter
            : focus
            ? COLORS.green.main
            : COLORS.black.lighter,
        }}>
        <View
          style={{
            height: height ? height : RFPercentage(11),
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}>
          <TextInput
            onChangeText={onChangeText}
            editable={enabled}
            onEndEditing={onEndEditing}
            autoCapitalize={autoCapitlize}
            maxLength={maxLength}
            value={value}
            multiline={multiline}
            onFocus={() => setFocus(true)}
            onBlur={() => {
              setFocus(false);
              onBlur;
            }}
            placeholder={placeholder}
            placeholderTextColor={COLORS.black.lighter}
            keyboardType={keyboardType}
            secureTextEntry={isPassword && secure}
            style={{
              fontSize: RFPercentage(3.2),
              marginHorizontal: 15,
              color: !enabled ? COLORS.black.lighter : COLORS.black.main,
              height: height,
              flex: 1,
              fontFamily: FONTS.GothamMedium,
              textAlignVertical: height ? "top" : "auto",
            }}
          />

          {/* use for password eye */}
          {isPassword && (
            <Icon
              name={secure ? "eye" : "eye-off"}
              size={RFPercentage(5)}
              color={COLORS.black.main}
              onPress={() => setSecure(!secure)}
              style={{ marginRight: RFPercentage(2) }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default memo(Input);
