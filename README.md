# Linktree Clone - LinkHub with Next.js, React, TypeScript, and Supabase [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40tola)](https://twitter.com/meet-tola)

<p align="center">
  <a href="https://creativedesignsguru.com/demo/nextjs-landing-page/"><img src="public/assets/images/linktree.png?raw=true" alt="Next js starter banner"></a>
</p>

Welcome to the Linkhub project! This project is a demonstration of how to build a web application similar to Linktree, where users can create a simple landing page with links to their social profiles and other websites. The project utilizes Next.js, React, TypeScript, and Supabase for its development. Through this project, you will learn how to set up user authentication, store user data, and create dynamic user profiles.


### DEMO

[![Nextjs Landing Page Template Screenshot](public/assets/images/linktree-clone-link-hub.png?raw=true)](https://linktree-clone-link-hub.vercel.app/)

Check out our [live demo](https://linktree-clone-link-hub.vercel.app/).

## Features

1. **User Authentication**: Implement a secure authentication system allowing users to sign up and log in to manage their profiles and links.

2. **Profile Creation**: Users can add a profile picture, a title, and links to their landing page. Profile details are stored in Supabase.

3. **Link Management**: Users can add links with titles and URLs. The links are displayed on the user's profile page.

4. **Automatic Link Icon Generation**: Automatically fetch and display icons for the links based on their URLs.

5. **Profile Picture Upload**: Users can upload a profile picture to personalize their landing page.

6. **User Profiles**: Each user has their own public landing page with a profile picture and links. Other users can visit and view these profiles.

7. **Edit Profile (Authenticated Users)**: Authenticated users can edit their profile details, including the profile picture, title, and links.

8. **Error Handling**: The project demonstrates how to handle various error scenarios gracefully.

9. **Supabase Integration**: Learn how to configure and integrate Supabase for user data storage and retrieval.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/linktree-clone.git
   cd linktree-clone

2. Install dependencies:
   ```bash
   npm install
   
3. Configure Supabase:
   <ul>
     <li>Set up a Supabase project and obtain your API credentials.</li>
   <li>Create tables for users, profiles, and links in your Supabase project.</li>
   </ul>
  
   
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
