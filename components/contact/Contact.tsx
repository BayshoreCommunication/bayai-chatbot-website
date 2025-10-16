import Breadcrumb from "@/components/shared/BreadCrumb";

export default function Contact() {
  return (
    <main>
      <Breadcrumb
        title="Contact"
        description="Create Realistic AI Chatbots in Minutes—Perfect for Websites, Apps, and Customer Support."
        links={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />
    </main>
  );
}