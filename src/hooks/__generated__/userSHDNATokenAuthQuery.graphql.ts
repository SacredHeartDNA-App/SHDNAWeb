/**
 * @generated SignedSource<<fcc58fad29da01108cbc131cf2f31eef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type userSHDNATokenAuthQuery$variables = {
  token: string;
};
export type userSHDNATokenAuthQuery$data = {
  readonly verifyToken: {
    readonly id: string;
  } | null | undefined;
};
export type userSHDNATokenAuthQuery = {
  response: userSHDNATokenAuthQuery$data;
  variables: userSHDNATokenAuthQuery$variables;
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
    "name": "userSHDNATokenAuthQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "userSHDNATokenAuthQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "73ea29c33a667be1390009d3411b207a",
    "id": null,
    "metadata": {},
    "name": "userSHDNATokenAuthQuery",
    "operationKind": "query",
    "text": "query userSHDNATokenAuthQuery(\n  $token: String!\n) {\n  verifyToken(token: $token) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "8d8b07324f89690a7d3248087d770d0c";

export default node;
