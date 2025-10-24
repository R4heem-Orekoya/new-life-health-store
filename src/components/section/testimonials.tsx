import { QuotesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Family from "~/public/family.png";

const testimonials = [
   {
      id: 1,
      name: "Dr. Tunde Adebayo",
      role: "Nutrition Expert, Lagos",
      message:
         "NeoLife products have consistently impressed me. Their supplements are high-quality and deliver real, noticeable results for my clients’ overall wellness.",
      image: Family,
   },
   {
      id: 2,
      name: "Ngozi Eze",
      role: "Satisfied Customer",
      message:
         "After trying NeoLife’s Aloe Vera Plus, I feel more energetic and my digestion has improved tremendously. Highly recommend to anyone serious about health.",
      image: Family,
   },
   {
      id: 3,
      name: "Ifeanyi Okoro",
      role: "Fitness Coach",
      message:
         "The Formula IV Plus is a game changer. My recovery time after workouts has improved, and I feel sharper mentally too. This is quality nutrition.",
      image: Family,
   },
];

export default function Testimonials() {
   return (
      <section className="py-24 bg-muted/30">
         <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
               What Our Customers Say
            </h2>
            <p className="text-muted-foreground mt-2 mb-12 max-w-2xl mx-auto">
               Real stories from real people whose lives have been transformed
               by NeoLife nutrition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {testimonials.map((t) => (
                  <div
                     key={t.id}
                     className="bg-background border rounded-xl p-6 flex flex-col items-center text-center"
                  >
                     <HugeiconsIcon
                        icon={QuotesIcon}
                        strokeWidth={1.5}
                        className="size-8 text-primary mb-4"
                     />
                     <p className="font-semibold text-muted-foreground italic">
                        “{t.message}”
                     </p>
                     <div className="flex flex-col items-center mt-6">
                        <Image
                           src={t.image}
                           alt={t.name}
                           width={56}
                           height={56}
                           className="rounded-full object-cover"
                        />
                        <h4 className="font-semibold mt-3">{t.name}</h4>
                        <span className="text-xs font-medium text-muted-foreground">
                           {t.role}
                        </span>
                     </div>
                  </div>
               ))}
               {testimonials.map((t) => (
                  <div
                     key={t.id}
                     className="bg-background border rounded-xl p-6 flex flex-col items-center text-center"
                  >
                     <HugeiconsIcon
                        icon={QuotesIcon}
                        strokeWidth={1.5}
                        className="size-8 text-primary mb-4"
                     />
                     <p className="font-semibold text-muted-foreground italic">
                        “{t.message}”
                     </p>
                     <div className="flex flex-col items-center mt-6">
                        <Image
                           src={t.image}
                           alt={t.name}
                           width={56}
                           height={56}
                           className="rounded-full object-cover"
                        />
                        <h4 className="font-semibold mt-3">{t.name}</h4>
                        <span className="text-xs font-medium text-muted-foreground">
                           {t.role}
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
