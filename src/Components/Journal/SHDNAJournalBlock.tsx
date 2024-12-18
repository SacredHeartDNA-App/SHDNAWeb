import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import SHDNABlock from "../SHDNABlock";
import { Colors } from "../../../assets/SHDNAColors";
import { graphql, useFragment, useMutation } from "react-relay";
import { SHDNAJournalBlock_Fragment$key } from "./__generated__/SHDNAJournalBlock_Fragment.graphql";
import { ChallengeType } from "../Challenges/SHDNAChallengeBlock";
import { useSubview } from "../Subview/SHDNASubviewContext";
import SHDNAJournalSubView from "../../Views/Espacio/SHDNAJournalSubView";
import useSHDNAChallengeLogo from "../../hooks/useSHDNAChallengeLogo";
import SHDNAButton, { ButtonStates } from "../SHDNAButton";
import { useSheet } from "../Sheet/SHDNASheetContext";
import MoreSVG from "../../../assets/RNSvgs/MoreSVG";
import { SHDNAJournalBlockMutation } from "./__generated__/SHDNAJournalBlockMutation.graphql";
import SHDNAText from "../SHDNAText";

type SHDNAJournalBlockProps = {
  journalKey: SHDNAJournalBlock_Fragment$key;
};

export default function SHDNAJournalBlock({
  journalKey,
}: SHDNAJournalBlockProps) {
  const { openSubview } = useSubview();
  const { openSheet, triggerCloseSheet } = useSheet();
  const { popSubviewStack } = useSubview();

  const journalData = useFragment<SHDNAJournalBlock_Fragment$key>(
    graphql`
      fragment SHDNAJournalBlock_Fragment on Journal {
        title
        created_at
        value
        id
        # ...SHDNAJournalSubView_Fragment
      }
    `,
    journalKey
  );

  const [commitMutation] = useMutation<SHDNAJournalBlockMutation>(graphql`
    mutation SHDNAJournalBlockMutation($journalId: ID!) {
      deleteJournal(journalId: $journalId)
    }
  `);

  const valueType =
    ChallengeType[journalData.value as keyof typeof ChallengeType];

  const SubViewHeader = () => {
    return (
      <View style={styles.subheader}>
        <Image
          style={styles.subheaderImage}
          source={useSHDNAChallengeLogo(
            ChallengeType[journalData.value as keyof typeof ChallengeType]
          )}
        />
        <SHDNAText fontWeight="SemiBold" style={styles.subheaderTitle}>
          {journalData.title}
        </SHDNAText>
      </View>
    );
  };

  const handleDeletePost = () => {
    commitMutation({
      variables: { journalId: journalData.id },
      onCompleted: () => {
        triggerCloseSheet();
        popSubviewStack();
      },
      onError: () => {
        triggerCloseSheet();
        popSubviewStack();
      },
    });
  };

  const ManageJournal = () => {
    return (
      <View>
        <SHDNAButton
          text="Delete Journal"
          state={ButtonStates.ALERT}
          onClick={() => handleDeletePost()}
        />
      </View>
    );
  };

  return (
    <SHDNABlock
      style={styles.block}
      onClick={() =>
        openSubview(
          <SubViewHeader />,
          <SHDNAJournalSubView journalKey={journalData} />,
          <SHDNAButton
            onClick={() =>
              openSheet({
                content: <ManageJournal />,
              })
            }
            iconSize={20}
            Icon={MoreSVG}
            state={ButtonStates.TRANSPARENT}
          />
        )
      }
    >
      <View
        style={[
          styles.wrapper,
          {
            backgroundColor: getValueColor(valueType),
          },
        ]}
      >
        <View style={styles.dateContainer}>
          <SHDNAText fontWeight="SemiBold" style={styles.dateText}>
            {formatDate(journalData.created_at)}
          </SHDNAText>
        </View>
        <SHDNAText fontWeight="Bold" style={styles.title}>
          {journalData.title}
        </SHDNAText>
      </View>
    </SHDNABlock>
  );
}

const styles = StyleSheet.create({
  block: {
    width: 110,
    height: 150,
  },
  wrapper: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  dateContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "60%",
    backgroundColor: "white",
    paddingVertical: 7.5,
    borderBottomRightRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontSize: 12,
  },
  subheader: {
    width: "90%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  subheaderImage: { width: 35, aspectRatio: 1 / 1 },
  subheaderTitle: { fontWeight: "600", fontSize: 18 },
});

const getValueColor = (value: ChallengeType) => {
  switch (value) {
    case ChallengeType.PERSONAL_INTEGRITY:
      return Colors.Pink1;
    case ChallengeType.SPIRITUALITY:
      return Colors.Purple1;
    case ChallengeType.BELONGING_COMMUNITY:
      return Colors.Red3;
    case ChallengeType.ACTIVE_CITIZENSHIP:
      return Colors.Green1;
    case ChallengeType.TRANSFORMATIVE_ACTION:
      return Colors.Blue2;
  }
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);

  // Format the date using Intl.DateTimeFormat
  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
  });

  const formattedDate = formatter.format(date);
  return formattedDate;
};
