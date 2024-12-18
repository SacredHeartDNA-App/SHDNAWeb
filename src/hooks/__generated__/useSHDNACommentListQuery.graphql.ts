/**
 * @generated SignedSource<<7e5fbc4a632662f9523ba6d9a5d56e00>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContentEnum = "COMMENTS" | "NEWS" | "POSTS" | "%future added value";
export type useSHDNACommentListQuery$variables = {
  contentId: string;
  relationship: ContentEnum;
};
export type useSHDNACommentListQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"useSHDNACommentList_RefetchableFragment">;
};
export type useSHDNACommentListQuery = {
  response: useSHDNACommentListQuery$data;
  variables: useSHDNACommentListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "contentId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "relationship"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "contentId",
    "variableName": "contentId"
  },
  {
    "kind": "Variable",
    "name": "relationship",
    "variableName": "relationship"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useSHDNACommentListQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "useSHDNACommentList_RefetchableFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSHDNACommentListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Comment",
        "kind": "LinkedField",
        "name": "getContentComments",
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
          (v2/*: any*/),
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
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              (v3/*: any*/),
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
                  (v3/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "62a356d35995059d065b58ad6347f13a",
    "id": null,
    "metadata": {},
    "name": "useSHDNACommentListQuery",
    "operationKind": "query",
    "text": "query useSHDNACommentListQuery(\n  $contentId: ID!\n  $relationship: ContentEnum!\n) {\n  ...useSHDNACommentList_RefetchableFragment_L60ST\n}\n\nfragment SHDNAComment_fragment on Comment {\n  likes\n  text\n  id\n  isLikedByUser\n  author {\n    name\n    lastName\n    ...SHDNAUserRow_Fragment\n    id\n  }\n}\n\nfragment SHDNAProfileView_Fragment on User {\n  name\n  lastName\n  community {\n    name\n    id\n  }\n}\n\nfragment SHDNAUserRow_Fragment on User {\n  name\n  lastName\n  profilePic\n  bio\n  ...SHDNAProfileView_Fragment\n}\n\nfragment useSHDNACommentList_RefetchableFragment_L60ST on Query {\n  getContentComments(contentId: $contentId, relationship: $relationship) {\n    ...SHDNAComment_fragment\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "7069f01ca0c8cabe0721bbd55928850d";

export default node;
