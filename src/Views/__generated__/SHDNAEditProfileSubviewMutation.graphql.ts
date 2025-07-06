/**
 * @generated SignedSource<<c34fe5a0767b9149b3a99f9d334106fc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateUserInput = {
  bio?: string | null | undefined;
  lastName?: string | null | undefined;
  media?: MediaInput | null | undefined;
  name?: string | null | undefined;
};
export type MediaInput = {
  base64: string;
  fileName: string;
  type: string;
  uri: string;
};
export type SHDNAEditProfileSubviewMutation$variables = {
  input: UpdateUserInput;
};
export type SHDNAEditProfileSubviewMutation$data = {
  readonly updateProfile: number | null | undefined;
};
export type SHDNAEditProfileSubviewMutation = {
  response: SHDNAEditProfileSubviewMutation$data;
  variables: SHDNAEditProfileSubviewMutation$variables;
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
    "name": "updateProfile",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAEditProfileSubviewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAEditProfileSubviewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "83afcfe3bfebda6458a8a0b44722eda7",
    "id": null,
    "metadata": {},
    "name": "SHDNAEditProfileSubviewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAEditProfileSubviewMutation(\n  $input: UpdateUserInput!\n) {\n  updateProfile(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "c021124cc60476ae2a5974a857c9f1f8";

export default node;
