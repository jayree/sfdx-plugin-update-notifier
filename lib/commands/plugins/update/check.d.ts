import { SfdxCommand } from '@salesforce/command';
export default class PluginsUpdateCheck extends SfdxCommand {
    static description: string;
    static examples: string[];
    run(): Promise<void>;
}
