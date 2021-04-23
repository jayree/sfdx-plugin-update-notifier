"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prerun = void 0;
const kit_1 = require("@salesforce/kit");
const Debug = require("debug");
const debug = Debug('pluginUpdateNotifier:preRun');
const isContentTypeJSON = kit_1.env.getString('SFDX_CONTENT_TYPE', '').toUpperCase() === 'JSON';
const isOutputEnabled = !(process.argv.find((arg) => ['--json', '--help', '-h'].includes(arg)) || isContentTypeJSON);
const prerun = async function (options) {
    if (!['plugins:install', 'plugins:uninstall'].includes(options.Command.id)) {
        kit_1.env.setBoolean('OCLIF_DISABLE_UPDATENOTIFIER', true);
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
    }
};
exports.prerun = prerun;
//# sourceMappingURL=prerun.js.map