---
title: "authelia storage encryption check"
description: "Reference for the authelia storage encryption check command."
lead: ""
date: 2022-05-31T11:13:56+10:00
draft: false
images: []
menu:
  reference:
    parent: "cli-authelia"
weight: 330
toc: true
---

## authelia storage encryption check

Checks the encryption key against the database data

### Synopsis

Checks the encryption key against the database data.

This is useful for validating all data that can be encrypted is intact.

```
authelia storage encryption check [flags]
```

### Examples

```
authelia storage encryption check
authelia storage encryption check --verbose
authelia storage encryption check --verbose --config config.yml
authelia storage encryption check --verbose --encryption-key b3453fde-ecc2-4a1f-9422-2707ddbed495 --postgres.host postgres --postgres.password autheliapw
```

### Options

```
  -h, --help      help for check
      --verbose   enables verbose checking of every row of encrypted data
```

### Options inherited from parent commands

```
  -c, --config strings                         configuration files to load (default [configuration.yml])
      --encryption-key string                  the storage encryption key to use
      --mysql.database string                  the MySQL database name (default "authelia")
      --mysql.host string                      the MySQL hostname
      --mysql.password string                  the MySQL password
      --mysql.port int                         the MySQL port (default 3306)
      --mysql.username string                  the MySQL username (default "authelia")
      --postgres.database string               the PostgreSQL database name (default "authelia")
      --postgres.host string                   the PostgreSQL hostname
      --postgres.password string               the PostgreSQL password
      --postgres.port int                      the PostgreSQL port (default 5432)
      --postgres.schema string                 the PostgreSQL schema name (default "public")
      --postgres.ssl.certificate string        the PostgreSQL ssl certificate file location
      --postgres.ssl.key string                the PostgreSQL ssl key file location
      --postgres.ssl.mode string               the PostgreSQL ssl mode (default "disable")
      --postgres.ssl.root_certificate string   the PostgreSQL ssl root certificate file location
      --postgres.username string               the PostgreSQL username (default "authelia")
      --sqlite.path string                     the SQLite database path
```

### SEE ALSO

* [authelia storage encryption](authelia_storage_encryption.md)	 - Manage storage encryption

###### Auto generated by spf13/cobra on 13-Jun-2022
