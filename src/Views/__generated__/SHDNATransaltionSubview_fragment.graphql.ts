/**
 * @generated SignedSource<<f27769cda10108f06ac98c5ae00ebf32>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNATransaltionSubview_fragment$data = {
  readonly description: string;
  readonly id: string;
  readonly " $fragmentType": "SHDNATransaltionSubview_fragment";
};
export type SHDNATransaltionSubview_fragment$key = {
  readonly " $data"?: SHDNATransaltionSubview_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNATransaltionSubview_fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNATransaltionSubview_fragment",
  "selections": [
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
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Translation",
  "abstractKey": null
};

(node as any).hash = "896e010e3b7b12878f4ab26df0901567";

export default node;
