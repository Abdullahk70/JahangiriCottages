"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Wifi,
  Droplet,
  Bell,
  Lock,
  Coffee,
  Stethoscope,
  Citrus,
  ShoppingBag,
  IceCream,
  Mountain,
  Heart,
  Fish,
  Flame,
  Trees,
  Car,
  ArrowUpDown,
  Leaf,
} from "lucide-react";

const amenitiesList = [
  {
    icon: Zap,
    title: "Electricity Backup",
    desc: "24/7 uninterrupted power ensuring comfort throughout your stay. Our advanced backup systems guarantee seamless electricity supply regardless of external conditions.",
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    desc: "High-speed internet connectivity in all rooms and common areas. Stay connected with our premium fiber optic network.",
  },
  {
    icon: Droplet,
    title: "Hot Water",
    desc: "Round-the-clock hot water supply in all bathrooms. Enjoy luxurious hot showers and baths anytime.",
  },
  {
    icon: Bell,
    title: "Room Service",
    desc: "24-hour dedicated room service for your convenience. Order meals, amenities, or assistance whenever needed.",
  },
  {
    icon: Lock,
    title: "Secure Parking",
    desc: "Indoor protected parking facility with 24-hour security surveillance. Your vehicle is safe with us.",
  },
  {
    icon: Coffee,
    title: "Coffee Bar",
    desc: "Premium coffee bar serving artisan brews and specialty beverages. Enjoy expertly crafted coffee throughout the day.",
  },
  {
    icon: Stethoscope,
    title: "Doctor on Call",
    desc: "24/7 medical support and doctor on call service available. Your health and wellness are our priority.",
  },
  {
    icon: Citrus,
    title: "Fresh Juices",
    desc: "Freshly squeezed fruit juices and healthy beverages. Energize your mornings with our fresh juice bar.",
  },
  {
    icon: ShoppingBag,
    title: "Tuck Shop",
    desc: "Well-stocked convenience store for your daily needs. Browse snacks, toiletries, and essentials.",
  },
  {
    icon: IceCream,
    title: "Ice Cream Parlor",
    desc: "Gourmet ice creams and frozen desserts. Indulge in our signature flavors and seasonal specials.",
  },
];

const servicesList = [
  {
    icon: Mountain,
    title: "Guided Valley Tours",
    desc: "Professionally organized excursions to explore the breathtaking Naran Valley and surrounding attractions. Discover nature's hidden gems with expert guides.",
  },
  {
    icon: Heart,
    title: "Honeymoon Packages",
    desc: "Romantic experiences with candlelight dinners and exclusive amenities for newlyweds. Create unforgettable memories in paradise.",
  },
  {
    icon: Fish,
    title: "Trout Fishing",
    desc: "Experience the thrill of catching fresh trout in pristine mountain streams with expert guidance. A perfect adventure for fishing enthusiasts.",
  },
  {
    icon: Flame,
    title: "Rooftop BBQ & Bonfire",
    desc: "Spectacular mountain views with grilled delicacies under the starlit sky. Enjoy the perfect evening with loved ones.",
  },
  {
    icon: Trees,
    title: "Forest Camping",
    desc: "Adventure camping in lush forests with complete safety arrangements. Experience nature in its purest form.",
  },
  {
    icon: Car,
    title: "Pick & Drop Service",
    desc: "Convenient transportation from major cities and local sightseeing. Travel with comfort and peace of mind.",
  },
  {
    icon: ArrowUpDown,
    title: "Modern Elevator",
    desc: "Easy access to all floors with luggage assistance. Modern elevator facility for hassle-free movement.",
  },
  {
    icon: Leaf,
    title: "Outdoor Seating",
    desc: "Scenic seating areas perfect for relaxation and mountain views. Unwind in nature's embrace.",
  },
];

export default function AmenitiesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-linear-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-6">
              <div className="h-px w-16 bg-amber-500"></div>
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Premium Amenities & Services
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive range of world-class amenities and
              exclusive services designed to enhance your stay at Jahangiri
              Fort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="h-px w-16 bg-amber-500"></div>
            </div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              In-Room Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thoughtfully curated amenities to ensure your complete comfort and
              satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {amenitiesList.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <motion.div
                  key={amenity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 border border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 bg-white group cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-amber-50 group-hover:bg-amber-100 transition-colors duration-300 rounded">
                      <IconComponent
                        className="w-8 h-8 text-amber-600"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {amenity.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="h-px w-16 bg-amber-500"></div>
            </div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              Exclusive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Curated experiences and services to make your mountain retreat
              truly unforgettable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 border border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 bg-white group cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-amber-50 group-hover:bg-amber-100 transition-colors duration-300 rounded">
                      <IconComponent
                        className="w-8 h-8 text-amber-600"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why These Amenities Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="h-px w-16 bg-amber-500"></div>
            </div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              Commitment to Excellence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-linear-to-br from-amber-50 to-yellow-50 border border-amber-100 hover:border-amber-500 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                24/7 Availability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All amenities and services are available round the clock. We're
                always here to meet your needs, anytime, anywhere during your
                stay.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-linear-to-br from-amber-50 to-yellow-50 border border-amber-100 hover:border-amber-500 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every amenity is carefully selected and maintained to the
                highest standards. Quality and cleanliness are our top
                priorities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-linear-to-br from-amber-50 to-yellow-50 border border-amber-100 hover:border-amber-500 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Personalized Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated staff is trained to anticipate your needs and
                provide personalized service tailored to your preferences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="h-px w-16 bg-amber-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Experience Unmatched Hospitality
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Reserve your room today and enjoy all these premium amenities and
            services
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            RESERVE YOUR STAY
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4 border-t border-amber-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-400">
                Jahangiri Fort
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Luxury hospitality in the pristine valleys of Naran. Discover
                comfort, elegance, and mountain serenity.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">
                Navigation
              </h4>
              <div className="space-y-2 text-sm">
                <Link
                  href="/"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Home
                </Link>
                <br />
                <Link
                  href="/rooms"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Rooms
                </Link>
                <br />
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Gallery
                </Link>
                <br />
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">
                Contact
              </h4>
              <p className="text-gray-400 text-sm mb-2">Main Jheel Road</p>
              <p className="text-gray-400 text-sm mb-4">Naran, Pakistan</p>
              <p className="text-gray-300 text-sm font-semibold">
                Mr. Yasir Sadiq
              </p>
              <p className="text-gray-400 text-sm">
                Founding & Managing Director
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Jahangiri Fort. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
