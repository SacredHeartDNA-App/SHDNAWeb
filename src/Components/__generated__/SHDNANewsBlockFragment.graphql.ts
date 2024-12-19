/**
 * @generated SignedSource<<d3b45fce2b60ffdf6de093f95892c2b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNANewsBlockFragment$data = {
  readonly cover: string;
  readonly extLinks: ReadonlyArray<string> | null | undefined;
  readonly id: string;
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
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "extLinks",
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

(node as any).hash = "a42cf0c57bd10e5a45250a52458e709f";

export default node;
