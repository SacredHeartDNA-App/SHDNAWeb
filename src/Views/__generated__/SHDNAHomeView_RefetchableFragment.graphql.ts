/**
 * @generated SignedSource<<7c340237480d16ea2b552dc045ec1103>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAHomeView_RefetchableFragment$data = {
  readonly news: ReadonlyArray<{
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"SHDNANewsBlockFragment">;
  }> | null | undefined;
  readonly " $fragmentType": "SHDNAHomeView_RefetchableFragment";
};
export type SHDNAHomeView_RefetchableFragment$key = {
  readonly " $data"?: SHDNAHomeView_RefetchableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAHomeView_RefetchableFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./SHDNAHomeViewRefetchQuery.graphql')
    }
  },
  "name": "SHDNAHomeView_RefetchableFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "News",
      "kind": "LinkedField",
      "name": "news",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SHDNANewsBlockFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "a6643d99718f25df0fc692b0e6e2f8b5";

export default node;
