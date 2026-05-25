'use client';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary px-4 py-16 sm:py-24">
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,0 50,50 T100,50" stroke="currentColor" fill="none" className="text-primary-foreground" />
        </svg>
      </div>
      
      <div className="relative mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <h1 className="text-balance text-6xl sm:text-8xl font-black text-primary-foreground leading-tight tracking-tight">
            Gousia Medical Centre
          </h1>
          <h2 className="text-balance text-3xl sm:text-5xl font-black text-primary-foreground leading-tight tracking-tight">
            Your Health,<br />Our Priority
          </h2>
          <p className="text-xl sm:text-2xl text-primary-foreground/95 max-w-3xl mx-auto leading-relaxed font-semibold">
            Expert surgical care and compassionate treatment from a highly qualified general and laparoscopy surgeon with years of clinical excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <a 
              href="#contact"
              className="px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              Book Appointment
            </a>
            <a 
              href="#services"
              className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/10 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
