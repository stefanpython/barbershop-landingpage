import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Star, ChevronDown, Globe } from "lucide-react";
// import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="text-amber-500 font-bold text-2xl">FAMA</div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-amber-500 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-amber-500 transition"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-amber-500 transition"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-amber-500 transition"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-amber-500 transition"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white hover:text-amber-500">
                <Globe className="h-5 w-5" />
              </button>
              <Link
                href="tel:+19406129127"
                className="text-white hover:text-amber-500 flex items-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                +1 940-612-9127
              </Link>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-medium">
              Book an Appointment
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 md:py-24 lg:py-32 relative">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-amber-500">
                Premium Barber Services in Denton
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Classic Cuts, <br />
                Modern Style
              </h1>
              <h2 className="text-3xl md:text-4xl text-amber-500 font-semibold">
                Fama Barber Shop and Beauty Salon
              </h2>
              <p className="text-zinc-400 max-w-lg">
                At Fama Barber Shop and Beauty Salon, we combine traditional
                barbering techniques with modern styling to give you the perfect
                look. Our experienced barbers deliver precision cuts, beard
                grooming, and relaxing hot towel shaves in a classic barbershop
                atmosphere.
              </p>

              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-zinc-400">
                  500 N Bell Ave #109, Denton, TX 76209
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 w-full sm:w-auto flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Our Services
                </button>
                <button className="bg-amber-500 hover:bg-amber-600 text-black w-full sm:w-auto flex items-center justify-center">
                  Book Now
                </button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Barbers at Fama Barber Shop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="h-8 w-8 text-amber-500 animate-bounce" />
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Our Services</h2>
                <p className="text-zinc-400">
                  Professional haircuts and grooming services
                </p>
              </div>
              <button className="mt-4 md:mt-0 bg-amber-500 hover:bg-amber-600 text-black">
                View All Services
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-black p-6 rounded-lg border border-zinc-800 hover:border-amber-500 transition"
                >
                  <div className="text-amber-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-zinc-400 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-500 font-bold">
                      ${service.price}
                    </span>
                    <button className="border-zinc-700 hover:border-amber-500 hover:text-amber-500">
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Business Information
                </h2>
                <p className="text-zinc-400">
                  Everything you need to know about us
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Star className="h-5 w-5 text-amber-500 mr-2" />
                  Rating
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < 4 ? "text-amber-500" : "text-amber-500/50"
                        }`}
                        fill={i < 4 ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span className="ml-2 font-bold">4.6</span>
                </div>
                <p className="text-zinc-400">Based on 116+ reviews</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-amber-500 mr-2" />
                  Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Open · Closes 7 pm</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-amber-500 mr-2" />
                  Location
                </h3>
                <p className="text-zinc-400 mb-4">
                  500 N Bell Ave #109, Denton, TX 76209, United States
                </p>
                <div className="h-40 bg-zinc-800 rounded-lg mb-4 relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Map location"
                    fill
                    className="object-cover"
                  />
                </div>
                <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready for a Fresh Look?</h2>
            <button className="bg-amber-500 hover:bg-amber-600 text-black text-lg px-8 py-6">
              Book an Appointment Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-zinc-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-amber-500 font-bold text-2xl mb-4">FAMA</div>
              <p className="text-zinc-400">
                Premium barber shop and beauty salon providing quality haircuts
                and styling services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                  <span className="text-zinc-400">
                    500 N Bell Ave #109, Denton, TX 76209
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-zinc-400">+1 940-612-9127</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Hours</h3>
              <div className="space-y-2 text-zinc-400">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-amber-500 transition"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-amber-500 transition"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} Fama Barber Shop and Beauty Salon.
              All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-zinc-400 hover:text-amber-500 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-zinc-400 hover:text-amber-500 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    name: "Haircut",
    description: "Precision haircut tailored to your style and face shape.",
    price: 25,
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
        />
      </svg>
    ),
    name: "Beard Trim",
    description: "Shape and style your beard for a clean, polished look.",
    price: 15,
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    name: "Hot Towel Shave",
    description:
      "Relaxing traditional straight razor shave with hot towel treatment.",
    price: 30,
  },
];
