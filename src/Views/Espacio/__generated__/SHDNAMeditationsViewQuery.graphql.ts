/**
 * @generated SignedSource<<7808a9f9e1707f2ec651f52ac2fe2985>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAMeditationsViewQuery$variables = Record<PropertyKey, never>;
export type SHDNAMeditationsViewQuery$data = {
  readonly getMeditations: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAMediaBlock_fragmment">;
  }> | null | undefined;
};
export type SHDNAMeditationsViewQuery = {
  response: SHDNAMeditationsViewQuery$data;
  variables: SHDNAMeditationsViewQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAMeditationsViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Meditation",
        "kind": "LinkedField",
        "name": "getMeditations",
        "plural": true,
        "selections": [
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
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SHDNAMeditationsViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Meditation",
        "kind": "LinkedField",
        "name": "getMeditations",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created_at",
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
            "name": "cover",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isSeen",
            "storageKey": null
          },
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
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "media",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mediaType",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "52bd851c2cca6e0ddd03f9b314860866",
    "id": null,
    "metadata": {},
    "name": "SHDNAMeditationsViewQuery",
    "operationKind": "query",
    "text": "query SHDNAMeditationsViewQuery {\n  getMeditations {\n    ...SHDNAMediaBlock_fragmment\n    id\n  }\n}\n\nfragment SHDNAMediaBlock_fragmment on Meditation {\n  created_at\n  title\n  cover\n  isSeen\n  ...SHDNAMeditationSubview_fragmment\n}\n\nfragment SHDNAMeditationSubview_fragmment on Meditation {\n  id\n  title\n  description\n  media\n  mediaType\n}\n"
  }
};

(node as any).hash = "7ddf33b78f2e9f93e05b21a1fedbc24d";

export default node;
