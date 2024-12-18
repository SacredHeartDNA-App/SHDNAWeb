/**
 * @generated SignedSource<<70cece76c1b4d7d6ad5595c74e7b2cf5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useSHDNATokenAuthQuery$variables = {
  token: string;
};
export type useSHDNATokenAuthQuery$data = {
  readonly verifyToken: {
    readonly id: string;
  } | null | undefined;
};
export type useSHDNATokenAuthQuery = {
  response: useSHDNATokenAuthQuery$data;
  variables: useSHDNATokenAuthQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "token"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "token",
        "variableName": "token"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "verifyToken",
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
    "name": "useSHDNATokenAuthQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSHDNATokenAuthQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "13859540f4051288bbfb5cfb54e52ca0",
    "id": null,
    "metadata": {},
    "name": "useSHDNATokenAuthQuery",
    "operationKind": "query",
    "text": "query useSHDNATokenAuthQuery(\n  $token: String!\n) {\n  verifyToken(token: $token) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6bd4014533ed59e75eec640330770296";

export default node;
