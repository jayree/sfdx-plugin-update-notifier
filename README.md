# sfdx-plugin-update-notifier
[![sfdx](https://img.shields.io/badge/cli-sfdx-brightgreen.svg)](https://developer.salesforce.com/tools/sfdxcli)
[![Version](https://img.shields.io/npm/v/sfdx-plugin-update-notifier.svg)](https://npmjs.org/package/sfdx-plugin-update-notifier)
[![CircleCI](https://circleci.com/gh/jayree/sfdx-plugin-update-notifier/tree/main.svg?style=shield)](https://circleci.com/gh/jayree/sfdx-plugin-update-notifier/tree/main)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/jayree/sfdx-plugin-update-notifier?branch=main&svg=true)](https://ci.appveyor.com/project/jayree/sfdx-plugin-update-notifier/branch/main)
[![Codecov](https://codecov.io/gh/jayree/sfdx-plugin-update-notifier/branch/main/graph/badge.svg)](https://codecov.io/gh/jayree/sfdx-plugin-update-notifier)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-plugin-update-notifier.svg)](https://npmjs.org/package/sfdx-plugin-update-notifier)
[![License](https://img.shields.io/npm/l/sfdx-plugin-update-notifier.svg)](https://github.com/jayree/sfdx-plugin-update-notifier/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

## Usage

<!-- usage -->
```sh-session
$ sfdx plugins:install sfdx-plugin-update-notifier
$ sfdx plugins:COMMAND
running command...
$ sfdx plugins
sfdx-plugin-update-notifier 0.0.0
$ sfdx help plugins:COMMAND
USAGE
  $ sfdx plugins:COMMAND
...
```
<!-- usagestop -->
## Commands

<!-- commands -->
- [sfdx-plugin-update-notifier](#sfdx-plugin-update-notifier)
  - [Usage](#usage)
  - [Commands](#commands)
    - [`sfdx plugins:update:check`](#sfdx-pluginsupdatecheck)

### `sfdx plugins:update:check`

check installed plugins for updates

```
USAGE
  $ sfdx plugins:update:check [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx plugins:update:check
  check for updates... done

     ╭────────────────────────────────────────────────────────────────────────────────────────────╮
     │                                                                                            │
     │                             sfdx-plugin updates available!                                 │
     │                                                                                            │
     │                    salesforce-alm (core) 51.6.11 → 51.6.12 (latest)                        │
     │     Changelog: https://github.com/forcedotcom/cli/blob/main/releasenotes/README.md         │
     │                                                                                            │
     ╰────────────────────────────────────────────────────────────────────────────────────────────╯
```

_See code: [commands/plugins/update/check.ts](https://github.com/jayree/sfdx-plugin-update-notifier/blob/v0.0.0/commands/plugins/update/check.ts)_
<!-- commandsstop -->
