/**
 * @generated SignedSource<<dc6788617f0947d20a06875c2509f010>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ContentEnum = "COMMENTS" | "NEWS" | "POSTS" | "%future added value";
export type SHDNAFootInsightsMutation$variables = {
  contentId: string;
  contentType: ContentEnum;
};
export type SHDNAFootInsightsMutation$data = {
  readonly likeContent: number | null | undefined;
};
export type SHDNAFootInsightsMutation = {
  response: SHDNAFootInsightsMutation$data;
  variables: SHDNAFootInsightsMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "contentId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "contentType"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "contentId",
        "variableName": "contentId"
      },
      {
        "kind": "Variable",
        "name": "contentType",
        "variableName": "contentType"
      }
    ],
    "kind": "ScalarField",
    "name": "likeContent",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAFootInsightsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAFootInsightsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b0d8cf9b38d7a309e209401f3fa38869",
    "id": null,
    "metadata": {},
    "name": "SHDNAFootInsightsMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAFootInsightsMutation(\n  $contentId: ID!\n  $contentType: ContentEnum!\n) {\n  likeContent(contentId: $contentId, contentType: $contentType)\n}\n"
  }
};
})();

(node as any).hash = "d9b8bfdddd6d7161103839cd66f48319";

export default node;
