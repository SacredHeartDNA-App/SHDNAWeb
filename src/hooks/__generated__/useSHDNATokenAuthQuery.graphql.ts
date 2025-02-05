/**
 * @generated SignedSource<<b531513e70a2dbf0b31047121347a02d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useSHDNATokenAuthQuery$variables = Record<PropertyKey, never>;
export type useSHDNATokenAuthQuery$data = {
  readonly verifyTokenWeb: {
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
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "verifyTokenWeb",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSHDNATokenAuthQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useSHDNATokenAuthQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a4160b6771d4b181cadf55982d4ac02e",
    "id": null,
    "metadata": {},
    "name": "useSHDNATokenAuthQuery",
    "operationKind": "query",
    "text": "query useSHDNATokenAuthQuery {\n  verifyTokenWeb {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "2d85f4cd47cd895e742ab995b0246c2c";

export default node;
