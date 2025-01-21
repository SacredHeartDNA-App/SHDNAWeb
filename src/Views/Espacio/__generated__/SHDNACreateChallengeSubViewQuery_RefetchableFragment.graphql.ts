/**
 * @generated SignedSource<<af74ebf0abce5826429785579f9bd9e3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNACreateChallengeSubViewQuery_RefetchableFragment$data = {
  readonly searchMeditation: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAMediaBlock_fragmment">;
  }> | null | undefined;
  readonly " $fragmentType": "SHDNACreateChallengeSubViewQuery_RefetchableFragment";
};
export type SHDNACreateChallengeSubViewQuery_RefetchableFragment$key = {
  readonly " $data"?: SHDNACreateChallengeSubViewQuery_RefetchableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNACreateChallengeSubViewQuery_RefetchableFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "query"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./SHDNACreateChallengeSubViewSearchQuery.graphql')
    }
  },
  "name": "SHDNACreateChallengeSubViewQuery_RefetchableFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "query",
          "variableName": "query"
        }
      ],
      "concreteType": "Meditation",
      "kind": "LinkedField",
      "name": "searchMeditation",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SHDNAMediaBlock_fragmment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "790f326894e430319f9d47804dc5cbb0";

export default node;
