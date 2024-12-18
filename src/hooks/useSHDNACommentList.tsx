import { useCallback } from "react";
import { graphql, useLazyLoadQuery, useRefetchableFragment } from "react-relay";
import { useSHDNACommentListQuery } from "./__generated__/useSHDNACommentListQuery.graphql";
import {
  useSHDNACommentList_RefetchableFragment$data,
  useSHDNACommentList_RefetchableFragment$key,
} from "./__generated__/useSHDNACommentList_RefetchableFragment.graphql";
import { useSHDNACommentListRefetchQuery } from "./__generated__/useSHDNACommentListRefetchQuery.graphql";
import { ContentType } from "../Components/SHDNACommentList";

type useSHDNACommentListExport = [
  data: useSHDNACommentList_RefetchableFragment$data,
  refetch: () => void
];

export const useSHDNACommentList = (
  contentId: string,
  relationship: ContentType
): useSHDNACommentListExport => {
  const query = useLazyLoadQuery<useSHDNACommentListQuery>(
    graphql`
      query useSHDNACommentListQuery(
        $contentId: ID!
        $relationship: ContentEnum!
      ) {
        ...useSHDNACommentList_RefetchableFragment
          @arguments(contentId: $contentId, relationship: $relationship)
      }
    `,
    { contentId, relationship }
  );

  const [data, refetch] = useRefetchableFragment<
    useSHDNACommentListRefetchQuery,
    useSHDNACommentList_RefetchableFragment$key
  >(
    graphql`
      fragment useSHDNACommentList_RefetchableFragment on Query
      @refetchable(queryName: "useSHDNACommentListRefetchQuery")
      @argumentDefinitions(
        contentId: { type: "ID!" }
        relationship: { type: "ContentEnum!" }
      ) {
        getContentComments(contentId: $contentId, relationship: $relationship) {
          ...SHDNAComment_fragment
        }
      }
    `,
    query
  );

  const refetchComments = useCallback(() => {
    refetch(
      { contentId },
      {
        fetchPolicy: "network-only",
      }
    );
  }, [contentId, refetch]);

  return [data, refetchComments];
};
