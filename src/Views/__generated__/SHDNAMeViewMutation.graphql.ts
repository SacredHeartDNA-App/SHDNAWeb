/**
 * @generated SignedSource<<8b750c1482e9dd54301e5af5fafbc03e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SHDNAMeViewMutation$variables = Record<PropertyKey, never>;
export type SHDNAMeViewMutation$data = {
  readonly logOut: number | null | undefined;
};
export type SHDNAMeViewMutation = {
  response: SHDNAMeViewMutation$data;
  variables: SHDNAMeViewMutation$variables;
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
    "name": "SHDNAMeViewMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SHDNAMeViewMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e2cab6aa7e1109e771f445c3baba390b",
    "id": null,
    "metadata": {},
    "name": "SHDNAMeViewMutation",
    "operationKind": "mutation",
    "text": "mutation SHDNAMeViewMutation {\n  logOut\n}\n"
  }
};
})();

(node as any).hash = "5c28b3dfed0a0e61e599811c24a1d028";

export default node;
