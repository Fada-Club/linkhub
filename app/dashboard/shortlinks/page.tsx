import ShortenedLinks from "@/components/dashboard/shortenedLinks/ShortenedLinks";
import { AddShortLink } from "@/components/dashboard/shortenedLinks/buttons";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from 'react'

export default async function DashboardPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <main className="flex-1 w-full flex flex-col gap-10 items-center flex-grow p-2 md:p-6 md:overflow-y-auto lg:p-12">
        <div className="flex flex-col sm:flex-row  gap-5 justify-between w-full">
          <h1 className="md:text-4xl text-2xl font-bold">Your shortened Links will show here</h1>
          <AddShortLink />
        </div>
        <Suspense fallback={<p className="text-3xl font-extrabold flex justify-start">Loading feed...</p>}>
          <ShortenedLinks />
        </Suspense>
    </main>
  );
}
