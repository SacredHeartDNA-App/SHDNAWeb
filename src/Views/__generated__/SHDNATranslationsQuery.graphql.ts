/**
 * @generated SignedSource<<e97ca19afbe8fa1e1308cfe9b5f2ea85>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNATranslationsQuery$variables = Record<PropertyKey, never>;
export type SHDNATranslationsQuery$data = {
  readonly getUntranslatedTexts: ReadonlyArray<{
    readonly text: string;
  }> | null | undefined;
};
export type SHDNATranslationsQuery = {
  response: SHDNATranslationsQuery$data;
  variables: SHDNATranslationsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "text",
  "storageKey": null
};
return {
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
          (v0/*: any*/)
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
          (v0/*: any*/),
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
    "cacheID": "3620d34f5cdd4372fdb4fc5eeef632aa",
    "id": null,
    "metadata": {},
    "name": "SHDNATranslationsQuery",
    "operationKind": "query",
    "text": "query SHDNATranslationsQuery {\n  getUntranslatedTexts {\n    text\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "fcc2d34faadbff40466c13a99f71ca32";

export default node;
