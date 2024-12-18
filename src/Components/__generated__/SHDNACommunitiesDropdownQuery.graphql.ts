/**
 * @generated SignedSource<<e51f2c46afaf421bb4ccc2f347a3c82d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNACommunitiesDropdownQuery$variables = Record<PropertyKey, never>;
export type SHDNACommunitiesDropdownQuery$data = {
  readonly getCommunities: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  }> | null | undefined;
};
export type SHDNACommunitiesDropdownQuery = {
  response: SHDNACommunitiesDropdownQuery$data;
  variables: SHDNACommunitiesDropdownQuery$variables;
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
    "name": "SHDNACommunitiesDropdownQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SHDNACommunitiesDropdownQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "eed5f56542cceb487a9d12ac9304f6b0",
    "id": null,
    "metadata": {},
    "name": "SHDNACommunitiesDropdownQuery",
    "operationKind": "query",
    "text": "query SHDNACommunitiesDropdownQuery {\n  getCommunities {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d370a6e98c4a075b4394c7859bf16c9b";

export default node;
