# Fontastic Chaos 🌐😜

![Demonstration](https://github.com/shrysjain/fontastic-chaos/blob/main/assets/demonstration.png?raw=true)

Fontastic Chaos is a playful Chrome extension that randomly changes the font size on every webpage you visit. This extension was created as a fun dare from Hackclub Bug Eater.

## Features

- Randomly changes the font size of all text elements on a webpage
- Works on all websites, with the option to exclude specific URLs
- Simple and easy to use

## Installation

1. Download or clone this repository.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by clicking the toggle switch in the top right corner.
4. Click "Load unpacked" and select the directory where you downloaded or cloned the repository.

## Usage

Once the extension is installed, it will automatically apply random font sizes to every distinct element on every webpage you visit. You can disable the extension at any time from the Chrome Extensions page (`chrome://extensions/`).

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
