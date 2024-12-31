/**
 * @generated SignedSource<<52c5d2d9171e0ba32e209c8b668aee0f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ChallengeType = "ACTIVE_CITIZENSHIP" | "BELONGING_COMMUNITY" | "PERSONAL_INTEGRITY" | "SPIRITUALITY" | "TRANSFORMATIVE_ACTION" | "%future added value";
export type SHDNAChallengesSubViewQuery$variables = {
  type: ChallengeType;
};
export type SHDNAChallengesSubViewQuery$data = {
  readonly getAllChallenges: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAChallengeBlock_Fragment">;
  }> | null | undefined;
};
export type SHDNAChallengesSubViewQuery = {
  response: SHDNAChallengesSubViewQuery$data;
  variables: SHDNAChallengesSubViewQuery$variables;
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
    "name": "SHDNAChallengesSubViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Challenge",
        "kind": "LinkedField",
        "name": "getAllChallenges",
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
    "name": "SHDNAChallengesSubViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Challenge",
        "kind": "LinkedField",
        "name": "getAllChallenges",
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
    "cacheID": "920c5cb3ec30b0c2c7892ffb5706267b",
    "id": null,
    "metadata": {},
    "name": "SHDNAChallengesSubViewQuery",
    "operationKind": "query",
    "text": "query SHDNAChallengesSubViewQuery(\n  $type: ChallengeType!\n) {\n  getAllChallenges(type: $type) {\n    ...SHDNAChallengeBlock_Fragment\n    id\n  }\n}\n\nfragment SHDNAChallengeAnswerClose_Fragment on Challenge {\n  options\n}\n\nfragment SHDNAChallengeBlock_Fragment on Challenge {\n  title\n  challengeType\n  ...SHDNAChallengeSubView_Fragment\n}\n\nfragment SHDNAChallengeSubView_Fragment on Challenge {\n  id\n  title\n  challengeType\n  question\n  answerType\n  ...SHDNAChallengeAnswerClose_Fragment\n}\n"
  }
};
})();

(node as any).hash = "148e5ed9315999ae1b6de13660dfcccc";

export default node;
