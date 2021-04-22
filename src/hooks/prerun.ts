/*
 * Copyright (c) 2020, jayree
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { Hook } from '@oclif/config';
import { env } from '@salesforce/kit';
import * as Debug from 'debug';

const debug = Debug('pluginUpdateNotifier:preRun');

const isContentTypeJSON = env.getString('SFDX_CONTENT_TYPE', '').toUpperCase() === 'JSON';
const isOutputEnabled = !(process.argv.find((arg) => ['--json', '--help', '-h'].includes(arg)) || isContentTypeJSON);

export const prerun: Hook<'prerun'> = async function (options) {
  env.setBoolean('OCLIF_DISABLE_UPDATENOTIFIER', true);
  debug('set: OCLIF_DISABLE_UPDATENOTIFIER=true');
  if (isOutputEnabled) {
    if (['plugins:update', 'plugins:update:check', 'update'].includes(options.Command.id)) {
      await this.config.runHook('updateNotifier', {
        updateCheckInterval: 0,
        spawnOptions: { detached: false, stdio: 'ignore' },
        defer: false,
        changeLogUrl: {
          'sfdx-cli': 'https://github.com/forcedotcom/cli/blob/main/releasenotes/README.md',
          salesforcedx: 'https://github.com/forcedotcom/cli/blob/main/releasenotes/README.md',
          'salesforce-alm': 'https://github.com/forcedotcom/cli/blob/main/releasenotes/README.md',
        },
      });
      return;
    }
    await this.config.runHook('updateNotifier', {
      updateCheckInterval: 1000 * 60 * 60 * 24,
      spawnOptions: { detached: true, stdio: 'ignore' },
      defer: true,
      changeLogUrl: {
        'sfdx-cli': 'https://github.com/forcedotcom/cli/blob/main/releasenotes/README.md',
        salesforcedx: 'https://github.com/forcedotcom/cli/blob/main/releasenotes/README.md',
        'salesforce-alm': 'https://github.com/forcedotcom/cli/blob/main/releasenotes/README.md',
      },
    });
  }
};
