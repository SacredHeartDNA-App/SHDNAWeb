import { View, StyleSheet } from "react-native";
import React from "react";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import SHDNAButton, { ButtonStates } from "./SHDNAButton";
import { Colors } from "../../assets/SHDNAColors";
import { MediaType } from "../Views/SHDNACreatePostView";
import SHDNAText from "./SHDNAText";

type SHDNAUploadFileProps = {
  selectedFiles: MediaType[];
  onSelectFiles: (files: MediaType[]) => void;
};

export default function SHDNAUploadFile({
  selectedFiles,
  onSelectFiles,
}: SHDNAUploadFileProps) {
  const selectFile = useSHDNAFilePicker(onSelectFiles);

  return (
    <View>
      <View style={styles.fileUploaded}>
        {selectedFiles.length > 0 ? (
          <SHDNAText>
            {selectedFiles[0].fileName}
            {selectedFiles.length > 1 &&
              ` +${" " + (selectedFiles.length - 1)}`}
          </SHDNAText>
        ) : (
          <SHDNAText>No Files Uploaded</SHDNAText>
        )}
      </View>
      <SHDNAButton
        onClick={() => selectFile()}
        text="Select Files"
        state={ButtonStates.SECONDARY}
      />
    </View>
  );
}

export const useSHDNAFilePicker = (
  onChange: (files: MediaType[]) => void,
  allowMultiple?: boolean,
  type?: string | string[]
) => {
  const readFileAsBase64 = async (uri: string): Promise<string> => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();

      return await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Error reading file as Base64:", error);
      throw error;
    }
  };

  const selectFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: type ?? "*/*",
        copyToCacheDirectory: true,
        multiple: allowMultiple ?? true,
      });

      if (result) {
        if (result.assets) {
          const processedFiles = await Promise.all(
            result.assets.map(async (file) => {
              const base64 = await readFileAsBase64(file.uri);
              return {
                fileName: file.name,
                uri: file.uri,
                type: file.mimeType,
                base64,
              } as MediaType;
            })
          );

          onChange(processedFiles);
        }
      } else {
        console.log("File selection cancelled");
      }
    } catch (error) {
      console.error("Error selecting file:", error);
    }
  };

  return selectFile;
};

const styles = StyleSheet.create({
  fileUploaded: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    borderWidth: 2,
    borderColor: Colors.Gray2,
    borderRadius: 10,
    marginBottom: 20,
    borderStyle: "dashed",
  },
});
