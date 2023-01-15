import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  StyleSheet,
} from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "./../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={styles.detailsHeaderView}>
    <Image source={data.image} resizeMode="cover" style={styles.detailsImage} />
    <CircleButton
      imgUrl={assets.left}
      top={StatusBar.currentHeight + 8}
      left={8}
      handlePress={() => navigation.goBack()}
    />
    <CircleButton
      imgUrl={assets.heart}
      top={StatusBar.currentHeight + 8}
      right={8}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={styles.rectView}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text style={styles.bidTitleText}>Current Bids</Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bidTitleText: {
    fontSize: SIZES.font,
    Color: COLORS.primary,
  },
  contentContainerStyle: {
    paddingBottom: SIZES.extraLarge * 3,
  },
  detailsHeaderView: {
    width: "100%",
    height: 373,
  },
  detailsImage: {
    width: "100%",
    height: "100%",
  },
  rectView: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
});

export default Details;
