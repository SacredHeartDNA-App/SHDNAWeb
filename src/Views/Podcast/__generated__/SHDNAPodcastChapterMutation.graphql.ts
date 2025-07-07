/**
 * @generated SignedSource<<d6718929bbf2724262db5455f0f597fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateEpisodeInput = {
  audio?: MediaInput | null | undefined;
  id: string;
  title?: string | null | undefined;
};
export type MediaInput = {
  base64: string;
  fileName: string;
  type: string;
  uri: string;
};
export type SHDNAPodcastChapterMutation$variables = {
  input: UpdateEpisodeInput;
};
export type SHDNAPodcastChapterMutation$data = {
  readonly updateEpisode: number | null | undefined;
};
export type SHDNAPodcastChapterMutation = {
  response: SHDNAPodcastChapterMutation$data;
  variables: SHDNAPodcastChapterMutation$variables;
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
    "name": "updateEpisode",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAPodcastChapterMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAPodcastChapterMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3dc9e38ef0ce29df9610da816eb1d37b",
    "id": null,
    "metadata": {},
    "name": "SHDNAPodcastChapterMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAPodcastChapterMutation(\n  $input: UpdateEpisodeInput!\n) {\n  updateEpisode(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "fb2ae12ded3f5a65ef7079679ca63991";

export default node;
