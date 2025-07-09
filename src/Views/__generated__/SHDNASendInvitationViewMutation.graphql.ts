/**
 * @generated SignedSource<<3296d1f68ab1c4e9b1fc0d5e21405e1c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNASendInvitationViewMutation$variables = {
  sendTo?: ReadonlyArray<string> | null | undefined;
};
export type SHDNASendInvitationViewMutation$data = {
  readonly createInvitationCode: string;
};
export type SHDNASendInvitationViewMutation = {
  response: SHDNASendInvitationViewMutation$data;
  variables: SHDNASendInvitationViewMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "sendTo"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "sendTo",
        "variableName": "sendTo"
      }
    ],
    "kind": "ScalarField",
    "name": "createInvitationCode",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNASendInvitationViewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SHDNASendInvitationViewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bed4fd6c15ebf0a666acb13cc53a4011",
    "id": null,
    "metadata": {},
    "name": "SHDNASendInvitationViewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNASendInvitationViewMutation(\n  $sendTo: [String!]\n) {\n  createInvitationCode(sendTo: $sendTo)\n}\n"
  }
};
})();

(node as any).hash = "adb2efb956be584eda8de6f193fef658";

export default node;
