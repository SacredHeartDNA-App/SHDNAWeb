/**
 * @generated SignedSource<<46560073ba8d838ca1dfb2bb2cfcf395>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAPodcastListQuery$variables = Record<PropertyKey, never>;
export type SHDNAPodcastListQuery$data = {
  readonly getPodcastEpisodes: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAPodcastBlockFragment">;
  }> | null | undefined;
};
export type SHDNAPodcastListQuery = {
  response: SHDNAPodcastListQuery$data;
  variables: SHDNAPodcastListQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAPodcastListQuery",
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
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SHDNAPodcastListQuery",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2fca14c4edb18c618da87276a606c354",
    "id": null,
    "metadata": {},
    "name": "SHDNAPodcastListQuery",
    "operationKind": "query",
    "text": "query SHDNAPodcastListQuery {\n  getPodcastEpisodes {\n    ...SHDNAPodcastBlockFragment\n    id\n  }\n}\n\nfragment SHDNAPodcastBlockFragment on PodcastChapter {\n  title\n  description\n  audio_url\n}\n"
  }
};

(node as any).hash = "f4ef7c0c11045a7f076979538f8d2bed";

export default node;
