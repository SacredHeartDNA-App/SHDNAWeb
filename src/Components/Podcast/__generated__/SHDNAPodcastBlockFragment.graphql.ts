/**
 * @generated SignedSource<<e3bff4136011e839963ef01c4172365f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAPodcastBlockFragment$data = {
  readonly audio_url: string;
  readonly description: string;
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "SHDNAPodcastBlockFragment";
};
export type SHDNAPodcastBlockFragment$key = {
  readonly " $data"?: SHDNAPodcastBlockFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAPodcastBlockFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAPodcastBlockFragment",
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
      "name": "audio_url",
      "storageKey": null
    }
  ],
  "type": "PodcastChapter",
  "abstractKey": null
};

(node as any).hash = "fd5f87a86978805a2bb6f2ba77eefd73";

export default node;
