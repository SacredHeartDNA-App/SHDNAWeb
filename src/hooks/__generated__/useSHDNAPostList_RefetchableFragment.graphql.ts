/**
 * @generated SignedSource<<a1fccd866c27a7e2fc7d07108a57ad01>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSHDNAPostList_RefetchableFragment$data = {
  readonly posts: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAPostBlock_Fragment">;
  }> | null | undefined;
  readonly " $fragmentType": "useSHDNAPostList_RefetchableFragment";
};
export type useSHDNAPostList_RefetchableFragment$key = {
  readonly " $data"?: useSHDNAPostList_RefetchableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useSHDNAPostList_RefetchableFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./useSHDNAPostListRefetchQuery.graphql')
    }
  },
  "name": "useSHDNAPostList_RefetchableFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Post",
      "kind": "LinkedField",
      "name": "posts",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SHDNAPostBlock_Fragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "350fbeba0297621b5966a3e9586e9eb6";

export default node;
