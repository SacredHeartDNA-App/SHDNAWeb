/**
 * @generated SignedSource<<dcde64b401070a74ff844563cfad6d18>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type ChallengeType = "ACTIVE_CITIZENSHIP" | "BELONGING_COMMUNITY" | "PERSONAL_INTEGRITY" | "SPIRITUALITY" | "TRANSFORMATIVE_ACTION" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SHDNAJournalBlock_Fragment$data = {
  readonly created_at: any;
  readonly id: string;
  readonly title: string;
  readonly value: ChallengeType | null | undefined;
  readonly " $fragmentType": "SHDNAJournalBlock_Fragment";
};
export type SHDNAJournalBlock_Fragment$key = {
  readonly " $data"?: SHDNAJournalBlock_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SHDNAJournalBlock_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SHDNAJournalBlock_Fragment",
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
      "name": "created_at",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Journal",
  "abstractKey": null
};

(node as any).hash = "b2f9bf21cad05763ff2cea93662b4bdc";

export default node;
