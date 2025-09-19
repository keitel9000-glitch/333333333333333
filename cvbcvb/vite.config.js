import { defineConfig } from 'vite'
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : ''
const base = repo ? `/${repo}/` : '/'
export default defineConfig({ base, build: { outDir: 'dist' } })
