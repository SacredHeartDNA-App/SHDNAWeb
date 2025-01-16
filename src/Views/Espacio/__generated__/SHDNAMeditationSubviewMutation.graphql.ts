/**
 * @generated SignedSource<<d64f9f36f7c525fa22bf7b40ab2d9b22>>
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
export type SHDNAMeditationSubviewMutation$variables = {
  input: UpdateMeditationInput;
};
export type SHDNAMeditationSubviewMutation$data = {
  readonly updateMeditation: number | null | undefined;
};
export type SHDNAMeditationSubviewMutation = {
  response: SHDNAMeditationSubviewMutation$data;
  variables: SHDNAMeditationSubviewMutation$variables;
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
    "name": "SHDNAMeditationSubviewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAMeditationSubviewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a452cddaee423c44665801a784b751e3",
    "id": null,
    "metadata": {},
    "name": "SHDNAMeditationSubviewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAMeditationSubviewMutation(\n  $input: UpdateMeditationInput!\n) {\n  updateMeditation(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "459cafa5fd9a22950d28a8f1c6fff28f";

export default node;
