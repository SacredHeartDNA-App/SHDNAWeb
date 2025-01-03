/**
 * @generated SignedSource<<b177a8ee77356f3b694b4e89c4f25c96>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateTranslationInput = {
  es_t?: string | null | undefined;
  id: string;
  pl_t?: string | null | undefined;
};
export type SHDNATranslationSubviewMutation$variables = {
  text: UpdateTranslationInput;
};
export type SHDNATranslationSubviewMutation$data = {
  readonly updateTranslation: number | null | undefined;
};
export type SHDNATranslationSubviewMutation = {
  response: SHDNATranslationSubviewMutation$data;
  variables: SHDNATranslationSubviewMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "text"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "text",
        "variableName": "text"
      }
    ],
    "kind": "ScalarField",
    "name": "updateTranslation",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNATranslationSubviewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNATranslationSubviewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "edbecf4ff4007f7a4cf469fa37946d5c",
    "id": null,
    "metadata": {},
    "name": "SHDNATranslationSubviewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNATranslationSubviewMutation(\n  $text: UpdateTranslationInput!\n) {\n  updateTranslation(text: $text)\n}\n"
  }
};
})();

(node as any).hash = "8144522b6638b10ce5131d9abf2536fb";

export default node;
