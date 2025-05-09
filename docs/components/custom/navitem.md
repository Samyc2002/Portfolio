# Overview

This file defines a navigation item component used within a larger navigation structure. The component dynamically highlights itself based on the user's scroll position on the page, providing visual feedback about the currently viewed section. It adapts its display for different screen sizes.

# Key Features

-   Dynamically highlights the navigation item based on the user's scroll position.
-   Uses local storage to determine when a navigation item should be set to visible.
-   Adapts its content (text or icon) based on screen size for responsive design.
-   Provides a link to a specific section of the page.

# Dependencies

-   `next/link`: Used for creating client-side navigation links.
-   `../useWindowSize`: Custom hook to track the window's scroll position.
-   `react`: Used for functional component creation and useEffect hook.
