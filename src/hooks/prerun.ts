/*
 * Copyright (c) 2021, jayree
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { Hook } from '@oclif/core';
import { env } from '@salesforce/kit';
import Debug from 'debug';

const isContentTypeJSON = env.getString('SFDX_CONTENT_TYPE', '').toUpperCase() === 'JSON';
const isOutputEnabled = !(process.argv.find((arg) => ['--json', '--help', '-h'].includes(arg)) || isContentTypeJSON);

export const prerun: Hook<'prerun'> = async function (options) {
  const debug = Debug(`${this.config.bin}:sfdx-plugin-update-notifier:hooks:prerun`);

  if (env.getBoolean('SFDX_DISABLE_UPDATENOTIFIER')) {
    debug('found: SFDX_DISABLE_UPDATENOTIFIER=true');
    return;
  }

  if (!isOutputEnabled) return;

  if (['plugins:install', 'plugins:uninstall'].includes(options.Command.id)) {
    return;
  }

  if (['plugins:update', 'plugins:update:check', 'update'].includes(options.Command.id)) {
    await this.config.runHook('updatenotifier', {
      updateCheckInterval: 0,
      spawnOptions: { detached: false, stdio: 'ignore' },
      defer: false,
      changeLogUrl: {},
      ignoreDistTags: ['sf'],
    });
  } else {
    await this.config.runHook('updatenotifier', {
      spawnOptions: { detached: true, stdio: 'ignore' },
      defer: true,
      changeLogUrl: {},
      ignoreDistTags: ['sf'],
    });
  }
};
