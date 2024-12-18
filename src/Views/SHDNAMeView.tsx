import React, { useState } from "react";
import { graphql, useLazyLoadQuery, useMutation } from "react-relay";
import SHDNAView from "../Components/SHDNAView";
import SHDNAProfileView from "./SHDNAProfileView";
import { SHDNAMeViewQuery } from "./__generated__/SHDNAMeViewQuery.graphql";
import SHDNAButton, { ButtonStates } from "../Components/SHDNAButton";
import EditSVG from "../../assets/RNSvgs/EditSVG";
import { useSubview } from "../Components/Subview/SHDNASubviewContext";
import SHDNAEditProfileSubview from "./SHDNAEditProfileSubview";
import Burger from "../../assets/RNSvgs/Burger";
import { useSheet } from "../Components/Sheet/SHDNASheetContext";
import { View } from "react-native";
import { useUserData } from "../Context/SHDNAUserContext";
import useSHDNAKeychain from "../hooks/useSHDNAKeychain";

export function SHDNAMeView() {
  const data = useLazyLoadQuery<SHDNAMeViewQuery>(
    graphql`
      query SHDNAMeViewQuery {
        viewer {
          ...SHDNAProfileView_Fragment
          profilePic
          bio
        }
      }
    `,
    {}
  );

  const [profilePic, setProfilePic] = useState(data.viewer.profilePic ?? "");
  const [bio, setBio] = useState(data.viewer.bio ?? "");

  const { openSubview } = useSubview();
  const { openSheet, triggerCloseSheet } = useSheet();
  const { setUserId, setSessionToken } = useUserData();
  const { clearSessionToken } = useSHDNAKeychain();

  const handleEditProfile = (newBio: string, newProfilePic: string) => {
    setProfilePic(newProfilePic);
    setBio(newBio);
  };

  const EditProfileButton = () => {
    return (
      <SHDNAButton
        Icon={EditSVG}
        iconSize={22}
        onClick={() =>
          openSubview(
            "Edit Profile",
            <SHDNAEditProfileSubview
              profilePic={profilePic}
              bio={bio}
              handleEditProfile={handleEditProfile}
            />
          )
        }
        state={ButtonStates.TRANSPARENT}
      />
    );
  };

  const [commitMutation] = useMutation(graphql`
    mutation SHDNAMeViewMutation {
      logOut
    }
  `);

  const handleLogOut = () => {
    commitMutation({
      variables: {},
      onCompleted: () => {
        triggerCloseSheet();
        setUserId("none");
        setSessionToken("");
        clearSessionToken();
      },
    });
  };

  const MoreUser = () => {
    return (
      <View>
        <SHDNAButton text="Log Out" onClick={() => handleLogOut()} />
      </View>
    );
  };

  const MoreButton = () => {
    return (
      <SHDNAButton
        Icon={Burger}
        iconSize={22}
        onClick={() =>
          openSheet({
            content: <MoreUser />,
          })
        }
        state={ButtonStates.TRANSPARENT}
      />
    );
  };

  return (
    <SHDNAView
      title="Me"
      secondaryButtons={[
        <EditProfileButton key={"editProfileButton"} />,
        <MoreButton key={"moreProfileButton"} />,
      ]}
    >
      <SHDNAProfileView
        userKey={data.viewer}
        profilePic={profilePic}
        bio={bio}
      />
    </SHDNAView>
  );
}
