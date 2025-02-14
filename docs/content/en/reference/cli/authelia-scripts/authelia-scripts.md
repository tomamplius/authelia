---
title: "authelia-scripts"
description: "Reference for the authelia-scripts command."
lead: ""
date: 2022-05-31T11:13:56+10:00
draft: false
images: []
menu:
  reference:
    parent: "cli-authelia-scripts"
weight: 320
toc: true
---

## authelia-scripts

A utility used in the Authelia development process.

### Synopsis

The authelia-scripts utility is utilized by developers and the CI/CD pipeline for configuring
testing suites and various other aspects of the environment.

It can be used to automate or manually run unit testing, integration testing, etc.

### Examples

```
authelia-scripts help
```

### Options

```
      --buildkite          Set CI flag for Buildkite
  -h, --help               help for authelia-scripts
      --log-level string   Set the log level for the command (default "info")
```

### SEE ALSO

* [authelia-scripts bootstrap](authelia-scripts_bootstrap.md)	 - Prepare environment for development and testing
* [authelia-scripts build](authelia-scripts_build.md)	 - Build Authelia binary and static assets
* [authelia-scripts ci](authelia-scripts_ci.md)	 - Run the continuous integration script
* [authelia-scripts clean](authelia-scripts_clean.md)	 - Clean build artifacts
* [authelia-scripts docker](authelia-scripts_docker.md)	 - Commands related to building and publishing docker image
* [authelia-scripts serve](authelia-scripts_serve.md)	 - Serve compiled version of Authelia
* [authelia-scripts suites](authelia-scripts_suites.md)	 - Commands related to suites management
* [authelia-scripts unittest](authelia-scripts_unittest.md)	 - Run unit tests
* [authelia-scripts xflags](authelia-scripts_xflags.md)	 - Generate X LDFlags for building Authelia

###### Auto generated by spf13/cobra on 13-Jun-2022
