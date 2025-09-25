"use client";
import { motion } from "framer-motion";

export default function HistorySection() {
  const galleryImages = [
    { src: "https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2021/06/ai-conferences-fb.png", caption: "Conference 2015" },
    { src: "https://dqliving.com/wp-content/uploads/2022/10/FAHA4273-copy.jpg", caption: "AI Summit 2018" },
    { src: "https://www.centuroglobal.com/wp-content/uploads/2023/07/gimage_0_1654673710-1-400x284.jpeg", caption: "Global Expansion 2022" },
    { src: "https://classe-export.com/wp-content/uploads/2022/06/ba-toshi-ok.jpg", caption: "Innovation Award" },
    { src: "https://pollthepeople.app/wp-content/uploads/2023/11/image3-49.png", caption: "Product Launch" },
    { src: "https://www.ai-expo.net/wp-content/uploads/2023/07/The-Future-of-enterprise-technology-24-1024x682-1.webp", caption: "Tech Expo" },
  ];

  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-cyan-950 to-cyan-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">Our Journey</h2>

        {/* Timeline */}
        <div className="space-y-12">
          {[
            { year: "2015", detail: "Founded as a small consultancy firm." },
            { year: "2018", detail: "Delivered first enterprise AI solution." },
            { year: "2022", detail: "Expanded to serve global markets." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center gap-6 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {/* Year */}
              <div className="w-16 h-16 rounded-full bg-cyan-700 flex items-center justify-center text-xl font-bold">
                {item.year}
              </div>
              {/* Detail */}
              <p className="bg-cyan-800 p-4 rounded-lg shadow-md max-w-md">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center mb-8">Gallery of Memories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-lg font-semibold text-white">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
