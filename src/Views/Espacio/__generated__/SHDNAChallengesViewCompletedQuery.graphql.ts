/**
 * @generated SignedSource<<1f83725396778e451c27c2e4b4f2fc63>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ChallengeType = "ACTIVE_CITIZENSHIP" | "BELONGING_COMMUNITY" | "PERSONAL_INTEGRITY" | "SPIRITUALITY" | "TRANSFORMATIVE_ACTION" | "%future added value";
export type SHDNAChallengesViewCompletedQuery$variables = {
  type: ChallengeType;
};
export type SHDNAChallengesViewCompletedQuery$data = {
  readonly getCompletedChallenges: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAChallengeBlock_Fragment">;
  }> | null | undefined;
};
export type SHDNAChallengesViewCompletedQuery = {
  response: SHDNAChallengesViewCompletedQuery$data;
  variables: SHDNAChallengesViewCompletedQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "type"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "type",
    "variableName": "type"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAChallengesViewCompletedQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Challenge",
        "kind": "LinkedField",
        "name": "getCompletedChallenges",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SHDNAChallengeBlock_Fragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAChallengesViewCompletedQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Challenge",
        "kind": "LinkedField",
        "name": "getCompletedChallenges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isLocked",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "challengeType",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "question",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "answerType",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "options",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3e2ad70e3f4ba789838084977a061c9e",
    "id": null,
    "metadata": {},
    "name": "SHDNAChallengesViewCompletedQuery",
    "operationKind": "query",
    "text": "query SHDNAChallengesViewCompletedQuery(\n  $type: ChallengeType!\n) {\n  getCompletedChallenges(type: $type) {\n    ...SHDNAChallengeBlock_Fragment\n    id\n  }\n}\n\nfragment SHDNAChallengeAnswerClose_Fragment on Challenge {\n  options\n}\n\nfragment SHDNAChallengeBlock_Fragment on Challenge {\n  title\n  isLocked\n  challengeType\n  ...SHDNAChallengeSubView_Fragment\n}\n\nfragment SHDNAChallengeSubView_Fragment on Challenge {\n  id\n  title\n  challengeType\n  question\n  answerType\n  ...SHDNAChallengeAnswerClose_Fragment\n}\n"
  }
};
})();

(node as any).hash = "00f84b44ed7bd8e0b65613f718f4c2bd";

export default node;
