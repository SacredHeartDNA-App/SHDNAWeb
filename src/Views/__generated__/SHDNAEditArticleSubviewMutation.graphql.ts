/**
 * @generated SignedSource<<a63091b83399899e4db0dbadb61c9e48>>
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
export type SHDNAEditArticleSubviewMutation$variables = {
  input: CreateNewsInput;
};
export type SHDNAEditArticleSubviewMutation$data = {
  readonly createArticle: number | null | undefined;
};
export type SHDNAEditArticleSubviewMutation = {
  response: SHDNAEditArticleSubviewMutation$data;
  variables: SHDNAEditArticleSubviewMutation$variables;
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
    "name": "SHDNAEditArticleSubviewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAEditArticleSubviewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "637d3810c992f4d872fb86b1fe913a5e",
    "id": null,
    "metadata": {},
    "name": "SHDNAEditArticleSubviewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAEditArticleSubviewMutation(\n  $input: CreateNewsInput!\n) {\n  createArticle(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "1547263c98316dd720392328e509a86b";

export default node;
