<a name="readme-top"></a>

<h1 align="center">Users Manager :busts_in_silhouette: Streamlining User Management</h1>

<p align="center">
An open-source full stack application designed for efficient and intuitive user management. <br> <a href="https://users-manager-one.vercel.app/">Try it Here!</a>
</p>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#question-about-the-project">About The Project</a>
      <ul>
        <li><a href="#joystick-usage">Usage</a></li>
        <li>
          <a href="#bricks-built-with">Built With</a>
          <ul>
          <li><a href="#-back-end">Back End</a></li>
          <li><a href="#-front-end">Front End</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#clapper-getting-started">Getting Started</a>
      <ul>
        <li><a href="#pencil-prerequisites">Prerequisites</a></li>
        <li><a href="#gear-installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#world_map-roadmap">Roadmap</a></li>
    <li><a href="#computer-contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## :question: About The Project

Users Manager is a cutting-edge, open-source solution designed to streamline user management processes in various applications and platforms, featuring a centralized handler with a user-friendly interface, efficient data handling, flexible integration, customizable settings, and secure and reliable performance.

### :joystick: Usage

Key features include user profiles management, robust data security, scalable architecture, and customizable settings.

### :bricks: Built With

This project is built using modern technologies with a primary focus on TypeScript (99% of the codebase). Specific technologies used include:

#### 🖥 Back End
- SQL
- Query Builder
- Supabase

#### 👩‍💻 Front End
- TypeScript
- Tailwind CSS

## :clapper: Getting Started

I deployed my Next.js app using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. <br>
Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

You can also start this app on your local machine, following these steps:

### :pencil: Prerequisites

- clone this repository

  ```sh
  git clone https://github.com/egidiosalinaro/users-manager
  ```

- install all libraries and dependencies needed for this app

  ```sh
  npm install
  ```
### :gear: Installation

Once downloaded this repo, you are ready to go. <br> Now you can:

- configure your Supabase database as I did

  to match the routes called in this repo, your Supabase database should have a table called `users`

- connect your Supabase account

  create a `.env.local` file (you won't find mine because it is in the `.gitignore` list) containing all the environment variables required for Supabase to work, and fill them with your own keys

  ```sh
  NEXT_PUBLIC_SUPABASE_URL=
  NEXT_PUBLIC_SUPABASE_ANON_KEY=
  SUPABASE_SERVICE_ROLE_KEY=
  ```

- start the app locally

  ```sh
  npm run dev
  ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app in action.

## :world_map: Roadmap

- [x] `.env.local` file containing keys
- [x] setting up Supabase
- [x] app and pages layout configuration
- [x] handling login and logout
- [x] creating hooks and actions
- [x] delete user logic
- [x] last modified property
- [x] report about customers gender

## :computer: Contributing

Contributions are welcome. Please follow the guidelines to contribute to the project.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

For any inquiries, contact egidiosalinaro@gmail.com.
