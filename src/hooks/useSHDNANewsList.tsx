import { useCallback } from "react";
import { graphql, useLazyLoadQuery, useRefetchableFragment } from "react-relay";
import { useSHDNANewsListQuery } from "./__generated__/useSHDNANewsListQuery.graphql";
import { useSHDNANewsListRefetchQuery } from "./__generated__/useSHDNANewsListRefetchQuery.graphql";
import {
  useSHDNANewsList_RefetchableFragment$data,
  useSHDNANewsList_RefetchableFragment$key,
} from "./__generated__/useSHDNANewsList_RefetchableFragment.graphql";

type useSHDNANewsListExport = [
  data: useSHDNANewsList_RefetchableFragment$data,
  refetch: () => void
];

export const useSHDNANewsList = (): useSHDNANewsListExport => {
  const query = useLazyLoadQuery<useSHDNANewsListQuery>(
    graphql`
      query useSHDNANewsListQuery {
        ...useSHDNANewsList_RefetchableFragment
      }
    `,
    {}
  );

  const [data, refetch] = useRefetchableFragment<
    useSHDNANewsListRefetchQuery,
    useSHDNANewsList_RefetchableFragment$key
  >(
    graphql`
      fragment useSHDNANewsList_RefetchableFragment on Query
      @refetchable(queryName: "useSHDNANewsListRefetchQuery") {
        news {
          title
          ...SHDNANewsBlockFragment
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
