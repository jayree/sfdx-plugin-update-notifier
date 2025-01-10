# sfdx-plugin-update-notifier
[![sfdx](https://img.shields.io/badge/cli-sfdx-brightgreen.svg)](https://developer.salesforce.com/tools/sfdxcli)
[![Version](https://img.shields.io/npm/v/sfdx-plugin-update-notifier.svg)](https://npmjs.org/package/sfdx-plugin-update-notifier)
[![CircleCI](https://circleci.com/gh/jayree/sfdx-plugin-update-notifier/tree/main.svg?style=shield)](https://circleci.com/gh/jayree/sfdx-plugin-update-notifier/tree/main)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/jayree/sfdx-plugin-update-notifier?branch=main&svg=true)](https://ci.appveyor.com/project/jayree/sfdx-plugin-update-notifier/branch/main)
[![Codecov](https://codecov.io/gh/jayree/sfdx-plugin-update-notifier/branch/main/graph/badge.svg)](https://codecov.io/gh/jayree/sfdx-plugin-update-notifier)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-plugin-update-notifier.svg)](https://npmjs.org/package/sfdx-plugin-update-notifier)
[![License](https://img.shields.io/npm/l/sfdx-plugin-update-notifier.svg)](https://github.com/jayree/sfdx-plugin-update-notifier/blob/main/package.json)

Update notifications for sfdx plugins based on [jayree/oclif-plugin-update-notifier](https://github.com/jayree/oclif-plugin-update-notifier) and [yeoman/update-notifier](https://github.com/yeoman/update-notifier)

<!-- toc -->
* [sfdx-plugin-update-notifier](#sfdx-plugin-update-notifier)
<!-- tocstop -->

## Usage

<!-- usage -->
```sh-session
$ npm install -g sfdx-plugin-update-notifier
$ sfdx COMMAND
running command...
$ sfdx (--version)
sfdx-plugin-update-notifier/1.2.109 linux-x64 node-v22.12.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->

```sh-session
$ sfdx plugins
auth 2.2.5 (core)

   ╭────────────────────────────────────────────────────────────────────────────╮
   │                                                                            │
   │                       sfdx-plugin updates available!                       │
   │                                                                            │
   │           @salesforce/plugin-auth (core) 2.2.5 → 2.2.8 (latest)            │
   │    https://github.com/salesforcecli/plugin-auth/blob/main/CHANGELOG.md     │
   │                                                                            │
   ╰────────────────────────────────────────────────────────────────────────────╯
```
