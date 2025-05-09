# Overview

This file defines a navigation bar component for a web application. It provides a consistent header at the top of the page, offering navigation and access to key resources like a resumé and contact information. The navbar's appearance can subtly change based on the user's scroll position.

# Key Features

-   **Brand Display:** Displays a logo and brand name ("Samy.exe") that may disappear after scrolling down the page.
-   **Resumé Link:** Provides a direct link to download a resumé in PDF format.
-   **Contact Button:** Includes a button that triggers a contact form or other contact method.
-   **Dynamic Appearance:** The header has a backdrop blur and changes size and appearance based on the user's scroll position.

# Dependencies

-   next/image
-   ../ui/separator
-   ../ui/button
-   lucide-react (FolderOpenIcon, PhoneCall)
-   ../useWindowSize
-   sonner (toast)
-   ./contact (ContactBtn)
