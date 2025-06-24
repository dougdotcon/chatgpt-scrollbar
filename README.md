# ChatGPT Scrollbar Fix

Adds a scrollbar to ChatGPT screens where it normally doesn't appear, improving navigation and usability.

## Why this extension?
By default, ChatGPT does not display a proper scrollbar in some areas of its interface, making it difficult to view long content. Since this feature is not available natively, I decided to create this extension to solve the problem and make the experience smoother.

## Features
- Displays a vertical scrollbar in the main ChatGPT container.
- Applies a clean and modern visual style to the scrollbar.
- Works automatically when accessing or navigating between ChatGPT pages.

## Installation
1. Download or clone this repository.
2. In Chrome, go to `chrome://extensions/`.
3. Enable "Developer mode".
4. Click "Load unpacked" and select the project folder.

## How it works
The extension injects a script that identifies the main ChatGPT container and applies styles to show and customize the scrollbar. A DOM mutation observer ensures the scrollbar remains visible even when navigating between different ChatGPT screens.

## Notes
- Does not collect any user data.
- Works only on https://chatgpt.com/.

## License
MIT 