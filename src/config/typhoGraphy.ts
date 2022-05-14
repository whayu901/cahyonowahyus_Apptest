import React from "react";
import { StyleSheet } from "react-native";

import { RFPercentage } from "../utils";

import FONTS from "./fonts";

const typhoGraphy = StyleSheet.create({
  GothamLight: {
    fontFamily: FONTS.GothamLight,
    fontSize: RFPercentage(2.5),
  },
  GothamLightBold: {
    fontFamily: FONTS.GothamBold,
    fontSize: RFPercentage(2.5),
  },
  GothamRegular: {
    fontFamily: FONTS.GothamMedium,
    fontSize: RFPercentage(2.8),
  },
  GothamRegularBold: {
    fontFamily: FONTS.GothamBold,
    fontSize: RFPercentage(2.8),
  },
  GothamSemiLarge: {
    fontFamily: FONTS.GothamMedium,
    fontSize: RFPercentage(3.7),
  },
  GothamSemiLargeBold: {
    fontFamily: FONTS.GothamBold,
    fontSize: RFPercentage(3.7),
  },
  GothamLarge: {
    fontFamily: FONTS.GothamMedium,
    fontSize: RFPercentage(3.9),
  },
  GothamLargeBold: {
    fontFamily: FONTS.GothamBold,
    fontSize: RFPercentage(3.9),
  },
});

export default typhoGraphy;
