import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { graphql, useMutation } from "react-relay";
import { SHDNAChallengeAnswerManager_Fragment$key } from "../__generated__/SHDNAChallengeAnswerManager_Fragment.graphql";
import SHDNATextArea from "../SHDNATextArea";
import SHDNAUploadFile from "../SHDNAUploadFile";
import SHDNAVideoPlayer from "../SHDNAVideoPlayer";
import { MediaType } from "../../Views/SHDNACreatePostView";
import SHDNAButton from "../SHDNAButton";
import { useFloatingView } from "../FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "../../Views/SHDNALoadingBlackView";
import { SHDNAChallengeAnswerManagerMutation } from "../__generated__/SHDNAChallengeAnswerManagerMutation.graphql";
import SHDNAChallengeAnswerClose from "./SHDNAChallengeAnswerClose";
import { SHDNAChallengeAnswerClose_Fragment$key } from "../__generated__/SHDNAChallengeAnswerClose_Fragment.graphql";

export enum AnswerType {
  ANSWER_CLOSE = "ANSWER_CLOSE",
  ANSWER_OPEN = "ANSWER_OPEN",
  VIEW_MEDIA = "VIEW_MEDIA",
  UPLOAD_FILE = "UPLOAD_FILE",
}

type SHDNAChallengeAnswerManager = {
  challengeKey: SHDNAChallengeAnswerClose_Fragment$key;
  type: AnswerType;
  onChange: (input: string | MediaType[]) => void;
};

export default function SHDNAChallengeAnswerManager({
  type,
  challengeKey,
  onChange,
}: SHDNAChallengeAnswerManager) {
  const [files, setFiles] = useState<MediaType[]>([]);

  switch (type) {
    case "ANSWER_CLOSE":
      return (
        <SHDNAChallengeAnswerClose
          challengeKey={challengeKey}
          onChange={(value: string) => onChange(value)}
        />
      );

    case "VIEW_MEDIA":
      return (
        <SHDNAVideoPlayer
          onVideoFinished={() => onChange("true")}
          videoSource="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      );
    case "UPLOAD_FILE":
      return (
        <SHDNAUploadFileManager
          onChange={(value: MediaType[]) => {
            onChange(value);
            setFiles(value);
          }}
          files={files}
        />
      );

    default:
      return (
        <SHDNATextAreaManager onChange={(input: string) => onChange(input)} />
      );
  }
}

const SHDNATextAreaManager = ({ onChange }: any) => {
  const [string, setString] = useState("");

  const handleString = (string: string) => {
    setString(string);
    onChange(string);
  };

  return (
    <SHDNATextArea
      value={string}
      onChange={handleString}
      placeholder="Write your answer"
    />
  );
};

type SHDNAUploadFileManagerProps = {
  onChange: (answer: MediaType[]) => void;
  files: MediaType[];
};

const SHDNAUploadFileManager = ({
  onChange,
  files,
}: SHDNAUploadFileManagerProps) => {
  const manageFile = (files: MediaType[] | undefined) => {
    if (!files) return;

    onChange(files);
  };

  return <SHDNAUploadFile selectedFiles={files} onSelectFiles={manageFile} />;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
});
