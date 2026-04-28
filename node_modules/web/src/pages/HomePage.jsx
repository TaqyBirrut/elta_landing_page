import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Phone, ArrowRight, Sparkles, Award, Users, Eye } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProductDetailModal from '@/components/ProductDetailModal.jsx';

const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // All images to be used for generating galleries
  const allImages = [
    'https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/ffdc964c1c9f96b43daa866ae7b9a1a7.png',
    'https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/698fb594d2f862dc8cb444de7aa350da.png',
    'https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/000ef1fd9f364bb20c58c6452cc556b0.png',
    'https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/baa918bf192a6df38397a6149cf147a9.png',
    'https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/e3c543df31f18077206ac6be9b67acb4.png',
    'https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/3d16e9f13b806ec0dcbc0d726c231214.png'
  ];

  // Helper to generate a gallery for a product (main image + 3 random others)
  const generateGallery = (mainImage) => {
    const others = allImages.filter(img => img !== mainImage);
    // Shuffle and take 3
    const shuffled = others.sort(() => 0.5 - Math.random()).slice(0, 3);
    return [mainImage, ...shuffled];
  };

  const products = [
    {
      id: 1,
      image: 'https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/ffdc964c1c9f96b43daa866ae7b9a1a7.png',
      title: 'Dress Tenun Tradisional Merah',
      shortDescription: 'Dress elegan dengan motif tradisional merah dan hitam',
      fullDescription: 'Dress tenun tradisional Indonesia dengan motif merah dan hitam yang elegan. Dibuat dari bahan tenun asli dengan kualitas premium. Cocok untuk acara formal maupun casual.',
      material: 'Tenun Tradisional Indonesia 100%',
      price: 'Rp 1.850.000',
      gallery: generateGallery('https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/ffdc964c1c9f96b43daa866ae7b9a1a7.png')
    },
    {
      id: 2,
      image: 'https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/698fb594d2f862dc8cb444de7aa350da.png',
      title: 'Koleksi Dress Tenun Wanita',
      shortDescription: 'Set 3 dress dengan motif merah, hijau, dan biru',
      fullDescription: 'Koleksi eksklusif 3 dress tenun wanita dengan motif tradisional yang berbeda. Setiap dress menampilkan warna unik: merah, hijau, dan biru. Sempurna untuk koleksi fashion tradisional Anda.',
      material: 'Tenun Tradisional Indonesia 100%',
      price: 'Rp 4.500.000',
      gallery: generateGallery('https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/698fb594d2f862dc8cb444de7aa350da.png')
    },
    {
      id: 3,
      image: 'https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/000ef1fd9f364bb20c58c6452cc556b0.png',
      title: 'Kemeja Tenun Pria',
      shortDescription: 'Kemeja pria dengan motif merah dan kuning',
      fullDescription: 'Kemeja tenun tradisional untuk pria dengan motif merah dan kuning yang memukau. Desain klasik dengan sentuhan modern. Nyaman dipakai untuk berbagai acara.',
      material: 'Tenun Tradisional Indonesia 100%',
      price: 'Rp 1.250.000',
      gallery: generateGallery('https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/000ef1fd9f364bb20c58c6452cc556b0.png')
    },
    {
      id: 4,
      image: 'https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/baa918bf192a6df38397a6149cf147a9.png',
      title: 'Pasangan Kemeja & Dress Tenun',
      shortDescription: 'Set pasangan dengan motif biru tradisional',
      fullDescription: 'Koleksi pasangan eksklusif dengan kemeja dan dress tenun biru. Motif tradisional yang serasi untuk pasangan yang ingin tampil bersama dengan gaya.',
      material: 'Tenun Tradisional Indonesia 100%',
      price: 'Rp 3.200.000',
      gallery: generateGallery('https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/baa918bf192a6df38397a6149cf147a9.png')
    },
    {
      id: 5,
      image: 'https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/e3c543df31f18077206ac6be9b67acb4.png',
      title: 'Dress Tenun Outdoor',
      shortDescription: 'Dress merah dan hitam untuk gaya outdoor',
      fullDescription: 'Dress tenun tradisional dengan warna merah dan hitam yang sempurna untuk aktivitas outdoor. Desain yang nyaman dan stylish. Material berkualitas tinggi yang tahan lama.',
      material: 'Tenun Tradisional Indonesia 100%',
      price: 'Rp 1.650.000',
      gallery: generateGallery('https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/e3c543df31f18077206ac6be9b67acb4.png')
    },
    {
      id: 6,
      image: 'https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/3d16e9f13b806ec0dcbc0d726c231214.png',
      title: 'Bomber Jacket Tenun Pria',
      shortDescription: 'Bomber jacket biru dengan motif tradisional',
      fullDescription: 'Bomber jacket tenun tradisional dengan warna biru dan motif khas Indonesia. Gaya modern dengan sentuhan tradisional. Cocok untuk casual maupun semi-formal.',
      material: 'Tenun Tradisional Indonesia 100%',
      price: 'Rp 2.100.000',
      gallery: generateGallery('https://horizons-cdn.hostinger.com/f5ed706a-23c4-4c31-90c1-e807eb3ed1d1/3d16e9f13b806ec0dcbc0d726c231214.png')
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Kualitas Premium',
      description: 'Setiap produk dipilih dengan standar kualitas tertinggi'
    },
    {
      icon: Sparkles,
      title: 'Keaslian Terjamin',
      description: 'Produk tenun asli dari pengrajin lokal Indonesia'
    },
    {
      icon: Users,
      title: 'Pelayanan Terbaik',
      description: 'Tim kami siap membantu Anda menemukan produk yang tepat'
    }
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300); // Wait for animation
  };

  return (
    <>
      <Helmet>
        <title>ELTA TENUN INDONESIA STORE - Keindahan Tekstil Tradisional Indonesia</title>
        <meta name="description" content="Toko tenun Indonesia terpercaya di Jepara, Jawa Tengah. Menyediakan kain tenun, songket, batik tenun, dan selendang berkualitas premium dengan keaslian terjaga." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1637217912301-7a53910d9939" 
            alt="Traditional Indonesian woven textiles showcasing intricate patterns and vibrant colors"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/80 to-secondary/95"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm px-4 py-1.5 text-sm tracking-wide uppercase">
              Warisan Budaya Nusantara
            </Badge>
            <h1 className="text-white">
              ELTA TENUN<br />INDONESIA STORE
            </h1>
            <p className="text-xl md:text-2xl text-primary max-w-2xl mx-auto font-medium font-serif italic">
              Keindahan Tekstil Tradisional Indonesia
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
              Temukan koleksi eksklusif pakaian tenun berkualitas premium, dirancang untuk memadukan keanggunan tradisional dengan gaya modern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#produk');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] group h-14 px-8 text-lg"
              >
                Jelajahi Koleksi
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section id="produk" className="py-24 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Koleksi Eksklusif
            </Badge>
            <h2 className="text-foreground mb-4">Produk Tenun Pilihan</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Setiap mahakarya dipilih dengan cermat untuk memastikan kualitas, kenyamanan, dan keaslian motif tradisional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group h-full flex flex-col bg-card">
                  <div className="relative overflow-hidden aspect-[4/5] bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <Button 
                        onClick={() => openModal(product)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Lihat Detail
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3 gap-4">
                      <h3 className="text-xl font-semibold text-foreground leading-tight">{product.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{product.shortDescription}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => openModal(product)}
                        className="text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        Detail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                Tentang Kami
              </Badge>
              <h2 className="text-foreground mb-6">Melestarikan Warisan Budaya Indonesia</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ELTA TENUN INDONESIA STORE adalah butik yang berdedikasi untuk melestarikan dan mempromosikan keindahan tekstil tradisional Indonesia. Kami bekerja sama langsung dengan pengrajin lokal dari berbagai daerah untuk menghadirkan pakaian tenun berkualitas premium.
                </p>
                <p>
                  Setiap helai kain yang kami tawarkan merupakan hasil karya tangan terampil yang telah diwariskan turun-temurun. Kami memastikan keaslian dan kualitas setiap produk, sehingga Anda mendapatkan mahakarya yang autentik dan bernilai tinggi.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-card">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Info Section */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Informasi Toko
            </Badge>
            <h2 className="text-foreground mb-4">Kunjungi Butik Kami</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kami siap melayani Anda dengan koleksi tenun berkualitas terbaik
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="text-center h-full border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Jam Operasional</h3>
                  <p className="text-muted-foreground">Buka - Tutup pukul 21.00</p>
                  <p className="text-sm text-muted-foreground/80 mt-2">Setiap hari</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="text-center h-full border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Lokasi</h3>
                  <p className="text-muted-foreground">Jepara, Jawa Tengah</p>
                  <p className="text-sm text-muted-foreground/80 mt-2">Kabupaten Jepara</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="text-center h-full border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Kontak</h3>
                  <a 
                    href="tel:085640064893"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    0856-4006-4893
                  </a>
                  <p className="text-sm text-muted-foreground/80 mt-2">Hubungi kami</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontak" className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px]"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-white mb-6">Siap Menemukan Tenun Impian Anda?</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Hubungi kami sekarang untuk konsultasi gratis atau kunjungi butik kami di Jepara untuk melihat langsung koleksi tenun berkualitas premium kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] group h-14 px-8"
              >
                <a href="https://wa.me/6285640064893" target="_blank" rel="noopener noreferrer">
                  Hubungi via WhatsApp
                  <Phone className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent text-white border-white/30 hover:bg-white/10 transition-all duration-200 active:scale-[0.98] group h-14 px-8"
              >
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=8MM8+PP8,+Rw.+III,+Bugel,+Kec.+Kedung,+Kabupaten+Jepara,+Jawa+Tengah+59463" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Kunjungi Toko
                  <MapPin className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-y-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <ProductDetailModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        product={selectedProduct} 
      />
    </>
  );
};

export default HomePage;