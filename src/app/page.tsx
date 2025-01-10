// import Image from "next/image";
import Thali from "@/components/Thali";
import WelcomeText from "@/components/welcome";
// import test from "@/components/test";
import ThaliSelector from "@/components/ThaliSelector";



export default function Home() {
  return (
        // Set a height that allows for scrolling
        <div className="h-[100vh] bg-gradient-to-b from-green-50 to-green-100">
        <WelcomeText />
        <Thali />
        <ThaliSelector/>
        </div>
  );
}
