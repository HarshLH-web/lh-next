import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function NotFound() {
    return (
        <>
        <Header />
      <div className="flex items-center justify-center mt-20 mb-44 px-8 lg:px-0">
        <Image src="/404_img.svg" alt="404" width={500} height={500} />
      </div>
      <Footer />
      </>
    );
  }