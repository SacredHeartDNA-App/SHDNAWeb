/**
 * @generated SignedSource<<a7be1adea6cb3b57bfeb8df38f963ae9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ChallengeType = "ACTIVE_CITIZENSHIP" | "BELONGING_COMMUNITY" | "PERSONAL_INTEGRITY" | "SPIRITUALITY" | "TRANSFORMATIVE_ACTION" | "%future added value";
export type SHDNACreateJournalSubviewMutation$variables = {
  text: string;
  title: string;
  value: ChallengeType;
};
export type SHDNACreateJournalSubviewMutation$data = {
  readonly createJournal: number | null | undefined;
};
export type SHDNACreateJournalSubviewMutation = {
  response: SHDNACreateJournalSubviewMutation$data;
  variables: SHDNACreateJournalSubviewMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "text"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "value"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "text",
        "variableName": "text"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      },
      {
        "kind": "Variable",
        "name": "value",
        "variableName": "value"
      }
    ],
    "kind": "ScalarField",
    "name": "createJournal",
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
    "name": "SHDNACreateJournalSubviewMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "SHDNACreateJournalSubviewMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "a59119456a08dfde855ad727e487d6f4",
    "id": null,
    "metadata": {},
    "name": "SHDNACreateJournalSubviewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNACreateJournalSubviewMutation(\n  $title: String!\n  $text: String!\n  $value: ChallengeType!\n) {\n  createJournal(title: $title, text: $text, value: $value)\n}\n"
  }
};
})();

(node as any).hash = "31d83eaf5fbadee33cd98fa41d0d3db0";

export default node;
