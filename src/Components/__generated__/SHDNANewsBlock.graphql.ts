/**
 * @generated SignedSource<<d438588924bc3f8a3750455ebace93ca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNANewsBlock$data = {
  readonly cover: string | null | undefined;
  readonly text: string;
  readonly title: string;
  readonly user: {
    readonly name: string;
    readonly profilePic: string | null | undefined;
  };
  readonly " $fragmentType": "SHDNANewsBlock";
};
export type SHDNANewsBlock$key = {
  readonly " $data"?: SHDNANewsBlock$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNANewsBlock">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNANewsBlock",
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
      "name": "text",
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
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "profilePic",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "News",
  "abstractKey": null
};

(node as any).hash = "787e3f012b60249c23962d6ad56bd4ca";

export default node;
