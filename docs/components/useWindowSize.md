# Overview

This file defines a custom React hook that provides real-time information about the window's scroll position. It allows components to easily access and react to changes in the horizontal and vertical scroll offsets of the window. This hook simplifies the process of tracking the current scroll position.

# Key Features

- Tracks the window's horizontal (X) scroll offset.
- Tracks the window's vertical (Y) scroll offset.
- Updates the scroll position state on every scroll event.
- Provides the current scroll position as an easily accessible object.
- Efficiently manages event listeners to prevent memory leaks.

# Dependencies

- React (`useState`, `useEffect`)
