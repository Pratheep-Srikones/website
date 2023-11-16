/** @type {import('tailwindcss').Config} */
export default {
	corePlugins: {
		preflight: false,
	},
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "hsl(276, 100%, 98%)",
					100: "hsl(277, 100%, 95%)",
					200: "hsl(277, 100%, 92%)",
					300: "hsl(278, 100%, 85%)",
					400: "hsl(279, 97%, 75%)",
					500: "hsl(279, 93%, 65%)",
					600: "hsl(280, 83%, 56%)",
					700: "hsl(281, 73%, 47%)",
					800: "hsl(282, 68%, 39%)",
					900: "hsl(282, 67%, 32%)",
					950: "hsl(282, 89%, 21%)",
				},
				secondary: {
					50: "hsl(309, 100%, 97%)",
					100: "hsl(306, 100%, 95%)",
					200: "hsl(306, 100%, 89%)",
					300: "hsl(309, 100%, 80%)",
					400: "hsl(310, 100%, 68%)",
					500: "hsl(308, 100%, 56%)",
					600: "hsl(304, 100%, 49%)",
					700: "hsl(305, 100%, 41%)",
					800: "hsl(306, 100%, 33%)",
					900: "hsl(307, 93%, 28%)",
					950: "hsl(306, 100%, 19%)",
				},
				"extra-1": {
					50: "hsl(313, 82%, 98%)",
					100: "hsl(303, 91%, 95%)",
					200: "hsl(306, 83%, 91%)",
					300: "hsl(309, 82%, 83%)",
					400: "hsl(310, 80%, 73%)",
					500: "hsl(310, 74%, 65%)",
					600: "hsl(311, 61%, 49%)",
					700: "hsl(313, 64%, 40%)",
					800: "hsl(313, 62%, 33%)",
					900: "hsl(314, 55%, 28%)",
					950: "hsl(314, 80%, 16%)",
				},
				"extra-2": {
					50: "hsl(280, 82%, 98%)",
					100: "hsl(275, 83%, 95%)",
					200: "hsl(276, 83%, 91%)",
					300: "hsl(280, 80%, 78%)",
					400: "hsl(280, 79%, 73%)",
					500: "hsl(281, 72%, 61%)",
					600: "hsl(281, 60%, 49%)",
					700: "hsl(283, 63%, 40%)",
					800: "hsl(284, 61%, 33%)",
					900: "hsl(285, 55%, 28%)",
					950: "hsl(285, 78%, 16%)",
				},
				"mora-purple": {
					50: "hsl(310, 100%, 98%)",
					100: "hsl(310, 100%, 95%)",
					200: "hsl(310, 100%, 90%)",
					300: "hsl(312, 100%, 83%)",
					400: "hsl(312, 100%, 72%)",
					500: "hsl(312, 93%, 61%)",
					600: "hsl(313, 77%, 49%)",
					700: "hsl(314, 80%, 40%)",
					800: "hsl(315, 77%, 33%)",
					900: "hsl(316, 71%, 28%)",
					950: "hsl(316, 100%, 22%)",
				},
				"mora-black": {
					50: "hsl(120, 6%, 97%)",
					100: "hsl(108, 9%, 89%)",
					200: "hsl(109, 10%, 78%)",
					300: "hsl(109, 9%, 64%)",
					400: "hsl(111, 8%, 50%)",
					500: "hsl(113, 9%, 40%)",
					600: "hsl(112, 9%, 32%)",
					700: "hsl(115, 8%, 26%)",
					800: "hsl(113, 8%, 22%)",
					900: "hsl(111, 7%, 19%)",
					950: "hsl(120, 9%, 2%)",
				},
				"baby-powder": "#fdfffc",
				"delft-blue": {
					50: "hsl(210, 100%, 97%)",
					100: "hsl(209, 95%, 93%)",
					200: "hsl(209, 100%, 87%)",
					300: "hsl(207, 98%, 78%)",
					400: "hsl(208, 95%, 68%)",
					500: "hsl(212, 93%, 60%)",
					600: "hsl(217, 85%, 53%)",
					700: "hsl(220, 78%, 48%)",
					800: "hsl(222, 72%, 40%)",
					900: "hsl(220, 65%, 33%)",
					950: "hsl(222, 58%, 24%)",
				},
				"fairy-tale": {
					50: "hsl(342, 87%, 97%)",
					100: "hsl(341, 93%, 95%)",
					200: "hsl(340, 100%, 89%)",
					300: "hsl(341, 100%, 82%)",
					400: "hsl(342, 100%, 70%)",
					500: "hsl(345, 96%, 60%)",
					600: "hsl(348, 84%, 51%)",
					700: "hsl(349, 92%, 42%)",
					800: "hsl(350, 88%, 35%)",
					900: "hsl(350, 82%, 30%)",
					950: "hsl(350, 100%, 17%)",
				},
				"ultra-violet": {
					50: "hsl(240, 37%, 97%)",
					100: "hsl(240, 30%, 93%)",
					200: "hsl(240, 32%, 87%)",
					300: "hsl(238, 33%, 78%)",
					400: "hsl(240, 32%, 68%)",
					500: "hsl(243, 31%, 60%)",
					600: "hsl(247, 28%, 53%)",
					700: "hsl(250, 26%, 44%)",
					800: "hsl(251, 24%, 40%)",
					900: "hsl(252, 21%, 33%)",
					950: "hsl(251, 20%, 21%)",
				},
			},
		},
	},
	plugins: [],
};
