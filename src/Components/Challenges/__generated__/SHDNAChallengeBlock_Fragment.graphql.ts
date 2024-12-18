/**
 * @generated SignedSource<<769c0c99dc6d93f31f86f843d64fc318>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type ChallengeType = "ACTIVE_CITIZENSHIP" | "BELONGING_COMMUNITY" | "PERSONAL_INTEGRITY" | "SPIRITUALITY" | "TRANSFORMATIVE_ACTION" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SHDNAChallengeBlock_Fragment$data = {
  readonly challengeType: ChallengeType;
  readonly isLocked: boolean;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAChallengeSubView_Fragment">;
  readonly " $fragmentType": "SHDNAChallengeBlock_Fragment";
};
export type SHDNAChallengeBlock_Fragment$key = {
  readonly " $data"?: SHDNAChallengeBlock_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAChallengeBlock_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAChallengeBlock_Fragment",
  "selections": [
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
      "name": "isLocked",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "SHDNAChallengeSubView_Fragment"
    }
  ],
  "type": "Challenge",
  "abstractKey": null
};

(node as any).hash = "409099116942bead69bb09d84546062c";

export default node;
