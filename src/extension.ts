import * as vscode from "vscode";
import { EXTENSION_NAME } from "./constants";
import { Log } from "./log";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const log = new Log();
  context.subscriptions.push(log);
  log.info(
    `Congratulations, your extension "${EXTENSION_NAME}" is now active!`
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(`${EXTENSION_NAME}.helloWorld`, () => {
      vscode.window.showInformationMessage(
        `Hello World from ${EXTENSION_NAME}!`
      );
    })
  );
}

// this method is called when your extension is deactivated
//export function deactivate() {}
