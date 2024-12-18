/**
 * @generated SignedSource<<d397b88a4d8fd452b8afe5c1e54ab7d1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNAPostBlockMutation$variables = {
  postId: string;
};
export type SHDNAPostBlockMutation$data = {
  readonly deletePost: number | null | undefined;
};
export type SHDNAPostBlockMutation = {
  response: SHDNAPostBlockMutation$data;
  variables: SHDNAPostBlockMutation$variables;
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
    "name": "SHDNAPostBlockMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAPostBlockMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "81a1262f8ad34957e970735dbbb958d7",
    "id": null,
    "metadata": {},
    "name": "SHDNAPostBlockMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAPostBlockMutation(\n  $postId: ID!\n) {\n  deletePost(postId: $postId)\n}\n"
  }
};
})();

(node as any).hash = "d40e22458510f2212aec2779f0a62023";

export default node;
