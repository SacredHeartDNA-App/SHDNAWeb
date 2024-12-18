/**
 * @generated SignedSource<<c0a4102d9d0731ae20d4751ecd1f0a39>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNACommentListQuery$variables = {
  contentId: string;
};
export type SHDNACommentListQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SHDNACommentList_RefetchableFragment">;
};
export type SHDNACommentListQuery = {
  response: SHDNACommentListQuery$data;
  variables: SHDNACommentListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "contentId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "contentId",
    "variableName": "contentId"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNACommentListQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "SHDNACommentList_RefetchableFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNACommentListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Comment",
        "kind": "LinkedField",
        "name": "newsComments",
        "plural": true,
        "selections": [
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
            "name": "text",
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
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4ec5a7bf15e7a48ba143fee034b9df32",
    "id": null,
    "metadata": {},
    "name": "SHDNACommentListQuery",
    "operationKind": "query",
    "text": "query SHDNACommentListQuery(\n  $contentId: ID!\n) {\n  ...SHDNACommentList_RefetchableFragment_3SK5LQ\n}\n\nfragment SHDNACommentList_RefetchableFragment_3SK5LQ on Query {\n  newsComments(contentId: $contentId) {\n    ...SHDNAComment_fragment\n  }\n}\n\nfragment SHDNAComment_fragment on Comment {\n  likes\n  text\n  id\n  author {\n    ...SHDNAUserRow_Fragment\n  }\n}\n\nfragment SHDNAUserRow_Fragment on User {\n  name\n  lastName\n  profilePic\n}\n"
  }
};
})();

(node as any).hash = "80fce3d13a786b3b48026874f80ff13e";

export default node;
