import React from "react";
import { StyleSheet } from "react-native";

import { RFPercentage } from "../utils";

import FONTS from "./fonts";
import COLORS from "./colors";

const typhoGraphy = StyleSheet.create({
  GothamLight: {
    fontFamily: FONTS.GothamLight,
    fontSize: RFPercentage(2.5),
    color: COLORS.black.main,
  },
  GothamLightBold: {
    fontFamily: FONTS.GothamBold,
    fontSize: RFPercentage(2.5),
    color: COLORS.black.main,
  },
  GothamRegular: {
    fontFamily: FONTS.GothamMedium,
    fontSize: RFPercentage(2.8),
    color: COLORS.black.main,
  },
  GothamRegularBold: {
    fontFamily: FONTS.GothamBold,
    fontSize: RFPercentage(2.8),
    color: COLORS.black.main,
  },
  GothamSemiLarge: {
    fontFamily: FONTS.GothamMedium,
    fontSize: RFPercentage(3.7),
    color: COLORS.black.main,
  },
  GothamSemiLargeBold: {
    fontFamily: FONTS.GothamBold,
    fontSize: RFPercentage(3.7),
    color: COLORS.black.main,
  },
  GothamLarge: {
    fontFamily: FONTS.GothamMedium,
    fontSize: RFPercentage(4.2),
    color: COLORS.black.main,
  },
  GothamLargeBold: {
    fontFamily: FONTS.GothamBold,
    fontSize: RFPercentage(4.2),
    color: COLORS.black.main,
  },
});

export default typhoGraphy;
