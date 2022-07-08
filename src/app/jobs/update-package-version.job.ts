import {JobInterface} from "../contracts/jobs.contracts";
import {InputOptions} from "../contracts/shared.contracts";
import {BitbucketService} from "../services/bitbucket.service";
import {GitService} from "../contracts/services.contracts";
import {options} from "yargs";

export class UpdatePackageVersionJob implements JobInterface {
    constructor(
        public readonly options: InputOptions,
        private readonly gitService: GitService = new BitbucketService({
            auth: options.token
                ? {token: options.token}
                : {username: options.username, password: options.password},
            baseUrl: options.url,
        }),
    ) {
    }

    async run(): Promise<any> {
        await this.gitService.clone();

        await this.updatePackageVersion(this.options.name, this.options['package-version']);

        await this.gitService.createBranch();

        await this.gitService.pushBranch();

        await this.gitService.createPullRequest();

        return 'done!';

    }

    private async updatePackageVersion(name: string, version: string): Promise<void> {
        console.log(`updating ${name} version to ${version} ...`);
    }
}
