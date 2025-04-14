import { View, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState, useTransition } from "react";
import SHDNAText from "@/src/Components/SHDNAText";
import SHDNATextArea from "@/src/Components/SHDNATextArea";
import SHDNADropdownMenu from "@/src/Components/SHDNADropdownMenu";
import { ChallengeType } from "@/src/Components/Challenges/SHDNAChallengeBlock";
import { AnswerType } from "@/src/Components/Challenges/SHDNAChallengeAnswerManager";
import SHDNATextList from "@/src/Components/SHDNATextList";
import { MediaType } from "../SHDNACreatePostView";
import SHDNAUploadFile from "@/src/Components/SHDNAUploadFile";
import {
  graphql,
  useLazyLoadQuery,
  useMutation,
  useRefetchableFragment,
} from "react-relay";
import { SHDNACreateChallengeSubViewMutation } from "./__generated__/SHDNACreateChallengeSubViewMutation.graphql";
import SHDNATextInput from "@/src/Components/SHDNATextInput";
import SHDNAButton, { ButtonStates } from "@/src/Components/SHDNAButton";
import { useFloatingView } from "@/src/Components/FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "../SHDNALoadingBlackView";
import { useSheet } from "@/src/Components/Sheet/SHDNASheetContext";
import { SHDNACreateChallengeSubViewQuery_RefetchableFragment$key } from "./__generated__/SHDNACreateChallengeSubViewQuery_RefetchableFragment.graphql";
import { SHDNACreateChallengeSubViewQuery } from "./__generated__/SHDNACreateChallengeSubViewQuery.graphql";
import SHDNAMediaBlock from "@/src/Components/SHDNAMediaBlock";
import { useSHDNADebounce } from "@/src/hooks/useSHDNADebounce";
import SHDNALoading from "@/src/Components/SHDNALoading";
import { Colors } from "@/assets/SHDNAColors";
import SHDNADatePicker from "@/src/Components/SHDNADatePicker.web";
import SHDNACheckBox from "@/src/Components/SHDNACheckBox";

