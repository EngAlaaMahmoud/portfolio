## Alaa Mahmoud Portfolio

Professional Angular portfolio for Alaa Mahmoud, a Senior Full Stack .NET Developer focused on ASP.NET Core, Angular, SQL Server, enterprise integrations, and clean architecture.

### Stack

- Angular 21 with standalone components
- TypeScript
- Tailwind CSS with a custom theme system
- Static deployment ready for GitHub Pages

### Project structure

- Main content lives in `src/app/data/portfolio-data.ts`
- Reusable sections live in `src/app/components`
- Global theming and layout utilities live in `src/styles.css`

### Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open `http://localhost:4200`

### Build

- Standard production build:

  ```bash
  npm run build
  ```

- GitHub Pages build with the correct base path:

  ```bash
  npm run build:github-pages
  ```

Build output is generated in `dist/portfolio-app/browser`.

### Update portfolio content

Edit `src/app/data/portfolio-data.ts` to update:

- hero text
- skills
- experience timeline
- projects
- education
- GitHub, LinkedIn, email, and location

LinkedIn and email are currently placeholders by design and can be replaced in that single file.

### Deploy to GitHub Pages

This project includes a GitHub Actions workflow for deployment to:

`https://EngAlaaMahmoud.github.io/portfolio/`

1. Push this repository to GitHub under `EngAlaaMahmoud/portfolio`.
2. In GitHub, open `Settings > Pages`.
3. Set the source to `GitHub Actions`.
4. Push to the `main` branch.
5. GitHub Actions will build the Angular app and deploy the `dist/portfolio-app/browser` output automatically.

### Manual deployment check

Before pushing, you can verify the GitHub Pages build locally:

```bash
npm run build:github-pages
```

If your repository name changes, update the `baseHref` in `angular.json` and the workflow deployment URL expectation accordingly.
