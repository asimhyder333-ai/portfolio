import Button from "@/components/button";
export default function About() {
  return (
    <main className="text-center py-20 bg-main-bg">
      <h1 className="text-5xl mb-5 text-heading font-semibold">
        About Us
      </h1>
      <p className="mb-8 text-3xl text-blue-200">This is our about page.</p>

      <Button text="Get Started" />
    </main>
  );
}