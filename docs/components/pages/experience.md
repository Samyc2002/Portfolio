# Overview

The `experience.jsx` file is a React component that displays a categorized list of accomplishments and experiences. It utilizes an accordion component to organize and present work experiences, leadership roles, awards, and education details in an interactive and user-friendly manner.

# Key Features

-   **Categorized Display:** Organizes experiences into categories like Work Experience, Leadership, Awards, and Education.
-   **Interactive Accordion:** Uses an accordion component to allow users to expand and collapse experience categories.
-   **Experience Cards:** Renders individual experiences within each category using a dedicated `ExperienceCard` component.
-   **Sticky Title:** Implements a sticky title to keep the section heading visible during scrolling.
-   **Saves Scroll Position:** Saves the current scroll height for future use.

# Dependencies

-   React (`react`)
-   Custom `Sticky` component
-   Custom `Title` component
-   UI library components (`Accordion`, `AccordionContent`, `AccordionItem`, `AccordionTrigger`, `Separator`)
-   Custom `ExperienceCard` component
-   Custom `Text` component
