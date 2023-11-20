import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    {
      builder: "rollup",
      input: "./src/react/jsx",
      outDir: "./dist",
      name:'jsx-dev-runtime'
    }
  ]
});