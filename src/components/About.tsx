
import { Users, Award, Clock, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "500+",
      label: "Happy Clients"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "50+",
      label: "Projects Completed"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "24/7",
      label: "Support Available"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "5+",
      label: "Years Experience"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl lg:text-5xl font-bold font-space mb-6">
              About <span className="gradient-text">SpecD</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              SpecD is a leading technology company specializing in complete IT solutions. 
              We combine cutting-edge backend development, modern frontend solutions, intuitive UI/UX design, 
              and innovative automation with comprehensive hardware services to deliver exceptional results for our clients.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of experienced professionals is dedicated to providing innovative 
              solutions including IoT implementations, process automation, and digital transformation services. 
              From custom web applications to mobile and laptop services, we're your trusted technology partner 
              for complete digital success.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                  <div className="text-orange-500 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Cartoon animated team working on technology solutions with laptops and mobile devices" 
                className="rounded-2xl shadow-2xl animate-float" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
