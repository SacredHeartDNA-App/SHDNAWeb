/**
 * @generated SignedSource<<6f86b1ce43c9687355935688e9ba16e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNANewsView$data = {
  readonly id: string;
  readonly likes: number;
  readonly text: string;
  readonly " $fragmentType": "SHDNANewsView";
};
export type SHDNANewsView$key = {
  readonly " $data"?: SHDNANewsView$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNANewsView">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNANewsView",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "likes",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "News",
  "abstractKey": null
};

(node as any).hash = "4c5f62dc246821ed25f4e22b2ffbfc43";

export default node;
