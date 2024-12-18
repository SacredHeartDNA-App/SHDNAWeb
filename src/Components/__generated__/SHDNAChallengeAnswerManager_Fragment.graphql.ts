/**
 * @generated SignedSource<<5b03c7afdcf825c4fb14ec192d901c54>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAChallengeAnswerManager_Fragment$data = {
  readonly options: ReadonlyArray<string | null | undefined> | null | undefined;
  readonly " $fragmentType": "SHDNAChallengeAnswerManager_Fragment";
};
export type SHDNAChallengeAnswerManager_Fragment$key = {
  readonly " $data"?: SHDNAChallengeAnswerManager_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAChallengeAnswerManager_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAChallengeAnswerManager_Fragment",
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

(node as any).hash = "eb2e888e8a1d9198707d5481532bf19e";

export default node;
