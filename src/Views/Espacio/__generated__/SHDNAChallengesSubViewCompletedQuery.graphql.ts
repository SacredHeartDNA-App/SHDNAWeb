/**
 * @generated SignedSource<<2597555d692d56bcbdb5ef2ff9d15b3b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ChallengeType = "ACTIVE_CITIZENSHIP" | "BELONGING_COMMUNITY" | "PERSONAL_INTEGRITY" | "SPIRITUALITY" | "TRANSFORMATIVE_ACTION" | "%future added value";
export type SHDNAChallengesSubViewCompletedQuery$variables = {
  type: ChallengeType;
};
export type SHDNAChallengesSubViewCompletedQuery$data = {
  readonly getCompletedChallenges: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAChallengeBlock_Fragment">;
  }> | null | undefined;
};
export type SHDNAChallengesSubViewCompletedQuery = {
  response: SHDNAChallengesSubViewCompletedQuery$data;
  variables: SHDNAChallengesSubViewCompletedQuery$variables;
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
    "name": "SHDNAChallengesSubViewCompletedQuery",
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
    "name": "SHDNAChallengesSubViewCompletedQuery",
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
    "cacheID": "9173caf2bbe6d15ad36c7ff588834697",
    "id": null,
    "metadata": {},
    "name": "SHDNAChallengesSubViewCompletedQuery",
    "operationKind": "query",
    "text": "query SHDNAChallengesSubViewCompletedQuery(\n  $type: ChallengeType!\n) {\n  getCompletedChallenges(type: $type) {\n    ...SHDNAChallengeBlock_Fragment\n    id\n  }\n}\n\nfragment SHDNAChallengeAnswerClose_Fragment on Challenge {\n  options\n}\n\nfragment SHDNAChallengeBlock_Fragment on Challenge {\n  title\n  challengeType\n  ...SHDNAChallengeSubView_Fragment\n}\n\nfragment SHDNAChallengeSubView_Fragment on Challenge {\n  id\n  title\n  challengeType\n  question\n  answerType\n  ...SHDNAChallengeAnswerClose_Fragment\n}\n"
  }
};
})();

(node as any).hash = "50f1e9bef10bab03928a07040185dd9a";

export default node;
