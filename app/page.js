import CertificateSection from "@/components/CertificateSection";
import CourseSection from "@/components/CourseSection";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import PlacementCompanies from "@/components/PlacementCompanies";
import PlacementSection from "@/components/PlacementSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CourseSection />
      <ServiceSection />
      <PlacementSection />
      <PlacementCompanies />
      <TestimonialSection />
      <CertificateSection />
      <FaqSection />
    </>
  );
}
