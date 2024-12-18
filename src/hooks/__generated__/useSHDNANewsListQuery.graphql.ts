/**
 * @generated SignedSource<<2b396b484cd4806b3b66409242a1cdfe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSHDNANewsListQuery$variables = Record<PropertyKey, never>;
export type useSHDNANewsListQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"useSHDNANewsList_RefetchableFragment">;
};
export type useSHDNANewsListQuery = {
  response: useSHDNANewsListQuery$data;
  variables: useSHDNANewsListQuery$variables;
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
    "name": "useSHDNANewsListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "useSHDNANewsList_RefetchableFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useSHDNANewsListQuery",
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
    "cacheID": "5e407bedd900fc8ada823184a63dfed0",
    "id": null,
    "metadata": {},
    "name": "useSHDNANewsListQuery",
    "operationKind": "query",
    "text": "query useSHDNANewsListQuery {\n  ...useSHDNANewsList_RefetchableFragment\n}\n\nfragment SHDNANewsBlockFragment on News {\n  cover\n  title\n  text\n  user {\n    ...SHDNAUserRow_Fragment\n    id\n  }\n  ...SHDNANewsView\n}\n\nfragment SHDNANewsView on News {\n  likes\n  text\n  id\n}\n\nfragment SHDNAProfileView_Fragment on User {\n  name\n  lastName\n  community {\n    name\n    id\n  }\n}\n\nfragment SHDNAUserRow_Fragment on User {\n  name\n  lastName\n  profilePic\n  bio\n  ...SHDNAProfileView_Fragment\n}\n\nfragment useSHDNANewsList_RefetchableFragment on Query {\n  news {\n    title\n    ...SHDNANewsBlockFragment\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "2439c7472db3b64ad68b2a118f8646a8";

export default node;
