import { Clock, MapPin } from 'lucide-react';

export default function Hours() {
  const hours = [
    { day: 'Tuesday - Sunday', time: '9:00 AM - 5:00 PM' },
    { day: 'Monday', time: 'After 3:00 PM onwards' },
    { day: 'Friday', time: 'Closed', closed: true },
  ];

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Location & Hours</h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Location */}
          <div className="bg-card rounded-lg p-6 border border-border space-y-4">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground text-lg mb-2">Gousia Medical Centre</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cooperative Complex,<br />
                  New Colony,<br />
                  Sopore
                </p>
              </div>
            </div>
            <a 
              href="https://maps.google.com/?q=Gousia+Medical+Centre+Sopore"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg transition-all text-center text-sm"
            >
              Get Directions
            </a>
          </div>

          {/* Hours */}
          <div className="bg-card rounded-lg p-6 border border-border space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="w-full">
                <h3 className="font-bold text-foreground text-lg mb-3">Consultation Hours</h3>
                <div className="space-y-2">
                  {hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-start text-sm">
                      <span className="font-semibold text-foreground">{h.day}</span>
                      <span className={h.closed ? 'text-destructive font-semibold' : 'text-muted-foreground'}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-6 border border-primary/30 text-center space-y-4">
          <p className="text-base text-muted-foreground font-semibold">Need an appointment outside these hours? We're here to assist you.</p>
          <a 
            href="tel:+919797990594"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:shadow-lg transition-all text-base"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
