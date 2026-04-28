import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProductDetailModal = ({ isOpen, onClose, product }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image when product changes
  useEffect(() => {
    if (isOpen) {
      setActiveImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, product]);

  if (!product) return null;

  const images = product.gallery || [product.image];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-secondary/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, type: 'spring', bounce: 0.15 }}
              className="bg-card w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-md rounded-full text-foreground hover:bg-muted transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
                {/* Image Gallery Section */}
                <div className="w-full lg:w-1/2 bg-muted p-6 flex flex-col gap-4">
                  {/* Main Image */}
                  <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-background shadow-inner group">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeImageIndex}
                        src={images[activeImageIndex]}
                        alt={`${product.title} - View ${activeImageIndex + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    
                    {images.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground shadow-lg"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground shadow-lg"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {images.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 snap-start transition-all duration-200 ${
                            activeImageIndex === idx 
                              ? 'ring-2 ring-primary ring-offset-2 ring-offset-muted' 
                              : 'opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col lg:overflow-y-auto">
                  <Badge className="w-fit bg-accent/10 text-accent border-accent/20 mb-4 hover:bg-accent/20">
                    Koleksi Premium
                  </Badge>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {product.title}
                  </h2>
                  
                  <p className="text-2xl font-medium text-primary mb-8">
                    {product.price}
                  </p>

                  <div className="space-y-6 flex-1">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">Deskripsi Produk</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {product.fullDescription}
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-xl border border-border">
                      <h3 className="text-sm font-semibold text-foreground mb-1 font-sans uppercase tracking-wider">Material</h3>
                      <p className="text-muted-foreground">
                        {product.material}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-border flex gap-4">
                    <Button 
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg font-medium"
                      onClick={() => {
                        window.open('https://wa.me/6285640064893?text=Halo,%20saya%20tertarik%20dengan%20produk%20' + encodeURIComponent(product.title), '_blank');
                      }}
                    >
                      Pesan Sekarang
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;