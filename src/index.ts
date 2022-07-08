import {InputOptions} from "./app/contracts/shared.contracts";
import {main} from "./app/main";

const yargs = require('yargs');


const options: InputOptions = yargs
    .command('update-package', 'Update package.json for a given repo')
    .command('update-branch', 'Update package.json for a given repo')
    .describe('name', 'Package name')
    .alias('n', 'name')
    .describe('package-version', 'Package version')
    .alias('v', 'package-version')
    .describe('url', 'URL to repository')
    .describe('token', 'token to access repository')
    .describe('username', 'Git service username')
    .describe('password', 'Git service password')
    .help('h')
    .alias('help', 'h').argv;

main(options)
    .then((done: {}) => console.log(done))
    .catch((e: Error) => {
    console.error(e);
    process.exit(1);
})
