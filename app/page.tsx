
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FAF9F6]">

      {/* Hero Section */}
      <section
        className="min-h-[650px] flex flex-col items-start justify-center text-left px-10 md:px-20 py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(35,32,27,0.78), rgba(35,32,27,0.35)), url('/hero-bg-2.jpg')"
        }}
      >
        <p className="bg-[#F5EBDD]/20 text-[#F8EBDD] text-xs font-bold px-4 py-2 rounded-full tracking-wider mb-6 border border-white/30">
          <span className="text-[#E8C99B] mr-2">●</span>
          NEXT-GEN TECHNOLOGY
        </p>

        <h1 className="text-4xl md:text-6xl mb-5 text-white font-bold max-w-2xl">
          Discover the Future of Technology
        </h1>

        <h2 className="font-bold text-xl md:text-2xl text-[#F1D9B8] mb-4">
          Everything You Need, All in One Place.
        </h2>

        <p className="mb-8 text-base md:text-lg text-[#F5F1EA] leading-8 max-w-2xl">
          Explore our premium collection of smartphones, laptops, headphones,
          smartwatches and the latest tech gadgets. Find your favorite technology
          with quality, style and performance.
        </p>

        <Button text="Explore Collection →" />
      </section>

      {/* Collection Section */}
      <section className="w-full bg-gray-300 px-6 py-20">

        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-[#B18B5E]">
            OUR COLLECTION
          </h3>

          <h2 className="text-4xl font-bold mb-4 text-[#302B25]">
            Explore Our Products
          </h2>

          <p className="text-[#81796F] leading-8">
            Discover the latest technology and experience innovation with our
            premium collection of electronics.
          </p>
        </div>

        {/* Product Cards Grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-2">

          {/* Laptop Card */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden group shadow-lg">
            <Image
              src="/Product-1.jpg"
              alt="Laptop"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="text-white text-2xl font-bold">
                Laptop Collection
              </h3>
              <h4 className="text-[#E8C99B] font-semibold mt-2">
                Power Meets Performance
              </h4>
              <p className="text-white/85 mt-3 leading-7">
                Experience powerful laptops designed for work, creativity and productivity.
              </p>
              <button className="mt-5 bg-[#B18B5E] hover:bg-white hover:text-[#302B25] text-white font-semibold px-5 py-3 rounded-lg transition">
                Explore Laptops →
              </button>
            </div>
          </div>

          {/* Mobile Card */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden group shadow-lg">
            <Image
              src="/Product-2.jpg"
              alt="Smartphone"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="text-white text-2xl font-bold">
                Smartphone Collection
              </h3>
              <h4 className="text-[#E8C99B] font-semibold mt-2">
                Innovation in Your Hands
              </h4>
              <p className="text-white/85 mt-3 leading-7">
                Discover smart technology, stunning displays and powerful features.
              </p>
              <button className="mt-5 bg-[#B18B5E] hover:bg-white hover:text-[#302B25] text-white font-semibold px-5 py-3 rounded-lg transition">
                Explore Mobiles →
              </button>
            </div>
          </div>

          {/* Earbuds Card */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden group shadow-lg">
            <Image
              src="/product-3.jpg"
              alt="Earbuds"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="text-white text-2xl font-bold">
                Audio Collection
              </h3>
              <h4 className="text-[#E8C99B] font-semibold mt-2">
                Experience Every Beat
              </h4>
              <p className="text-white/85 mt-3 leading-7">
                Enjoy crystal-clear sound, deep bass and wireless freedom.
              </p>
              <button className="mt-5 bg-[#B18B5E] hover:bg-white hover:text-[#302B25] text-white font-semibold px-5 py-3 rounded-lg transition">
                Explore Audio →
              </button>
            </div>
          </div>

        </div>
      </section>

{/* PREMIUM TECHNOLOGY SECTION */}
<section className="bg-[#F5F0E8] px-6 md:px-12 lg:px-20 py-20">

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="py-8">

      <p className="text-[#9B8060] tracking-[5px] text-sm font-medium mb-7">
        PREMIUM TECHNOLOGY
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#29251F] leading-[1.15] mb-7">
        THE FUTURE OF MODERN TECHNOLOGY.
      </h2>

      <p className="text-[#756957] text-base md:text-lg leading-8 max-w-lg mb-9">
        Discover a world of premium electronics, innovative designs
        and exceptional performance. Experience products that bring
        style, comfort and technology together.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-3 bg-[#9B8060] hover:bg-[#80664A] text-white px-9 py-4 text-sm tracking-wider transition duration-300"
      >
        EXPLORE COLLECTION
        <span>→</span>
      </Link>

      {/* FEATURES */}
      <div className="grid grid-cols-3 gap-3 mt-16 border-t border-[#D8CABB] pt-8">

        <div>
          <span className="text-2xl text-[#9B8060]">♧</span>
          <p className="text-[#594B3D] text-sm mt-3 font-medium">
            Free Shipping
          </p>
          <p className="text-[#8A7D6C] text-xs mt-1">
            On selected orders
          </p>
        </div>

        <div className="border-x border-[#D8CABB] px-3">
          <span className="text-2xl text-[#9B8060]">◇</span>
          <p className="text-[#594B3D] text-sm mt-3 font-medium">
            Secure Payment
          </p>
          <p className="text-[#8A7D6C] text-xs mt-1">
            Safe checkout
          </p>
        </div>

        <div>
          <span className="text-2xl text-[#9B8060]">♡</span>
          <p className="text-[#594B3D] text-sm mt-3 font-medium">
            24/7 Support
          </p>
          <p className="text-[#8A7D6C] text-xs mt-1">
            Here to help
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative min-h-[450px] md:min-h-[600px]">

      <Image
        src="/premium-tech-showcase.png"
        alt="Premium smartphones, headphones and smartwatch"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
      />

      {/* TOP FLOATING BADGE */}
      <div className="absolute top-6 right-5 md:top-10 md:right-8 bg-[#F5F0E8]/95 backdrop-blur-sm px-5 py-4 shadow-lg">

        <p className="text-[#29251F] font-serif text-lg">
          ✧ Premium Quality
        </p>

        <p className="text-[#9B8060] text-xs mt-1">
          For a Better Tomorrow
        </p>

      </div>

      {/* BOTTOM IMAGE CONTENT */}
      <div className="absolute bottom-6 left-6 right-6 bg-[#F5F0E8]/95 backdrop-blur-sm px-5 py-5 shadow-lg">

        <p className="text-[#9B8060] text-xs tracking-[3px]">
          DISCOVER MORE
        </p>

        <h3 className="text-[#29251F] font-serif text-xl md:text-2xl mt-2">
          Technology Meets Style
        </h3>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}
