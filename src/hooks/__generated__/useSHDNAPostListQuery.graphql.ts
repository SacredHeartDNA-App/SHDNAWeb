/**
 * @generated SignedSource<<37dc2d707bd00bdde321675aa4d016b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSHDNAPostListQuery$variables = Record<PropertyKey, never>;
export type useSHDNAPostListQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"useSHDNAPostList_RefetchableFragment">;
};
export type useSHDNAPostListQuery = {
  response: useSHDNAPostListQuery$data;
  variables: useSHDNAPostListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSHDNAPostListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "useSHDNAPostList_RefetchableFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useSHDNAPostListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "posts",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "likes",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isLikedByUser",
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
            "kind": "ScalarField",
            "name": "media",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isOwner",
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
              (v1/*: any*/),
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
                  (v1/*: any*/),
                  (v0/*: any*/)
                ],
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "80ed3fe280488d415f8d56664f79c200",
    "id": null,
    "metadata": {},
    "name": "useSHDNAPostListQuery",
    "operationKind": "query",
    "text": "query useSHDNAPostListQuery {\n  ...useSHDNAPostList_RefetchableFragment\n}\n\nfragment SHDNAPostBlock_Fragment on Post {\n  id\n  likes\n  isLikedByUser\n  text\n  media\n  isOwner\n  user {\n    name\n    lastName\n    ...SHDNAUserRow_Fragment\n    id\n  }\n}\n\nfragment SHDNAProfileView_Fragment on User {\n  name\n  lastName\n  community {\n    name\n    id\n  }\n}\n\nfragment SHDNAUserRow_Fragment on User {\n  name\n  lastName\n  profilePic\n  bio\n  ...SHDNAProfileView_Fragment\n}\n\nfragment useSHDNAPostList_RefetchableFragment on Query {\n  posts {\n    ...SHDNAPostBlock_Fragment\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "3079a7732e048da78eb5206ab7991ec1";

export default node;
