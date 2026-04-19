"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Clock, Heart } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

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
              Get in Touch
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out to us and let's explore the
              luxury experience awaiting you at Jahangiri Fort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section id="contact-info" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-semibold text-gray-900 mb-2">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Reach out anytime. We're here to assist you with any
                    inquiries or reservations.
                  </p>
                </div>

                {/* Director Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 bg-linear-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-lg hover:border-amber-500 transition-colors duration-300"
                >
                  <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-1">
                    Founding & Managing Director
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Mr. Yasir Sadiq
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Leading Jahangiri Fort with a vision of excellence in luxury
                    hospitality
                  </p>
                </motion.div>

                {/* Contact Details */}
                <div className="space-y-4">
                  {/* Landline */}
                  <motion.a
                    href="tel:009974302381"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="p-3 bg-amber-100 rounded-lg group-hover:bg-amber-500 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                        Landline
                      </p>
                      <p className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        0997-430238
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Click to call
                      </p>
                    </div>
                  </motion.a>

                  {/* Cell */}
                  <motion.a
                    href="tel:+923009116246"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="p-3 bg-amber-100 rounded-lg group-hover:bg-amber-500 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                        Cell Phone
                      </p>
                      <p className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        +92 300 911 6246
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Click to call
                      </p>
                    </div>
                  </motion.a>

                  {/* WhatsApp 1 */}
                  <motion.a
                    href="https://wa.me/923459472567"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:border-green-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                      <MessageCircle className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                        WhatsApp
                      </p>
                      <p className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                        +92 345 947 2567
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Message us on WhatsApp
                      </p>
                    </div>
                  </motion.a>

                  {/* WhatsApp 2 */}
                  <motion.a
                    href="https://wa.me/923335021031"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:border-green-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                      <MessageCircle className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                        WhatsApp
                      </p>
                      <p className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                        +92 333 502 1031
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Message us on WhatsApp
                      </p>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:jahangirifort@gmail.com"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="p-3 bg-amber-100 rounded-lg group-hover:bg-amber-500 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                        Email
                      </p>
                      <p className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        jahangirifort@gmail.com
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Click to send email
                      </p>
                    </div>
                  </motion.a>
                </div>

                {/* Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="p-6 bg-white border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-amber-600" />
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                      Availability
                    </p>
                  </div>
                  <p className="text-gray-700">
                    We're available 24/7 to assist you with reservations,
                    inquiries, and special requests.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.1234567890123!2d72.63!3d34.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e0000000000000%3A0x0!2sNaran%20Pakistan!5e0!3m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Location Details */}
              <div className="bg-linear-to-br from-amber-50 to-yellow-50 p-6 border border-amber-200 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Location
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">
                      Hotel
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
                </div>
                <Link
                  href="https://www.google.com/maps/search/WM56%2BP59/@34.92,72.63"
                  target="_blank"
                  className="inline-block mt-6 px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded transition-colors duration-300"
                >
                  Get Directions
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Connect Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
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
              Why Connect with Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your comfort and satisfaction are our priorities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white border border-gray-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle
                className="w-12 h-12 text-amber-600 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Multiple Channels
              </h3>
              <p className="text-gray-600">
                Reach us via phone, email, WhatsApp, or in person. Choose what
                works best for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-white border border-gray-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all duration-300"
            >
              <Clock
                className="w-12 h-12 text-amber-600 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Our dedicated team is always ready to assist you with
                reservations and special requests.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-white border border-gray-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all duration-300"
            >
              <Heart
                className="w-12 h-12 text-amber-600 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Personalized Service
              </h3>
              <p className="text-gray-600">
                We tailor our services to meet your unique needs and exceed your
                expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to reserve your perfect mountain getaway at
            Jahangiri Fort
          </p>
          <Link
            href="#contact-info"
            className="inline-block px-12 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded transition-all duration-300 hover:scale-105"
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
                  href="/amenities"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Amenities
                </Link>
                <br />
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  About
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
