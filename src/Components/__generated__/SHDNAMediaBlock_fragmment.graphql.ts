/**
 * @generated SignedSource<<bafb87cdeae3c725b59aa4e363e8d791>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAMediaBlock_fragmment$data = {
  readonly cover: string;
  readonly created_at: any;
  readonly isSeen: boolean;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAMeditationSubview_fragmment">;
  readonly " $fragmentType": "SHDNAMediaBlock_fragmment";
};
export type SHDNAMediaBlock_fragmment$key = {
  readonly " $data"?: SHDNAMediaBlock_fragmment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAMediaBlock_fragmment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAMediaBlock_fragmment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created_at",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cover",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isSeen",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SHDNAMeditationSubview_fragmment"
    }
  ],
  "type": "Meditation",
  "abstractKey": null
};

(node as any).hash = "eee343a7efa16503bfe88d71e487b3ba";

export default node;
