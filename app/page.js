import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Interest } from "@/components/Interest";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <About />
      <Interest />
      <Portfolio />
      <ContactForm />
    </main>
  );
}
