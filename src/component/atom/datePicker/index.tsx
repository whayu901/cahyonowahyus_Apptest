import React, { memo } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from "dayjs";

import { COLORS, TYPHOGRAPHY } from "../../../config";
import { RFPercentage } from "../../../utils";

interface Props {
  isDatePickerVisible: boolean;
  label: string;
  mode: "date" | "datetime" | "time";
  handleConfirm: (e: any) => void;
  hideDatePicker: () => void;
  openDatePicker: () => void;
  onBlur: any;
  isError: boolean;
}

const { width } = Dimensions.get("window");

const DatePickerGeneral = ({
  isDatePickerVisible,
  mode,
  handleConfirm,
  label,
  hideDatePicker,
  openDatePicker,
  onBlur,
  isError,
}: Props) => {
  return (
    <View>
      <View
        style={{
          top: 7,
          marginLeft: 10,
          zIndex: 1,
          alignSelf: "flex-start",
          paddingHorizontal: 5,
          backgroundColor: COLORS.grey.light,
        }}>
        <Text
          style={{
            fontSize: RFPercentage(3.2),
            color: isError
              ? COLORS.red.lighter
              : isDatePickerVisible
              ? COLORS.green.main
              : COLORS.black.lighter,
          }}>
          BirthDate
        </Text>
      </View>
      <TouchableOpacity
        onPress={openDatePicker}
        onBlur={onBlur}
        style={{
          width: "100%",
          height: RFPercentage(11),
          borderRadius: 10,
          backgroundColor: COLORS.grey.light,
          borderWidth: isDatePickerVisible ? 1.5 : 1,
          justifyContent: "center",
          borderColor: isError
            ? COLORS.red.lighter
            : isDatePickerVisible
            ? COLORS.green.main
            : COLORS.black.lighter,
        }}>
        <View
          style={{
            marginLeft: 15,
            marginRight: 15,
          }}>
          <Text
            style={{
              ...TYPHOGRAPHY.GothamRegular,
              color: isError
                ? COLORS.red.lighter
                : isDatePickerVisible
                ? COLORS.green.main
                : COLORS.black.main,
            }}>
            {label
              ? dayjs(label).format("DD MMMM YYYY")
              : dayjs().format("DD MMMM YYYY")}
          </Text>
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        locale="id"
        date={
          label
            ? new Date(Date.parse(dayjs(label).format("YYYY-MM-DD")))
            : new Date(
                Date.parse(dayjs().subtract(17, "years").format("YYYY-MM-DD")),
              )
        }
        mode={mode}
        minimumDate={
          new Date(
            Date.parse(dayjs().subtract(50, "years").format("YYYY-MM-DD")),
          )
        }
        maximumDate={
          label
            ? new Date(Date.parse(dayjs(label).format("YYYY-MM-DD")))
            : new Date(
                Date.parse(dayjs().subtract(17, "years").format("YYYY-MM-DD")),
              )
        }
        onConfirm={value => {
          handleConfirm(dayjs(value).format("YYYY-MM-DD"));
        }}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default memo(DatePickerGeneral);
