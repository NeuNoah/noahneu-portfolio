import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";
const config = [...nextVitals, prettier, { ignores: [".next/**", "coverage/**", "playwright-report/**"] }];
export default config;
