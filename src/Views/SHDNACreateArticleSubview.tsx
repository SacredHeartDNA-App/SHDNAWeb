import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import SHDNAText from "../Components/SHDNAText";
import SHDNATextInput from "../Components/SHDNATextInput";
import SHDNATextArea from "../Components/SHDNATextArea";
import SHDNAUploadFile, {
  useSHDNAFilePicker,
} from "../Components/SHDNAUploadFile";
import SHDNATextList from "../Components/SHDNATextList";
import SHDNAButton, { ButtonStates } from "../Components/SHDNAButton";
import SHDNAImage from "../Components/SHDNAImage";
import { MediaType, tranformImagesToMediaType } from "./SHDNACreatePostView";
import { Colors } from "@/assets/SHDNAColors";
import { graphql, useMutation } from "react-relay";
import { useFloatingView } from "../Components/FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "./SHDNALoadingBlackView";
import { SHDNACreateArticleSubviewMutation } from "./__generated__/SHDNACreateArticleSubviewMutation.graphql";
import { useSheet } from "../Components/Sheet/SHDNASheetContext";

export default function SHDNACreateArticleSubview({ refetch }: any) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [cover, setCover] = useState<MediaType>();
  const [media, setMedia] = useState<MediaType[]>([]);
  const [extLinks, setExtLinks] = useState<string[]>([]);

  const selectFiles = useSHDNAFilePicker(
    (cover: MediaType[]) => setCover(cover[0]),
    false,
    ["image/jpeg", "image/png"]
  );

  const { openFloatingView, closeFloatingView } = useFloatingView();
  const { closeSheet } = useSheet();

  const [commitMutation] =
    useMutation<SHDNACreateArticleSubviewMutation>(graphql`
      mutation SHDNACreateArticleSubviewMutation($input: CreateNewsInput!) {
        createArticle(input: $input)
      }
    `);

  const handleSubmit = () => {
    openFloatingView(<SHDNALoadingBlackView />);
    if (cover === undefined) return;

    const newsInput = {
      title,
      text,
      cover: {
        ...cover,
        uri: "./" + cover.fileName,
        base64: cover.base64.replace(/^data:image\/\w+;base64,/, ""),
      },
      media: media.map((item) => {
        return {
          ...item,
          uri: "./" + item.fileName,
          base64: item.base64.replace(/^data:image\/\w+;base64,/, ""),
        };
      }),
      extLinks,
    };

    commitMutation({
      variables: { input: newsInput },
      onCompleted() {
        closeFloatingView();
        closeSheet();
        refetch();
      },
      onError: (error) => {
        closeFloatingView();
      },
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={[styles.section, { height: 70 }]}>
        <SHDNAText style={styles.text} fontWeight="SemiBold">
          Title:
        </SHDNAText>
        <SHDNATextInput value={title} onChange={setTitle} placeholder="Title" />
      </View>
      <View style={[styles.section, { height: "auto" }]}>
        <SHDNAText style={styles.text} fontWeight="SemiBold">
          Text:
        </SHDNAText>
        <SHDNATextArea
          value={text}
          onChange={setText}
          placeholder="Type something..."
          height={400}
        />
      </View>
      <View style={[styles.section]}>
        <SHDNAText style={styles.text} fontWeight="SemiBold">
          Select a Cover:
        </SHDNAText>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            width: "100%",
            gap: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {cover?.uri ? (
            <SHDNAImage
              style={{ width: 250, height: 150 }}
              source={{ uri: cover?.uri }}
              width={250}
              height={150}
            />
          ) : (
            <View style={styles.noCover}>
              <SHDNAText>No Cover Selected</SHDNAText>
            </View>
          )}
          <View
            style={{
              width: 250,
            }}
          >
            <SHDNAButton onClick={() => selectFiles()} text="Select Photo" />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <SHDNAText style={styles.text} fontWeight="SemiBold">
          Media:
        </SHDNAText>
        <SHDNAUploadFile
          selectedFiles={media}
          onSelectFiles={(media: MediaType[]) => setMedia(media)}
        />
      </View>
      <View style={styles.section}>
        <SHDNAText style={styles.text} fontWeight="SemiBold">
          External Links:
        </SHDNAText>
        <SHDNATextList items={extLinks} setItems={setExtLinks} />
      </View>
      <SHDNAButton
        onClick={() => handleSubmit()}
        text="Post"
        state={ButtonStates.DEFAULT}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 10,
  },
  wrapper: { paddingVertical: 25, gap: 40 },
  text: { fontSize: 18 },
  noCover: {
    width: 250,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.Gray2,
  },
});
