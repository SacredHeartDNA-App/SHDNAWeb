import { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

const useSHDNAImagePicker = (allowMultiSelection: boolean = true) => {
  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);

  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "We need camera permissions to proceed."
      );
      return false;
    }

    const libraryStatus =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (libraryStatus.status !== "granted") {
      Alert.alert(
        "Permission required",
        "We need library permissions to proceed."
      );
      return false;
    }

    return true;
  };

  const openLibrary = async () => {
    const hasPermissions = await requestPermissions();
    if (!hasPermissions) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 0.5,
      allowsMultipleSelection: allowMultiSelection,
      selectionLimit: 6,
      orderedSelection: true,
      base64: true,
    });

    if (!result.canceled) {
      setImages(result.assets);
    }
  };

  const openCamera = async () => {
    const hasPermissions = await requestPermissions();
    if (!hasPermissions) return;

    const result = await ImagePicker.launchCameraAsync({
      aspect: [4, 3],
      quality: 0.5,
      allowsMultipleSelection: true,
      selectionLimit: 6,
      orderedSelection: true,
      base64: true,
    });

    if (!result.canceled) {
      setImages(result.assets);
    }
  };

  return { openLibrary, openCamera, images };
};

export default useSHDNAImagePicker;
