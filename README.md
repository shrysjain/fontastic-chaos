# Fontastic Chaos 🌐😜

![Demonstration](https://github.com/shrysjain/fontastic-chaos/blob/main/assets/demonstration.png?raw=true)

Fontastic Chaos is a playful browser extension that randomly changes the font size on every webpage you visit. This extension was created as a fun dare from Hackclub Bug Eater.

## Features

- Randomly changes the font size of all text elements on a webpage
- Works on all websites, with the option to exclude specific URLs
- Simple and easy to use

## Installation

The following web browsers all use the WebExtensions API, so this extension was ported over to each (from Chrome) with minimal changes. If you run into issues, please [open an issue](https://github.com/shrysjain/fontastic-chaos/issues/new) on this repository.

### Google Chrome

1. Download or clone this repository and save the `chrome/` directory.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by clicking the toggle switch in the top right corner.
4. Click "Load unpacked" and select the Chrome directory from step 1.

### Mozilla Firefox

1. Download or clone this repository and save the `firefox/` directory.
2. Open Mozilla Firefox and navigate to `about:debugging`.
3. Click on "This Firefox".
4. Click on "Load Temporary Add-on" and select the `manifest.json` file in the Firefox directory from step 1.

### Microsoft Edge

1. Download or clone this repository and save the `edge/` directory.
2. Open Microsoft Edge and navigate to `edge://extensions/`.
3. Enable "Developer mode" by clicking the toggle switch in the bottom left corner.
4. Click on "Load unpacked" and select the Edge directory from step 1.

### Opera

1. Download or clone this repository and save the `opera/` directory.
2. Open Opera and navigate to `opera://extensions/`.
3. Enable "Developer mode" and click "Load unpacked".
4. Select the Opera directory from step 1.

### Brave

1. Download or clone this repository and save the `opera/` directory.
2. Open Brave and navigate to `brave://extensions/`.
3. Enable "Developer mode" and click "Load unpacked".
4. Select the Opera directory from step 1.

## Usage

Once the extension is installed, it will automatically apply random font sizes to every distinct element on every webpage you visit. You can disable the extension at any time from your browsers Extensions/Add-Ons page.

## Exclusions

If you want to exclude certain URLs from being affected by the extension, you can modify the `manifest.json` file by adding patterns to the `"exclude_matches"` array.

```json
"exclude_matches": [
  "*://*.example.com/*",
  "*://*.anotherexample.com/*"
]
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

Thanks to Bug Eater on the [Hackclub Arcade](https://hackclub.com/arcade/) for the idea that inspired this extension!
![Bug Eater](https://github.com/shrysjain/fontastic-chaos/blob/main/assets/bug_eater.png?raw=true)
