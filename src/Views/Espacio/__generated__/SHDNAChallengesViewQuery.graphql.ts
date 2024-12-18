/**
 * @generated SignedSource<<be94dcce1a17a90a7d1f81b5d1376b0a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ChallengeType = "ACTIVE_CITIZENSHIP" | "BELONGING_COMMUNITY" | "PERSONAL_INTEGRITY" | "SPIRITUALITY" | "TRANSFORMATIVE_ACTION" | "%future added value";
export type SHDNAChallengesViewQuery$variables = {
  type: ChallengeType;
};
export type SHDNAChallengesViewQuery$data = {
  readonly getMissingChallenges: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAChallengeBlock_Fragment">;
  }> | null | undefined;
};
export type SHDNAChallengesViewQuery = {
  response: SHDNAChallengesViewQuery$data;
  variables: SHDNAChallengesViewQuery$variables;
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
    "name": "SHDNAChallengesViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Challenge",
        "kind": "LinkedField",
        "name": "getMissingChallenges",
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
    "name": "SHDNAChallengesViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Challenge",
        "kind": "LinkedField",
        "name": "getMissingChallenges",
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
    "cacheID": "6b1c4502ccc51497a7d266a3a5a35744",
    "id": null,
    "metadata": {},
    "name": "SHDNAChallengesViewQuery",
    "operationKind": "query",
    "text": "query SHDNAChallengesViewQuery(\n  $type: ChallengeType!\n) {\n  getMissingChallenges(type: $type) {\n    ...SHDNAChallengeBlock_Fragment\n    id\n  }\n}\n\nfragment SHDNAChallengeAnswerClose_Fragment on Challenge {\n  options\n}\n\nfragment SHDNAChallengeBlock_Fragment on Challenge {\n  title\n  isLocked\n  challengeType\n  ...SHDNAChallengeSubView_Fragment\n}\n\nfragment SHDNAChallengeSubView_Fragment on Challenge {\n  id\n  title\n  challengeType\n  question\n  answerType\n  ...SHDNAChallengeAnswerClose_Fragment\n}\n"
  }
};
})();

(node as any).hash = "5f12aee321909d23badf7e8bab88f2ac";

export default node;
