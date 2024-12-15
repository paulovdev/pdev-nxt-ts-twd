import HomeExperience from "./experience/page";
import HomeHeader from "./header/page";
import HomeStack from "./stack/page";
import HomeWorks from "./works/page";
import HomeSetup from "./setup/page"
import HomeUpdates from "./updates/page";


export default function HomePage() {
    return (
        <section className="relative max-w-[500px] my-0 mx-auto pt-[15px] pr-[15px] pb-[200px] pl-[15px]">
            <HomeHeader />
            <div className="border-left"></div>
            <HomeWorks />
            <div className="border-left"></div>
            <HomeExperience />
            <div className="border-left"></div>
            <HomeStack />
            <div className="border-left"></div>
            <HomeSetup />
            <div className="border-left"></div>
            <HomeUpdates />
        </section>
    );
}
