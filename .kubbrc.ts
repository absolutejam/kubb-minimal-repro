import { defineConfig } from "@kubb/core";
import createSwagger from "@kubb/swagger";
import createSwaggerTS from "@kubb/swagger-ts";
import createSwaggerZod from "@kubb/swagger-zod";

export default defineConfig({
  root: ".",
  input: {
    path: "./schema.json",
  },
  output: {
    path: "./gen",
    clean: true,
  },
  plugins: [
    createSwagger({ output: false }),
    createSwaggerTS({ output: "models" }),
    createSwaggerZod({ output: "validation" }),
  ],
});
