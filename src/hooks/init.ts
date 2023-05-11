/*
 * Copyright (c) 2021, jayree
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { Hook } from '@oclif/core';
import { env } from '@salesforce/kit';
import Debug from 'debug';

// eslint-disable-next-line @typescript-eslint/require-await
export const init: Hook<'init'> = async function (options) {
  const debug = Debug(`${this.config.bin}:sfdx-plugin-update-notifier:hooks:init`);
  if (options.id && !['plugins:install', 'plugins:uninstall'].includes(options.id)) {
    env.setBoolean('OCLIF_DISABLE_UPDATENOTIFIER', true);
    debug('set: OCLIF_DISABLE_UPDATENOTIFIER=true');
  }
};
