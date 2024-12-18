/**
 * @generated SignedSource<<10cfbc8f7ace0cd695730363ea65f139>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAUserRow_Fragment$data = {
  readonly bio: string | null | undefined;
  readonly lastName: string;
  readonly name: string;
  readonly profilePic: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAProfileView_Fragment">;
  readonly " $fragmentType": "SHDNAUserRow_Fragment";
};
export type SHDNAUserRow_Fragment$key = {
  readonly " $data"?: SHDNAUserRow_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAUserRow_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAUserRow_Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
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
      "kind": "ScalarField",
      "name": "profilePic",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SHDNAProfileView_Fragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "6289ae7a5d39d3b92f874e5dd419d954";

export default node;
