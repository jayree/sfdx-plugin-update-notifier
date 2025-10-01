/*
 * Copyright 2025, jayree
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Hook } from '@oclif/core';
import { env } from '@salesforce/kit';
import Debug from 'debug';

const isContentTypeJSON = env.getString('SFDX_CONTENT_TYPE', '').toUpperCase() === 'JSON';
const isOutputEnabled = !(process.argv.find((arg) => ['--json', '--help', '-h'].includes(arg)) ?? isContentTypeJSON);

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
      ignoreDistTags: ['sf', 'qa'],
    });
  } else {
    await this.config.runHook('updatenotifier', {
      spawnOptions: { detached: true, stdio: 'ignore' },
      defer: true,
      changeLogUrl: {},
      ignoreDistTags: ['sf', 'qa'],
    });
  }
};
