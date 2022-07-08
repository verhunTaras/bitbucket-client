import {AuthOptions} from "bitbucket/src/plugins/auth/types";

export interface GitService {
    clone(): any;
    createBranch(): any;
    pushBranch(): any;
    createPullRequest(): any;
    auth(): any
}

export interface BitbucketOptions {
    baseUrl: string;
    auth: AuthOptions;
}
