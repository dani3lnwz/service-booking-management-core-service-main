import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/hero-section";
import Navbar from "@/components/ui/navHader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service",
};

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Container>
        <h1>Next.js + TypeScript</h1>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
