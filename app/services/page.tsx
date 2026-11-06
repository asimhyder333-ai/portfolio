import Button from "@/components/button";
import Card from "@/components/card";
export default function Services() {
  return (
    <main className="text-center py-20 bg-red-400">
      <h1 className="text-5xl mb-5 text-heading font-semibold">
        Our Services
      </h1>
      <p className="mb-8 text-3xl text-blue-200">This is our Services page.</p>

      <Button text="Our Services" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mt-20">
        <Card
          title="Web Development"
          description="We create modern websites."
          buttonText="Learn More"
        />
        <Card
          title="UI/UX Design"
          description="We design beautiful user experiences."
          buttonText="Explore"
        />
        <Card
          title="SEO Optimization"
          description="We improve website search rankings."
          buttonText="Get Started"
        />
      </div>

    </main>
  );
}