/**
 * @generated SignedSource<<9fb258dc114dd6facdc37625640b3a8c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSHDNAPodcastList_RefetchableFragment$data = {
  readonly getPodcastEpisodes: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAPodcastBlockFragment">;
  }> | null | undefined;
  readonly " $fragmentType": "useSHDNAPodcastList_RefetchableFragment";
};
export type useSHDNAPodcastList_RefetchableFragment$key = {
  readonly " $data"?: useSHDNAPodcastList_RefetchableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useSHDNAPodcastList_RefetchableFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./useSHDNAPodcastListRefetchQuery.graphql')
    }
  },
  "name": "useSHDNAPodcastList_RefetchableFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PodcastChapter",
      "kind": "LinkedField",
      "name": "getPodcastEpisodes",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SHDNAPodcastBlockFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "654a62d917aed56caf2825ad3f602594";

export default node;
