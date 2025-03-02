import { View, Text, ScrollView, StyleSheet } from "react-native";

import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router } from "expo-router";

const handlePress = (): void => {
  router.push("/memo/edit")
}

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2023年10月1日 10:00</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          itaque molestiae officiis veritatis sunt praesentium maxime a velit
          suscipit ab perspiciatis, ipsum tenetur veniam voluptate, aspernatur
          modi, dolorum commodi repudiandae.
        </Text>
      </ScrollView>

      <CircleButton onPress={handlePress} style={{ top: 160, bottom: "auto" }}>
        <Icon name="pencil" size={40} color="#fff" />
      </CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
  },
  memoDate: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
  },
});

export default Detail;
