/**
 * @generated SignedSource<<73101a306ce926118707397f84eca87c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNACreateChallengeSubViewQuery$variables = {
  query: string;
};
export type SHDNACreateChallengeSubViewQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SHDNACreateChallengeSubViewQuery_RefetchableFragment">;
};
export type SHDNACreateChallengeSubViewQuery = {
  response: SHDNACreateChallengeSubViewQuery$data;
  variables: SHDNACreateChallengeSubViewQuery$variables;
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
    "name": "SHDNACreateChallengeSubViewQuery",
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
    "name": "SHDNACreateChallengeSubViewQuery",
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
    "cacheID": "67aa60fc4361c6b979ff45f23c467ab4",
    "id": null,
    "metadata": {},
    "name": "SHDNACreateChallengeSubViewQuery",
    "operationKind": "query",
    "text": "query SHDNACreateChallengeSubViewQuery(\n  $query: String!\n) {\n  ...SHDNACreateChallengeSubViewQuery_RefetchableFragment_1Qr5xf\n}\n\nfragment SHDNACreateChallengeSubViewQuery_RefetchableFragment_1Qr5xf on Query {\n  searchMeditation(query: $query) {\n    id\n    ...SHDNAMediaBlock_fragmment\n  }\n}\n\nfragment SHDNAMediaBlock_fragmment on Meditation {\n  created_at\n  title\n  cover\n  isSeen\n  ...SHDNAMeditationSubview_fragmment\n}\n\nfragment SHDNAMeditationSubview_fragmment on Meditation {\n  id\n  title\n  description\n  media\n  mediaType\n}\n"
  }
};
})();

(node as any).hash = "cd166640be653aff061c8d3a9fa3a89c";

export default node;
