/**
 * @generated SignedSource<<66183eccdbdb5073ea05d5820d9838b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNACreateChallengeSubViewSearchQuery$variables = {
  query: string;
};
export type SHDNACreateChallengeSubViewSearchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SHDNACreateChallengeSubViewQuery_RefetchableFragment">;
};
export type SHDNACreateChallengeSubViewSearchQuery = {
  response: SHDNACreateChallengeSubViewSearchQuery$data;
  variables: SHDNACreateChallengeSubViewSearchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNACreateChallengeSubViewSearchQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "SHDNACreateChallengeSubViewQuery_RefetchableFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNACreateChallengeSubViewSearchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
    "cacheID": "aa6d9d26b2fffbfc1e2c2615502d5ac5",
    "id": null,
    "metadata": {},
    "name": "SHDNACreateChallengeSubViewSearchQuery",
    "operationKind": "query",
    "text": "query SHDNACreateChallengeSubViewSearchQuery(\n  $query: String!\n) {\n  ...SHDNACreateChallengeSubViewQuery_RefetchableFragment_1Qr5xf\n}\n\nfragment SHDNACreateChallengeSubViewQuery_RefetchableFragment_1Qr5xf on Query {\n  searchMeditation(query: $query) {\n    id\n    ...SHDNAMediaBlock_fragmment\n  }\n}\n\nfragment SHDNAMediaBlock_fragmment on Meditation {\n  created_at\n  title\n  cover\n  isSeen\n  ...SHDNAMeditationSubview_fragmment\n}\n\nfragment SHDNAMeditationSubview_fragmment on Meditation {\n  id\n  title\n  description\n  media\n  mediaType\n}\n"
  }
};
})();

(node as any).hash = "790f326894e430319f9d47804dc5cbb0";

export default node;
