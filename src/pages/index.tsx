import { MDXProvider } from "@mdx-js/react";
import Main from "@/content/main.mdx";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className={"container"}>
        <div className={"content"}>
          <MDXProvider>
            <Main />
          </MDXProvider>
        </div>
        <Footer />
      </div>
    </>
  )
}
