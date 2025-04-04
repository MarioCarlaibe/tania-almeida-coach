import { FooterMenu } from "../components/footer";
import { HeaderMenu } from "../components/header";
import { MainCover } from "../components/main";
import { AboutSection } from "../components/about-section";
import { CoachSection } from "../components/coach-section";
import { PurposeSection } from "../components/purpose-text";
import { TestimonySection } from "../components/testimony-section";
import { ContactSection } from "../components/contact-section";

export function Home() {
  return (
    <>
      <HeaderMenu />
      <MainCover />
      <FooterMenu />
    </>
  );
}
export function About() {
  return (
    <>
      <HeaderMenu />
      <AboutSection />
      <FooterMenu />
    </>
  );
}
export function Coach() {
  return (
    <>
      <HeaderMenu />
      <CoachSection />
      <FooterMenu />
    </>
  );
}
export function Purpose() {
  return (
    <>
      <HeaderMenu />
      <PurposeSection />
      <FooterMenu />
    </>
  );
}
export function Testimony() {
  return (
    <>
      <HeaderMenu />
      <TestimonySection />
      <FooterMenu />
    </>
  );
}
export function Contact() {
  return (
    <>
      <HeaderMenu />
      <ContactSection />
      <FooterMenu />
    </>
  );
}
