import tailWindForms from "@tailwindcss/forms";
import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/{page,component}/**/*.{tsx,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailWindForms
  ],
};

export default config;
