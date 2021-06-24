/*
 * Copyright (c) 2021, jayree
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { SfdxCommand } from '@salesforce/command';

export default class PluginsUpdateCheck extends SfdxCommand {
  public static description = 'check installed plugins for updates';
  public static examples = [
    `$ sfdx plugins:update:check
check for updates... done

  ╭────────────────────────────────────────────────────────────────────────────────────────────╮
  │                                                                                            │
  │                             sfdx-plugin updates available!                                 │
  │                                                                                            │
  │                    salesforce-alm (core) 51.6.11 → 51.6.12 (latest)                        │
  │     Changelog: https://github.com/forcedotcom/cli/blob/main/releasenotes/README.md         │
  │                                                                                            │
  ╰────────────────────────────────────────────────────────────────────────────────────────────╯`,
  ];
  public async run(): Promise<void> {
    // i'm just calling the prerun hook
  }
}
