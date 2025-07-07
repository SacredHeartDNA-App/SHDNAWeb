/**
 * @generated SignedSource<<d3327e8dec43e92110c297118d064b3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNAPodcastChapterDeletionMutation$variables = {
  id: string;
};
export type SHDNAPodcastChapterDeletionMutation$data = {
  readonly deleteEpisode: number | null | undefined;
};
export type SHDNAPodcastChapterDeletionMutation = {
  response: SHDNAPodcastChapterDeletionMutation$data;
  variables: SHDNAPodcastChapterDeletionMutation$variables;
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
    "name": "deleteEpisode",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAPodcastChapterDeletionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAPodcastChapterDeletionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5f719fab240d7332c2a264ed3dc37486",
    "id": null,
    "metadata": {},
    "name": "SHDNAPodcastChapterDeletionMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAPodcastChapterDeletionMutation(\n  $id: ID!\n) {\n  deleteEpisode(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "777804637a9feec109cd1d8949b012f2";

export default node;
