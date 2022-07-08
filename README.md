# neovim-terminal

Enjoy the full power of neovim and vscode and their plugin ecosystems.

"Neovim terminal" extension integrates vscode with neovim via builtin terminal emulation.
This approach allows you to quickly access features of both editors
while keeping the implementation simple and bug free.

## Features/Goals

MVP:

- a command that switches to a neovim terminal for currently open editor
  - new neovim terminal in the current editor group if there's no terminal in the editor group
  - reuse neovim terminal or alaways open a separate one?
    - a terminal page should behave like vscode editor group, use neovim's "tabs"/"windows"?
    - use exitsting neovim terminal if found, find open file
- a neovim binding that is forwarded to vscode to switch open a vscode editor for the file
  - if not open opens a new editor in the same group (I guess there's standard "open file" api call)
- plugin executes on the remote side, remote side needs to have neovim installed (extensionKind: workspace)

Future possibilities:

- variants/customizability of the switch commands that explicitly:
  - find existing editors vs open new editors
  - open in this group/terminal vs open in new group/terminal
  - open new terminal in split window?
  - how the editor should be opened in neovim (window vs tab)?
- synchronize contents when switching?
  - cursor position?
  - selection?
  - unsaved file changes? refresh/reload?

## Requirements

You need to have neovim installed on the machine vscode backend is running.  
This means that you need to install it in the container if you're running a devcontainer.

## Extension Settings

TODO.

## Similar projects

This project was made due to my dissatisfaction in some existing approaches.
That said, you might still prefer to use one of those:

- [vscode-vim](https://github.com/VSCodeVim/Vim)
  - vim keybinding emulation in typescript
  - "native" to vscode, the only plugin which works in a web context
  - works well as reimplementation of the keybindings
  - doesn't support the neovim plugin ecosystem at all
  - there are some vim plugins that were ported to javascript
  - recommended if you really need vscode to follow vim keybindings
  - can be used with neovim-terminal
- [vscode-neovim](https://github.com/vscode-neovim/vscode-neovim)
  - embed neovim in standard vscode text editor
  - neovim is running in the background, so plugins and advanced commands/settings are actually accurate
  - provides a compatibility and synchronization layer between neovim and vscode
  - but actions on one side are often not properly represented/synchronized to other side
  - compatibility takes a lot of work and sometimes there are no good answers to match the editors

## Known Issues

None

## Release Notes

None

## Development instructions

### Building the code

Command pallet -> Run build task

### Running tests

Test runner is defined in `runTests.ts`. They run an embedded vscode instance.

To run the tests:

Command pallet -> Run test task

### Launching a debug instance of vscode with the extensions

Run and debug -> Select "Run Extension" -> Start Debugging (F5)

A new instance of vscode will be launched with only this extension enabled.

### Debugging tests

Run and debug -> Select "Extension tests" -> Start Debuging(F5)

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

- [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)
