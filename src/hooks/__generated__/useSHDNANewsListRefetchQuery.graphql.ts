/**
 * @generated SignedSource<<dd1c9394e40f85f21e84df430ab6c70f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSHDNANewsListRefetchQuery$variables = Record<PropertyKey, never>;
export type useSHDNANewsListRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"useSHDNANewsList_RefetchableFragment">;
};
export type useSHDNANewsListRefetchQuery = {
  response: useSHDNANewsListRefetchQuery$data;
  variables: useSHDNANewsListRefetchQuery$variables;
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
    "name": "useSHDNANewsListRefetchQuery",
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
    "name": "useSHDNANewsListRefetchQuery",
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
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "extLinks",
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
          },
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
            "name": "gallery",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "42a0251fde21c1a977ef9b7801e217f8",
    "id": null,
    "metadata": {},
    "name": "useSHDNANewsListRefetchQuery",
    "operationKind": "query",
    "text": "query useSHDNANewsListRefetchQuery {\n  ...useSHDNANewsList_RefetchableFragment\n}\n\nfragment SHDNANewsBlockFragment on News {\n  cover\n  title\n  text\n  id\n  extLinks\n  user {\n    ...SHDNAUserRow_Fragment\n    id\n  }\n  ...SHDNANewsView\n}\n\nfragment SHDNANewsView on News {\n  likes\n  text\n  id\n  gallery\n  extLinks\n}\n\nfragment SHDNAProfileView_Fragment on User {\n  name\n  lastName\n  community {\n    name\n    id\n  }\n}\n\nfragment SHDNAUserRow_Fragment on User {\n  name\n  lastName\n  profilePic\n  bio\n  ...SHDNAProfileView_Fragment\n}\n\nfragment useSHDNANewsList_RefetchableFragment on Query {\n  news {\n    title\n    ...SHDNANewsBlockFragment\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "13b37995a72aadd379a2d05abb5bd891";

export default node;
