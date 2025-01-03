/**
 * @generated SignedSource<<215ac97eaa20769632107b4b094af4d7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNATranslationsQuery$variables = Record<PropertyKey, never>;
export type SHDNATranslationsQuery$data = {
  readonly getUntranslatedTexts: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNATranslationSubview_fragment" | "SHDNAWordBlock_fragment">;
  }> | null | undefined;
};
export type SHDNATranslationsQuery = {
  response: SHDNATranslationsQuery$data;
  variables: SHDNATranslationsQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNATranslationsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Translation",
        "kind": "LinkedField",
        "name": "getUntranslatedTexts",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SHDNATranslationSubview_fragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SHDNAWordBlock_fragment"
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
    "name": "SHDNATranslationsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Translation",
        "kind": "LinkedField",
        "name": "getUntranslatedTexts",
        "plural": true,
        "selections": [
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
            "name": "description",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5cdcde325049aeb9d6cea8f5f69e5182",
    "id": null,
    "metadata": {},
    "name": "SHDNATranslationsQuery",
    "operationKind": "query",
    "text": "query SHDNATranslationsQuery {\n  getUntranslatedTexts {\n    ...SHDNATranslationSubview_fragment\n    ...SHDNAWordBlock_fragment\n    id\n  }\n}\n\nfragment SHDNATranslationSubview_fragment on Translation {\n  id\n  text\n  es_t\n  pl_t\n  description\n}\n\nfragment SHDNAWordBlock_fragment on Translation {\n  text\n  es_t\n  pl_t\n}\n"
  }
};

(node as any).hash = "f79daadd9cf9e62c90b9e4348f5ee319";

export default node;
