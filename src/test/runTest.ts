import * as path from 'path';

import { runTests, downloadAndUnzipVSCode } from '@vscode/test-electron';
import { format } from 'util';

// standalone tests execution - locally installs a specified vscode version and runs the tests inside
// run using `npm run test`
// to run the tests in your current vscode installation use .vscode/launch.json
async function main() {
	try {
		const extensionDevelopmentPath = path.resolve(__dirname, '../../');

		const extensionTestsPath = path.resolve(__dirname, './suite/index');

		const vscodeVersion = process.env.TEST_VSCODE_VERSION || 'stable';
		const neovimPath = process.env.TEST_NEOVIM_PATH || 'nvim';
		process.stdout.write(format("using neovim: %s\n", neovimPath));

		const vscodeExecutablePath = await downloadAndUnzipVSCode(vscodeVersion); // installs to .vscode-test/

		const launchArgs = ["--disable-extensions"]; // disable builtin extensions

		// todo: add test workspaces: launchArgs: [path.resolve(__dirname, '../../../test-fixtures/fixture1')]
		// todo: add test configurations either inside workspace or with --user-data-dir to change user data from ./.vscode-test/user-data to a fixture specific dir
		// example setups: https://github.com/microsoft/vscode-test/blob/main/sample/test/runTest.ts
		await runTests({ vscodeExecutablePath, extensionDevelopmentPath, extensionTestsPath, reuseMachineInstall: false, launchArgs });
	} catch (err) {
		console.error('Failed to run tests');
		process.exit(1);
	}
}

main();
