# ChatGPT Scrollbar Fix

A browser extension designed to restore and customize scrollbar functionality on ChatGPT's web interface. It ensures consistent navigation and improved usability by injecting a persistent, modern scrollbar into the main content container.

## Features

- **Visibility Restoration**: Injects a functional vertical scrollbar into the main ChatGPT container where native scrolling is often hidden or inconsistent.
- **Modern Styling**: Applies a clean, custom visual style to the scrollbar to match the aesthetic of the ChatGPT interface.
- **Dynamic DOM Handling**: Utilizes a `MutationObserver` to detect DOM changes and maintain scrollbar functionality when navigating between different chats or views.
- **Lightweight**: Operates locally within the browser without collecting any user data or communicating with external servers.

## Installation

To install this extension manually in Chrome (or Chromium-based browsers):

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Toggle **Developer mode** in the top right corner.
4. Click **Load unpacked**.
5. Select the root folder of this project.

## Technical Details

The extension works by injecting a Content Script into `https://chatgpt.com/`. This script:

1. Identifies the specific DOM element used for the main conversation container.
2. Injects CSS rules to override existing `overflow` properties and style the scrollbar tracks and thumbs.
3. Initializes a `MutationObserver` to watch for changes in the DOM structure (such as route changes or new message loading) to re-apply styles if the container is re-rendered.

## License

MIT License. Feel free to use and modify as needed.