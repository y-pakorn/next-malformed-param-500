# Malformed percent-encoding in an App Router dynamic segment returns 500

Minimal reproduction for a Next.js bug report. The app has one dynamic route, `app/items/[slug]/page.tsx`, and no `pages` directory.

```sh
npm install
npm run build
npm start
```

```sh
curl -o /dev/null -w '%{http_code}\n' http://localhost:3000/items/hello    # 200
curl -o /dev/null -w '%{http_code}\n' http://localhost:3000/items/%E0%A4   # 500, expected 400
curl -o /dev/null -w '%{http_code}\n' http://localhost:3000/items/100%     # 500, expected 400
```

`next dev` returns 400 for the same URLs. So does `next start` after adding any Pages Router route to the project.
