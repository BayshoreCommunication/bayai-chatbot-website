"use client";

import Reveal from "../motion/Reveal";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      description: "Get started with our essential chatbot features.",
      price: "49",
      features: [
        "Basic chatbot functionality",
        "Limited to 1 website",
        "Up to 100 conversations/month",
        "Email support",
      ],
    },
    {
      name: "Pro Plan",
      description:
        "Unlock full functionality with advanced features and support.",
      price: "79",
      features: [
        "Unlimited conversations",
        "Custom branding",
        "Multi-language support",
        "Analytics dashboard",
      ],
    },
    {
      name: "Enterprise Plan",
      description:
        "Tailored solutions and priority support for large-scale businesses.",
      price: "199",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "API access & integrations",
        "SLA & priority support",
      ],
    },
  ];

  return (
    <section className=" bg-gradient-to-r from-[#F5F5F5] to-[#FFF7F3]/100">
      <div className="container max-w-6xl mx-auto px-8 py-8 md:py-16 text-center">
        {/* Header */}
        <div className="mb-12">
          <Reveal x={-100} duration={2}>
          <p className="text-primary font-medium mb-2">Pricing Plans</p>
          </Reveal>
          <Reveal x={100} duration={2}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Simple, Transparent <br className="hidden md:block" />
            Pricing for Every Business
          </h2>
          </Reveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <Reveal x={100} y={100} duration={2}>
            <div
              key={index}
              className={`bg-white rounded-3xl h-full max-w-xl w-full mx-auto p-8 text-left shadow-sm border border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <p className="text-sm text-gray-600">Starting at:</p>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-primary text-4xl font-bold">
                      ${plan.price}
                    </span>
                    <span className="text-gray-500 text-sm">/mo</span>
                  </div>
                </div>
              
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-2 text-sm text-gray-700"
                    >
                      <span className="text-primary font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                    
                  ))}
                </ul>
              </div>
              
              {/* Button */}
              <button className="bg-primary self-start px-4 text-white font-medium py-3 rounded-lg hover:bg-primary/90 transition mt-4">
                Get Started
              </button>
            </div>
            </Reveal> 
          ))}
        </div>
      </div>
    </section>
  );
}
