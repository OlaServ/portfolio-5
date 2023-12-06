import { client } from "../client";

export async function getMainPage() {
    const mainPage = await client.fetch(
      "*[_type == 'homepage']"
    );
    return mainPage;
  }
  