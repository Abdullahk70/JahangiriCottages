"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Zap,
  Wifi,
  Lock,
  Coffee,
  IceCream,
  Stethoscope,
  Droplet,
  Bell,
  Citrus,
  ShoppingBag,
  Mountain,
  Heart,
  Fish,
  Flame,
  Trees,
  Car,
  ArrowUpDown,
  Leaf,
  Clock,
  UtensilsCrossed,
} from "lucide-react";

const images = [
  "/jahangiri/1718186762.jpg",
  "/jahangiri/92e813f570f42a6188043182560b672b.jpg",
  "/jahangiri/download.jpeg",
  "/jahangiri/evening-view-of-the-nine.jpg",
  "/jahangiri/images (1).jpeg",
  "/jahangiri/images (2).jpeg",
  "/jahangiri/images.jpeg",
];

const stats = [
  { number: "22", label: "Luxury Rooms" },
  { number: "10,500", label: "PKR Per Night" },
  { number: "24/7", label: "Room Service" },
  { number: "5★", label: "Experience" },
];

const amenities = [
  {
    icon: Zap,
    title: "Electricity Backup",
    desc: "24/7 uninterrupted power ensuring comfort throughout your stay",
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    desc: "High-speed internet connectivity in all rooms and common areas",
  },
  {
    icon: Droplet,
    title: "Hot Water",
    desc: "Round-the-clock hot water supply in all bathrooms",
  },
  {
    icon: Bell,
    title: "Room Service",
    desc: "24-hour dedicated room service for your convenience",
  },
  {
    icon: Lock,
    title: "Secure Parking",
    desc: "Indoor protected parking facility with 24-hour security",
  },
  {
    icon: Coffee,
    title: "Coffee Bar",
    desc: "Premium coffee bar serving artisan brews and specialty beverages",
  },
  {
    icon: Stethoscope,
    title: "Doctor on Call",
    desc: "24/7 medical support and doctor on call service",
  },
  {
    icon: Citrus,
    title: "Fresh Juices",
    desc: "Freshly squeezed fruit juices and healthy beverages",
  },
  {
    icon: ShoppingBag,
    title: "Tuck Shop",
    desc: "Well-stocked convenience store for your daily needs",
  },
  {
    icon: IceCream,
    title: "Ice Cream Parlor",
    desc: "Gourmet ice creams and frozen desserts",
  },
];

const services = [
  {
    icon: Mountain,
    title: "Guided Valley Tours",
    desc: "Professionally organized excursions to explore the breathtaking Naran Valley",
  },
  {
    icon: Heart,
    title: "Honeymoon Packages",
    desc: "Romantic experiences with candlelight dinners and exclusive amenities",
  },
  {
    icon: Fish,
    title: "Trout Fishing",
    desc: "Experience the thrill of catching fresh trout in pristine mountain streams",
  },
  {
    icon: Flame,
    title: "Rooftop BBQ & Bonfire",
    desc: "Spectacular mountain views with grilled delicacies under the starlit sky",
  },
  {
    icon: Trees,
    title: "Forest Camping",
    desc: "Adventure camping in lush forests with complete safety arrangements",
  },
  {
    icon: Car,
    title: "Pick & Drop Service",
    desc: "Convenient transportation from major cities and local sightseeing",
  },
  {
    icon: ArrowUpDown,
    title: "Modern Elevator",
    desc: "Easy access to all floors with luggage assistance",
  },
  {
    icon: Leaf,
    title: "Outdoor Seating",
    desc: "Scenic seating areas perfect for relaxation and mountain views",
  },
];

