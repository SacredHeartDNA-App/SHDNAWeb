/**
 * @generated SignedSource<<6842160f8ffc6d0c1b65aee79704e58e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNACommentMutation$variables = {
  commentId: string;
};
export type SHDNACommentMutation$data = {
  readonly likeComment: number | null | undefined;
};
export type SHDNACommentMutation = {
  response: SHDNACommentMutation$data;
  variables: SHDNACommentMutation$variables;
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
    "name": "SHDNACommentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNACommentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b89ec8375e4d056455261e506dfb93ff",
    "id": null,
    "metadata": {},
    "name": "SHDNACommentMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNACommentMutation(\n  $commentId: ID!\n) {\n  likeComment(commentId: $commentId)\n}\n"
  }
};
})();

(node as any).hash = "088117ccb155d11b5aa3ba55865cd8f6";

export default node;
