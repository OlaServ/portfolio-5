"use client";
import { Hero } from "@/components/hero/hero";
import { useMainPageData } from "@/hooks/use-main-page-data";
import { useEffect } from "react";

export default function Home() {
  const { data, status } = useMainPageData();
  

  useEffect(() => console.log(data), [data]);
  return (
    <main>
      <Hero data={data ? data[0]: null}/>
    </main>
  );
}
