/**
 * @generated SignedSource<<89ca0d1ed01e6576d60775ad0099ce3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type AnswerType = "ANSWER_CLOSE" | "ANSWER_OPEN" | "UPLOAD_FILE" | "VIEW_MEDIA" | "%future added value";
export type ChallengeType = "ACTIVE_CITIZENSHIP" | "BELONGING_COMMUNITY" | "PERSONAL_INTEGRITY" | "SPIRITUALITY" | "TRANSFORMATIVE_ACTION" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SHDNAChallengeSubView_Fragment$data = {
  readonly answerType: AnswerType;
  readonly challengeType: ChallengeType;
  readonly id: string;
  readonly question: string;
  readonly suggestedMeditations: ReadonlyArray<string> | null | undefined;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAChallengeAnswerClose_Fragment">;
  readonly " $fragmentType": "SHDNAChallengeSubView_Fragment";
};
export type SHDNAChallengeSubView_Fragment$key = {
  readonly " $data"?: SHDNAChallengeSubView_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAChallengeSubView_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAChallengeSubView_Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "challengeType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "question",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "answerType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "suggestedMeditations",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SHDNAChallengeAnswerClose_Fragment"
    }
  ],
  "type": "Challenge",
  "abstractKey": null
};

(node as any).hash = "282547f17a49649356b578be8d898750";

export default node;
