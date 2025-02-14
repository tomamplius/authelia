---
title: "Multi Domain Protection"
description: "Authelia Multi Domain Protection Implementation"
lead: "Multi Domain Protection is one of the most requested Authelia features."
date: 2022-03-20T12:52:27+11:00
draft: false
images: []
menu:
  roadmap:
    parent: "active"
weight: 230
toc: true
---

We have seen and heard the feedback from our users and we are acting on it. This feature is being prioritized. Allowing
administrators to protect more than one root domain utilizing a single Authelia instance is going to be a difficult
feature to implement but we'll actively take steps to implement it.

## Stages

This section represents the stages involved in implementation of this feature. The stages are either in order of
implementation due to there being an underlying requirement to implement them in this order, or in their likely order
due to how important or difficult to implement they are.

### Decide on a Method

{{< roadmap-status stage="complete" >}}

We need to decide on a method to implement this feature initially and how it will finally look to provide SSO between
root domains.

*__UPDATE:__* The [initial implementation](#initial-implementation) has been decided as well as the
[SSO implementation](#sso-implementation).

### Decide on a Session Library

{{< roadmap-status stage="in-progress" >}}

We need to make a choice going forward about what method we will use to manage cookies and sessions. The current library
has many drawbacks that just are not satisfactory in order to easily facilitate this.

### Initial Implementation

{{< roadmap-status stage="waiting" >}}

This stage is waiting on the choice to handle sessions. Initial implementation will involve just a basic cookie
implementation where users will be required to sign in to each root domain and no SSO functionality will exist.

### SSO Implementation

{{< roadmap-status >}}

The SSO implementation will leverage [OpenID Connect](openid-connect.md) to perform Single-Sign On.
