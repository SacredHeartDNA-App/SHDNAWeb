/**
 * @generated SignedSource<<06980049fa60a37b98a354a10ccb6256>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAChallengeAnswerClose_Fragment$data = {
  readonly options: ReadonlyArray<string | null | undefined> | null | undefined;
  readonly " $fragmentType": "SHDNAChallengeAnswerClose_Fragment";
};
export type SHDNAChallengeAnswerClose_Fragment$key = {
  readonly " $data"?: SHDNAChallengeAnswerClose_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAChallengeAnswerClose_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAChallengeAnswerClose_Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "options",
      "storageKey": null
    }
  ],
  "type": "Challenge",
  "abstractKey": null
};

(node as any).hash = "354f08364491eac9d281da60f6d679c0";

export default node;
