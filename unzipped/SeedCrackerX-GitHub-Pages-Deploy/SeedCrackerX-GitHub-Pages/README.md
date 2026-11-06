# SeedCrackerX BE Companion — GitHub Pages

This is a deploy-ready static website for GitHub Pages.

## Publish it

1. Create a new GitHub repository named `SeedCrackerX-BE` (or use an existing repository).
2. Upload the **contents of the `docs` folder** to the repository's `docs/` folder on the default branch (usually `main`).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/docs`, then Save.
6. Wait for GitHub Pages to publish. The site URL will look like:
   `https://YOUR-USERNAME.github.io/SeedCrackerX-BE/`

## Add it to the iPad Home Screen

1. Open the published HTTPS URL in Safari.
2. Tap Share → Add to Home Screen.
3. Enable Open as Web App if that option appears.
4. Add it, then open the new icon.

## What this prototype does

- Stores manually entered exploration observations in browser local storage.
- Tracks dimension, observation type, coordinates and notes.
- Exports observations as JSON.
- Converts Overworld X/Z to approximate Nether X/Z (divide by 8).

## Important limitations

This is **not a seed cracker**. A browser PWA cannot read Minecraft's memory or protected server/world-generation data. It cannot derive a seed from arbitrary observations yet. Use it only for observations you are permitted to collect. It does not bypass server restrictions.

The companion works independently from the resource pack. The pack is visual-only and can be enabled globally in Minecraft.
