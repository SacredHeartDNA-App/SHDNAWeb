/**
 * @generated SignedSource<<8e0f2ca20bc2901f7eddd05fab48cd7e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type EditNewsInput = {
  cover?: MediaInput | null | undefined;
  extLinks?: ReadonlyArray<string | null | undefined> | null | undefined;
  media?: ReadonlyArray<MediaInput | null | undefined> | null | undefined;
  text?: string | null | undefined;
  title?: string | null | undefined;
};
export type MediaInput = {
  base64: string;
  fileName: string;
  type: string;
  uri: string;
};
export type SHDNAEditArticleSubviewMutation$variables = {
  id: string;
  input: EditNewsInput;
};
export type SHDNAEditArticleSubviewMutation$data = {
  readonly updateArticle: number | null | undefined;
};
export type SHDNAEditArticleSubviewMutation = {
  response: SHDNAEditArticleSubviewMutation$data;
  variables: SHDNAEditArticleSubviewMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "kind": "ScalarField",
    "name": "updateArticle",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAEditArticleSubviewMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SHDNAEditArticleSubviewMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "834fb03d7bcc763192ee5ae98f1c2194",
    "id": null,
    "metadata": {},
    "name": "SHDNAEditArticleSubviewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAEditArticleSubviewMutation(\n  $input: EditNewsInput!\n  $id: ID!\n) {\n  updateArticle(input: $input, id: $id)\n}\n"
  }
};
})();

(node as any).hash = "01a86b74b793d123e1d903de9c4725e2";

export default node;
