# Portfolio App

## Personal Goals

- Create a portfolio web app to house future projects information
- Build a better understanding of current tools for fullstack development
- Create better programming and organizational habits
- Test and iterate over new and existing programming patterns
- Experiment with GitHub's features
- Keep a record/blog of the development progress
- Contribute to other projects used within this one

## Technical Goals

- Static where possible
- Mobile first approach
- End-to-end type safety
- High test coverage
- Easy scalability
- Great development experience
- Fully open source
- Easy deployment
- CI/CD

## Tools

- Typescript
- React
- Next.js
- Prisma 2
- Styled Components + Polished
- React Query

# Delivery #1

## Create Base Code Structrure

- Create directory structure
- Install tools
- Setup example page and API
- Deploy initial version

### Log #1

- Generated a boilerplate `Next.js` app with typescript
  - Have a few files to play with during the following steps
- Added local `Prettier` installation and configuration
  - Standardize formatting across Javascript and Typescript files
- Added local `ESLint` installation and configuration
  - Enforce some linting rules for better code practices
- Added `Husky` and configured pre-commit and pre-push hooks
  - Enforce linting and formatting on commits and type safety on pushes
- Added `Commitizen` and `Commitlint`
  - Enforce standard commit messages and add a prompt to easily create them

Notes:

Useful scripts:

- `commit`: open Commitizen's commit message prompt
- `format`: apply formatting to all Javascript and Typescript files
- `check-format`: check for any formatting errors
- `check-types`: check for any typing errors
- `lint`: check for any linting errors

### Log #2

- Made `src` folder typescripts `baseUrl`
  - Can now import directly from folders in `src` (ex. `import { theme } from "styles/theme"`)
- Added `styled-components` and `polished` for component styling
  - Normalized global styled with `polished`'s `normalize` mixin
  - Created basic theme with typing support
- Recreated `Next.js`'s boilerplate with `styled-components` to verify everything is working

### Log #3

- Added `prisma` for easy database access and type safety
- Created basic database schema with a `Project` model
- Created example API route to test the `prisma` configuration
