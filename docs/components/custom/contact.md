# Overview

This file defines a React component, `ContactBtn`, that provides a user interface for contacting the developer via email. It allows users to specify their availability using a calendar and add a custom message to the email. The component opens in a drawer, offering a clean and focused user experience.

# Key Features

-   **Availability Selection:** Allows users to select multiple dates from a calendar to indicate their availability.
-   **Custom Message Input:** Provides a text input field for users to add a personalized message to the email.
-   **Email Composition:** Automatically generates an email with the selected dates and custom message (if provided) in the email body.
-   **Email Sending:** Opens the user's default email client with a pre-filled email containing the subject, recipient, and composed message.
-   **Drawer Interface:** Presents the contact form within a drawer component, providing a modal-like experience without navigating away from the current page.

# Dependencies

-   React
-   Next.js (specifically `useRouter`)
-   `lucide-react` (for icons)
-   Custom UI components (`Button`, `Drawer`, `Calendar`, `Input`)
