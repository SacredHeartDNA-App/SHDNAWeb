/**
 * @generated SignedSource<<eef4e704d5a71f7e3dadc6fa9e1293b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNAEditArticleSubviewDeleteMutation$variables = {
  id: string;
};
export type SHDNAEditArticleSubviewDeleteMutation$data = {
  readonly deleteArticle: number | null | undefined;
};
export type SHDNAEditArticleSubviewDeleteMutation = {
  response: SHDNAEditArticleSubviewDeleteMutation$data;
  variables: SHDNAEditArticleSubviewDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteArticle",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAEditArticleSubviewDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAEditArticleSubviewDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "14e46fa8eaf53b8865e6ed5ea736520d",
    "id": null,
    "metadata": {},
    "name": "SHDNAEditArticleSubviewDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAEditArticleSubviewDeleteMutation(\n  $id: ID!\n) {\n  deleteArticle(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "9b2a72318964e5cb5cc6a5aa372e5881";

export default node;
