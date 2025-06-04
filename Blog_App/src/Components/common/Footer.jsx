import React from 'react';
import { 
  Github, 
  Twitter, 
  Instagram, 
  Facebook, 
  Mail, 
  Heart, 
  ArrowRight,
  Leaf
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-green-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">GreenBlog</h2>
            </div>
            <p className="text-green-100 mt-2 mb-4">
              Sharing our thoughts and insights about the world around us.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-green-200 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-green-300">Categories</h3>
            <ul className="space-y-2">
              {['Technology', 'Lifestyle', 'Travel', 'Food', 'Health'].map((category) => (
                <li key={category}>
                  <a 
                    href="#" 
                    className="text-green-100 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-green-300">Resources</h3>
            <ul className="space-y-2">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'Sitemap'].map((resource) => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="text-green-100 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-green-300">Subscribe to Newsletter</h3>
            <p className="text-green-100 mb-4">Get the latest posts and updates delivered straight to your inbox.</p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400 rounded-l-md text-gray-800"
              />
              <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-r-md transition-colors duration-300 flex items-center">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm">
              © {currentYear} GreenBlog. All rights reserved.
            </p>
            <p className="text-green-200 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> by GreenTeam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

