import React from 'react';
import { MapPin, Clock, Phone, Facebook, Instagram, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">E</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">ELTA TENUN</span>
                <span className="text-sm text-secondary-foreground/80 tracking-wider">INDONESIA STORE</span>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed max-w-xs">
              Menyediakan tekstil tenun tradisional Indonesia berkualitas premium dengan keindahan dan keaslian yang terjaga.
            </p>
          </div>

          {/* Business Information */}
          <div className="space-y-4">
            <span className="font-semibold text-lg">Informasi Toko</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-secondary-foreground/80">
                  8MM8+PP8, Rw. III, Bugel, Kec. Kedung, Kabupaten Jepara, Jawa Tengah 59463
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-secondary-foreground/80">
                  Buka - Tutup pukul 21.00
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <span className="font-semibold text-lg">Hubungi Kami</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:085640064893" 
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  0856-4006-4893
                </a>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-primary transition-all duration-200 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-primary transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:info@eltatenun.com"
                  className="text-secondary-foreground/80 hover:text-primary transition-all duration-200 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-secondary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-secondary-foreground/70">
            © 2026 ELTA TENUN INDONESIA STORE. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;