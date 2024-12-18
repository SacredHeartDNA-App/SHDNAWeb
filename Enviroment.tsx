import React, { ReactNode } from "react";
import {
  Store,
  RecordSource,
  Environment,
  Network,
  Observable,
  RequestParameters,
  Variables,
} from "relay-runtime";
import { RelayEnvironmentProvider } from "react-relay";
import { SHDNAError } from "./src/models/SHDNAError";

type ChildrenProps = {
  children: ReactNode;
};

const fetchQuery = (operation: RequestParameters, variables: Variables) => {
  return Observable.create((sink) => {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    })
      .then(async (response) => {
        const resData = await response.json();

        if (resData.errors) {
          throw new SHDNAError("GraphQL error", resData.errors[0].message);
        }

        sink.next(resData);
        sink.complete();
      })
      .catch((error) => {
        if (error instanceof SHDNAError) {
          sink.error(error);
        } else {
          sink.error(new SHDNAError("Unknown error occurred"));
        }
      });
  });
};

function createEnvironment() {
  return new Environment({
    network: Network.create((operation, variables) =>
      fetchQuery(operation, variables)
    ),
    store: new Store(new RecordSource()),
  });
}
const RelayEnvironment = ({ children }: ChildrenProps) => {
  const environment = React.useMemo(() => {
    return createEnvironment();
  }, []);

  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
};

export default RelayEnvironment;
