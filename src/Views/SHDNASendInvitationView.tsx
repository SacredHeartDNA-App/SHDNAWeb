import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import SHDNATextList from "../Components/SHDNATextList";
import SHDNAButton from "../Components/SHDNAButton";
import { graphql, useMutation } from "react-relay";
import { SHDNASendInvitationViewMutation } from "./__generated__/SHDNASendInvitationViewMutation.graphql";
import { useFloatingView } from "../Components/FloatingView/SHDNAFloatingViewContext";
import { useSheet } from "../Components/Sheet/SHDNASheetContext";
import { useModal } from "../Components/Modal/SHDNAModalContext";
import SHDNAText from "../Components/SHDNAText";
import SHDNALoadingBlackView from "./SHDNALoadingBlackView";
import emailjs from "@emailjs/browser";

export default function SHDNASendInvitationView() {
  const [emails, setEmails] = useState<string[]>([]);

  const { openFloatingView, closeFloatingView } = useFloatingView();
  const { closeSheet } = useSheet();
  const { openModal } = useModal();

  const [commitMutation] = useMutation<SHDNASendInvitationViewMutation>(graphql`
    mutation SHDNASendInvitationViewMutation($sendTo: [String!]) {
      createInvitationCode(sendTo: $sendTo)
    }
  `);

  const handleSendInvitations = () => {
    openFloatingView(<SHDNALoadingBlackView />);

    commitMutation({
      variables: { sendTo: emails },
      onCompleted: (response) => {
        emailjs.init({
          publicKey: "_TXqBbTuCas263VpA",
        });

        (async () => {
          try {
            await Promise.all(
              emails.map((email) => {
                emailjs.send("service_4zmlkab", "template_tlmgm2l", {
                  password: response.createInvitationCode,
                  email: email,
                });
              })
            );
            closeFloatingView();
            closeSheet();
            openModal(
              <SHDNAText fontWeight="SemiBold" style={{ fontSize: 16 }}>
                {"Invitation(s) sent!"}
              </SHDNAText>,
              true
            );
          } catch (error) {
            console.log("FAILED...", error);
            closeFloatingView();
            openModal(<SHDNAText>Error on Sending Email</SHDNAText>, true);
          }
        })();
      },
      onError(error) {
        closeFloatingView();
        openModal(<SHDNAText>{error.message}</SHDNAText>, true);
        console.log(error);
      },
    });
  };

  return (
    <View style={styles.content}>
      <SHDNATextList items={emails} setItems={setEmails} />
      <SHDNAButton
        text="Send Invitations"
        onClick={() => handleSendInvitations()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 20,
    paddingTop: 20,
  },
});
