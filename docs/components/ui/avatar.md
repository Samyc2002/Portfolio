# Overview

This file defines a set of React components for displaying user avatars. It provides a customizable avatar component with image and fallback options, leveraging the Radix UI Avatar primitive for accessibility and styling.

# Key Features

-   **Avatar Component:** Renders a circular avatar container.
-   **Image Handling:** Displays an image within the avatar, scaling it to fit.
-   **Fallback Mechanism:** Shows a default background and optional text when the image fails to load.
-   **Customizable Styling:** Uses `cn` utility to allow custom styles to be applied.
-   **Radix UI Integration:** Built on top of Radix UI's Avatar primitive for consistent accessibility and behavior.

# Dependencies

-   `React`
-   `@radix-ui/react-avatar`
-   `@/lib/utils` (specifically, the `cn` function)
