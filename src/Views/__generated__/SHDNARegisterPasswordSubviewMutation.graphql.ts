/**
 * @generated SignedSource<<38902756cc1cbac974e529eedda57811>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SignUpInput = {
  bio?: string | null | undefined;
  birthday: any;
  community: string;
  email: string;
  lastName: string;
  name: string;
  password: string;
  profilePic?: MediaInput | null | undefined;
};
export type MediaInput = {
  base64: string;
  fileName: string;
  type: string;
  uri: string;
};
export type SHDNARegisterPasswordSubviewMutation$variables = {
  input: SignUpInput;
};
export type SHDNARegisterPasswordSubviewMutation$data = {
  readonly signUp: number;
};
export type SHDNARegisterPasswordSubviewMutation = {
  response: SHDNARegisterPasswordSubviewMutation$data;
  variables: SHDNARegisterPasswordSubviewMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "kind": "ScalarField",
    "name": "signUp",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNARegisterPasswordSubviewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNARegisterPasswordSubviewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e4ed3b6defb7238639b9f1c6e38d446b",
    "id": null,
    "metadata": {},
    "name": "SHDNARegisterPasswordSubviewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNARegisterPasswordSubviewMutation(\n  $input: SignUpInput!\n) {\n  signUp(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "ac2f7210b4dcf216bcb7dcee85894613";

export default node;
