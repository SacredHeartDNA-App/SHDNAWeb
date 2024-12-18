import SHDNABlock from "../Components/SHDNABlock";
import SHDNAUserRow from "../Components/SHDNAUserRow";
import SHDNATag from "../Components/SHDNATag";
import { useSubview } from "../Components/Subview/SHDNASubviewContext";
import { View, Text, Image, StyleSheet } from "react-native";
import { graphql, useFragment } from "react-relay";
import SHDNANewsView from "../Views/SHDNANewsView";
import { Colors } from "../../assets/SHDNAColors";
import { SHDNANewsBlockFragment$key } from "./__generated__/SHDNANewsBlockFragment.graphql";
import SHDNAText from "./SHDNAText";
import { useSheet } from "./Sheet/SHDNASheetContext";

type SHDNANewsBlockProps = {
  SHDNANewsBlockKey: SHDNANewsBlockFragment$key;
};

const newsBlockBody = graphql`
  fragment SHDNANewsBlockFragment on News {
    cover
    title
    text
    user {
      ...SHDNAUserRow_Fragment
    }
    ...SHDNANewsView
  }
`;

const SHDNANewsBlock = ({ SHDNANewsBlockKey }: SHDNANewsBlockProps) => {
  const { openSheet } = useSheet();

  let newsBlockData = useFragment<SHDNANewsBlockFragment$key>(
    newsBlockBody,
    SHDNANewsBlockKey
  );

  return (
    <SHDNABlock
      style={{ width: "25%" }}
      onClick={() => {
        openSheet({
          content: (
            <SHDNANewsView
              newsKey={newsBlockData}
              user={newsBlockData.user}
              cover={newsBlockData.cover}
            />
          ),
          title: newsBlockData.title,
        });
      }}
    >
      <View>
        <Image
          style={styles.image}
          source={
            newsBlockData.cover
              ? { uri: newsBlockData.cover }
              : require("../../assets/PostPic.png")
          }
        />
        <View style={styles.bodyContainer}>
          <SHDNAText style={styles.title} fontWeight="SemiBold">
            {newsBlockData.title}
          </SHDNAText>
          <View style={styles.footer}>
            <SHDNAUserRow userKey={newsBlockData.user} />
            <SHDNATag title="SHDNA" backgroundColor={Colors.Red1} />
          </View>
        </View>
      </View>
    </SHDNABlock>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    aspectRatio: 2 / 1,
    borderRadius: 20,
  },
  bodyContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    paddingBottom: 8,
  },
  description: {
    fontSize: 13,
    paddingVertical: 8,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    flex: 1,
  },
});

export default SHDNANewsBlock;
