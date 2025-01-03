/**
 * @generated SignedSource<<42e7edba4a48f72b1cf61a517d244cf9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNATranslationsPastSectionQuery$variables = Record<PropertyKey, never>;
export type SHDNATranslationsPastSectionQuery$data = {
  readonly getPastTranslations: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNATranslationSubview_fragment" | "SHDNAWordBlock_fragment">;
  }> | null | undefined;
};
export type SHDNATranslationsPastSectionQuery = {
  response: SHDNATranslationsPastSectionQuery$data;
  variables: SHDNATranslationsPastSectionQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNATranslationsPastSectionQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Translation",
        "kind": "LinkedField",
        "name": "getPastTranslations",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SHDNAWordBlock_fragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SHDNATranslationSubview_fragment"
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
    "name": "SHDNATranslationsPastSectionQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Translation",
        "kind": "LinkedField",
        "name": "getPastTranslations",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "text",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "es_t",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pl_t",
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
            "name": "description",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "183a493e0a0bfafe80b9690db0ba63f3",
    "id": null,
    "metadata": {},
    "name": "SHDNATranslationsPastSectionQuery",
    "operationKind": "query",
    "text": "query SHDNATranslationsPastSectionQuery {\n  getPastTranslations {\n    ...SHDNAWordBlock_fragment\n    ...SHDNATranslationSubview_fragment\n    id\n  }\n}\n\nfragment SHDNATranslationSubview_fragment on Translation {\n  id\n  text\n  es_t\n  pl_t\n  description\n}\n\nfragment SHDNAWordBlock_fragment on Translation {\n  text\n  es_t\n  pl_t\n}\n"
  }
};

(node as any).hash = "9cd313996a2767a0e7338d1877881c4d";

export default node;
