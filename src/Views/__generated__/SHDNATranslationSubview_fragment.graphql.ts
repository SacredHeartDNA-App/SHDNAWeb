/**
 * @generated SignedSource<<7de9ba84c51d145d2e9ac5c1d72672ed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNATranslationSubview_fragment$data = {
  readonly description: string;
  readonly es_t: string | null | undefined;
  readonly id: string;
  readonly pl_t: string | null | undefined;
  readonly text: string;
  readonly " $fragmentType": "SHDNATranslationSubview_fragment";
};
export type SHDNATranslationSubview_fragment$key = {
  readonly " $data"?: SHDNATranslationSubview_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNATranslationSubview_fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNATranslationSubview_fragment",
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

(node as any).hash = "7028fce0e9c0ad020b2014b5d71d9d85";

export default node;
