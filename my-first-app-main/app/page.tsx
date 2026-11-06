
import Button from "@/components/button";

export default function Home() {
  return (
    <main
      className="min-h-[650px] flex flex-col items-start justify-center text-left px-10 md:px-20 py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
     
      <p className="bg-[#353541] text-purple-500 text-xs font-bold px-4 py-2 rounded-full tracking-wider mb-6">
        <span className="text-cyan-400 mr-2">●</span>
        NEXT-GEN TECHNOLOGY
      </p>

      <h1 className="text-4xl md:text-6xl mb-5 text-purple-00 font-bold max-w-2xl">
        Discover the Future of Technology
      </h1>

      <h2 className="font-bold text-xl md:text-2xl text-white mb-4">
        Everything You Need, All in One Place.
      </h2>

      <p className="mb-8 text-base md:text-lg text-blue-200 leading-8 max-w-2xl">
        Explore our premium collection of smartphones, laptops, headphones,
        smartwatches and the latest tech gadgets. Find your favorite technology
        with quality, style and performance.
      </p>

    
      <Button text="Explore Collection →" />
    </main>
    
  );
}

