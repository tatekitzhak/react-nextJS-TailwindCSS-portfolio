### To delete all data out of the cache folder on Linux and macOS
- npm config set legacy-peer-deps true
- rm -rf node_modules
- rm -rf **/node_modules
- rm -rf package-lock.json
- rm -rf .next
- rm -rf yarn-error.log
- rm -rf yarn.lock
- npm cache clean --force
- npm cache verify

### How To Use and start 
- `npm run dev`   : "next dev"
- `npm run build` : "next build && next export -o build",
- `npm run start` : "next start",
- `npm run lint`  : "next lint"


### How To Deploy - 

- There are many ways to Deploy this repo.
- here we are gonna use netlify
- Login into netlify with github
- after login select the forked repo or the repo you want to deploy
- after selecting netlify will automatially deploy your website.


### How To Contribute - 


### Tech Stack Used 
- React.js
- Next.js
- TailwindCSS

# List of Routes

|Domain                 | Method       | URI                                  | Action  | Name  |
|-----------------------|:------------:| ------------------------------------:| -------:|------:|
| http://localhost:8000 |GET           | /                                    |         |       |
|                       |GET           | /api                                 |         |       |
|                       |GET           | /api/category                        |         |       |
|                       |GET           |/category/subcategory/topics          |         |       |
|                       |GET           |/category/subcategory/topics/article  |         |       |  

# Application Structure
```
├── node_modules (gitignore)
├── .next (gitignore)
├── blog-post
│   ├── firstblog
|   ├── secondblog
├── build
├── components
│   ├── api
├── src
│   ├── api
│   │   ├── controller
│   │   │   ├── Auth
│   │   │   │   ├── Login.ts
│   │   │   │   ├── RefreshToken.ts
│   │   │   │   └── Register.ts
│   │   │   └── Home.ts
│   │   ├── middlewares
│   │   │   ├── Login.ts
│   │   │   ├── Logout.ts
│   │   │   ├── Register.ts
│   │   │   └── Social.ts
│   │   ├── routes
│   │   │   ├── Login.ts
│   │   │   ├── Logout.ts
│   │   │   ├── Register.ts
│   │   │   └── Social.ts
│   │   └── index.ts
│   ├── configs
│   │   ├── Handler.ts
│   │   └── NativeEvent.ts
│   ├── db
│   │   ├── models
│   │   │   └── user.ts
│   │   └── vendors
│   │        ├── index.ts
│   │        ├── INext.ts
│   │        ├── IRequest.ts
│   │        └── IResponse.ts
│   ├── services
│   │   ├── CORS.ts
│   │   ├── CsrfToken.ts
│   │   ├── Http.ts
│   │   ├── Kernel.ts
│   │   ├── Log.ts
│   │   ├── Statics.ts
│   │   ├── StatusMonitor.ts
│   │   └── View.ts
│   ├── static
│   │   ├── App.ts
│   │   ├── Cache.ts
│   │   ├── Database.ts
│   │   ├── Express.ts
│   │   ├── Locals.ts
│   │   ├── Passport.ts
│   │   ├── Queue.ts
│   │   └── Routes.ts
│   ├── utils
│   │   └── strategies
│   │        ├── Google.ts
│   │        ├── Local.ts
│   │        └── Twitter.ts
│   └── app.ts
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

### Thanks

If you liked this portfolio template, don't forget to give it a ⭐.






