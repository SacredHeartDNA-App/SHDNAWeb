import { graphql, useLazyLoadQuery } from "react-relay";
import { useSHDNATokenAuthQuery } from "./__generated__/useSHDNATokenAuthQuery.graphql";
import { useMemo } from "react";

const useSHDNATokenAuth = () => {
  const data = useLazyLoadQuery<useSHDNATokenAuthQuery>(
    graphql`
      query useSHDNATokenAuthQuery {
        verifyTokenWeb {
          id
        }
      }
    `,
    {},
    { fetchPolicy: "network-only" }
  );

  const userId = useMemo(() => {
    data?.verifyTokenWeb?.id;
  }, [data]);

  return data.verifyTokenWeb == null ? null : data?.verifyTokenWeb?.id;
};

export default useSHDNATokenAuth;
