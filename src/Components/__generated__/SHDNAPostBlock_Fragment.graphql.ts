/**
 * @generated SignedSource<<f309d0738dc54280a89a52eefc3d1c2f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAPostBlock_Fragment$data = {
  readonly id: string;
  readonly isLikedByUser: boolean;
  readonly isOwner: boolean | null | undefined;
  readonly likes: number;
  readonly media: ReadonlyArray<string> | null | undefined;
  readonly text: string | null | undefined;
  readonly user: {
    readonly lastName: string;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAUserRow_Fragment">;
  };
  readonly " $fragmentType": "SHDNAPostBlock_Fragment";
};
export type SHDNAPostBlock_Fragment$key = {
  readonly " $data"?: SHDNAPostBlock_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAPostBlock_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAPostBlock_Fragment",
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
      "name": "likes",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isLikedByUser",
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
      "name": "media",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isOwner",
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
          "name": "lastName",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SHDNAUserRow_Fragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "583940aada85c82e84426220aee0cede";

export default node;
