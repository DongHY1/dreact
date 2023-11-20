import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    {
      builder: "rollup",
      name:'jsx-dev-runtime',
      input: "./src/react/jsx",
      outDir: "./dist"
    }
  ]
});