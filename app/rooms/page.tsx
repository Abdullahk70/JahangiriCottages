"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Users,
  BedDouble,
  Tv,
  Wifi,
  Coffee,
  Bath,
  Wind,
  Mountain,
  Zap,
  ChefHat,
  Sofa,
  FolderOpen,
} from "lucide-react";

const roomTypes = [
  {
    name: "Single Bedroom",
    capacity: "1-2 Guests",
    price: 10500,
    image: "/jahangiri/1718186762.jpg",
    description:
      "Perfect for the discerning solo traveler or intimate couple retreat. This cozy sanctuary offers contemporary elegance with mountain views, featuring premium bedding and modern amenities.",
    features: [
      "King-size bed with premium linens",
      "Flat-screen LED TV with cable",
      "Free high-speed WiFi",
      "Work desk and seating area",
      "Ensuite bathroom with rainfall shower",
      "Air conditioning and heating",
      "Room service 24/7",
    ],
    icon: Users,
  },
  {
    name: "Double Bedroom Suite",
    capacity: "2-3 Guests",
    price: 10500,
    image: "/jahangiri/92e813f570f42a6188043182560b672b.jpg",
    description:
      "Our signature suite offering spacious luxury with breathtaking valley views. Ideal for couples or small families seeking a premium mountain escape with sophisticated ambiance.",
    features: [
      "Two premium double beds",
      "Luxury ensuite bathroom",
      "Separate sitting area",
      "Mountain view balcony",
      "Smart TV with entertainment system",
      "Premium toiletries and robes",
      "Minibar and tea station",
      "24-hour concierge service",
    ],
    icon: BedDouble,
  },
  {
    name: "Executive Bedroom",
    capacity: "2-4 Guests",
    price: 10500,
    image: "/jahangiri/download.jpeg",
    description:
      "The epitome of sophistication. A luxurious retreat with dedicated work space, separate living area, and premium appointments designed for discerning travelers who demand excellence.",
    features: [
      "King-size bed with Egyptian cotton sheets",
      "Spacious living room with sofa",
      "Executive work desk with high-speed internet",
      "Luxurious marble bathroom with jacuzzi",
      "Separate dressing room",
      "Panoramic mountain views from balcony",
      "Premium entertainment system",
      "Butler service available",
    ],
    icon: Sofa,
  },
  {
    name: "Family Room",
    capacity: "4-6 Guests",
    price: 10500,
    image: "/jahangiri/evening-view-of-the-nine.jpg",
    description:
      "Generously designed for family comfort and bonding. Multiple sleeping areas combined with spacious living quarters create the perfect base for unforgettable family memories in the mountains.",
    features: [
      "Two double beds and one single bed",
      "Separate family living area",
      "Large ensuite bathroom",
      "Connected bedrooms for privacy",
      "Kids' entertainment options",
      "Kitchenette with refrigerator",
      "Extended balcony with mountain views",
      "Connecting rooms available",
    ],
    icon: Users,
  },
  {
    name: "Twin Room",
    capacity: "2-4 Guests",
    price: 10500,
    image: "/jahangiri/images (1).jpeg",
    description:
      "Perfectly appointed for friends or colleagues traveling together. Twin beds provide individual comfort while shared amenities ensure a social experience in pristine mountain surroundings.",
    features: [
      "Two comfortable twin beds",
      "Individual reading lights and outlets",
      "Spacious ensuite bathroom",
      "Separate seating area",
      "Large windows with valley views",
      "Work desks for both guests",
      "Premium bedding and linens",
      "Climate control",
    ],
    icon: BedDouble,
  },
  {
    name: "Family Room with Bunker Beds",
    capacity: "6-8 Guests",
    price: 10500,
    image: "/jahangiri/images (2).jpeg",
    description:
      "The ultimate family accommodation designed for groups and multi-generational stays. Adventure-ready with fun bunk arrangements and ample space for everyone to feel at home.",
    features: [
      "Double beds with full bunker bed setup",
      "Spacious family lounge",
      "Multiple ensuite bathrooms",
      "Large dining area",
      "Game and entertainment zone",
      "Kitchenette facilities",
      "Extended outdoor seating",
      "Group activities space",
    ],
    icon: FolderOpen,
  },
];

