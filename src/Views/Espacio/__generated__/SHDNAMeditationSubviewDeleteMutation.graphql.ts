/**
 * @generated SignedSource<<7e63da3c9d1bc65d46996faaa07c9da7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNAMeditationSubviewDeleteMutation$variables = {
  id: string;
};
export type SHDNAMeditationSubviewDeleteMutation$data = {
  readonly deleteMeditation: number | null | undefined;
};
export type SHDNAMeditationSubviewDeleteMutation = {
  response: SHDNAMeditationSubviewDeleteMutation$data;
  variables: SHDNAMeditationSubviewDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteMeditation",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAMeditationSubviewDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAMeditationSubviewDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b66514a72f08ecbe3297013f42514f34",
    "id": null,
    "metadata": {},
    "name": "SHDNAMeditationSubviewDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAMeditationSubviewDeleteMutation(\n  $id: ID!\n) {\n  deleteMeditation(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "01ff32717109d16663e87aaee94233a8";

export default node;
