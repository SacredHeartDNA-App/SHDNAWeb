/**
 * @generated SignedSource<<fd42afd595237a7c6777c598e1fd8273>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAJournalQuery$variables = Record<PropertyKey, never>;
export type SHDNAJournalQuery$data = {
  readonly getJournals: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAJournalBlock_Fragment">;
  }> | null | undefined;
};
export type SHDNAJournalQuery = {
  response: SHDNAJournalQuery$data;
  variables: SHDNAJournalQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAJournalQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Journal",
        "kind": "LinkedField",
        "name": "getJournals",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SHDNAJournalBlock_Fragment"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SHDNAJournalQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Journal",
        "kind": "LinkedField",
        "name": "getJournals",
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
            "name": "created_at",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "value",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "907d3d0f083f0bed378efea0b7dc9066",
    "id": null,
    "metadata": {},
    "name": "SHDNAJournalQuery",
    "operationKind": "query",
    "text": "query SHDNAJournalQuery {\n  getJournals {\n    ...SHDNAJournalBlock_Fragment\n    id\n  }\n}\n\nfragment SHDNAJournalBlock_Fragment on Journal {\n  title\n  created_at\n  value\n  id\n}\n"
  }
};

(node as any).hash = "a230f5f147bfde423931498b680f351c";

export default node;
