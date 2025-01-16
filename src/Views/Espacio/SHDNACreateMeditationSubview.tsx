import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import SHDNAText from "@/src/Components/SHDNAText";
import SHDNAButton, { ButtonStates } from "@/src/Components/SHDNAButton";
import SHDNAUploadFile, {
  useSHDNAFilePicker,
} from "@/src/Components/SHDNAUploadFile";
import SHDNAImage from "@/src/Components/SHDNAImage";
import SHDNATextArea from "@/src/Components/SHDNATextArea";
import SHDNATextInput from "@/src/Components/SHDNATextInput";
import { MediaType } from "../SHDNACreatePostView";
import { Colors } from "@/assets/SHDNAColors";
import { graphql, useMutation } from "react-relay";
import { SHDNACreateMeditationSubviewMutation } from "./__generated__/SHDNACreateMeditationSubviewMutation.graphql";
import { useFloatingView } from "@/src/Components/FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "../SHDNALoadingBlackView";
import { useSheet } from "@/src/Components/Sheet/SHDNASheetContext";

export default function SHDNACreateMeditationSubview() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState<MediaType>();
  const [cover, setCover] = useState<MediaType>();

  const selectFiles = useSHDNAFilePicker(
    (cover: MediaType[]) => setCover(cover[0]),
    false,
    ["image/jpeg", "image/png"]
  );

  const [commitMutation] = useMutation<SHDNACreateMeditationSubviewMutation>(
    graphql`
      mutation SHDNACreateMeditationSubviewMutation(
        $input: CreateMeditationInput!
      ) {
        createNewMeditation(input: $input)
      }
    `
  );

  const { openFloatingView, closeFloatingView } = useFloatingView();
  const { triggerCloseSheet } = useSheet();

  const handleMutation = () => {
    if (!cover || !media) return;
    openFloatingView(<SHDNALoadingBlackView />, false);
    const meditationInput = {
      title,
      description,
      cover: {
        ...cover,
        uri: "./" + cover.fileName,
        base64: cover.base64.replace(/^data:image\/\w+;base64,/, ""),
      },
      media: {
        ...media,
        uri: "./" + media.fileName,
        base64: media.base64.replace(
          /^data:(audio|video|image)\/\w+;base64,/,
          ""
        ),
      },
    };

    commitMutation({
      variables: {
        input: meditationInput,
      },
      onCompleted: () => {
        closeFloatingView();
        triggerCloseSheet();
      },
      onError: (error) => {
        console.log(error);
        closeFloatingView();
      },
    });
  };

  const disableButton = title === "" || description === "" || !cover || !media;

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
          Description:
        </SHDNAText>
        <SHDNATextArea
          value={description}
          onChange={setDescription}
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
              source={{ uri: cover.uri }}
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
          selectedFiles={media ? [media] : []}
          onSelectFiles={(media: MediaType[]) => setMedia(media[0])}
          type={[
            "image/jpeg",
            "image/png",
            "video/mp4",
            "audio/wav",
            "audio/aac",
            "audio/mpeg",
          ]}
        />
      </View>
      <View>
        <SHDNAButton
          onClick={() => handleMutation()}
          text="Submit"
          state={ButtonStates.ACTIVE}
          isDisabled={disableButton}
        />
      </View>
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
