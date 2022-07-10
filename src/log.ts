import { EXTENSION_NAME } from "./constants";

import { Disposable, window, OutputChannel } from "vscode";

export class Log implements Disposable {
  private disposables: Disposable[] = [];

  private channel: OutputChannel;

  public constructor() {
    this.channel = window.createOutputChannel(EXTENSION_NAME);
    this.disposables.push(this.channel);
  }

  public dispose(): void {
    this.disposables.forEach((d) => d.dispose());
  }

  public info(msg: string): void {
    this.channel.appendLine(msg);
  }

  public error(msg: string): void {
    this.channel.appendLine(msg);
    window.showErrorMessage(msg);
  }
}
