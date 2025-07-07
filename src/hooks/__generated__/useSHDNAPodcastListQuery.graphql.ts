/**
 * @generated SignedSource<<49de0e389c3b4fa26ef561f2fa1bd3eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSHDNAPodcastListQuery$variables = Record<PropertyKey, never>;
export type useSHDNAPodcastListQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"useSHDNAPodcastList_RefetchableFragment">;
};
export type useSHDNAPodcastListQuery = {
  response: useSHDNAPodcastListQuery$data;
  variables: useSHDNAPodcastListQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSHDNAPodcastListQuery",
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
    "name": "useSHDNAPodcastListQuery",
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
    "cacheID": "9f3105a7b8b4743bbc4e2998331aaad7",
    "id": null,
    "metadata": {},
    "name": "useSHDNAPodcastListQuery",
    "operationKind": "query",
    "text": "query useSHDNAPodcastListQuery {\n  ...useSHDNAPodcastList_RefetchableFragment\n}\n\nfragment SHDNAPodcastBlockFragment on PodcastChapter {\n  id\n  title\n  description\n  audio_url\n}\n\nfragment useSHDNAPodcastList_RefetchableFragment on Query {\n  getPodcastEpisodes {\n    ...SHDNAPodcastBlockFragment\n    id\n  }\n}\n"
  }
};

(node as any).hash = "c824a83257d58d45980eef71d093a55a";

export default node;
