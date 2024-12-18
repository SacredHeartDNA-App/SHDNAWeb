/**
 * @generated SignedSource<<426a123234974d0ec89e6ed88cb2a6c8>>
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

(node as any).hash = "df1b17d816c12ba12c04ba2a487f20ea";

export default node;
