# Configurable Toolbar

Simple atom package that allows you to configure icons for [tool-bar](https://atom.io/packages/tool-bar).
Inspired by [tool-bar-main](https://github.com/suda/toolbar-main)

## Configuration

Add `tool-bar-config` property to your config.cson file in following format:

```
  "tool-bar-config": [
    {
      icon: "document"
      iconSet: "ion"
      title: "New File"
      callback: "application:new-file"
    }
    {
      icon: "folder"
      iconSet: "ion"
      title: "Open..."
      callback: "application:open-folder"
    }
    {
      icon: "archive"
      iconSet: "ion"
      title: "Save"
      callback: "core:save"
    }
    {
      icon: "spacer"
    }
    {
      icon: 'search'
      iconSet: 'ion'
      title: 'Find in Buffer'
      callback: 'find-and-replace:show'
    }
    {
      icon: "shuffle"
      iconSet: "ion"
      title: "Replace in Buffer"
      callback: "find-and-replace:show-replace"
    }
    {
      icon: "spacer"
    }
    {
      icon: "navicon-round"
      iconSet: "ion"
      title: "Toggle Command Palette"
      callback: "command-palette:toggle"
    }
    {
      icon: "gear-a"
      iconSet: "ion"
      title: "Open Settings View"
      callback: "settings-view:open"
    }
    {
      icon: "spacer"
    }
    {
      icon: "refresh"
      iconSet: "ion"
      title: "Reload Window"
      callback: "window:reload"
    }
  ]
```

This example reproduces similar view to [tool-bar-main](https://github.com/suda/toolbar-main).

License: MIT
