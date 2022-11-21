This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First install the dependencies:

```bash
npm i
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The Application is developed by `Next.js` as in FullStack using `TypeScript`. The API implemented by `GraphQL` server using `Apollo Server` and the client is getting data using `Apollo Client`.

The styling is done by `Sass` and SCSS and the application is `responsive` in all screen sizes.

The GraphQL server API return the data in `pagination` using `offset` and `limit` values. Also the `Filtering` is done in the backend and the filtered data is returned in pagination. The data is persisted in `Redux` store in the frontend using `Redux-toolkit`.

You can check out the live version deployed to Vercel:

[https://rviewer-challenge.vercel.app/](https://rviewer-challenge.vercel.app/)

<!-- [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`. -->

<!-- The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages. -->

<!-- ## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
