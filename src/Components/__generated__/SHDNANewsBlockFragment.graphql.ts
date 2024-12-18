/**
 * @generated SignedSource<<d06dc0e043cd9a56672efda655f67328>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNANewsBlockFragment$data = {
  readonly cover: string | null | undefined;
  readonly text: string;
  readonly title: string;
  readonly user: {
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAUserRow_Fragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"SHDNANewsView">;
  readonly " $fragmentType": "SHDNANewsBlockFragment";
};
export type SHDNANewsBlockFragment$key = {
  readonly " $data"?: SHDNANewsBlockFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNANewsBlockFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNANewsBlockFragment",
  "selections": [
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
      "name": "title",
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
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SHDNAUserRow_Fragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SHDNANewsView"
    }
  ],
  "type": "News",
  "abstractKey": null
};

(node as any).hash = "c55e85c0095cc45c0c899a7cca8e9a68";

export default node;
