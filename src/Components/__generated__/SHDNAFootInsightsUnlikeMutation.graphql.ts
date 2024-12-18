/**
 * @generated SignedSource<<ee99c2d93dd0b357a11fbf48fcf8b3e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ContentEnum = "COMMENTS" | "NEWS" | "POSTS" | "%future added value";
export type SHDNAFootInsightsUnlikeMutation$variables = {
  contentId: string;
  contentType: ContentEnum;
};
export type SHDNAFootInsightsUnlikeMutation$data = {
  readonly unlikeContent: number | null | undefined;
};
export type SHDNAFootInsightsUnlikeMutation = {
  response: SHDNAFootInsightsUnlikeMutation$data;
  variables: SHDNAFootInsightsUnlikeMutation$variables;
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
    "name": "unlikeContent",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAFootInsightsUnlikeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAFootInsightsUnlikeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fea63066c50e14f4d660dd0d83db8c80",
    "id": null,
    "metadata": {},
    "name": "SHDNAFootInsightsUnlikeMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAFootInsightsUnlikeMutation(\n  $contentId: ID!\n  $contentType: ContentEnum!\n) {\n  unlikeContent(contentId: $contentId, contentType: $contentType)\n}\n"
  }
};
})();

(node as any).hash = "61889ea305796fc1014397ff9e3cff1b";

export default node;
