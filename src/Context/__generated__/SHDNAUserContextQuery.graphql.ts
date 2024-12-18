/**
 * @generated SignedSource<<06e13cfb99f34f4fa1ec8962d0087da7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNAUserContextQuery$variables = {
  token: string;
};
export type SHDNAUserContextQuery$data = {
  readonly verifyToken: {
    readonly id: string;
  } | null | undefined;
};
export type SHDNAUserContextQuery = {
  response: SHDNAUserContextQuery$data;
  variables: SHDNAUserContextQuery$variables;
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
    "name": "SHDNAUserContextQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAUserContextQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8abd6a732317c888cf47174fcc814b0b",
    "id": null,
    "metadata": {},
    "name": "SHDNAUserContextQuery",
    "operationKind": "query",
    "text": "query SHDNAUserContextQuery(\n  $token: String!\n) {\n  verifyToken(token: $token) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "565ea83e717a4494ebf45cd41ed9fbce";

export default node;
