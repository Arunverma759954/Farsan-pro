"use client";

import Image from "next/image";

const categories = [
  {
    name: "Bhakarwadi",
    image: "/products/bhakarwadi.jpeg",
    desc: "Crispy and spicy traditional snack with authentic Indian taste.",
  },
  {
    name: "Masala Bhakarwadi",
    image: "/products/masala-bhakharwar.jpeg",
    desc: "Extra masaledar bhakarwadi for spicy snack lovers.",
  },
  {
    name: "Kachori",
    image: "/products/kachori.jpeg",
    desc: "Freshly fried kachori filled with rich and flavorful masala.",
  },
  {
    name: "Wafers",
    image: "/products/wafers.jpeg",
    desc: "Light, thin and crunchy wafers perfect for tea time.",
  },
  {
    name: "Chips",
    image: "/products/chips.jpeg",
    desc: "Classic crispy chips made from premium quality potatoes.",
  },
  {
    name: "Farsan Mix",
    image: "/products/soyabhel.jpeg",
    desc: "A tasty mix of crunchy farsan snacks for every occasion.",
  },
  {
    name: "Pudina Soya Katori",
    image: "/products/pudina-soya-katori.jpeg",
    desc: "Healthy soya snack with refreshing pudina flavour.",
  },
  {
    name: "Diet Chakli",
    image: "/products/diet-chakli.jpeg",
    desc: "Light and healthy chakli made for diet-conscious people.",
  },
];

  
 
 


export default function ProductsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="md:text-center mb-12">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500">
            Explore Our Snacks
          </h2>
          <p className="mt-2 text-gray-600">
            Fresh, tasty & premium quality snacks
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-gradient-to-b from-yellow-50 to-green-50 shadow-md hover:shadow-xl transition"
            >
              {/* BIG TOP IMAGE */}
              <div className="relative w-full h-56">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {cat.name}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {cat.desc}
                </p>

                {/* <button className="mt-5 w-full rounded-full bg-gradient-to-r from-yellow-400 to-green-500 text-white py-2 text-sm font-medium hover:opacity-90 transition">
                  Read More
                </button> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
