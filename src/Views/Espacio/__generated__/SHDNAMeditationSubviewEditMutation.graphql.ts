/**
 * @generated SignedSource<<4908d9ee3f38feff435581f580d79ac2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateMeditationInput = {
  description?: string | null | undefined;
  id: string;
  title?: string | null | undefined;
};
export type SHDNAMeditationSubviewEditMutation$variables = {
  input: UpdateMeditationInput;
};
export type SHDNAMeditationSubviewEditMutation$data = {
  readonly updateMeditation: number | null | undefined;
};
export type SHDNAMeditationSubviewEditMutation = {
  response: SHDNAMeditationSubviewEditMutation$data;
  variables: SHDNAMeditationSubviewEditMutation$variables;
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
    "name": "updateMeditation",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAMeditationSubviewEditMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAMeditationSubviewEditMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8a7477d25fe9fef9998a6cacfc7f1cd7",
    "id": null,
    "metadata": {},
    "name": "SHDNAMeditationSubviewEditMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAMeditationSubviewEditMutation(\n  $input: UpdateMeditationInput!\n) {\n  updateMeditation(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "8ef9ca5209f9919ca41a5a3de438af1f";

export default node;
