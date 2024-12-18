/**
 * @generated SignedSource<<e58e20e1bb245a5fe9f62cf079264116>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNARegisterSubviewQuery$variables = Record<PropertyKey, never>;
export type SHDNARegisterSubviewQuery$data = {
  readonly getCommunities: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  }> | null | undefined;
};
export type SHDNARegisterSubviewQuery = {
  response: SHDNARegisterSubviewQuery$data;
  variables: SHDNARegisterSubviewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Community",
    "kind": "LinkedField",
    "name": "getCommunities",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNARegisterSubviewQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SHDNARegisterSubviewQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0d894d7ce95d344596e208442c6e70f9",
    "id": null,
    "metadata": {},
    "name": "SHDNARegisterSubviewQuery",
    "operationKind": "query",
    "text": "query SHDNARegisterSubviewQuery {\n  getCommunities {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f3b49f6b7e7fbc823597eb19283c6125";

export default node;
