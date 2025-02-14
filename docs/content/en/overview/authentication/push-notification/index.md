---
title: "Duo / Mobile Push"
description: "Authelia utilizes Duo Push Notifications as one of it's second factor authentication methods."
lead: "Authelia utilizes Duo Push Notifications as one of it's second factor authentication methods."
date: 2022-03-20T22:52:38+11:00
draft: false
images: []
menu:
  overview:
    parent: "authentication"
weight: 250
toc: true
aliases:
  - /docs/features/2fa/push-notifications.html
---

Mobile Push notifications are a really convenient and trendy method to perform 2FA. When 2FA is required Authelia sends
a notification directly to an application on your mobile phone where you can instantly choose to accept or deny.

Authelia leverages [Duo] third party to provide this feature.

{{< figure src="duo-push-1.jpg" caption="The Duo Mobile Push authorization notification" alt="The Duo Mobile Push authorization notification" width=200 >}}

{{< figure src="duo-push-2.png" caption="The Duo Mobile Push authorization consent view" alt="The Duo Mobile Push authorization consent view" width=200 >}}

First, sign up on their website, log in, create a user account and attach it a mobile device. Beware that the name of
the user must match the name of the user in Authelia, or must have an alias that matches the user in Authelia.

Then, in Duo interface, click on *Applications* and *Protect an Application*. Select the option *Partner Auth API*. This
will generate an integration key, a secret key and a hostname. You can set the name of the application to __Authelia__
and then you must add the generated information to Authelia [configuration](../../deployment/index.md) as shown below:

```yaml
duo_api:
  hostname: api-123456789.example.com
  integration_key: ABCDEF
  secret_key: 1234567890abcdefghifjkl
```

See the [configuration documentation](../../../configuration/second-factor/duo.md) for more details.

Now that Authelia is configured, pass the first factor and select the Push notification option.

{{< figure src="2FA-PUSH.png" caption="The Mobile Push 2FA view" alt="The Mobile Push 2FA view" width=400 >}}

You should now receive a notification on your mobile phone with all the details about the authentication request. In
case you have multiple devices available, you will be asked to select your preferred device.

## FAQ

### Why don't I have access to the *Push Notification* option?

It's likely that you have not configured __Authelia__ correctly. Please read this documentation again and be sure you
had a look at [config.template.yml](https://github.com/authelia/authelia/blob/master/config.template.yml) and
[configuration documentation](../../../configuration/second-factor/duo.md).

[Duo]: https://duo.com/
