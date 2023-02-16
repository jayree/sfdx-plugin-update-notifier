import { env } from '@salesforce/kit';
import Debug from 'debug';
// eslint-disable-next-line @typescript-eslint/require-await
export const init = async function (options) {
    const debug = Debug(`${this.config.bin}:sfdx-plugin-update-notifier:hooks:init`);
    if (!['plugins:install', 'plugins:uninstall'].includes(options.id)) {
        env.setBoolean('OCLIF_DISABLE_UPDATENOTIFIER', true);
        debug('set: OCLIF_DISABLE_UPDATENOTIFIER=true');
    }
};
//# sourceMappingURL=init.js.map