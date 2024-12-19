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
import { MediaType } from "./SHDNACreatePostView";
import { Colors } from "@/assets/SHDNAColors";
import { graphql, useMutation } from "react-relay";
import { useFloatingView } from "../Components/FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "./SHDNALoadingBlackView";
import { SHDNAEditArticleSubviewMutation } from "./__generated__/SHDNAEditArticleSubviewMutation.graphql";
import { useSheet } from "../Components/Sheet/SHDNASheetContext";
import { useModal } from "../Components/Modal/SHDNAModalContext";
import { SHDNAEditArticleSubviewDeleteMutation } from "./__generated__/SHDNAEditArticleSubviewDeleteMutation.graphql";

type ArticleType = {
  cover: string;
  title: string;
  text: string;
  extLinks?: readonly string[] | null | undefined;
  id: string;
};

type SHDNAEditArticleSubviewProps = {
  refetch: () => void;
  articleInfo: ArticleType;
};
export default function SHDNAEditArticleSubview({
  refetch,
  articleInfo,
}: SHDNAEditArticleSubviewProps) {
  const [title, setTitle] = useState(articleInfo.title);
  const [text, setText] = useState(articleInfo.text);
  const [cover, setCover] = useState<MediaType | null>(null);
  const [extLinks, setExtLinks] = useState<string[]>(
    articleInfo.extLinks ? [...articleInfo.extLinks] : []
  );

  const selectFiles = useSHDNAFilePicker(
    (cover: MediaType[]) => setCover(cover[0]),
    false,
    ["image/jpeg", "image/png"]
  );

  const { openFloatingView, closeFloatingView } = useFloatingView();
  const { closeSheet } = useSheet();
  const { openModal, closeModal } = useModal();

  const [commitMutation] = useMutation<SHDNAEditArticleSubviewMutation>(graphql`
    mutation SHDNAEditArticleSubviewMutation($input: EditNewsInput!, $id: ID!) {
      updateArticle(input: $input, id: $id)
    }
  `);

  const [commitDelete] =
    useMutation<SHDNAEditArticleSubviewDeleteMutation>(graphql`
      mutation SHDNAEditArticleSubviewDeleteMutation($id: ID!) {
        deleteArticle(id: $id)
      }
    `);

  const extLinksDifferent =
    extLinks.length == (articleInfo.extLinks ?? []).length &&
    extLinks.every(function (element, index) {
      return element === (articleInfo.extLinks ?? [])[index];
    });

  const handleSubmit = () => {
    openFloatingView(<SHDNALoadingBlackView />);

    const newsInput = {
      title: title === articleInfo.title ? undefined : title,
      text: text === articleInfo.text ? undefined : text,
      cover: cover
        ? {
            ...cover,
            uri: "./" + cover.fileName,
            base64: cover.base64.replace(/^data:image\/\w+;base64,/, ""),
          }
        : undefined,
      extLinks: extLinksDifferent ? extLinks : undefined,
    };

    commitMutation({
      variables: { input: newsInput, id: articleInfo.id },
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

  const handleDelete = () => {
    openFloatingView(<SHDNALoadingBlackView />);
    commitDelete({
      variables: { id: articleInfo.id },
      onCompleted: () => {
        closeFloatingView();
        closeModal();
        closeSheet();
        refetch();
      },
      onError: () => {
        closeModal();
      },
    });
  };

  const DeleteModal = () => {
    return (
      <View
        style={{
          gap: 50,
          padding: 20,
        }}
      >
        <SHDNAText
          style={{ textAlign: "center", fontSize: 20 }}
          fontWeight="Bold"
        >
          Are you sure you want to delete this news?
        </SHDNAText>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 15,
          }}
        >
          <SHDNAButton
            onClick={() => handleDelete()}
            text="Delete"
            state={ButtonStates.ALERT}
          />
          <SHDNAButton onClick={() => closeModal()} text="Cancel" />
        </View>
      </View>
    );
  };

  const buttonDisabled =
    title === articleInfo.title &&
    text === articleInfo.text &&
    cover === null &&
    (articleInfo.extLinks ? extLinksDifferent : false);

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
          <SHDNAImage
            style={{ width: 250, height: 150 }}
            source={{ uri: cover?.uri || articleInfo.cover }}
            width={250}
            height={150}
          />
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
          External Links:
        </SHDNAText>
        <SHDNATextList items={extLinks} setItems={setExtLinks} />
      </View>
      <SHDNAButton
        isDisabled={buttonDisabled}
        onClick={() => handleSubmit()}
        text="Update"
        state={ButtonStates.DEFAULT}
      />
      <SHDNAButton
        onClick={() => openModal(<DeleteModal />, false)}
        text="Delete"
        state={ButtonStates.ALERT}
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
