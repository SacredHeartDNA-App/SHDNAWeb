/**
 * @generated SignedSource<<442df36701cd83bce870989f7e728823>>
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
export type SHDNAChallengeAnswerManagerMutation$variables = {
  input: AnswerInput;
};
export type SHDNAChallengeAnswerManagerMutation$data = {
  readonly createAnswerChallenge: number | null | undefined;
};
export type SHDNAChallengeAnswerManagerMutation = {
  response: SHDNAChallengeAnswerManagerMutation$data;
  variables: SHDNAChallengeAnswerManagerMutation$variables;
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
    "name": "SHDNAChallengeAnswerManagerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAChallengeAnswerManagerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3550b93c5dc8ea5d3b989541ab013c8a",
    "id": null,
    "metadata": {},
    "name": "SHDNAChallengeAnswerManagerMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAChallengeAnswerManagerMutation(\n  $input: AnswerInput!\n) {\n  createAnswerChallenge(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "0c91d175601fee7b1bb04cc9b1526da0";

export default node;
