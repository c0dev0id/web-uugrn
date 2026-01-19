# UUGRN Website

Modern Jekyll-based website for the Unix User Group Rhein-Neckar (UUGRN).

## About

This is the official website for UUGRN, built with Jekyll and hosted on GitHub Pages.

## Development

### Prerequisites

- Ruby 3.2 or higher
- Bundler

### Local Development

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Structure

- `_layouts/` - Page templates
- `_includes/` - Reusable components (header, footer)
- `_events/` - Event posts (optional collection)
- `assets/css/` - Stylesheets
- `*.md` - Main pages (index, events, community, about)

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when pushing to the main branch.

## License

Content: Attribution-ShareAlike 2.5
