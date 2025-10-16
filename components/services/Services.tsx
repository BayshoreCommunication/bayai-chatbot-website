import Breadcrumb from "@/components/shared/BreadCrumb";

export default function Services() {
  return (
    <main>
      <Breadcrumb
        title="Services"
        description="Create Realistic AI Chatbots in Minutes—Perfect for Websites, Apps, and Customer Support."
        links={[{ name: "Home", href: "/" }, { name: "Services" }]}
      />
    </main>
  );
}
