/**
 * @generated SignedSource<<fb0a6fbbabe896035b691c6f90962439>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAJournalSubView_Fragment$data = {
  readonly text: string;
  readonly " $fragmentType": "SHDNAJournalSubView_Fragment";
};
export type SHDNAJournalSubView_Fragment$key = {
  readonly " $data"?: SHDNAJournalSubView_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAJournalSubView_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAJournalSubView_Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    }
  ],
  "type": "Journal",
  "abstractKey": null
};

(node as any).hash = "de54117a8397b2c7d77cb746aa043eda";

export default node;
