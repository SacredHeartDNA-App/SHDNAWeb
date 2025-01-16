/**
 * @generated SignedSource<<505f20f3493f007b3d50230381cd2bf2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNASideBarMutation$variables = Record<PropertyKey, never>;
export type SHDNASideBarMutation$data = {
  readonly logOut: number | null | undefined;
};
export type SHDNASideBarMutation = {
  response: SHDNASideBarMutation$data;
  variables: SHDNASideBarMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "logOut",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNASideBarMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SHDNASideBarMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "90a8a7fdc5892162ee467695c5975fef",
    "id": null,
    "metadata": {},
    "name": "SHDNASideBarMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNASideBarMutation {\n  logOut\n}\n"
  }
};
})();

(node as any).hash = "8beb7db99d2c7bb9c0abf3b928742417";

export default node;
