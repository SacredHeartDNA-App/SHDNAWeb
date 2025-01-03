/**
 * @generated SignedSource<<c385f684c1cd2cbaa3ccd12ee10258df>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAWordBlock_fragment$data = {
  readonly es_t: string | null | undefined;
  readonly pl_t: string | null | undefined;
  readonly text: string;
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
      "name": "text",
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

(node as any).hash = "af0a966f90199f33bd34f2d67a8c43c4";

export default node;
