import Breadcrumb from "@/components/shared/BreadCrumb";

export default function Price() {
  return (
    <main>
      <Breadcrumb
        title="Pricing"
        description="Powerful AI Chatbots, Ready in Minutes Boost support and engagement—simple pricing, instant setup."
        links={[{ name: "Home", href: "/" }, { name: "Pricing" }]}
      />
    </main>
  );
}

