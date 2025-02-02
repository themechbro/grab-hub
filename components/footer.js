import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h2 className="text-white text-lg font-semibold">About Us</h2>
          <p className="mt-2 text-gray-400 text-sm">
            We provide the best quality food at an affordable price. Order your
            favorite dishes and enjoy a delicious meal.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            {["Home", "Menu", "Contact", "FAQ"].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div>
          <h2 className="text-white text-lg font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            {[
              { icon: <Facebook />, href: "#" },
              { icon: <Twitter />, href: "#" },
              { icon: <Instagram />, href: "#" },
              { icon: <Linkedin />, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 my-6"></div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} GrabHUB. All rights reserved. Made by
        Adrin.
      </div>
    </footer>
  );
};

export default Footer;
