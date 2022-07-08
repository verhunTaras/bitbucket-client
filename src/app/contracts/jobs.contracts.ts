import {InputOptions} from "./shared.contracts";

export interface JobInterface {
    readonly options: InputOptions;
    run(): Promise<any>
}
