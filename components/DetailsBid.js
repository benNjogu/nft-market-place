import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsBid = ({ bid }) => {
  return (
    <View style={styles.detailsView}>
      <Image source={bid.image} resizeMode="contain" style={styles.image} />
      <View>
        <Text style={styles.bidPlacerText}>Bid placed by {bid.name}</Text>
        <Text style={styles.bidDateText}>{bid.date}</Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  );
};

const styles = StyleSheet.create({
  bidPlacerText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  bidDateText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    color: COLORS.secondary,
    marginTop: 3,
  },
  detailsView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 2,
  },
  image: {
    width: 48,
    height: 48,
  },
});

export default DetailsBid;
