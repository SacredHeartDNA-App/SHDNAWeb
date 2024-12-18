/**
 * @generated SignedSource<<a396c4e5885b5c2bbb52b6be28c97fd7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAProfileView_Fragment$data = {
  readonly community: {
    readonly name: string;
  } | null | undefined;
  readonly lastName: string;
  readonly name: string;
  readonly " $fragmentType": "SHDNAProfileView_Fragment";
};
export type SHDNAProfileView_Fragment$key = {
  readonly " $data"?: SHDNAProfileView_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAProfileView_Fragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAProfileView_Fragment",
  "selections": [
    (v0/*: any*/),
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
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "c016fd721f88bd907e85c4418682fe8c";

export default node;
