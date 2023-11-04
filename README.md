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
  - Set up a Supabase project and obtain your API credentials.
  - Create tables for users, profiles, and links in your Supabase project.

4. Create a .env.local file in the project root and add your Supabase credentials:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

5. Start the development server:
   npm run dev
  
   
## Usage

- Visit the application in your browser at http://localhost:3000.
- Sign up or log in to create and manage your profile and links.
- Edit your profile and links as needed.
- Share your profile link with others!

Follow me on [Twitter](http://twitter/meet-tola)
