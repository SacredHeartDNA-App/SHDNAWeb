/**
 * @generated SignedSource<<cebc0941db0e004f38da321ae1316222>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNACommentUnlikeMutation$variables = {
  commentId: string;
};
export type SHDNACommentUnlikeMutation$data = {
  readonly unlikeComment: number | null | undefined;
};
export type SHDNACommentUnlikeMutation = {
  response: SHDNACommentUnlikeMutation$data;
  variables: SHDNACommentUnlikeMutation$variables;
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
    "name": "unlikeComment",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNACommentUnlikeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNACommentUnlikeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "65a0fed8c869dc490975ba74c45be27f",
    "id": null,
    "metadata": {},
    "name": "SHDNACommentUnlikeMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNACommentUnlikeMutation(\n  $commentId: ID!\n) {\n  unlikeComment(commentId: $commentId)\n}\n"
  }
};
})();

(node as any).hash = "c630d9f17b4a98ef03fdaef7b84a49ad";

export default node;
