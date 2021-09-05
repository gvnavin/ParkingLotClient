import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import RouterSwitch from "./Navigation/RouterSwitch";

export const queryClient = new QueryClient()

export default function Root() {
  return (
      <div>
        <QueryClientProvider client={queryClient}>
          <Router>
            <RouterSwitch/>
          </Router>
          <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
      </div>
  );
}
