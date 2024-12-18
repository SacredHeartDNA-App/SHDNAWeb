import { graphql, useLazyLoadQuery } from "react-relay";
import { useMemo } from "react";
import { useSHDNATokenAuthQuery } from "./__generated__/useSHDNATokenAuthQuery.graphql";

const useSHDNATokenAuth = (token: string) => {
  const queryVariables = useMemo(() => ({ token }), [token]);

  const data = useLazyLoadQuery<useSHDNATokenAuthQuery>(
    graphql`
      query useSHDNATokenAuthQuery($token: String!) {
        verifyToken(token: $token) {
          id
        }
      }
    `,
    queryVariables,
    { fetchPolicy: "store-or-network" }
  );

  const userId = useMemo(() => {
    data?.verifyToken?.id;
  }, [data]);

  return data.verifyToken == null ? null : data?.verifyToken?.id;
};

export default useSHDNATokenAuth;
