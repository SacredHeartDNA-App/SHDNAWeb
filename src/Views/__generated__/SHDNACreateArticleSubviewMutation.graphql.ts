/**
 * @generated SignedSource<<ccc724040247f0356cf138c5ff90f7f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateNewsInput = {
  cover?: MediaInput | null | undefined;
  extLinks?: ReadonlyArray<string | null | undefined> | null | undefined;
  media?: ReadonlyArray<MediaInput | null | undefined> | null | undefined;
  text: string;
  title: string;
};
export type MediaInput = {
  base64: string;
  fileName: string;
  type: string;
  uri: string;
};
export type SHDNACreateArticleSubviewMutation$variables = {
  input: CreateNewsInput;
};
export type SHDNACreateArticleSubviewMutation$data = {
  readonly createArticle: number | null | undefined;
};
export type SHDNACreateArticleSubviewMutation = {
  response: SHDNACreateArticleSubviewMutation$data;
  variables: SHDNACreateArticleSubviewMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "kind": "ScalarField",
    "name": "createArticle",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNACreateArticleSubviewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNACreateArticleSubviewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c2555aaa82f907159adee121e762f7c4",
    "id": null,
    "metadata": {},
    "name": "SHDNACreateArticleSubviewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNACreateArticleSubviewMutation(\n  $input: CreateNewsInput!\n) {\n  createArticle(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "5a869322c60d8a088f4e88efde2eca3f";

export default node;