export default function SHDNACreateChallengeSubView() {
  const [value, setValue] = useState(null);
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answerType, setAnswerType] = useState(null);

  const [answerClose, setAnswerClose] = useState<string[]>([]);
  const [media, setMedia] = useState<MediaType[]>([]);

  const [isScheduled, setIsScheduled] = useState(false);
  const [schedule, setSchedule] = useState("");

  const [query, setQuery] = useState("");
  const [selectedMeditations, setSelectedMeditations] = useState<any[]>([]);

  const challengesType = Object.entries(ChallengeType).map(([key, value]) => {
    return { label: value, value: key };
  });

  const answerTypes = Object.entries(AnswerType).map(([key, value]) => {
    return {
      label: value
        .replace("_", " ")
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      value: key,
    };
  });

  const [commitMutation] = useMutation<SHDNACreateChallengeSubViewMutation>(
    graphql`
      mutation SHDNACreateChallengeSubViewMutation($input: ChallengeInput!) {
        createChallenge(input: $input)
      }
    `
  );

  const { openFloatingView, closeFloatingView } = useFloatingView();
  const { triggerCloseSheet } = useSheet();

  const handleMutation = () => {
    if (!value || !answerType) return;
    openFloatingView(<SHDNALoadingBlackView />);

    let input: any = {
      title,
      question,
      challengeType: value,
      answerType,
      scheduledTime: isScheduled ? schedule : null,
      // suggestedMeditations: selectedMeditations.map((meditation) => {
      //   return meditation.id;
      // }),
    };

    if (answerType === AnswerType.ANSWER_CLOSE && answerClose) {
      input = { ...input, options: answerClose };
    } else if (answerType === AnswerType.VIEW_MEDIA && media) {
      input = {
        ...input,
        media: media.map((item) => {
          return {
            ...item,
            uri: "./" + item.fileName,
            base64: item.base64.replace(
              /^data:(audio|video|image)\/\w+;base64,/,
              ""
            ),
          };
        }),
      };
    }

    commitMutation({
      variables: { input },
      onCompleted: () => {
        closeFloatingView();
        triggerCloseSheet();
      },
      onError: () => {
        closeFloatingView();
      },
    });
  };

  const meditationQuery = useLazyLoadQuery<SHDNACreateChallengeSubViewQuery>(
    graphql`
      query SHDNACreateChallengeSubViewQuery($query: String!) {
        ...SHDNACreateChallengeSubViewQuery_RefetchableFragment
          @arguments(query: $query)
      }
    `,
    { query: "" }
  );

  const [data, refetch] = useRefetchableFragment<
    SHDNACreateChallengeSubViewQuery,
    SHDNACreateChallengeSubViewQuery_RefetchableFragment$key
  >(
    graphql`
      fragment SHDNACreateChallengeSubViewQuery_RefetchableFragment on Query
      @refetchable(queryName: "SHDNACreateChallengeSubViewSearchQuery")
      @argumentDefinitions(query: { type: "String!" }) {
        searchMeditation(query: $query) {
          id
          ...SHDNAMediaBlock_fragmment
        }
      }
    `,
    meditationQuery
  );

  const [isLoading, startTransition] = useTransition();

  const debouncedQuery = useSHDNADebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      startTransition(() => {
        refetch(
          { query: debouncedQuery },
          {
            fetchPolicy: "network-only",
          }
        );
      });
    }
  }, [debouncedQuery, refetch]);

  const onMeditationChange = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  const meditations = data.searchMeditation ?? [];

  const buttonDisable =
    value === null ||
    title === "" ||
    question === "" ||
    answerType === null ||
    (answerType === AnswerType.ANSWER_CLOSE &&
      answerClose.length < 2 &&
      answerClose[0] === "") ||
    (answerType === AnswerType.VIEW_MEDIA && media.length === 0);

  return (
    <View style={styles.body}>
      <View style={{ gap: 15 }}>
        <SHDNAText fontWeight="SemiBold" style={{ fontSize: 20 }}>
          Title:
        </SHDNAText>
        <View style={{ flex: 1 }}>
          <SHDNATextInput
            value={title}
            placeholder="Type Title"
            onChange={setTitle}
          />
        </View>
      </View>
      <View style={{ gap: 15 }}>
        <SHDNAText fontWeight="SemiBold" style={{ fontSize: 20 }}>
          Question:
        </SHDNAText>
        <SHDNATextArea
          placeholder="Type the question"
          onChange={setQuestion}
          value={question}
        />
      </View>
      <View style={[styles.labels, { zIndex: 51 }]}>
        <SHDNAText fontWeight="SemiBold" style={{ fontSize: 20 }}>
          Value:
        </SHDNAText>
        <View>
          <SHDNADropdownMenu
            value={value}
            options={challengesType}
            placeholder="Select a value"
            onChange={setValue}
            alignment="flex-end"
          />
        </View>
      </View>
      <View style={[styles.labels, { zIndex: 50 }]}>
        <SHDNAText fontWeight="SemiBold" style={{ fontSize: 20 }}>
          Answer Type:
        </SHDNAText>
        <View>
          <SHDNADropdownMenu
            value={answerType}
            options={answerTypes}
            placeholder="Select an Answer Type"
            onChange={setAnswerType}
            alignment="flex-end"
          />
        </View>
      </View>
      {answerType === AnswerType.ANSWER_CLOSE && (
        <SHDNATextList setItems={setAnswerClose} items={answerClose} />
      )}
      {answerType === AnswerType.VIEW_MEDIA && (
        <SHDNAUploadFile
          selectedFiles={media}
          allowMultiple={false}
          onSelectFiles={(media: MediaType[]) => setMedia(media)}
          type={["image/jpeg", "image/png", "video/mp4"]}
        />
      )}
      <View style={[styles.labels]}>
        <View style={[styles.labels, { gap: 15 }]}>
          <SHDNAText
            fontWeight="SemiBold"
            style={{ fontSize: 18, color: Colors.Gray3 }}
          >
            {"Schedule Challenge (optional):"}
          </SHDNAText>
          <SHDNACheckBox
            value={isScheduled}
            onClick={() => setIsScheduled(!isScheduled)}
          />
        </View>
        <View>
          <SHDNADatePicker
            onChange={(value: string) => setSchedule(value)}
            value={schedule}
            isDisabled={!isScheduled}
          />
        </View>
      </View>
      {/* <View>
        <View style={styles.labels}>
          <SHDNAText
            fontWeight="SemiBold"
            style={{ fontSize: 18, color: Colors.Gray3 }}
          >
            {"Add suggested meditations (optional):"}
          </SHDNAText>
          <View style={{ width: 250 }}>
            <SHDNATextInput
              value={query}
              placeholder="Type a meditation"
              onChange={onMeditationChange}
            />
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {selectedMeditations.length > 0 && (
            <>
              {selectedMeditations.map((meditation, index) => {
                return (
                  <SHDNAMediaBlock
                    meditationKey={meditation}
                    key={index + "NoMeditation"}
                    onClick={() => {
                      const indexOf = selectedMeditations.indexOf(meditation);
                      setSelectedMeditations(
                        selectedMeditations.filter(
                          (_, index) => index !== indexOf
                        )
                      );
                    }}
                  />
                );
              })}
              <View style={styles.middleBar} />
            </>
          )}
          {meditations.length > 0 ? (
            isLoading ? (
              <View style={styles.loadingMeditations}>
                <SHDNALoading />
              </View>
            ) : (
              meditations.map((meditation, index) => {
                const isIncluded = selectedMeditations.includes(meditation);
                return (
                  <View style={{ opacity: isIncluded ? 0.25 : 1 }}>
                    <SHDNAMediaBlock
                      meditationKey={meditation}
                      key={index + "NoMeditation"}
                      onClick={() => {
                        if (isIncluded) return;
                        setSelectedMeditations([
                          ...selectedMeditations,
                          meditation,
                        ]);
                      }}
                    />
                  </View>
                );
              })
            )
          ) : (
            <View style={[styles.loadingMeditations]}>
              <SHDNAText style={{ textAlign: "center" }}>
                No meditations
              </SHDNAText>
            </View>
          )}
        </ScrollView>
      </View> */}
      <View style={{ paddingTop: 10, paddingBottom: 25 }}>
        <SHDNAButton
          state={ButtonStates.ACTIVE}
          text="Create"
          onClick={() => handleMutation()}
          isDisabled={buttonDisable}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    gap: 30,
    paddingTop: 20,
  },
  loadingMeditations: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  labels: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  middleBar: {
    height: 150,
    width: 2,
    backgroundColor: Colors.Gray2,
    marginRight: 30,
  },
});
