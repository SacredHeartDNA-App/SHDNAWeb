/**
 * @generated SignedSource<<adf0f7f36b5583a51a8bf39ccda76338>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNACurrenViewMutation$variables = {
  token: string;
};
export type SHDNACurrenViewMutation$data = {
  readonly verifyToken: {
    readonly id: string;
  } | null | undefined;
};
export type SHDNACurrenViewMutation = {
  response: SHDNACurrenViewMutation$data;
  variables: SHDNACurrenViewMutation$variables;
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
    "name": "SHDNACurrenViewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNACurrenViewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f70455378ed3ab121cb15e872f8fe28a",
    "id": null,
    "metadata": {},
    "name": "SHDNACurrenViewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNACurrenViewMutation(\n  $token: String!\n) {\n  verifyToken(token: $token) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b048eb3a75c7242285dd013a21fc214b";

export default node;
