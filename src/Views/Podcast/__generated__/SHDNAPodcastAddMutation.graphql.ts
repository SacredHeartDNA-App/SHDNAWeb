/**
 * @generated SignedSource<<b270e77287bf9660ca221e9c4665f40c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type EpisodeInput = {
  audio: MediaInput;
  title: string;
};
export type MediaInput = {
  base64: string;
  fileName: string;
  type: string;
  uri: string;
};
export type SHDNAPodcastAddMutation$variables = {
  input: EpisodeInput;
};
export type SHDNAPodcastAddMutation$data = {
  readonly createEpisode: number | null | undefined;
};
export type SHDNAPodcastAddMutation = {
  response: SHDNAPodcastAddMutation$data;
  variables: SHDNAPodcastAddMutation$variables;
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
    "name": "createEpisode",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAPodcastAddMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNAPodcastAddMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "504fa8705567d7858581b6b7cd9db7e5",
    "id": null,
    "metadata": {},
    "name": "SHDNAPodcastAddMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAPodcastAddMutation(\n  $input: EpisodeInput!\n) {\n  createEpisode(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "18516d471637e3671c391076dc92c742";

export default node;
