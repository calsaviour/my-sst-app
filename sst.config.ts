import { SSTConfig } from "sst";
import { FrontendStack } from "./stacks/FrontendStack";

export default {
  config(_input) {
    return {
      name: "my-sst-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(FrontendStack);
  }
} satisfies SSTConfig;
