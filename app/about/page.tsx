"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Award, Users, Leaf } from "lucide-react";

export default function AboutPage() {
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
              About Jahangiri Fort
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A journey of luxury, passion, and mountain hospitality excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
              Our Story
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              <p className="mb-6">
                In 2024, with a vision to redefine luxury hospitality in the
                pristine valleys of Naran, Jahangiri Fort was established as a
                sanctuary of elegance and comfort. Under the visionary
                leadership of{" "}
                <span className="font-semibold text-amber-600">
                  Mr. Yasir Sadiq
                </span>
                , Founding and Managing Director, we have created more than just
                a hotel—we've built a legacy of excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              <p className="mb-6">
                What started as a dream to bring world-class hospitality to the
                mountain region has evolved into a premier destination. Every
                corner of Jahangiri Fort reflects our commitment to
                craftsmanship, attention to detail, and an unwavering dedication
                to guest satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              <p>
                Today, Jahangiri Fort stands as a beacon of luxury in Naran,
                offering 22 meticulously designed rooms, premium amenities, and
                exclusive services that seamlessly blend modern convenience with
                natural serenity. We don't just provide accommodation; we create
                memories that last a lifetime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 bg-gray-50">
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
              Visionary Leadership
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 border border-gray-200 hover:border-amber-500 transition-colors duration-300"
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                  Mr. Yasir Sadiq
                </h3>
                <p className="text-amber-600 font-semibold text-lg mb-6">
                  Founding & Managing Director
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With a passion for hospitality excellence and a deep love for
                  the natural beauty of Naran, Mr. Yasir Sadiq envisioned
                  Jahangiri Fort as a luxury destination that respects and
                  celebrates the mountain landscape.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  His philosophy of combining modern luxury with authentic
                  mountain experiences has shaped every aspect of Jahangiri
                  Fort, from the architectural design to the personalized
                  service philosophy that guides our team.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="p-8 bg-linear-to-br from-amber-100 to-yellow-100 rounded-lg border border-amber-300">
                  <Users
                    className="w-24 h-24 text-amber-600 mx-auto"
                    strokeWidth={1}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Section */}
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
              Our Mission & Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-linear-to-br from-amber-50 to-yellow-50 border border-amber-100 hover:border-amber-500 transition-colors duration-300"
            >
              <Award
                className="w-12 h-12 text-amber-600 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                We pursue perfection in every detail, from room design to guest
                service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-linear-to-br from-amber-50 to-yellow-50 border border-amber-100 hover:border-amber-500 transition-colors duration-300"
            >
              <Leaf
                className="w-12 h-12 text-amber-600 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600 text-sm">
                We respect and preserve the natural mountain environment for
                future generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-linear-to-br from-amber-50 to-yellow-50 border border-amber-100 hover:border-amber-500 transition-colors duration-300"
            >
              <Users
                className="w-12 h-12 text-amber-600 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hospitality
              </h3>
              <p className="text-gray-600 text-sm">
                Warm, genuine service that makes every guest feel like family.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-linear-to-br from-amber-50 to-yellow-50 border border-amber-100 hover:border-amber-500 transition-colors duration-300"
            >
              <MapPin
                className="w-12 h-12 text-amber-600 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community
              </h3>
              <p className="text-gray-600 text-sm">
                Supporting local communities and promoting authentic mountain
                experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section with Google Map */}
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
              Find Us on the Map
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Naran's pristine valleys
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.1234567890123!2d72.63!3d34.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e0000000000000%3A0x0!2sNaran%20Pakistan!5e0!3m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Address Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 border border-gray-200 hover:border-amber-500 transition-colors duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Location
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">
                      Hotel Name
                    </p>
                    <p className="text-lg text-gray-900 font-semibold">
                      Jahangiri Fort
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">
                      Address
                    </p>
                    <p className="text-gray-700">
                      Mansehra Jheel Road, Katha
                      <br />
                      Naran, Pakistan
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">
                      Plus Code
                    </p>
                    <p className="text-gray-700 font-mono">WM56+P59</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">
                      Established
                    </p>
                    <p className="text-gray-700">2024</p>
                  </div>
                </div>

                <Link
                  href="https://www.google.com/maps/search/WM56%2BP59/@34.92,72.63"
                  target="_blank"
                  className="inline-block mt-6 px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-colors duration-300"
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                <div className="w-1 h-20 bg-amber-200"></div>
              </div>
              <div className="pb-8">
                <p className="text-amber-600 font-semibold text-sm mb-1">
                  2024
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  Foundation Year
                </h3>
                <p className="text-gray-600 mt-2">
                  Jahangiri Fort was established as a luxury hotel destination
                  in Naran, bringing world-class hospitality to the mountain
                  region.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                <div className="w-1 h-20 bg-amber-200"></div>
              </div>
              <div className="pb-8">
                <p className="text-amber-600 font-semibold text-sm mb-1">
                  2024
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  22 Luxury Rooms
                </h3>
                <p className="text-gray-600 mt-2">
                  Opened our meticulously designed collection of rooms, each
                  offering premium amenities and stunning mountain views.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
              </div>
              <div>
                <p className="text-amber-600 font-semibold text-sm mb-1">
                  Present
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  Premier Destination
                </h3>
                <p className="text-gray-600 mt-2">
                  Established as a premier luxury hospitality destination,
                  setting new standards in mountain resort excellence and guest
                  satisfaction.
                </p>
              </div>
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
            Experience Our Legacy
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join us at Jahangiri Fort and discover why we're the preferred
            luxury destination in Naran
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
