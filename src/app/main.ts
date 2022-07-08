import {InputOptions} from "./contracts/shared.contracts";
import {UpdatePackageVersionJob} from "./jobs/update-package-version.job";
import {JobInterface} from "./contracts/jobs.contracts";

export async function main(options: InputOptions) {
    const jobName = options['_'][0];
    const Job = getJob(jobName);

    return await new Job(options).run();
}

function getJob(job: string): new (options: InputOptions) =>  JobInterface {
    switch (job) {
        case 'update-package':
            return UpdatePackageVersionJob;
        default:
            throw new Error(`Job: ${job} is not implemented`);
    }
}
