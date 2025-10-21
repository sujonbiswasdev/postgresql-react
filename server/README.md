project/
│
├── server/                  # backend (Node + Express + Prisma + PostgreSQL)
│   ├── prisma/
│   │   └── schema.prisma    # Prisma schema
│   ├── src/
│   │   ├── index.js         # main server file
│   │   ├── routes/
│   │   │   └── user.js      # user routes
│   │   └── controllers/
│   │       └── userController.js
│   ├── .env
│   ├── package.json
│   └── ...
│
└── client/                  # frontend (React)
    ├── src/
    │   ├── App.js
    │   ├── components/
    │   │   └── UserList.jsx
    │   └── pages/
    │       └── Home.jsx
    ├── package.json
    └── ...

............................................................................................................

Part 1: Backend – Basic Setup (Node + Express + Prisma + PostgreSQL)
Step 1: Initialize backend

In server/ folder:

npm init -y
npm install express cors dotenv prisma @prisma/client
npx prisma init

......................................................................................................
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}


.....................................................................................
npx prisma migrate dev --name init
npx prisma generate


...........................................................................................
