/**
 * @generated SignedSource<<7381fa68787e06e6597cc5fd21685371>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSHDNANewsList_RefetchableFragment$data = {
  readonly news: ReadonlyArray<{
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"SHDNANewsBlockFragment">;
  }> | null | undefined;
  readonly " $fragmentType": "useSHDNANewsList_RefetchableFragment";
};
export type useSHDNANewsList_RefetchableFragment$key = {
  readonly " $data"?: useSHDNANewsList_RefetchableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useSHDNANewsList_RefetchableFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./useSHDNANewsListRefetchQuery.graphql')
    }
  },
  "name": "useSHDNANewsList_RefetchableFragment",
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

(node as any).hash = "13b37995a72aadd379a2d05abb5bd891";

export default node;
