/**
 * @generated SignedSource<<32ac27e0a11743dd7849a755bb897091>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAMeditationsRowQuery$variables = {
  ids?: ReadonlyArray<string> | null | undefined;
};
export type SHDNAMeditationsRowQuery$data = {
  readonly getMeditationsById: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAMediaBlock_fragmment">;
  }> | null | undefined;
};
export type SHDNAMeditationsRowQuery = {
  response: SHDNAMeditationsRowQuery$data;
  variables: SHDNAMeditationsRowQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "ids"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "ids",
    "variableName": "ids"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAMeditationsRowQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Meditation",
        "kind": "LinkedField",
        "name": "getMeditationsById",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAMeditationsRowQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Meditation",
        "kind": "LinkedField",
        "name": "getMeditationsById",
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
    "cacheID": "e96e0298abc79c2ca29e90655e178859",
    "id": null,
    "metadata": {},
    "name": "SHDNAMeditationsRowQuery",
    "operationKind": "query",
    "text": "query SHDNAMeditationsRowQuery(\n  $ids: [String!]\n) {\n  getMeditationsById(ids: $ids) {\n    ...SHDNAMediaBlock_fragmment\n    id\n  }\n}\n\nfragment SHDNAMediaBlock_fragmment on Meditation {\n  created_at\n  title\n  cover\n  isSeen\n  ...SHDNAMeditationSubview_fragmment\n}\n\nfragment SHDNAMeditationSubview_fragmment on Meditation {\n  id\n  title\n  description\n  media\n  mediaType\n}\n"
  }
};
})();

(node as any).hash = "f5b65f05c8ab00cfb6b9b369827ad147";

export default node;
