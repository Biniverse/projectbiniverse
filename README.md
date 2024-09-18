# BINIVERSE

**Description**:  
This is a collaborative project between coworkers, built using TypeScript and Express. The project aims to create a modular, scalable backend service with modern best practices.

---

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributors](#contributors)

---

## Overview

This project is built using TypeScript, Express, React, and Node.js. The goal is to create a backend service with modular architecture. Each part of the service is separated into routes, services, and controllers, promoting a clean and maintainable codebase.

---

## Technologies

- **Node.js**
- **Express**
- **TypeScript**
- **React**
- **Tailwind**
- **MongoDB**
- **Nodemon** (for local development)
- **Vercel** (for deployment TBD)

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Biniverse/projectbiniverse.git
   cd projectbiniverse
   ```
2. On the root directory, install concurrently
   ```bash
   npm install
   ```
3. Install frontend and backend dependencies using concurrently (naa nani script sa package.json)
   ```bash
   npm run install (this will install both fe and be dependencies using concurrently)
   ```

## Running the Application

There are two ways to run the application, by concurrently to simulataneously run BE and FE or manually run FE and BE

## Using Concurrently

1. Run the development server:
   ```bash
   npm run start (this will run the script to start FE and BE servers)
   ```

## Manually

1. To run backend,
   ```bash
   npm start:backend
   ```
2. To run frontend
   ```bash
   npm start:backend
   ```

## Project Structure

### Backend

```bash
    src/
    ├── routes/
    ├── services/
    ├── controllers/
    ├── helpers/
    ├── utils/
    ├── index.ts
    └── ...
```

### Frontend (TBD)

```bash
    src/
    ├── routes/
    ├── services/
    ├── controllers/
    ├── helpers/
    ├── utils/
    ├── index.ts
    └── ...
```

## Deployment (TBD)

## Contributors

- [Stephen S. Abueva](https://github.com/stephenabv)
- [Edward Joseph A. Habon](https://github.com/edzhabs)
- [John Patrick Ryan D. Mandal](https://github.com/beefysalad)
- [Jovany S. Opelina](https://github.com/bankaihekai)
- [Ester S. Hubahib](https://github.com/essiee06)
- [Ron Dave N. Talledo](https://github.com/22tofu)
