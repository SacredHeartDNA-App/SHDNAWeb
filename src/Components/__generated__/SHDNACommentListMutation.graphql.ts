/**
 * @generated SignedSource<<b6fd273bc71ad1d1f689bebc4291e909>>
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
  readonly createComment: number | null | undefined;
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
    "kind": "ScalarField",
    "name": "createComment",
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
    "cacheID": "333c8609162cd6ba0f1815a17e45df92",
    "id": null,
    "metadata": {},
    "name": "SHDNACommentListMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNACommentListMutation(\n  $text: String!\n  $content_id: ID!\n  $relationship: ContentEnum!\n) {\n  createComment(text: $text, content_id: $content_id, relationship: $relationship)\n}\n"
  }
};
})();

(node as any).hash = "0b1912a66c9c59040677f5c7a3d5b795";

export default node;
