import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    // Allow Dokploy/Traefik generated hostnames in preview mode.
    allowedHosts: ['.traefik.me'],
  },
})
