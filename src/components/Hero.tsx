
import { ArrowRight, Code, Smartphone, Laptop, Palette, Settings, Cpu, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-5xl lg:text-6xl font-bold font-space mb-6 leading-tight">
              Complete{' '}
              <span className="gradient-text">IT Solutions</span>{' '}
              for Your Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From backend development to UI/UX design, automation, IoT solutions, and mobile services, 
              SpecD delivers comprehensive technology solutions that power your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-bg hover:shadow-lg transition-all duration-300 group"
                onClick={scrollToServices}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="animate-float">
                  <div className="bg-card rounded-2xl p-4 shadow-lg border hover:shadow-xl transition-shadow duration-300">
                    <Code className="h-10 w-10 text-orange-500 mb-3" />
                    <h3 className="font-semibold mb-1 text-sm">Backend Development</h3>
                    <p className="text-xs text-muted-foreground">Robust server solutions</p>
                  </div>
                </div>
                
                <div className="animate-float" style={{ animationDelay: '1s' }}>
                  <div className="bg-card rounded-2xl p-4 shadow-lg border hover:shadow-xl transition-shadow duration-300 mt-6">
                    <Palette className="h-10 w-10 text-orange-500 mb-3" />
                    <h3 className="font-semibold mb-1 text-sm">Frontend & UI/UX</h3>
                    <p className="text-xs text-muted-foreground">Modern design solutions</p>
                  </div>
                </div>
                
                <div className="animate-float" style={{ animationDelay: '2s' }}>
                  <div className="bg-card rounded-2xl p-4 shadow-lg border hover:shadow-xl transition-shadow duration-300">
                    <Cpu className="h-10 w-10 text-orange-500 mb-3" />
                    <h3 className="font-semibold mb-1 text-sm">Automation</h3>
                    <p className="text-xs text-muted-foreground">Process optimization</p>
                  </div>
                </div>
                
                <div className="animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="bg-card rounded-2xl p-4 shadow-lg border hover:shadow-xl transition-shadow duration-300 mt-6">
                    <Wifi className="h-10 w-10 text-orange-500 mb-3" />
                    <h3 className="font-semibold mb-1 text-sm">IoT Solutions</h3>
                    <p className="text-xs text-muted-foreground">Smart connectivity</p>
                  </div>
                </div>
                
                <div className="animate-float col-span-2" style={{ animationDelay: '1.5s' }}>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 shadow-lg text-white mt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xl font-bold mb-1">24/7</div>
                        <div className="text-xs opacity-90">Support Available</div>
                      </div>
                      <div className="flex space-x-2">
                        <Smartphone className="h-6 w-6 opacity-80" />
                        <Laptop className="h-6 w-6 opacity-80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
