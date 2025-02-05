/**
 * @generated SignedSource<<2815172e504e58743413a9b945e9810f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AnswerType = "ANSWER_CLOSE" | "ANSWER_OPEN" | "UPLOAD_FILE" | "VIEW_MEDIA" | "%future added value";
export type ChallengeType = "ACTIVE_CITIZENSHIP" | "BELONGING_COMMUNITY" | "PERSONAL_INTEGRITY" | "SPIRITUALITY" | "TRANSFORMATIVE_ACTION" | "%future added value";
export type ChallengeInput = {
  answerType: AnswerType;
  challengeType: ChallengeType;
  media?: MediaInput | null | undefined;
  options?: ReadonlyArray<string | null | undefined> | null | undefined;
  question: string;
  scheduledTime?: any | null | undefined;
  title: string;
};
export type MediaInput = {
  base64: string;
  fileName: string;
  type: string;
  uri: string;
};
export type SHDNACreateChallengeSubViewMutation$variables = {
  input: ChallengeInput;
};
export type SHDNACreateChallengeSubViewMutation$data = {
  readonly createChallenge: number | null | undefined;
};
export type SHDNACreateChallengeSubViewMutation = {
  response: SHDNACreateChallengeSubViewMutation$data;
  variables: SHDNACreateChallengeSubViewMutation$variables;
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
    "name": "createChallenge",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNACreateChallengeSubViewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNACreateChallengeSubViewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "08a6154d1039ef0e4bf417cd76588127",
    "id": null,
    "metadata": {},
    "name": "SHDNACreateChallengeSubViewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNACreateChallengeSubViewMutation(\n  $input: ChallengeInput!\n) {\n  createChallenge(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "75254635dbead6c5e5b424be1e41b974";

export default node;
