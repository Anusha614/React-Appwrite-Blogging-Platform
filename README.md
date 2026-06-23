# React Appwrite Blogging Platform

A full-stack blogging platform built with React, Tailwind CSS, and Appwrite. Users can create accounts, publish blog posts, upload featured images, and manage their own content through a clean web interface.

## Features

* User authentication with Appwrite
* Create, read, update, and delete blog posts
* Upload and display featured images
* Rich text editor for writing posts
* Responsive UI built with Tailwind CSS
* Protected routes for authenticated users

## Tech Stack

### Frontend

* React
* React Router
* Tailwind CSS
* React Hook Form
* Redux Toolkit

### Backend Services

* Appwrite Authentication
* Appwrite Database
* Appwrite Storage

### Editor

* TinyMCE

## Installation

Clone the repository:

```bash
git clone https://github.com/Anusha614/React-Appwrite-Blogging-Platform.git
cd React-Appwrite-Blogging-Platform
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your Appwrite credentials:

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
```

Start the development server:

```bash
npm run dev
```

## What I Learned

* Building a full-stack application using Appwrite
* Managing authentication and user sessions
* Handling file uploads and image rendering
* Working with React Router and protected routes
* Debugging API and storage-related issues

## License

MIT License
