/// <reference types="vitest" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./src/setupTests.ts"],
        include: ["src/**/*.spec.tsx"],
        exclude: ["src/**/*.spec.ts", "src/**/*.test.ts", "src/**/*.test.tsx"]
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "./src")}],
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('.spec.') || id.includes('.test.')) {
                        return 'ignore';
                    }
                }
            }
        }
    }
})