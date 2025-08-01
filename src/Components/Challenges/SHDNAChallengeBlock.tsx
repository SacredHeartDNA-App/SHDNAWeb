import { View, StyleSheet, Image } from "react-native";
import React, { Suspense, useTransition } from "react";
import SHDNABlock from "../SHDNABlock";
import { Colors } from "../../../assets/SHDNAColors";
import SHDNAChallengeSubView from "../../Views/Espacio/SHDNAChallengeSubView";
import { graphql, useFragment } from "react-relay";
import { SHDNAChallengeBlock_Fragment$key } from "../__generated__/SHDNAChallengeBlock_Fragment.graphql";
import useSHDNAChallengeLogo from "../../hooks/useSHDNAChallengeLogo";
import SHDNAText from "../SHDNAText";
import { useSheet } from "../Sheet/SHDNASheetContext";
import SHDNALoading from "../SHDNALoading";

type SHDNAChallengeBlockProps = {
  challengeKey: SHDNAChallengeBlock_Fragment$key;
  isCompleted?: boolean;
};

export enum ChallengeType {
  PERSONAL_INTEGRITY = "Personal Integrity",
  SPIRITUALITY = "Spirituality",
  BELONGING_COMMUNITY = "Belonging Community",
  ACTIVE_CITIZENSHIP = "Active Citizenship",
  TRANSFORMATIVE_ACTION = "Transformative Action",
}

export default function SHDNAChallengeBlock({
  challengeKey,
  isCompleted = false,
}: SHDNAChallengeBlockProps) {
  const { openSheet } = useSheet();

  const challenge = useFragment<SHDNAChallengeBlock_Fragment$key>(
    graphql`
      fragment SHDNAChallengeBlock_Fragment on Challenge {
        title
        challengeType
        ...SHDNAChallengeSubView_Fragment
      }
    `,
    challengeKey
  );

  const challengeType =
    ChallengeType[challenge.challengeType as keyof typeof ChallengeType];

  const logo = useSHDNAChallengeLogo(challengeType);

  return (
    <SHDNABlock
      style={styles.wrapper}
      onClick={() =>
        openSheet({
          title: "Challenges",
          content: (
            <Suspense
              fallback={
                <View style={{ marginTop: 150 }}>
                  <SHDNALoading />
                </View>
              }
            >
              <SHDNAChallengeSubView
                logo={logo}
                challengeKey={challenge}
                challengeType={challengeType}
              />
            </Suspense>
          ),
        })
      }
    >
      <Image source={logo} style={styles.image} />
      <View>
        <SHDNAText style={styles.title} fontWeight="SemiBold">
          {challenge.title}
        </SHDNAText>
        <SHDNAText style={styles.subtitle}>{challengeType}</SHDNAText>
      </View>
    </SHDNABlock>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  lockChallenge: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 20,
    padding: 25,
  },
  lockText: {
    fontSize: 16,
    width: 250,
  },
  image: {
    width: 75,
    height: 75,
    margin: 10,
    objectFit: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
  },
  completedBannerWrapper: {
    position: "absolute",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  completedBanner: {
    backgroundColor: Colors.Purple1,
    transform: [{ translateX: 225 }, { translateY: 25 }, { rotate: "45deg" }],
    paddingVertical: 2,
    width: 200,
    alignItems: "center",
  },
  completedBannerText: {
    color: "white",
    fontWeight: 600,
  },
});
