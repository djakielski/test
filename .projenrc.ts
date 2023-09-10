/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { cdktf } from "projen";
import { Stability } from "projen/lib/cdk";
import {
  NodePackageManager,
  NpmAccess,
  UpgradeDependenciesSchedule,
} from "projen/lib/javascript";
import { AutoApprove } from "./projenrc/auto-approve";
import { Automerge } from "./projenrc/automerge";
import { CustomizedLicense } from "./projenrc/customized-license";
import { UpgradeCDKTF } from "./projenrc/upgrade-cdktf";
import { UpgradeNode } from "./projenrc/upgrade-node";

// `name` is expected to be in the format "cdktf-project-name" or "@cdktf/project-name"
const name = "cdktf-nodejs-function";
const shortName = name.replace(/^@?cdktf[-/]/g, "");

const githubActionPinnedVersions = {
  "actions/checkout": "c85c95e3d7251135ab7dc9ce3241c5835cc595a9", // v3.5.3
  "actions/download-artifact": "9bc31d5ccc31df68ecc42ccf4149144866c47d8a", // v3.0.2
  "actions/github-script": "d7906e4ad0b1822421a7e6a35d5ca353c962f410", // v6.4.1
  "actions/setup-node": "64ed1c7eab4cce3362f8c340dee64e5eaeef8f7c", // v3.6.0
  "actions/upload-artifact": "0b7f8abb1508181956e8e162db84b466c27e18ce", // v3.1.2
  "amannn/action-semantic-pull-request":
    "c3cd5d1ea3580753008872425915e343e351ab54", // v5.2.0
  "peter-evans/create-pull-request": "284f54f989303d2699d373481a0cfa13ad5a6666", // v5.0.1
};

const project = new cdktf.ConstructLibraryCdktf({
  name,
  description: "A projen template for CDKTF constructs authored by HashiCorp",
  repositoryUrl: `https://github.com/cdktf/${shortName}.git`,
  author: "Dominik Jakielski",
  authorAddress: "git@jakielski.de",
  authorOrganization: false,
  defaultReleaseBranch: "main",
  projenrcTs: true,
  prettier: true,
  licensed: false,
  pullRequestTemplate: false,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ["auto-approve", "automerge", "dependencies"],
      schedule: UpgradeDependenciesSchedule.WEEKLY,
    },
  },
  workflowGitIdentity: {
    name: "team-tf-cdk",
    email: "github-team-tf-cdk@hashicorp.com",
  },
  packageManager: NodePackageManager.PNPM,
  keywords: ["ckd", "aws", "lambda", "nodejs", "constructs"],
  stability: Stability.EXPERIMENTAL,
  npmAccess: NpmAccess.PUBLIC,
  releaseToNpm: true, // you probably want to remove this line, assuming you want to publish to NPM
  cdktfVersion: "^0.18.0",
  jsiiVersion: "^5.1.0",
  minNodeVersion: "18.12.0",
});

project.addPeerDeps(
  "cdktf@>=0.18.0",
  "@cdktf/provider-null@>=8.0.0",
  "constructs@^10.0.25"
);
project.addDevDeps(
  "change-case",
  "testcontainers"
);

new CustomizedLicense(project);
new AutoApprove(project);
new Automerge(project);
new UpgradeCDKTF(project);
new UpgradeNode(project);

// for local developing (e.g. linking local changes to cdktf)
project.addGitIgnore(".yalc");
project.addGitIgnore("yalc.lock");

project.addPackageIgnore("scripts");
project.addPackageIgnore("examples");
project.addPackageIgnore("projenrc");
project.addPackageIgnore("/.projenrc.ts");

project.addPackageIgnore(".copywrite.hcl");
// Run copywrite tool to add copyright headers to all files
project.buildWorkflow?.addPostBuildSteps(
  {
    name: "Setup Copywrite tool",
    uses: "hashicorp/setup-copywrite@867a1a2a064a0626db322392806428f7dc59cb3e", // v1.1.2
  },
  { name: "Add headers using Copywrite tool", run: "copywrite headers" }
);

// Use pinned versions of github actions
Object.entries(githubActionPinnedVersions).forEach(([action, sha]) => {
  project.github?.actions.set(action, `${action}@${sha}`);
});

const releaseWorkflow = project.tryFindObjectFile(
  ".github/workflows/release.yml"
);
releaseWorkflow?.addOverride("on.push", {
  branches: ["main"],
  "paths-ignore": [
    // don't do a release if the change was only to these files/directories
    "examples/**",
    ".github/ISSUE_TEMPLATE/**",
    ".github/CODEOWNERS",
    ".github/dependabot.yml",
    ".github/**/*.md",
  ],
});

project.synth();
