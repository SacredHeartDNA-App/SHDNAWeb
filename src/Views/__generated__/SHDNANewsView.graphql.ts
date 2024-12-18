/**
 * @generated SignedSource<<0d987b65b978d4f7619bc01a54e6e594>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNANewsView$data = {
  readonly extLinks: ReadonlyArray<string> | null | undefined;
  readonly gallery: ReadonlyArray<string> | null | undefined;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "gallery",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "extLinks",
      "storageKey": null
    }
  ],
  "type": "News",
  "abstractKey": null
};

(node as any).hash = "fe25f6033cde277a2fb238345c8de0f8";

export default node;
