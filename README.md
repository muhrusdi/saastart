# Saastart

Saastart is the modern SaaS boilerplate with everything you need to build better web app/site.

### Technologies

- Turborepo for monorepo
- Strapi for CMS
- Remix.run for web app
- Next.js for another web app
- Gatsby.js for documentation or landing page
- Stitches for styled component
- Radix UI for unstyled/accessible component
- Tailwindcss for utility css

### Apps and Packages

- `cms`: a [Strapi](https://strapi.io/) app
- `gatsby`: a [Gatsby.js](https://www.gatsbyjs.org/) app
- `remix`: a [Remix.run](https://remix.run/) app
- `next`: a [Next.js](https://nextjs.org) app
- `docs`: another [Next.js](https://nextjs.org) app for documentation
- `ui`: a stub React component library shared by applications
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd saastart
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd saastart
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
