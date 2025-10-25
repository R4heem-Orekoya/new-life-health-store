export default function Loading() {
   return (
      <section className="container py-16 animate-pulse">
         <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
            <div className="h-4 w-12 bg-zinc-200 rounded"></div>
            <div className="h-4 w-4 bg-zinc-200 rounded"></div>
            <div className="h-4 w-16 bg-zinc-200 rounded"></div>
            <div className="h-4 w-4 bg-zinc-200 rounded"></div>
            <div className="h-4 w-24 bg-zinc-200 rounded"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="aspect-square border rounded-xl bg-zinc-100" />

            <div className="flex flex-col gap-6 md:py-4">
               <div className="h-8 w-2/3 bg-zinc-200 rounded" />
               <div className="h-6 w-32 bg-zinc-200 rounded" />
               <div className="h-10 w-40 bg-zinc-200 rounded" />

               <div className="space-y-2">
                  <div className="h-4 w-24 bg-zinc-200 rounded" />
                  <div className="flex gap-2">
                     <div className="h-8 w-16 bg-zinc-200 rounded" />
                     <div className="h-8 w-16 bg-zinc-200 rounded" />
                  </div>
               </div>

               <div className="h-10 w-40 bg-zinc-200 rounded" />

               <div className="h-4 w-40 bg-zinc-200 rounded" />

               <hr className="border-zinc-200 my-4" />

               <ul className="space-y-2">
                  <li className="h-4 w-3/4 bg-zinc-200 rounded"></li>
                  <li className="h-4 w-2/3 bg-zinc-200 rounded"></li>
                  <li className="h-4 w-1/2 bg-zinc-200 rounded"></li>
               </ul>
            </div>
         </div>

         <section className="mt-16 max-w-3xl mx-auto">
            <div className="h-6 w-48 bg-zinc-200 rounded mb-6" />
            <div className="space-y-3">
               <div className="h-3 w-full bg-zinc-200 rounded" />
               <div className="h-3 w-5/6 bg-zinc-200 rounded" />
               <div className="h-3 w-4/6 bg-zinc-200 rounded" />
            </div>
         </section>

         <div className="max-w-4xl mx-auto mt-20">
            <div className="h-6 w-56 bg-zinc-200 rounded mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-64 bg-zinc-100 rounded-xl" />
               ))}
            </div>
         </div>
      </section>
   );
}
