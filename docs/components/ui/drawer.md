# Overview

This file defines a highly customizable Drawer component using the `vaul` library, offering a modal-like interface that slides in from the bottom of the screen. It provides a set of sub-components for creating a complete drawer experience, including overlay, content, header, footer, title, and description.

# Key Features

-   **Modal Presentation:** Implements a drawer that slides up from the bottom of the screen, providing a focused interaction space.
-   **Customizable Appearance:** Offers styled components for the drawer's overlay, content area, header, footer, title, and description, allowing for extensive customization.
-   **Component Composition:** Provides individual components that can be composed to create varied drawer layouts and functionalities.
-   **Overlay Management:** Includes a built-in overlay component that darkens the background and prevents interaction with elements behind the drawer.
-   **Portal Integration:** Leverages a portal to render the drawer content directly under the `body`, bypassing potential styling or stacking context issues.

# Dependencies

-   `react`
-   `vaul`
-   `@/lib/utils`
