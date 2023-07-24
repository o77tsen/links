import { MDXProvider } from "@mdx-js/react";
import Main from "@/content/main.mdx";

export default function Home() {
  return (
    <>
      <MDXProvider>
        <Main />
      </MDXProvider>
    </>
  )
}