const roomAmenities = [
  { icon: Wifi, title: "Free WiFi", desc: "High-speed internet throughout" },
  { icon: Wind, title: "Air Conditioning", desc: "Climate-controlled comfort" },
  { icon: Bath, title: "Luxury Bath", desc: "Premium bathroom fixtures" },
  { icon: Tv, title: "Smart TV", desc: "Entertainment system included" },
  { icon: Coffee, title: "Tea & Coffee", desc: "24-hour beverage service" },
  { icon: Zap, title: "Power Backup", desc: "Uninterrupted electricity" },
  { icon: ChefHat, title: "Room Service", desc: "24/7 culinary service" },
  { icon: Mountain, title: "Mountain Views", desc: "Pristine valley vistas" },
];

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

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
              Our Luxurious Rooms
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Each room at Jahangiri Fort is a masterpiece of comfort and
              elegance, thoughtfully designed to provide an unforgettable
              mountain sanctuary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Room Amenities Toolbar */}
      <section className="py-12 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
            Standard Room Features
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {roomAmenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <motion.div
                  key={amenity.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-center p-3 border border-gray-200 hover:border-amber-500 hover:bg-white transition-all duration-300"
                >
                  <IconComponent
                    className="w-6 h-6 text-amber-600 mx-auto mb-2"
                    strokeWidth={1.5}
                  />
                  <p className="text-xs font-semibold text-gray-900">
                    {amenity.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 px-4 bg-white flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {roomTypes.map((room, index) => {
              const RoomIcon = room.icon;
              const isSelected = selectedRoom === index;

              return (
                <motion.div
                  key={room.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedRoom(isSelected ? null : index)}
                  className={`border-2 overflow-hidden transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-amber-500 bg-amber-50 shadow-xl"
                      : "border-gray-200 hover:border-amber-300"
                  }`}
                >
                  {/* Room Image */}
                  <div className="relative h-64 w-full overflow-hidden group">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Room Header */}
                  <div className="p-6 border-b border-gray-200 flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {room.name}
                      </h3>
                      <div className="flex items-center gap-2 text-amber-600 font-semibold">
                        <Users className="w-4 h-4" />
                        <span>{room.capacity}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-amber-100 rounded">
                      <RoomIcon
                        className="w-8 h-8 text-amber-600"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {room.description}
                    </p>

                    {/* Features List - Expandable */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: isSelected ? 1 : 0,
                        height: isSelected ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mb-6 pb-6 border-b border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                          Room Features
                        </h4>
                        <ul className="space-y-2">
                          {room.features.map((feature, fIndex) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: fIndex * 0.05 }}
                              className="flex items-start gap-3 text-sm text-gray-700"
                            >
                              <span className="text-amber-500 font-bold mt-0.5">
                                ✓
                              </span>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        <p className="text-sm text-gray-600">Starting from</p>
                        <p className="text-3xl font-bold text-gray-900">
                          PKR {room.price.toLocaleString()}
                          <span className="text-base font-semibold text-gray-500 ml-1">
                            /night
                          </span>
                        </p>
                      </motion.div>
                      <Link
                        href="/contact"
                        className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-colors duration-300"
                      >
                        Reserve
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50 border-t border-gray-200">
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
              Why Choose Jahangiri Fort
            </h2>
            <p className="text-lg text-gray-600">
              Experience luxury redefined in the heart of Naran's pristine
              valleys
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white border border-gray-200 hover:border-amber-500 transition-colors duration-300"
            >
              <div className="mb-4">
                <Mountain
                  className="w-8 h-8 text-amber-600"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Scenic Location
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nestled in pristine mountain valleys with panoramic views of
                nature's undisturbed beauty.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-white border border-gray-200 hover:border-amber-500 transition-colors duration-300"
            >
              <div className="mb-4">
                <ChefHat className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Premium Service
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Attentive 24/7 service, personalized experiences, and attention
                to every detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-white border border-gray-200 hover:border-amber-500 transition-colors duration-300"
            >
              <div className="mb-4">
                <Sofa className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Luxury Comfort
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Premium bedding, modern amenities, and thoughtfully designed
                spaces for ultimate relaxation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
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
            Begin Your Perfect Stay
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Reserve your room today and experience luxury hospitality at
            Jahangiri Fort
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            RESERVE YOUR ROOM
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
