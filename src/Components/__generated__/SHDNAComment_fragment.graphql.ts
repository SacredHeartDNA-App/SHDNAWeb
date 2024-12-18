/**
 * @generated SignedSource<<5db692563b83518121787a8a0cafc4ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNAComment_fragment$data = {
  readonly author: {
    readonly lastName: string;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAUserRow_Fragment">;
  };
  readonly id: string;
  readonly isLikedByUser: boolean;
  readonly likes: number;
  readonly text: string;
  readonly " $fragmentType": "SHDNAComment_fragment";
};
export type SHDNAComment_fragment$key = {
  readonly " $data"?: SHDNAComment_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAComment_fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAComment_fragment",
  "selections": [
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
      "name": "text",
      "storageKey": null
    },
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
      "name": "isLikedByUser",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "author",
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
  "type": "Comment",
  "abstractKey": null
};

(node as any).hash = "ec5bda1a9058add34a4762a19a49a3cd";

export default node;
