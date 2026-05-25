import { Phone, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              G
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-black text-foreground tracking-tight">Gousia Medical Centre</h1>
              <p className="text-xs text-muted-foreground font-semibold">Compassion · Care · Cure</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-6">
            <a 
              href="tel:+919797990594"
              className="flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
