
import { Code, Database, Smartphone, Laptop, Wrench, ShoppingCart, Palette, Settings, Cpu, Wifi } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-orange-500" />,
      title: "Website Backend Development",
      description: "Custom backend solutions with robust APIs, database design, and scalable architecture for your web applications.",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security Implementation"]
    },
    {
      icon: <Palette className="h-12 w-12 text-orange-500" />,
      title: "Frontend Development",
      description: "Modern, responsive frontend applications using cutting-edge technologies and best practices for optimal user experience.",
      features: ["React & Vue.js", "Responsive Design", "Performance Optimization", "Cross-browser Compatibility"]
    },
    {
      icon: <Settings className="h-12 w-12 text-orange-500" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive, engaging, and conversion-focused digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: <Cpu className="h-12 w-12 text-orange-500" />,
      title: "Automation",
      description: "Streamline business processes with intelligent automation solutions that increase efficiency and reduce manual work.",
      features: ["Process Automation", "Workflow Design", "Integration Solutions", "Cost Reduction"]
    },
    {
      icon: <Wifi className="h-12 w-12 text-orange-500" />,
      title: "Internet of Things",
      description: "Connect and control smart devices with IoT solutions that enable data collection, monitoring, and remote management.",
      features: ["Smart Sensors", "Device Connectivity", "Data Analytics", "Remote Monitoring"]
    },
    {
      icon: <Database className="h-12 w-12 text-orange-500" />,
      title: "Complete IT Solutions",
      description: "End-to-end technology solutions including system integration, cloud services, and digital transformation.",
      features: ["System Integration", "Cloud Migration", "Data Analytics", "Digital Transformation"]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-orange-500" />,
      title: "Mobile Sales & Service",
      description: "Comprehensive mobile device solutions including sales of latest smartphones and professional repair services.",
      features: ["Latest Smartphones", "Screen Replacement", "Battery Service", "Software Updates"]
    },
    {
      icon: <Laptop className="h-12 w-12 text-orange-500" />,
      title: "Laptop Sales & Service",
      description: "Complete laptop solutions from sales of top brands to professional repair and maintenance services.",
      features: ["Brand New Laptops", "Hardware Repair", "OS Installation", "Performance Optimization"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-orange-500" />,
      title: "Technical Support",
      description: "24/7 technical support for all your IT needs including troubleshooting and maintenance services.",
      features: ["24/7 Support", "Remote Assistance", "On-site Service", "Preventive Maintenance"]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-orange-500" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and customer analytics.",
      features: ["Online Stores", "Payment Gateways", "Inventory System", "Customer Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-space mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs and drive digital success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
