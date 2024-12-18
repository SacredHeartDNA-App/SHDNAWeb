/**
 * @generated SignedSource<<9f0fb0c2bc66aff9501bef3be497c36b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAHomeViewQuery$variables = Record<PropertyKey, never>;
export type SHDNAHomeViewQuery$data = {
  readonly news: ReadonlyArray<{
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"SHDNANewsBlockFragment">;
  }> | null | undefined;
};
export type SHDNAHomeViewQuery = {
  response: SHDNAHomeViewQuery$data;
  variables: SHDNAHomeViewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
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
    "name": "SHDNAHomeViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "News",
        "kind": "LinkedField",
        "name": "news",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SHDNAHomeViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "News",
        "kind": "LinkedField",
        "name": "news",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
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
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "70dcf03bbdc401a124aa398212723528",
    "id": null,
    "metadata": {},
    "name": "SHDNAHomeViewQuery",
    "operationKind": "query",
    "text": "query SHDNAHomeViewQuery {\n  news {\n    title\n    ...SHDNANewsBlockFragment\n    id\n  }\n}\n\nfragment SHDNANewsBlockFragment on News {\n  cover\n  title\n  text\n  user {\n    ...SHDNAUserRow_Fragment\n    id\n  }\n}\n\nfragment SHDNAUserRow_Fragment on User {\n  name\n  lastName\n  profilePic\n  bio\n}\n"
  }
};
})();

(node as any).hash = "b82bca15771d4ac203525f8771344f3a";

export default node;
