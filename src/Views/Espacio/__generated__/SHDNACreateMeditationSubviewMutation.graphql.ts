/**
 * @generated SignedSource<<de5c9a35f9f8e041037886a109f8761e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateMeditationInput = {
  cover: MediaInput;
  description: string;
  media: MediaInput;
  title: string;
};
export type MediaInput = {
  base64: string;
  fileName: string;
  type: string;
  uri: string;
};
export type SHDNACreateMeditationSubviewMutation$variables = {
  input: CreateMeditationInput;
};
export type SHDNACreateMeditationSubviewMutation$data = {
  readonly createNewMeditation: number | null | undefined;
};
export type SHDNACreateMeditationSubviewMutation = {
  response: SHDNACreateMeditationSubviewMutation$data;
  variables: SHDNACreateMeditationSubviewMutation$variables;
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
    "name": "createNewMeditation",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNACreateMeditationSubviewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNACreateMeditationSubviewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7e5add33b6ad35fc7b7923f9547ef0d7",
    "id": null,
    "metadata": {},
    "name": "SHDNACreateMeditationSubviewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNACreateMeditationSubviewMutation(\n  $input: CreateMeditationInput!\n) {\n  createNewMeditation(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "5827993549e837a2b6a4160e228c7a2e";

export default node;
