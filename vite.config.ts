import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://uxDimon.github.io/md_reader/",
	plugins: [
		svelte(),
		VitePWA({
			registerType: "prompt",
			injectRegister: false,

			manifest: {
				name: "md_reader",
				short_name: "md_reader",
				description: "md_reader",
				theme_color: "#222222",
				background_color: "#222222",
				display: "standalone",
				start_url: "/md_reader/",
				scope: "/md_reader/",

				icons: [
					{
						src: "/md_reader/icons/pwa-64x64.png",
						sizes: "64x64",
						type: "image/png",
					},
					{
						src: "/md_reader/icons/pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/md_reader/icons/pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "/md_reader/icons/maskable-icon-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
			},

			devOptions: {
				enabled: true,
				navigateFallback: "index.html",
				suppressWarnings: true,
				type: "module",
			},

			workbox: {
				globPatterns: ["**/*.{js,css,html,svg,png,jpg,webp,woff2}"],
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/.*\.(png|jpg|webp|svg)$/, // статические картинки
						handler: "CacheFirst",
						options: { cacheName: "images" },
					},
				],
				clientsClaim: true,
				skipWaiting: true,
			},
		}),
	],
});
