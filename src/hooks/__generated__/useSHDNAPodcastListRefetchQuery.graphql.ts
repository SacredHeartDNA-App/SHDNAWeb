/**
 * @generated SignedSource<<80bbf6211dabb5def0c17a0d5313dec2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSHDNAPodcastListRefetchQuery$variables = Record<PropertyKey, never>;
export type useSHDNAPodcastListRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"useSHDNAPodcastList_RefetchableFragment">;
};
export type useSHDNAPodcastListRefetchQuery = {
  response: useSHDNAPodcastListRefetchQuery$data;
  variables: useSHDNAPodcastListRefetchQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSHDNAPodcastListRefetchQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "useSHDNAPodcastList_RefetchableFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useSHDNAPodcastListRefetchQuery",
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
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "audio_url",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c462ef54c4268c926e6c58875609acb0",
    "id": null,
    "metadata": {},
    "name": "useSHDNAPodcastListRefetchQuery",
    "operationKind": "query",
    "text": "query useSHDNAPodcastListRefetchQuery {\n  ...useSHDNAPodcastList_RefetchableFragment\n}\n\nfragment SHDNAPodcastBlockFragment on PodcastChapter {\n  id\n  title\n  description\n  audio_url\n}\n\nfragment useSHDNAPodcastList_RefetchableFragment on Query {\n  getPodcastEpisodes {\n    ...SHDNAPodcastBlockFragment\n    id\n  }\n}\n"
  }
};

(node as any).hash = "654a62d917aed56caf2825ad3f602594";

export default node;
