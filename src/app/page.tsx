"use client";
import { Hero } from "@/components/hero/hero";
import { useMainPageData } from "@/hooks/use-main-page-data";
import { useEffect } from "react";
import { Spinner, Center } from "@chakra-ui/react";

export default function Home() {
  const { data, status } = useMainPageData();

  useEffect(() => console.log(data), [data]);
  return (
    <main>
      {data ? (
        <Hero data={data[0]} />
      ) : (
        <Center w="100vw" h="80vh">
          <Spinner size="xl" />
        </Center>
      )}
    </main>
  );
}
