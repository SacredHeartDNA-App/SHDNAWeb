/**
 * @generated SignedSource<<2a4c44e1e8cc2eec5b2d09056bc0448b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNAPostViewMutation$variables = {
  postId: string;
};
export type SHDNAPostViewMutation$data = {
  readonly deletePost: number | null | undefined;
};
export type SHDNAPostViewMutation = {
  response: SHDNAPostViewMutation$data;
  variables: SHDNAPostViewMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "postId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "postId",
        "variableName": "postId"
      }
    ],
    "kind": "ScalarField",
    "name": "deletePost",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAPostViewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAPostViewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d25a121c23ea653891b59aafa98f3375",
    "id": null,
    "metadata": {},
    "name": "SHDNAPostViewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAPostViewMutation(\n  $postId: ID!\n) {\n  deletePost(postId: $postId)\n}\n"
  }
};
})();

(node as any).hash = "a0f3d165e3c5f88ff9e169252ad755cc";

export default node;
