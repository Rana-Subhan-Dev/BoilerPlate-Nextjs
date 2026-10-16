# 🚀 BoilerPlate-NextJS

A scalable, easy-to-maintain **Next.js** frontend starter. It ships with state management, data fetching, theming, testing and code-quality tooling already wired up, so you can start building features right away.

## 📌 Features

- ⚡ **Next.js 16 (App Router)** with React 19, file-based routing and Turbopack dev server
- 🎨 **Tailwind CSS 4** for utility-first styling, with a custom color palette
- 💅 **styled-components 6** with SSR support (no flash of unstyled content)
- 🌗 **Light/Dark theme switcher** built on a theme context and `ThemeProvider`
- 🗃 **Zustand 5** for global state, with `persist` and `devtools` middleware
- 🔄 **TanStack React Query 5** for server-state fetching and caching
- 🌐 **Axios API client** with request/response interceptors and `NEXT_PUBLIC_*` env config
- 🪝 **Reusable hooks**: `useToggle`, `useCurrentTime`, `useThemeToggle`
- 🧩 **Shared components**: loader (CSS modules), theme chooser, header, content and footer layouts
- 🧪 **Vitest 5 + React Testing Library** with jsdom and coverage support
- 🛠 **ESLint 9 and Prettier** (Next.js core-web-vitals and a11y rules)
- 🔧 **Husky and lint-staged** that lint and test changed files on commit
- 📦 **pnpm-only installs** for consistent dependencies across the team

---

## ✅ Requirements

- **Node.js** `>= 20.9.0`
- **pnpm** (npm and yarn installs are blocked on purpose)

```sh
npm i -g pnpm
```

---

## 📦 Installation

```sh
pnpm install
pnpm env        # copies .env.example to .env (won't overwrite an existing .env)
```

Then fill in the variables in `.env`.

> If pnpm rejects the lockfile because of a `minimumReleaseAge` policy, run `pnpm clean --lockfile` and then `pnpm install`.

---

## 🔑 Environment Variables

Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

```env
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_BASE_URL_API=
```

| Variable                   | Description                                         |
| -------------------------- | --------------------------------------------------- |
| `NEXT_PUBLIC_BASE_URL`     | Base URL used by the Axios client (`services/api.js`) |
| `NEXT_PUBLIC_BASE_URL_API` | API base URL for your backend                       |

Restart the dev server after changing `.env`.

---

## 🚀 Usage

| Command         | Description                                              |
| --------------- | -------------------------------------------------------- |
| `pnpm dev`      | Start the dev server at http://localhost:3000            |
| `pnpm build`    | Create an optimized production build                     |
| `pnpm start`    | Serve the production build                               |
| `pnpm lint`     | Run ESLint (fails on any warning)                        |
| `pnpm test`     | Run unit tests with Vitest (watch mode)                  |
| `pnpm coverage` | Run tests once and generate a coverage report            |
| `pnpm env`      | Create `.env` from `.env.example`                        |

---

## 📂 Project Structure

```
BoilerPlate-NextJS/
│── public/                 # Static assets
│── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.jsx      # Root layout (metadata, <html>, <body>)
│   │   ├── page.jsx        # "/" route
│   │   ├── providers.jsx   # Client providers (React Query, theme, styled-components)
│   │   ├── globals.css     # Tailwind entry
│   │   └── icon.svg        # Favicon
│   ├── views/              # Page-level components rendered by routes
│   ├── layouts/            # Header, Content, Footer
│   ├── components/shared/  # Reusable UI (loader, theme chooser)
│   ├── contexts/           # React contexts (theme chooser)
│   ├── hooks/              # Custom hooks
│   ├── store/              # Zustand stores
│   ├── services/           # API client (Axios)
│   ├── constants/          # Colors, themes, route paths
│   ├── utils/              # Helper functions
│   ├── lib/                # styled-components SSR registry
│   ├── __tests__/          # Unit tests and test setup
│   └── App.jsx             # App shell (theme, global styles, layout)
│── .env.example            # Environment variable template
│── eslint.config.mjs       # ESLint configuration
│── next.config.mjs         # Next.js configuration
│── postcss.config.mjs      # PostCSS (Tailwind)
│── tailwind.config.js      # Tailwind theme
│── vitest.config.mjs       # Vitest configuration
│── package.json            # Dependencies and scripts
```

> The folder is called `views` (not `pages`) because Next.js treats `src/pages` as its legacy Pages Router.

---

## 🧭 How It Works

- **Routing:** add a folder with a `page.jsx` inside `src/app` (for example `src/app/about/page.jsx` becomes `/about`). Keep the page UI in `src/views` and import it into the route file. Route paths are listed in `src/constants/paths.js`.
- **Client components:** anything that uses hooks, state or styled-components needs `'use client';` at the top of the file.
- **Theming:** `ThemeChooserProvider` holds the current theme. Use `useThemeChooser()` to read it or call `toggle()`. Styled components read colors from `theme` (see `src/constants/theme.js`).
- **State:** `useUserStore` in `src/store/settings.js` is a persisted Zustand store (saved to `localStorage` under the key `settings`).
- **API calls:** import `api` from `src/services/api.js` and use it with React Query's `useQuery` / `useMutation`. Add auth headers in the request interceptor.

---

## 🛠 Tech Stack

### Main

- `next`, `react`, `react-dom`
- `styled-components`
- `tailwindcss`
- `zustand`
- `@tanstack/react-query`
- `axios`

### Dev

- `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`
- `eslint`, `eslint-config-next`, `eslint-plugin-prettier`, `prettier`
- `husky`, `lint-staged`

---

## 🧪 Testing

```sh
pnpm test        # watch mode
pnpm coverage    # single run with coverage
```

Tests live in `src/__tests__`. The setup file (`src/__tests__/setup.js`) loads `jest-dom` matchers and cleans up after each test.

---

## 🔧 Code Quality

- **Prettier** config is in `.prettierrc` (single quotes, 120 columns, trailing commas).
- **Husky** runs on commit (`pnpm install` sets it up through the `prepare` script) and **lint-staged** lints staged files and runs the related tests.

---

## 🚢 Deployment

```sh
pnpm build
pnpm start
```

Or deploy to Vercel, Netlify or any Node host. Set the `NEXT_PUBLIC_*` variables in your hosting dashboard.

---

## 🤝 Contributing

1. **Fork** this repository.
2. **Clone** your fork:
   ```sh
   git clone https://github.com/Rana-Subhan-Dev/BoilerPlate-Nextjs.git
   ```
3. **Create a branch**:
   ```sh
   git checkout -b feature-name
   ```
4. **Commit** your changes:
   ```sh
   git commit -m "feat: add new feature"
   ```
5. **Push** and open a Pull Request.

---

## 📜 License

This project is licensed under the **ISC License**.
