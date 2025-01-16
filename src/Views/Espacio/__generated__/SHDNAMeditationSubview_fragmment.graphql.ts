/**
 * @generated SignedSource<<f27953cbcf98e1ced7ebed139dcd3abf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type MediaType = "AUDIO" | "IMAGE" | "VIDEO" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SHDNAMeditationSubview_fragmment$data = {
  readonly description: string;
  readonly id: string;
  readonly media: string;
  readonly mediaType: MediaType;
  readonly title: string;
  readonly " $fragmentType": "SHDNAMeditationSubview_fragmment";
};
export type SHDNAMeditationSubview_fragmment$key = {
  readonly " $data"?: SHDNAMeditationSubview_fragmment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAMeditationSubview_fragmment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAMeditationSubview_fragmment",
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
      "name": "title",
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
      "name": "media",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "mediaType",
      "storageKey": null
    }
  ],
  "type": "Meditation",
  "abstractKey": null
};

(node as any).hash = "aabe2b7f4de33b14acf23dab086a2579";

export default node;
