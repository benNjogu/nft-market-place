import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  const handlePress = () => {
    if (!readMore) {
      setText(data.description);
      setReadMore(true);
    } else {
      setText(data.description.slice(0, 100));
      setReadMore(false);
    }
  };

  return (
    <>
      <View style={styles.titleView}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={styles.descView}>
        <Text style={styles.descText}>Description</Text>
        <View style={styles.actualDescView}>
          <Text style={styles.actualDescText}>
            {text} {!readMore && "..."}
            <Text style={styles.readMoreText} onPress={handlePress}>
              {readMore ? "Show Less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  actualDescText: {
    fontSize: SIZES.small,
    color: COLORS.secondary,
    lineHeight: SIZES.large,
  },
  actualDescView: {
    marginTop: SIZES.base,
  },
  descView: {
    marginVertical: SIZES.extraLarge * 1.5,
  },
  descText: {
    fontSize: SIZES.font,
    color: COLORS.primary,
  },
  readMoreText: {
    fontSize: SIZES.small,
    color: "#000",
    fontWeight: "bold",
  },
  titleView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default DetailsDesc;
