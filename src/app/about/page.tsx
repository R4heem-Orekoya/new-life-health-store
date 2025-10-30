import About from "@/markdown/about.mdx";

export default function Page() {
   return (
      <div className="w-[min(1200px,90%)] min-h-screen py-20 mx-auto prose prose-lime">
         <About />
      </div>
   );
}
