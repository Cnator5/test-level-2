// seo.config.js

export const defaultSEO = {
    titleTemplate: '%s | MODRINO',
    defaultTitle: 'MODRINO | Luxury Car Sales and Services',
    description: 'MODRINO offers premium luxury cars for sale and top-tier automotive services. Experience luxury and excellence.',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://www.modrino.com/',
      siteName: 'MODRINO',
    },
    twitter: {
      handle: '@MODRINO',
      site: '@MODRINO',
      cardType: 'summary_large_image',
    },
  };
  
  export const servicesSEO = {
    title: 'Luxury Car Services',
    description: 'Discover MODRINO\'s premium car services. From maintenance to customization, experience luxury care for your high-end vehicle.',
    openGraph: {
      title: 'Premium Car Services | MODRINO',
      description: 'Explore our range of luxury car services at MODRINO. Expert maintenance, customization, and more for high-end vehicles.',
      url: 'https://www.modrino.com/services',
      images: [
        {
          url: 'https://www.modrino.com/images/services-og.jpg',
          width: 1200,
          height: 630,
          alt: 'MODRINO Car Services',
        },
      ],
    },
  };