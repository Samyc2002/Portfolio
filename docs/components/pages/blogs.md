# Overview

This file, `blogs.jsx`, fetches and displays a user's Medium articles on a website. It retrieves the article data from Medium, parses the content, and presents it in a visually appealing carousel format.

# Key Features

- Fetches Medium articles using the `medium-article-api`.
- Parses the HTML content of article descriptions.
- Displays articles in a carousel with title, description, categories, and a link to the full article.
- Uses local storage to keep track of the component's position on the page.

# Dependencies

- `react`
- `medium-article-api`
- Custom `Title` and `Sticky` components
- UI components from `../ui/*` (card, button, carousel, badge)
