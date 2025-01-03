/**
 * @generated SignedSource<<2ae80011909942995f9bd8e3a61e18d5>>
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
  readonly id: string;
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
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Translation",
  "abstractKey": null
};

(node as any).hash = "5a4bdb6c20461ddf8970be8ec9f06ae0";

export default node;
