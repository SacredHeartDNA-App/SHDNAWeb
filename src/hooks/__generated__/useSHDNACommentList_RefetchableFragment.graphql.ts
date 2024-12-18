/**
 * @generated SignedSource<<55fc6e987797034ec7dee3d324015b4c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSHDNACommentList_RefetchableFragment$data = {
  readonly getContentComments: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAComment_fragment">;
  }> | null | undefined;
  readonly " $fragmentType": "useSHDNACommentList_RefetchableFragment";
};
export type useSHDNACommentList_RefetchableFragment$key = {
  readonly " $data"?: useSHDNACommentList_RefetchableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useSHDNACommentList_RefetchableFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "contentId"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "relationship"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./useSHDNACommentListRefetchQuery.graphql')
    }
  },
  "name": "useSHDNACommentList_RefetchableFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "contentId",
          "variableName": "contentId"
        },
        {
          "kind": "Variable",
          "name": "relationship",
          "variableName": "relationship"
        }
      ],
      "concreteType": "Comment",
      "kind": "LinkedField",
      "name": "getContentComments",
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

(node as any).hash = "8d1261ea55f6c9f77bc1a05008d74c27";

export default node;
