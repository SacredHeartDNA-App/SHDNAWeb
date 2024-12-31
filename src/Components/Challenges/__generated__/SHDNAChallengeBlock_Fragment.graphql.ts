/**
 * @generated SignedSource<<3f7a5448dd937ac545dfbb2ddb3d30fc>>
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

(node as any).hash = "ddf8c613c0bce96ccdfc5767e8c4698e";

export default node;
