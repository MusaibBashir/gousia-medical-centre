'use client';

export default function Values() {
  const values = [
    {
      number: '01',
      title: 'Expert Care',
      subtitle: 'You Can Trust',
      description: 'Highly qualified surgeon with extensive experience in general and laparoscopic surgery. Dedicated to providing the highest standard of medical excellence.',
    },
    {
      number: '02',
      title: 'Compassionate Care',
      subtitle: 'For Every Patient',
      description: 'Patient-centered approach with empathy and understanding. We believe in treating each patient as a valued individual with unique needs.',
    },
    {
      number: '03',
      title: 'Advanced Treatment',
      subtitle: 'Better Results',
      description: 'Latest surgical techniques and modern technology. Utilizing cutting-edge procedures for improved outcomes and faster recovery.',
    },
    {
      number: '04',
      title: 'Healthier Tomorrow',
      subtitle: 'Our Commitment',
      description: 'Long-term patient wellness and comprehensive recovery support. Committed to your health journey beyond the operating room.',
    },
  ];

  return (
    <section className="bg-card px-4 py-16 sm:py-24 border-y border-border">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Why Choose Us</h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-muted/30 border border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="text-3xl font-black text-primary mb-3 tracking-tight">{value.number}</div>
              <h3 className="font-black text-foreground text-lg mb-1 tracking-tight">{value.title}</h3>
              <p className="text-sm text-primary font-bold mb-3">{value.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
