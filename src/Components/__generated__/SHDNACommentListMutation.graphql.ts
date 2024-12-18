/**
 * @generated SignedSource<<d368cc32f7652255e7d31115d568d52e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ContentEnum = "COMMENTS" | "NEWS" | "POSTS" | "%future added value";
export type SHDNACommentListMutation$variables = {
  content_id: string;
  relationship: ContentEnum;
  text: string;
};
export type SHDNACommentListMutation$data = {
  readonly createComment: {
    readonly id: string;
  } | null | undefined;
};
export type SHDNACommentListMutation = {
  response: SHDNACommentListMutation$data;
  variables: SHDNACommentListMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "content_id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "relationship"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "text"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "content_id",
        "variableName": "content_id"
      },
      {
        "kind": "Variable",
        "name": "relationship",
        "variableName": "relationship"
      },
      {
        "kind": "Variable",
        "name": "text",
        "variableName": "text"
      }
    ],
    "concreteType": "Comment",
    "kind": "LinkedField",
    "name": "createComment",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNACommentListMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "SHDNACommentListMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "11d6db77e7b007c1d1e066dfd0828362",
    "id": null,
    "metadata": {},
    "name": "SHDNACommentListMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNACommentListMutation(\n  $text: String!\n  $content_id: ID!\n  $relationship: ContentEnum!\n) {\n  createComment(text: $text, content_id: $content_id, relationship: $relationship) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6583e785cd9aecaf7a839def89a8cdf9";

export default node;
