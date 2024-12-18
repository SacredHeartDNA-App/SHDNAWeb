/**
 * @generated SignedSource<<e423ec0e1803d282d3ee2fd4c93cebab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AnswerInput = {
  answer?: string | null | undefined;
  challengeId: string;
  media?: ReadonlyArray<MediaInput | null | undefined> | null | undefined;
};
export type MediaInput = {
  base64: string;
  fileName: string;
  type: string;
  uri: string;
};
export type SHDNAChallengeSubViewMutation$variables = {
  input: AnswerInput;
};
export type SHDNAChallengeSubViewMutation$data = {
  readonly createAnswerChallenge: number | null | undefined;
};
export type SHDNAChallengeSubViewMutation = {
  response: SHDNAChallengeSubViewMutation$data;
  variables: SHDNAChallengeSubViewMutation$variables;
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
    "name": "createAnswerChallenge",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAChallengeSubViewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAChallengeSubViewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2300349189c0a887929f761500ed944a",
    "id": null,
    "metadata": {},
    "name": "SHDNAChallengeSubViewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAChallengeSubViewMutation(\n  $input: AnswerInput!\n) {\n  createAnswerChallenge(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "c4ec62ed54fa0706fe49cd9f2ea8b5b7";

export default node;
