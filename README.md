In this **Next.js / Typescript** project I made a platform powered by **firebase firestore** as a main database, authentication with **firebase auth** and firebase cloud storage for store media and files, you can search about jobs or post a job if you are signed as an oprganization with cool styling with **Tailwind CSS** and **Shadcn UI**.

# How to run on your machine

- clone the project on your machine or download the files of it

```bash
    git clone https://github.com/ahmedtarekwork/job-huntly.git
```

- setup web firebase project, then connect it with this Nextjs project by adding firebase project info inside .env file in root directory

```js
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGEING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
```

- run local server on your machine

```bash
    npm run dev
```