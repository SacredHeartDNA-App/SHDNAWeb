/**
 * @generated SignedSource<<273e2fc3513e8be30af87bd2beaac1ca>>
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

(node as any).hash = "b4929830e936dac935dfcf7f2baa0f5c";

export default node;
