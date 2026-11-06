import Button from "@/components/button";
export default function Contact() {
  return (
    <main className="text-center py-20 bg-red-400">
      <h1 className="text-5xl mb-5 text-heading font-semibold">
        Contact Us
      </h1>
      <p className="mb-8 text-3xl text-blue-200">This is our Contact page.</p>

     <Button text="Contact Us" />
    </main>
  );
}