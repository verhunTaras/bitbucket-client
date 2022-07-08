import {BitbucketOptions, GitService} from "../contracts/services.contracts";

const {Bitbucket} = require('bitbucket')

export class BitbucketService implements GitService {
    constructor(
        options: BitbucketOptions,
        private readonly bitbucket = new Bitbucket({
            auth: options.auth,
            baseUrl: options.baseUrl,
        }),
    ) {
    }

    async clone(): Promise<any> {
        const repos = await this.bitbucket.repositories.list({workspace: 'redoc_tverhun'});
        console.log(repos);
        console.log('cloning...')
    }

    async createBranch(): Promise<any> {
    }

    async pushBranch(): Promise<any> {
    }

    async createPullRequest(): Promise<any> {
    }

    async auth() {

    }

}
