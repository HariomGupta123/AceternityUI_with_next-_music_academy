import Image from "next/image";
import Navbar from "./component/Navbar";
import Herosection from "./component/herosection";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0] ">
     <h1 text-2xl text-center>error</h1>

     <div className="mt-[100px]">
     <Herosection />
     </div>
    </main>
  );
}
