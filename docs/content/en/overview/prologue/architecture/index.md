---
title: "Architecture"
description: "An overview of the Authelia architecture."
lead: "An overview of the Authelia architecture."
date: 2022-05-13T12:34:15+10:00
draft: false
images: []
menu:
  overview:
    parent: "prologue"
weight: 120
toc: false
aliases:
  - /docs/home/architecture.html
---

__Authelia__ is a companion of reverse proxies like Traefik (see [supported proxies](../supported-proxies.md) for a full
list). It can be seen as an extension of those proxies providing authentication functions and a login portal.

As shown in the following architecture diagram, Authelia is directly connected to the reverse proxy but never directly
connected to application backends and therefore the payloads sent by the clients of the protected API will never reach
Authelia, only the authentication pieces will, like the Authorization header for instance. Consequently, the protected
APIs can be a REST, a GraphQL or any other kind of API on top of HTTP.

{{< figure src="architecture-diagram.png" caption="Architecture Diagram" alt="Architecture Diagram" >}}

## Workflow

Reverse proxies are configured so that every incoming request generates an authentication request sent to Authelia.
Authelia responds and will instruct the reverse proxy to either allow the incoming request to pass through, or block it
because the user is not authenticated or is not sufficiently authorized.

### Step by step

When the first request of an unauthenticated user hits the reverse proxy, Authelia determines the user is not
authenticated because no session cookie has been sent along with the request. Consequently, Authelia redirects the user
to the authentication portal provided by Authelia itself. The user can then execute the authentication workflow using
that portal to obtain a session cookie valid for all subdomains of the domain protected by Authelia.

When the user visits the initial website again, the query is sent along with the session cookie which is forwarded in
the authentication request to Authelia. This time, Authelia can verify the user is authenticated and order the reverse
proxy to let the query pass through.

### Sequence Diagram

Here is a description of the complete workflow:

{{< figure src="sequence-diagram.png" caption="Sequence Diagram" alt="Sequence Diagram" >}}

## HTTP/HTTPS

Authelia only works for websites served over HTTPS because the session cookie can only be transmitted over secure
connections. Please note that it has been decided that we won't support websites served over HTTP in order to avoid any
risk due to misconfiguration (see [#590](https://github.com/authelia/authelia/issues/590)).

If a self-signed certificate is required, the
[Generating an RSA Self-Signed Certificate](../../../configuration/miscellaneous/guides.md#generating-an-rsa-self-signed-certificate)
guide should be followed.
