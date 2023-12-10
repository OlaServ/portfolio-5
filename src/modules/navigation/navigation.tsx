import { Navbar } from "@/components/navbar/navbar";
import { getNavigation } from "@/utils/sanity/queries/get-navigation";

export const Navigation = async () => {
    const data = await getNavigation();

    return <Navbar data={data}/>

}