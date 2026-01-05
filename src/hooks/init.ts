/*
 * Copyright 2026, jayree
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

// eslint-disable-next-line @typescript-eslint/require-await
export const init: Hook<'init'> = async function (options) {
  const debug = Debug(`${this.config.bin}:sfdx-plugin-update-notifier:hooks:init`);
  if (options.id && !['plugins:install', 'plugins:uninstall'].includes(options.id)) {
    env.setBoolean('OCLIF_DISABLE_UPDATENOTIFIER', true);
    debug('set: OCLIF_DISABLE_UPDATENOTIFIER=true');
  }
};
