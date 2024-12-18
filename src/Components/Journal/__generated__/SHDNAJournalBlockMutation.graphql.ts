/**
 * @generated SignedSource<<8ae38b882885075b2f68b5aa86bab7b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNAJournalBlockMutation$variables = {
  journalId: string;
};
export type SHDNAJournalBlockMutation$data = {
  readonly deleteJournal: number | null | undefined;
};
export type SHDNAJournalBlockMutation = {
  response: SHDNAJournalBlockMutation$data;
  variables: SHDNAJournalBlockMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "journalId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "journalId",
        "variableName": "journalId"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteJournal",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAJournalBlockMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAJournalBlockMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fbb43c3a9fca741e14be565c6fd55eec",
    "id": null,
    "metadata": {},
    "name": "SHDNAJournalBlockMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAJournalBlockMutation(\n  $journalId: ID!\n) {\n  deleteJournal(journalId: $journalId)\n}\n"
  }
};
})();

(node as any).hash = "2220cd17a03fdf1b02d7aa69d4818345";

export default node;
