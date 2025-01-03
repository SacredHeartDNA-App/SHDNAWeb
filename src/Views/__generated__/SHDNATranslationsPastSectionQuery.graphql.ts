/**
 * @generated SignedSource<<73401bc85a75b38619904213871b7578>>
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
    readonly " $fragmentSpreads": FragmentRefs<"SHDNATranslationSubview_fragment">;
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
    "cacheID": "eb5e98851a15d6cc5349b60d727403af",
    "id": null,
    "metadata": {},
    "name": "SHDNATranslationsPastSectionQuery",
    "operationKind": "query",
    "text": "query SHDNATranslationsPastSectionQuery {\n  getPastTranslations {\n    ...SHDNATranslationSubview_fragment\n    id\n  }\n}\n\nfragment SHDNATranslationSubview_fragment on Translation {\n  id\n  description\n}\n"
  }
};

(node as any).hash = "f3b0003ed04cbbaa091c846551152e1c";

export default node;
