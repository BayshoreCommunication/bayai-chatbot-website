import Breadcrumb from "@/components/shared/BreadCrumb";

export default function About() {
  return (
    <main>
      <Breadcrumb
        title="About Us"
        description="Create realistic AI chatbots in minutes—perfect for websites, apps, and customer support."
        links={[{ name: "Home", href: "/" }, { name: "About" }]}
      />
    </main>
  );
}
