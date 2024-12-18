/**
 * @generated SignedSource<<4e8f7e093ac6407dcc8cee0f65d381b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAMeViewQuery$variables = Record<PropertyKey, never>;
export type SHDNAMeViewQuery$data = {
  readonly viewer: {
    readonly bio: string | null | undefined;
    readonly profilePic: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAProfileView_Fragment">;
  };
};
export type SHDNAMeViewQuery = {
  response: SHDNAMeViewQuery$data;
  variables: SHDNAMeViewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "profilePic",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SHDNAMeViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SHDNAProfileView_Fragment"
          },
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SHDNAMeViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v0/*: any*/),
          (v1/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fdfdef202b723106431f5ad1d0a8ae8d",
    "id": null,
    "metadata": {},
    "name": "SHDNAMeViewQuery",
    "operationKind": "query",
    "text": "query SHDNAMeViewQuery {\n  viewer {\n    ...SHDNAProfileView_Fragment\n    profilePic\n    bio\n    id\n  }\n}\n\nfragment SHDNAProfileView_Fragment on User {\n  name\n  lastName\n  community {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "fec3cafce6686bbb9cd9d28298a048b7";

export default node;
