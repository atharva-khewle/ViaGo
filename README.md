# TravelStack

A simplistic "link-in-bio" style travel directory built with Next.js, Tailwind CSS, and Firebase-ready data structures.

## Stack
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [React Icons (MD)](https://react-icons.github.io/react-icons/)
- **Backend**: Prepped for [Firebase Firestore](https://firebase.google.com/docs/firestore)

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Setup Environment**:
    Rename `.env.local.example` to `.env.local` and add your Firebase credentials (optional for now as it uses static data).

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## Project Structure
- `app/`: Contains the App Router pages and global styles.
- `components/`: UI components like `CategoryCard` and `SiteCard`.
- `data/`: `sites.js` contains the curated list of 25+ travel resources.
- `lib/`: Firebase configuration and database helper functions.

## Switching to Firestore
The project is designed to be easily migrated to Firestore.
1. Uncomment the Firestore logic in `lib/db.js`.
2. Ensure your Firestore collection is named `sites` and follows the object structure in `data/sites.js`.
