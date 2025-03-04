import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/abstract-factory-demo/', // Replace <REPO_NAME> with your repository name
  plugins: [svelte()],
})