/**
 * @generated SignedSource<<1f50f85803df5867f0aea0a373d7437c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAWordBlock_fragment$data = {
  readonly description: string;
  readonly es_t: string | null | undefined;
  readonly id: string;
  readonly pl_t: string | null | undefined;
  readonly " $fragmentType": "SHDNAWordBlock_fragment";
};
export type SHDNAWordBlock_fragment$key = {
  readonly " $data"?: SHDNAWordBlock_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAWordBlock_fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAWordBlock_fragment",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "es_t",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "pl_t",
      "storageKey": null
    }
  ],
  "type": "Translation",
  "abstractKey": null
};

(node as any).hash = "bf49c236da995a8912002fd3df545385";

export default node;
