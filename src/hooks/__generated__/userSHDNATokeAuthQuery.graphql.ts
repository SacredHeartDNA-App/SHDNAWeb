/**
 * @generated SignedSource<<0b86d2444115aa5e9005c81b9cd7846a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type userSHDNATokeAuthQuery$variables = {
  token: string;
};
export type userSHDNATokeAuthQuery$data = {
  readonly verifyToken: {
    readonly id: string;
  } | null | undefined;
};
export type userSHDNATokeAuthQuery = {
  response: userSHDNATokeAuthQuery$data;
  variables: userSHDNATokeAuthQuery$variables;
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
    "name": "userSHDNATokeAuthQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "userSHDNATokeAuthQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4732c10224841d3f5fbf483b68ec63af",
    "id": null,
    "metadata": {},
    "name": "userSHDNATokeAuthQuery",
    "operationKind": "query",
    "text": "query userSHDNATokeAuthQuery(\n  $token: String!\n) {\n  verifyToken(token: $token) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "537ff3aedb9c84c986b47bae8e2ef7ca";

export default node;
