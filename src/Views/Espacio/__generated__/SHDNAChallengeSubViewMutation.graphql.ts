/**
 * @generated SignedSource<<2c9186e2519209b68a4ad9840fa1420c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNAChallengeSubViewMutation$variables = {
  challengeId: string;
  question?: string | null | undefined;
  title?: string | null | undefined;
};
export type SHDNAChallengeSubViewMutation$data = {
  readonly updateChallenge: number | null | undefined;
};
export type SHDNAChallengeSubViewMutation = {
  response: SHDNAChallengeSubViewMutation$data;
  variables: SHDNAChallengeSubViewMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "challengeId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "question"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "challengeId"
      },
      {
        "kind": "Variable",
        "name": "question",
        "variableName": "question"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "kind": "ScalarField",
    "name": "updateChallenge",
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
    "name": "SHDNAChallengeSubViewMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "SHDNAChallengeSubViewMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "9723d624ea21fc8bfcf6fe3da27bf7cf",
    "id": null,
    "metadata": {},
    "name": "SHDNAChallengeSubViewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAChallengeSubViewMutation(\n  $challengeId: ID!\n  $title: String\n  $question: String\n) {\n  updateChallenge(id: $challengeId, title: $title, question: $question)\n}\n"
  }
};
})();

(node as any).hash = "9a7cd322d66113634200482c260e1309";

export default node;
