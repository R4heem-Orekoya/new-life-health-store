import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
   return (
      <>
         <div className="w-[min(1200px,90%)] mx-auto">{children}</div>
      </>
   );
}
