import { View, Text, ScrollView, StyleSheet } from "react-native";

import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";

const Detail = (): JSX.Element => {
  return (
    <View>
      <Header />

      <View>
        <Text>買い物リスト</Text>
        <Text>2023年10月1日 10:00</Text>
      </View>

      <ScrollView>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          itaque molestiae officiis veritatis sunt praesentium maxime a velit
          suscipit ab perspiciatis, ipsum tenetur veniam voluptate, aspernatur
          modi, dolorum commodi repudiandae.
        </Text>
      </ScrollView>

      <CircleButton>+</CircleButton>
    </View>
  );
};

export default Detail;
