/**
 * @generated SignedSource<<3b668b8b75ced887fb8f2817c6752daa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SHDNACommentList_RefetchableFragment$data = {
  readonly newsComments: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAComment_fragment">;
  }> | null | undefined;
  readonly " $fragmentType": "SHDNACommentList_RefetchableFragment";
};
export type SHDNACommentList_RefetchableFragment$key = {
  readonly " $data"?: SHDNACommentList_RefetchableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNACommentList_RefetchableFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "contentId"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./SHDNACommentListRefetchQuery.graphql')
    }
  },
  "name": "SHDNACommentList_RefetchableFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "contentId",
          "variableName": "contentId"
        }
      ],
      "concreteType": "Comment",
      "kind": "LinkedField",
      "name": "newsComments",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SHDNAComment_fragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "2f3b633cdc40cf65fef9044bd7818444";

export default node;
