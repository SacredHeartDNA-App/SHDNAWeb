/**
 * @generated SignedSource<<48ecb3c87f590ba03d4ccb16407b21a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PostInput = {
  media?: ReadonlyArray<MediaInput | null | undefined> | null | undefined;
  text: string;
};
export type MediaInput = {
  base64: string;
  fileName: string;
  type: string;
  uri: string;
};
export type SHDNACreatePostViewMutation$variables = {
  input: PostInput;
};
export type SHDNACreatePostViewMutation$data = {
  readonly createPost: {
    readonly id: string;
  } | null | undefined;
};
export type SHDNACreatePostViewMutation = {
  response: SHDNACreatePostViewMutation$data;
  variables: SHDNACreatePostViewMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "createPost",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNACreatePostViewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNACreatePostViewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6b6a8a35d3e8b2203accb811df0c7922",
    "id": null,
    "metadata": {},
    "name": "SHDNACreatePostViewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNACreatePostViewMutation(\n  $input: PostInput!\n) {\n  createPost(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "789c31611d6c4fb22a53f19c27de9224";

export default node;
