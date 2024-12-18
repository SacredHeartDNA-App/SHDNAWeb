/**
 * @generated SignedSource<<720dfdda30081c3d12919f594cfc8d2c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAHomeViewRefetchQuery$variables = Record<PropertyKey, never>;
export type SHDNAHomeViewRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAHomeView_RefetchableFragment">;
};
export type SHDNAHomeViewRefetchQuery = {
  response: SHDNAHomeViewRefetchQuery$data;
  variables: SHDNAHomeViewRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAHomeViewRefetchQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "SHDNAHomeView_RefetchableFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SHDNAHomeViewRefetchQuery",
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
            "name": "text",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "profilePic",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bio",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Community",
                "kind": "LinkedField",
                "name": "community",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/)
                ],
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "likes",
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7210895c0b2a4d1b976fa974b3657ce9",
    "id": null,
    "metadata": {},
    "name": "SHDNAHomeViewRefetchQuery",
    "operationKind": "query",
    "text": "query SHDNAHomeViewRefetchQuery {\n  ...SHDNAHomeView_RefetchableFragment\n}\n\nfragment SHDNAHomeView_RefetchableFragment on Query {\n  news {\n    title\n    ...SHDNANewsBlockFragment\n    id\n  }\n}\n\nfragment SHDNANewsBlockFragment on News {\n  cover\n  title\n  text\n  user {\n    ...SHDNAUserRow_Fragment\n    id\n  }\n  ...SHDNANewsView\n}\n\nfragment SHDNANewsView on News {\n  likes\n  text\n  id\n}\n\nfragment SHDNAProfileView_Fragment on User {\n  name\n  lastName\n  community {\n    name\n    id\n  }\n}\n\nfragment SHDNAUserRow_Fragment on User {\n  name\n  lastName\n  profilePic\n  bio\n  ...SHDNAProfileView_Fragment\n}\n"
  }
};
})();

(node as any).hash = "a6643d99718f25df0fc692b0e6e2f8b5";

export default node;
