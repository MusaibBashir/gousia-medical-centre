'use client';

export default function Services() {
  const services = [
    'Gallbladder Stone',
    'Kidney Stone',
    'Piles / Hemorrhoids',
    'Hernia',
    'Appendicitis',
    'Hydrocele',
    'Circumcision',
    'Fissure & Fistula',
    'Diabetic Foot',
    'Lipoma & Cysts',
    'Breast Lump',
    'Varicose Surgery',
    'Gynae Related Problems',
  ];

  const diagnostics = [
    'All Lab Investigations',
    'Body Profiles',
    'USG - General',
    'USG - Small Parts',
  ];

  return (
    <section id="services" className="bg-muted/30 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Diagnostic Services</h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {diagnostics.map((service, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary hover:shadow-md transition-all group"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 group-hover:bg-primary/30">
                  <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-sm sm:text-base font-semibold text-foreground">{service}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="mb-10 text-center">
            <h3 className="text-3xl sm:text-4xl font-black text-foreground mb-3">Procedures Available</h3>
            <div className="flex justify-center">
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 group-hover:bg-primary/30">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm sm:text-base font-semibold text-foreground">{service}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-center text-muted-foreground text-base font-semibold">
            Specialized surgical procedures and comprehensive diagnostic services tailored to your needs. Contact us for detailed consultation and treatment planning.
          </p>
        </div>
      </div>
    </section>
  );
}
