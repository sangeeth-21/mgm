
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/b6457b51-8464-4b5b-9ed7-9b8fec7a965e.png" 
                alt="SpecD Logo" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold font-space gradient-text">SpecD</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              SpecD delivers comprehensive IT solutions including backend development, frontend development, 
              UI/UX design, automation, IoT solutions, mobile and laptop services. Your trusted technology 
              partner for complete digital transformation and success.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-orange-100 dark:hover:bg-orange-900/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-orange-100 dark:hover:bg-orange-900/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-orange-100 dark:hover:bg-orange-900/20">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-orange-100 dark:hover:bg-orange-900/20">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Backend Development</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Frontend Development</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Automation</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">IoT Solutions</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Mobile & Laptop Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-orange-500 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 SpecD. All rights reserved.
          </p>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={scrollToTop}
            className="hover:bg-orange-100 dark:hover:bg-orange-900/20 mt-4 md:mt-0"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