const rooms = [
  {
    name: "Single Bedroom",
    capacity: "1-2 Guests",
    desc: "Cozy and comfortable room perfect for solo travelers or couples",
  },
  {
    name: "Double Bedroom Suite",
    capacity: "2-3 Guests",
    desc: "Spacious suite with premium amenities and mountain views",
  },
  {
    name: "Executive Bedroom",
    capacity: "2-4 Guests",
    desc: "Luxurious accommodation with separate living area and work space",
  },
  {
    name: "Family Room",
    capacity: "4-6 Guests",
    desc: "Generously sized room designed for families with multiple beds",
  },
  {
    name: "Twin Room",
    capacity: "2-4 Guests",
    desc: "Comfortable twin-bedded room ideal for friends or small families",
  },
  {
    name: "Family Room with Bunker Beds",
    capacity: "6-8 Guests",
    desc: "Spacious family accommodation with bunker beds for larger groups",
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen w-full overflow-hidden">
        {images.map((img, index) => (
          <motion.div
            key={img}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={img}
              alt={`Jahangiri Fort ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4"
          >
            <p className="text-amber-300 text-sm md:text-base font-semibold tracking-widest uppercase">
              Welcome to Luxury
            </p>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight"
          >
            Jahangiri Fort
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-linear-to-r from-amber-400 to-amber-300 mb-8"
          />

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/95 mb-3 font-light"
          >
            Your Gateway to Mountain Serenity
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base md:text-lg text-amber-200 mb-12 drop-shadow-lg tracking-wide"
          >
            Main Jheel Road, Naran
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link
              href="/contact"
              className="px-10 py-4 bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold rounded-none shadow-2xl transform hover:scale-105 transition-all duration-300 tracking-wide"
            >
              RESERVE YOUR STAY
            </Link>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`transition-all duration-500 ${currentImage === index ? "bg-amber-400 w-8 h-1" : "bg-white/40 w-2 h-1"}`}
            />
          ))}
        </div>
      </section>

      {/* Luxury Info Bar */}
      <section className="bg-black text-white py-12 border-b border-amber-400/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center border-l border-amber-400/30 last:border-r md:border-r-0 pl-4 md:pl-0"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-white/70 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8 flex justify-center">
              <div className="h-px w-16 bg-amber-500"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 tracking-tight">
              Experience Unparalleled Hospitality
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              Nestled in the pristine valleys of Naran, Jahangiri Fort stands as
              a beacon of luxury and comfort. With 22 meticulously designed
              rooms, we offer an extraordinary blend of modern amenities and
              natural beauty.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our rooftop restaurant offers panoramic views of the majestic
              mountains. Whether you're seeking adventure, romance, or peaceful
              relaxation, Jahangiri Fort is your perfect destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Explore Serenity Section */}
      <section className="py-24 px-4 bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Explore Serenity in Every Moment
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Step into a realm where luxury meets nature. Jahangiri Fort is
              more than a destination—it's an invitation to disconnect from the
              mundane and reconnect with what truly matters.
            </p>

            <div className="h-px w-24 bg-amber-500 mx-auto"></div>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-amber-400">
                  Crafted Comfort
                </h3>
                <p className="text-gray-400">
                  Each room is an oasis of tranquility, meticulously designed
                  with your comfort at the forefront.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-amber-400">
                  Culinary Excellence
                </h3>
                <p className="text-gray-400">
                  Our rooftop restaurant serves exquisite cuisine with panoramic
                  mountain backdrops.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-amber-400">
                  Adventure Awaits
                </h3>
                <p className="text-gray-400">
                  From guided trails to bonfire evenings, create memories that
                  last a lifetime.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <div className="h-px w-16 bg-amber-500"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Our Rooms
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-40 bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-amber-500 rounded-sm"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {room.name}
                  </h3>
                  <p className="text-sm text-amber-600 font-semibold mb-3">
                    {room.capacity}
                  </p>
                  <p className="text-sm text-gray-600 mb-6">{room.desc}</p>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <span className="text-lg font-semibold text-gray-900">
                      PKR 10,500
                    </span>
                    <Link
                      href="/contact"
                      className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                    >
                      Reserve
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <div className="flex justify-center mb-4">
              <div className="h-px w-16 bg-amber-500"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Premium Amenities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {amenities.map((AmenityIcon, index) => {
              const Icon = AmenityIcon.icon;
              return (
                <motion.div
                  key={AmenityIcon.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="text-center p-6 border border-gray-200 hover:border-amber-500 transition-colors duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <Icon
                      className="w-8 h-8 text-amber-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    {AmenityIcon.title}
                  </h3>
                  <p className="text-xs text-gray-600">{AmenityIcon.desc}</p>
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
            <div className="flex justify-center mb-4">
              <div className="h-px w-16 bg-amber-500"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Exclusive Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((ServiceIcon, index) => {
              const Icon = ServiceIcon.icon;
              return (
                <motion.div
                  key={ServiceIcon.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white border border-gray-200 p-6 hover:border-amber-500 transition-colors duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <Icon
                      className="w-8 h-8 text-amber-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 text-center">
                    {ServiceIcon.title}
                  </h3>
                  <p className="text-xs text-gray-600 text-center">
                    {ServiceIcon.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-black text-white border-t border-amber-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-block p-3 border border-amber-500 mb-4">
                <Clock className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Check-out: 12:00 PM
              </h3>
              <p className="text-gray-300 text-sm">
                Late checkout available on request
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-block p-3 border border-amber-500 mb-4">
                <UtensilsCrossed
                  className="w-6 h-6 text-amber-400"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-semibold mb-3">Rooftop Restaurant</h3>
              <p className="text-gray-300 text-sm">
                Panoramic mountain views with indoor & outdoor seating
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-block p-3 border border-amber-500 mb-4">
                <Lock className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Secure Parking</h3>
              <p className="text-gray-300 text-sm">
                Indoor protected facility with 24-hour security surveillance
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="flex justify-center mb-8">
              <div className="h-px w-16 bg-amber-500"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              A Vision of Excellence
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Under the visionary leadership of Mr. Yasir Sadiq, Jahangiri Fort
              represents a commitment to delivering extraordinary experiences.
              Every detail, from 5-star amenities to personalized service,
              reflects our dedication to excellence.
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              We believe that true luxury is not about grandeur, but about
              thoughtfulness. It's in the attentive service, the pristine
              surroundings, and the unforgettable memories created here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-8 flex justify-center">
            <div className="h-px w-16 bg-amber-500"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Begin Your Mountain Escape
          </h2>

          <p className="text-base md:text-lg text-gray-600 mb-8">
            Experience luxury and serenity in the heart of Naran. Reserve your
            room at PKR 10,500 per night.
          </p>

          <Link
            href="/contact"
            className="inline-block px-12 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-colors duration-300 tracking-wide"
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
