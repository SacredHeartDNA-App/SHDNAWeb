/**
 * @generated SignedSource<<c1fa8d43e7683f53b58fd87c7e422b35>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNAWebSignInMutation$variables = {
  email: string;
  password: string;
};
export type SHDNAWebSignInMutation$data = {
  readonly signIn: {
    readonly authToken: string;
    readonly user: {
      readonly id: string;
    };
  };
};
export type SHDNAWebSignInMutation = {
  response: SHDNAWebSignInMutation$data;
  variables: SHDNAWebSignInMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "AuthUser",
    "kind": "LinkedField",
    "name": "signIn",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "authToken",
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
    "name": "SHDNAWebSignInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAWebSignInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4f44da0f45956d60e3f16ef8f96047d0",
    "id": null,
    "metadata": {},
    "name": "SHDNAWebSignInMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAWebSignInMutation(\n  $email: String!\n  $password: String!\n) {\n  signIn(email: $email, password: $password) {\n    user {\n      id\n    }\n    authToken\n  }\n}\n"
  }
};
})();

(node as any).hash = "095ec96449ee5a63ed5d78422ff05958";

export default node;
