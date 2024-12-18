/**
 * @generated SignedSource<<219cff25463d5481b29f20d0bc72f351>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNACommentLikeMutation$variables = {
  commentId: string;
};
export type SHDNACommentLikeMutation$data = {
  readonly likeComment: number;
};
export type SHDNACommentLikeMutation = {
  response: SHDNACommentLikeMutation$data;
  variables: SHDNACommentLikeMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "commentId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "commentId",
        "variableName": "commentId"
      }
    ],
    "kind": "ScalarField",
    "name": "likeComment",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNACommentLikeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNACommentLikeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "380843140a794a73ad15af46512f96c9",
    "id": null,
    "metadata": {},
    "name": "SHDNACommentLikeMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNACommentLikeMutation(\n  $commentId: ID!\n) {\n  likeComment(commentId: $commentId)\n}\n"
  }
};
})();

(node as any).hash = "07d9d3981f91fc9cdb0225531a028ee7";

export default node;
