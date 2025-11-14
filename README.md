
# Venus Funeral Service Website 金星殯儀服務

A modern, responsive funeral service website built with Next.js and Nx, featuring a content management system for easy updates.

## 🚀 Quick Links - Deployment

- **[🎯 DEPLOY NOW](./DEPLOY_NOW.md)** - Step-by-step deployment (START HERE!)
- **[Quick Start Guide](./QUICK_START.md)** - Deploy in 5 minutes
- **[Full Deployment Guide](./DEPLOYMENT.md)** - Comprehensive deployment instructions
- **[Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)** - Ensure nothing is missed
- **[Deployment Summary](./DEPLOYMENT_SUMMARY.md)** - What's been configured
- **[Troubleshooting](./TROUBLESHOOTING.md)** - Fix common issues
- **[📚 Documentation Index](./docs-index.md)** - Guide to all docs

## 🏗️ Tech Stack

This project was generated using [Nx](https://nx.dev) and built with:

- **Framework:** Next.js 12
- **Language:** TypeScript
- **Styling:** Styled Components
- **CMS:** Netlify CMS
- **Media:** Cloudinary
- **Monorepo:** Nx Workspace

## 📦 Project Structure

```
venus-funeral-website-main/
├── apps/
│   └── venus-funeral-website/    # Main Next.js application
│       ├── pages/                 # Next.js pages
│       ├── components/            # React components
│       └── public/                # Static assets & CMS config
├── libs/
│   └── ui/                        # Shared UI component library
├── content/                       # Markdown content files
└── _posts/                        # Blog posts
```

## 🎯 Getting Started

### Prerequisites

- Node.js 16 or higher
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install
```

### Development

```bash
# Start development server
yarn dev

# Runs at http://localhost:4200
```

### Local CMS Development

```bash
# Terminal 1: Start dev server
yarn dev

# Terminal 2: Start CMS proxy
yarn start:cms

# Access CMS at http://localhost:4200/admin
```

## 🔨 Build & Deploy

### Build for Production

```bash
# Build the application
yarn build:prod

# Export as static site
yarn export

# Or do both at once
yarn build:export
```

### Preview Production Build

```bash
# Preview the built site locally
yarn preview
```

### Deploy

**Fastest way:** See [QUICK_START.md](./QUICK_START.md)

**Recommended hosting:** Netlify (supports the built-in CMS)

```bash
# Build command for Netlify
yarn build:export

# Publish directory
dist/apps/venus-funeral-website/exported
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server |
| `yarn build:prod` | Build for production |
| `yarn export` | Export as static site |
| `yarn build:export` | Build and export |
| `yarn preview` | Preview production build |
| `yarn test` | Run tests |
| `yarn start:cms` | Start CMS proxy server |

## 🎨 Features

- ✅ Fully responsive design
- ✅ Content management system (CMS)
- ✅ Blog/Knowledge base
- ✅ Service showcases
- ✅ Photo galleries
- ✅ Contact form
- ✅ Multi-page navigation
- ✅ SEO optimized
- ✅ Static site generation

## 📚 Content Management

This site uses **Netlify CMS** for content management. After deployment:

1. Go to `https://your-site.com/admin`
2. Log in with your credentials
3. Edit content through the visual interface
4. Changes are committed to Git automatically

## 🌐 Environment Variables

Configure these in `next.config.js` or your hosting platform:

- `facebookUrl` - Facebook page URL
- `phone` - Contact phone number
- `email` - Contact email address

## 🔧 Cloudinary Configuration

Images are managed through Cloudinary. Configuration in:
`apps/venus-funeral-website/public/admin/config.yml`

## 📖 Documentation

- [Deployment Guide](./DEPLOYMENT.md) - Full deployment instructions
- [Quick Start](./QUICK_START.md) - Deploy in 5 minutes
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md) - Pre/post deployment tasks

---

# VenusFuneral

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@venus-funeral/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
