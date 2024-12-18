/**
 * @generated SignedSource<<60808cdaf4f7c39adca0d1c5948bd21f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAComment$data = {
  readonly likes: number;
  readonly text: string;
  readonly " $fragmentType": "SHDNAComment";
};
export type SHDNAComment$key = {
  readonly " $data"?: SHDNAComment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAComment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAComment",
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
    }
  ],
  "type": "Comment",
  "abstractKey": null
};

(node as any).hash = "1a97af07dcf2c1a8489a646748ecb91a";

export default node;
