/**
 * @generated SignedSource<<cf5ca67df76cc49c69be6e9817de3227>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNAWebSignInMutation$variables = {
  adminOnly?: boolean | null | undefined;
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "adminOnly"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "adminOnly",
        "variableName": "adminOnly"
      },
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAWebSignInMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SHDNAWebSignInMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "5a794d1a19a623d6817ed7b2c4f730e9",
    "id": null,
    "metadata": {},
    "name": "SHDNAWebSignInMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAWebSignInMutation(\n  $email: String!\n  $password: String!\n  $adminOnly: Boolean\n) {\n  signIn(email: $email, password: $password, adminOnly: $adminOnly) {\n    user {\n      id\n    }\n    authToken\n  }\n}\n"
  }
};
})();

(node as any).hash = "1c1faccb1cd29c769dbcf08f61b1f68b";

export default node;
