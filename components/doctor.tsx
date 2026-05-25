export default function Doctor() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="space-y-8">
        {/* Doctor Info - Centered */}
        <div className="space-y-4 text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-foreground leading-tight tracking-tight">
            Dr. Bashir Ahmad
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>
          <p className="text-xl sm:text-2xl text-secondary font-bold tracking-wide">
            MBBS, MS, FIAGES
          </p>
        </div>

        {/* Specialization */}
        <div className="bg-primary/5 rounded-xl p-6 sm:p-8 border border-primary/20">
          <p className="font-black text-primary text-center text-lg sm:text-xl tracking-wide">
            GENERAL & LAPAROSCOPY SURGEON
          </p>
        </div>

        {/* Specialties List */}
        <div className="bg-card rounded-lg p-6 sm:p-8 border border-border">
          <h3 className="font-bold text-foreground text-lg mb-4 text-center">Areas of Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Gallbladder Stone Surgery',
              'Kidney Stone Management',
              'Piles & Hemorrhoids Treatment',
              'Hernia Repair',
            ].map((specialty, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
                <p className="text-sm font-semibold text-foreground">
                  {specialty}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact */}
        <div className="space-y-4 bg-secondary/5 rounded-xl p-6 sm:p-8 border border-secondary/20">
          <h3 className="font-bold text-foreground text-lg text-center">Direct Contact</h3>
          <div className="space-y-3">
            <a 
              href="tel:+919797990594"
              className="flex items-center justify-center gap-3 text-secondary hover:text-secondary/80 font-semibold transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>+91 9797990594</span>
            </a>
            <a 
              href="tel:+916005493973"
              className="flex items-center justify-center gap-3 text-secondary hover:text-secondary/80 font-semibold transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>+91 6005493973</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
