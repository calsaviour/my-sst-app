import { StaticSite, use } from "sst/constructs";
import { StackContext } from "sst/constructs";

export function FrontendStack({ stack, app }: StackContext) {
  const stage = app.stage;
  // Define our React app
  const site = new StaticSite(stack, "ReactSite", {
    customDomain: {
      domainName: `test.moonmoon.link`,
      domainAlias: `www.test.moonmoon.link`,
      hostedZone: "moonmoon.link"
    },
    path: "frontend",
    buildOutput: "build",
    buildCommand: "npm run build",
  });

  // Show the url in the output
  stack.addOutputs({
    SiteUrl: site.url || "http://localhost:3000",
  });
}
