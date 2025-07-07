import { useCallback } from "react";
import { graphql, useLazyLoadQuery, useRefetchableFragment } from "react-relay";
import { useSHDNAPodcastListRefetchQuery } from "./__generated__/useSHDNAPodcastListRefetchQuery.graphql";
import {
  useSHDNAPodcastList_RefetchableFragment$data,
  useSHDNAPodcastList_RefetchableFragment$key,
} from "./__generated__/useSHDNAPodcastList_RefetchableFragment.graphql";
import { useSHDNAPodcastListQuery } from "./__generated__/useSHDNAPodcastListQuery.graphql";

type useSHDNAPodcastListExport = [
  data: useSHDNAPodcastList_RefetchableFragment$data,
  refetch: () => void
];

export const useSHDNAPodcastList = (): useSHDNAPodcastListExport => {
  const query = useLazyLoadQuery<useSHDNAPodcastListQuery>(
    graphql`
      query useSHDNAPodcastListQuery {
        ...useSHDNAPodcastList_RefetchableFragment
      }
    `,
    {}
  );

  const [data, refetch] = useRefetchableFragment<
    useSHDNAPodcastListRefetchQuery,
    useSHDNAPodcastList_RefetchableFragment$key
  >(
    graphql`
      fragment useSHDNAPodcastList_RefetchableFragment on Query
      @refetchable(queryName: "useSHDNAPodcastListRefetchQuery") {
        getPodcastEpisodes {
          ...SHDNAPodcastBlockFragment
        }
      }
    `,
    query
  );

  const refetchEpisodes = useCallback(() => {
    refetch(
      {},
      {
        fetchPolicy: "network-only",
      }
    );
  }, [refetch]);

  return [data, refetchEpisodes];
};
