import { useCallback } from "react";
import { graphql, useLazyLoadQuery, useRefetchableFragment } from "react-relay";
import { useSHDNAPostListQuery } from "./__generated__/useSHDNAPostListQuery.graphql";
import {
  useSHDNAPostList_RefetchableFragment$data,
  useSHDNAPostList_RefetchableFragment$key,
} from "./__generated__/useSHDNAPostList_RefetchableFragment.graphql";
import { useSHDNAPostListRefetchQuery } from "./__generated__/useSHDNAPostListRefetchQuery.graphql";

type useSHDNAPostListExport = [
  data: useSHDNAPostList_RefetchableFragment$data,
  refetch: () => void
];

export const useSHDNAPostList = (): useSHDNAPostListExport => {
  const query = useLazyLoadQuery<useSHDNAPostListQuery>(
    graphql`
      query useSHDNAPostListQuery {
        ...useSHDNAPostList_RefetchableFragment
      }
    `,
    {}
  );

  const [data, refetch] = useRefetchableFragment<
    useSHDNAPostListRefetchQuery,
    useSHDNAPostList_RefetchableFragment$key
  >(
    graphql`
      fragment useSHDNAPostList_RefetchableFragment on Query
      @refetchable(queryName: "useSHDNAPostListRefetchQuery") {
        posts {
          ...SHDNAPostBlock_Fragment
        }
      }
    `,
    query
  );

  const refetchComments = useCallback(() => {
    refetch(
      {},
      {
        fetchPolicy: "network-only",
      }
    );
  }, [refetch]);

  return [data, refetchComments];
};
