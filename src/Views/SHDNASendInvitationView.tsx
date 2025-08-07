import { View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    emailjs.init("_TXqBbTuCas263VpA");
  }, []);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const handleSendInvitations = () => {
    openFloatingView(<SHDNALoadingBlackView />);

    commitMutation({
      variables: { sendTo: emails },
      onCompleted: (response) => {
        const codes = response.createInvitationCode ?? [];
        if (codes.length === 0) return;

        (async () => {
          try {
            if (codes.length !== emails.length) {
              throw new Error("Invitation codes and email count mismatch.");
            }

            for (let i = 0; i < emails.length; i++) {
              try {
                await emailjs.send("service_4zmlkab", "template_tlmgm2l", {
                  password: codes[i],
                  email: emails[i],
                });
                await delay(500);
              } catch (err) {
                console.error(`Failed to send to ${emails[i]}`, err);
              }
            }

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
