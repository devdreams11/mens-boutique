// ==================== DATA ====================
const CATEGORIES = [
  { id: 1, name: 'T-Shirts',       image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop' },
  { id: 2, name: 'Shirts',         image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop' },
  { id: 3, name: 'Jeans',          image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop' },
  { id: 4, name: 'Trousers',       image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop' },
  { id: 5, name: 'Ethnic Wear',    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&h=400&fit=crop' },
  { id: 6, name: 'Jackets',        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop' },
  { id: 7, name: 'Suits & Blazers',image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=400&fit=crop' },
  { id: 8, name: 'Sportswear',     image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop' },
  { id: 9, name: 'Footwear',       image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop' },
  { id:10, name: 'Accessories',    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=300&h=400&fit=crop' },
  { id:11, name: 'Shorts',         image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=300&h=400&fit=crop' },
  { id:12, name: 'Innerwear',      image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=300&h=400&fit=crop' },
];

const IMGS = {
  tshirt:  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
  tshirt2: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop',
  tshirt3: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300&h=400&fit=crop',
  shirt:   'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop',
  shirt2:  'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=300&h=400&fit=crop',
  shirt3:  'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=300&h=400&fit=crop',
  jeans:   'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop',
  jeans2:  'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=300&h=400&fit=crop',
  jeans3:  'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&h=400&fit=crop',
  chino:   'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop',
  chino2:  'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&h=400&fit=crop',
  kurta:   'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&h=400&fit=crop',
  kurta2:  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=400&fit=crop',
  jacket:  'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop',
  jacket2: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop',
  jacket3: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=300&h=400&fit=crop',
  blazer:  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=400&fit=crop',
  blazer2: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop',
  sport:   'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
  sport2:  'https://images.unsplash.com/photo-1556906781-9a412961a28c?w=300&h=400&fit=crop',
  sport3:  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=400&fit=crop',
  shoes:   'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop',
  shoes2:  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300&h=400&fit=crop',
  shoes3:  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=400&fit=crop',
  watch:   'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=300&h=400&fit=crop',
  bag:     'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop',
  shorts:  'https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=300&h=400&fit=crop',
  shorts2: 'https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?w=300&h=400&fit=crop',
};

const PRODUCTS = [
  // T-SHIRTS
  { id:1,  brand:'Roadster',      name:'Men Slim Fit Striped Polo T-Shirt',        price:599,  original:999,  disc:40, img:IMGS.tshirt,  sizes:['S','M','L','XL'],       colors:['Navy Blue','Black','White'],       cat:'T-Shirts',      isNew:false, isTrend:true,  rating:4.2, reviews:1842, desc:'Premium cotton polo with ribbed collar and button placket. Classic striped design for smart casual occasions.' },
  { id:2,  brand:'Puma',          name:'Men Regular Fit Graphic Print T-Shirt',    price:499,  original:899,  disc:44, img:IMGS.tshirt2, sizes:['S','M','L','XL','XXL'],  colors:['Blue','Red','Black'],             cat:'T-Shirts',      isNew:true,  isTrend:false, rating:4.1, reviews:3421, desc:'Sporty graphic tee with bold Puma branding. Soft cotton jersey, round neck, short sleeves.' },
  { id:3,  brand:'H&M',           name:'Men Oversized Fit Solid T-Shirt',          price:449,  original:799,  disc:44, img:IMGS.tshirt3, sizes:['S','M','L','XL'],       colors:['White','Black','Olive','Grey'],   cat:'T-Shirts',      isNew:false, isTrend:true,  rating:4.0, reviews:5200, desc:'Relaxed oversized fit t-shirt in soft jersey. Clean minimal design perfect for everyday wear.' },
  { id:4,  brand:'US Polo Assn',  name:'Men Slim Fit Colourblocked Polo T-Shirt',  price:799,  original:1499, disc:47, img:IMGS.tshirt,  sizes:['S','M','L','XL','XXL'],  colors:['Red & White','Blue & White'],     cat:'T-Shirts',      isNew:false, isTrend:true,  rating:4.4, reviews:6780, desc:'Classic polo with colourblocked panels and embroidered logo. Premium pique cotton for breathability.' },
  { id:5,  brand:'Tommy Hilfiger',name:'Men Regular Fit Brand Logo Crew Neck Tee',  price:1299, original:2499, disc:48, img:IMGS.tshirt2, sizes:['XS','S','M','L','XL'],   colors:['White','Navy','Red'],             cat:'T-Shirts',      isNew:true,  isTrend:true,  rating:4.6, reviews:9230, desc:'Iconic Tommy Hilfiger crew neck tee with classic flag logo. Super soft cotton.' },
  { id:6,  brand:'Adidas',        name:'Men Solid Performance Dry-Fit T-Shirt',    price:699,  original:1199, disc:42, img:IMGS.tshirt3, sizes:['S','M','L','XL'],       colors:['Black','Blue','Orange'],          cat:'T-Shirts',      isNew:false, isTrend:false, rating:4.3, reviews:4105, desc:'Moisture-wicking Adidas performance tee. Climalite technology keeps you cool during workouts.' },
  { id:7,  brand:'Jack & Jones',  name:'Men Slim Fit Half Sleeve Printed Tee',     price:649,  original:1199, disc:46, img:IMGS.tshirt,  sizes:['S','M','L','XL'],       colors:['Black','White','Khaki'],          cat:'T-Shirts',      isNew:false, isTrend:true,  rating:4.1, reviews:3340, desc:'Slim fit tee with artistic front print. Soft 100% cotton with a clean round neck design.' },
  { id:8,  brand:'HRX',           name:'Men Comfort Fit Solid Active T-Shirt',     price:399,  original:699,  disc:43, img:IMGS.tshirt2, sizes:['S','M','L','XL','XXL'],  colors:['Grey Marl','Black','Navy'],       cat:'T-Shirts',      isNew:false, isTrend:false, rating:4.0, reviews:2100, desc:'Comfort fit active tee designed for gym and casual wear.' },
  { id:9,  brand:'Zara',          name:'Men Relaxed Fit Washed Cotton T-Shirt',    price:999,  original:1799, disc:44, img:IMGS.tshirt3, sizes:['S','M','L','XL'],       colors:['Washed Blue','Washed Black'],     cat:'T-Shirts',      isNew:true,  isTrend:false, rating:4.2, reviews:2870, desc:'Vintage-washed cotton tee with lived-in feel. Dropped shoulders, boxy silhouette.' },
  { id:10, brand:'Reebok',        name:'Men Training Essentials Vector T-Shirt',   price:549,  original:999,  disc:45, img:IMGS.tshirt,  sizes:['S','M','L','XL','XXL'],  colors:['Grey','Navy','White'],            cat:'T-Shirts',      isNew:false, isTrend:false, rating:3.9, reviews:1560, desc:'Breathable training tee with vector graphic. Speedwick fabric moves sweat away fast.' },
  // SHIRTS
  { id:11, brand:'Peter England', name:'Men Slim Fit White Formal Shirt',          price:849,  original:1499, disc:43, img:IMGS.shirt,  sizes:['S','M','L','XL','XXL'],  colors:['White','Sky Blue','Light Pink'],  cat:'Shirts',        isNew:false, isTrend:true,  rating:4.5, reviews:3241, desc:'Classic slim fit formal shirt in crisp white. Wrinkle-resistant fabric, regular collar.' },
  { id:12, brand:'Van Heusen',    name:'Men Regular Fit Checkered Casual Shirt',   price:999,  original:1799, disc:44, img:IMGS.shirt2, sizes:['S','M','L','XL','XXL'],  colors:['Blue Check','Red Check'],        cat:'Shirts',        isNew:false, isTrend:false, rating:4.3, reviews:4100, desc:'Stylish checkered casual shirt with a relaxed regular fit. 100% cotton for breathability.' },
  { id:13, brand:'Arrow',         name:'Men Slim Fit Solid Oxford Shirt',          price:1099, original:2199, disc:50, img:IMGS.shirt3, sizes:['S','M','L','XL'],       colors:['White','Blue','Peach'],           cat:'Shirts',        isNew:true,  isTrend:true,  rating:4.4, reviews:2850, desc:'Premium Oxford weave shirt with button-down collar. Slim fit for smart casual dressing.' },
  { id:14, brand:'Louis Philippe', name:'Men Tailored Herringbone Formal Shirt',   price:1499, original:2999, disc:50, img:IMGS.shirt,  sizes:['S','M','L','XL','XXL'],  colors:['White','Sky Blue','Grey'],       cat:'Shirts',        isNew:false, isTrend:true,  rating:4.6, reviews:1970, desc:'Tailored fit herringbone weave formal shirt. Perfect for boardroom meetings.' },
  { id:15, brand:'Zara',          name:'Men Oversized Linen Blend Shirt',          price:1799, original:3499, disc:49, img:IMGS.shirt2, sizes:['S','M','L','XL'],       colors:['Ecru','Navy','Olive'],            cat:'Shirts',        isNew:true,  isTrend:true,  rating:4.2, reviews:3680, desc:'Relaxed oversized linen blend shirt. Breathable and breezy, perfect for summer.' },
  { id:16, brand:'H&M',           name:'Men Regular Fit Denim Shirt',              price:799,  original:1499, disc:47, img:IMGS.shirt3, sizes:['S','M','L','XL','XXL'],  colors:['Light Blue','Dark Blue'],        cat:'Shirts',        isNew:false, isTrend:false, rating:4.0, reviews:5900, desc:'Classic denim shirt with chest pockets and button-front.' },
  { id:17, brand:'Jack & Jones',  name:'Men Slim Fit Flannel Shirt',               price:1199, original:2399, disc:50, img:IMGS.shirt,  sizes:['S','M','L','XL'],       colors:['Red Plaid','Blue Plaid'],         cat:'Shirts',        isNew:true,  isTrend:true,  rating:4.3, reviews:2760, desc:'Super soft brushed flannel shirt in classic plaid. Warm and stylish for layering.' },
  { id:18, brand:'Tommy Hilfiger',name:'Men Regular Fit Striped Oxford Shirt',     price:1999, original:3999, disc:50, img:IMGS.shirt2, sizes:['S','M','L','XL','XXL'],  colors:['Blue Stripe','Red Stripe'],      cat:'Shirts',        isNew:false, isTrend:true,  rating:4.5, reviews:4220, desc:'Preppy striped Oxford shirt with signature Tommy flag. Button-down collar.' },
  { id:19, brand:'Raymond',       name:'Men Tailored Twill Weave Formal Shirt',    price:1299, original:2499, disc:48, img:IMGS.shirt3, sizes:['S','M','L','XL','XXL'],  colors:['White','Light Blue'],            cat:'Shirts',        isNew:false, isTrend:false, rating:4.4, reviews:1890, desc:'Refined twill weave shirt from Raymond. Tailored fit ideal for formal office wear.' },
  { id:20, brand:'ColorPlus',     name:'Men Slim Fit Printed Casual Shirt',        price:899,  original:1799, disc:50, img:IMGS.shirt,  sizes:['S','M','L','XL'],       colors:['Floral Blue','Tropical Green'],  cat:'Shirts',        isNew:false, isTrend:false, rating:4.1, reviews:1430, desc:'Vibrant printed casual shirt with all-over floral motifs.' },
  // JEANS
  { id:21, brand:'Levis',         name:'Men 511 Slim Fit Dark Wash Jeans',         price:1499, original:2999, disc:50, img:IMGS.jeans,  sizes:['28','30','32','34','36'], colors:['Dark Blue','Black','Mid Blue'],   cat:'Jeans',         isNew:false, isTrend:true,  rating:4.5, reviews:8920, desc:'Iconic 511 slim fit jeans. Sits below waist, slim through hip and thigh with stretch comfort.' },
  { id:22, brand:'Jack & Jones',  name:'Men Glenn Slim Fit Light Blue Jeans',      price:1299, original:2599, disc:50, img:IMGS.jeans2, sizes:['28','30','32','34','36'], colors:['Light Blue','Mid Blue'],          cat:'Jeans',         isNew:true,  isTrend:true,  rating:4.2, reviews:4330, desc:'Glenn slim fit jeans with subtle distressing. Light blue wash gives a fresh casual look.' },
  { id:23, brand:'Roadster',      name:'Men Straight Fit Mid-Rise Clean Jeans',    price:899,  original:1799, disc:50, img:IMGS.jeans3, sizes:['28','30','32','34','36','38'], colors:['Blue','Black','Grey'],       cat:'Jeans',         isNew:false, isTrend:false, rating:4.0, reviews:6710, desc:'Timeless straight fit jeans in clean wash denim. Versatile from office to weekend.' },
  { id:24, brand:'H&M',           name:'Men Skinny Fit Super Stretch Black Jeans', price:999,  original:1999, disc:50, img:IMGS.jeans,  sizes:['28','30','32','34'],     colors:['Black','Dark Indigo'],            cat:'Jeans',         isNew:false, isTrend:false, rating:3.9, reviews:5400, desc:'Skinny fit jeans with super stretch fabric for maximum comfort.' },
  { id:25, brand:'Levis',         name:"Men 501 Original Straight Fit Jeans",      price:1799, original:3599, disc:50, img:IMGS.jeans2, sizes:['30','32','34','36','38'], colors:['Medium Wash','Dark Wash'],        cat:'Jeans',         isNew:false, isTrend:true,  rating:4.6, reviews:12300,desc:'The original 501 – the jeans that started it all. Button fly, straight leg.' },
  { id:26, brand:'Zara',          name:'Men Relaxed Fit Ripped Denim Jeans',       price:1699, original:2999, disc:43, img:IMGS.jeans3, sizes:['28','30','32','34','36'], colors:['Light Blue','Bleached'],          cat:'Jeans',         isNew:true,  isTrend:true,  rating:4.1, reviews:3200, desc:'On-trend relaxed fit jeans with intentional rips at the knees.' },
  { id:27, brand:'Wrangler',      name:'Men Regular Fit Bootcut Jeans',            price:1099, original:2199, disc:50, img:IMGS.jeans,  sizes:['30','32','34','36','38'], colors:['Mid Blue','Dark Blue'],           cat:'Jeans',         isNew:false, isTrend:false, rating:4.2, reviews:2780, desc:'Classic Wrangler bootcut jeans with a regular fit.' },
  { id:28, brand:'Pepe Jeans',    name:'Men Slim Tapered Fit Cargo Jeans',         price:1399, original:2799, disc:50, img:IMGS.jeans2, sizes:['28','30','32','34','36'], colors:['Dark Blue','Olive','Black'],      cat:'Jeans',         isNew:true,  isTrend:false, rating:4.3, reviews:1890, desc:'Slim tapered cargo jeans with multiple utility pockets.' },
  { id:29, brand:'Tommy Hilfiger',name:'Men Scanton Slim Fit Faded Jeans',         price:2499, original:4999, disc:50, img:IMGS.jeans3, sizes:['28','30','32','34','36'], colors:['Faded Blue','Dark Faded'],        cat:'Jeans',         isNew:false, isTrend:true,  rating:4.5, reviews:5670, desc:'Scanton slim fit with authentic fading effects. Premium stretch denim.' },
  { id:30, brand:'Flying Machine', name:'Men Slim Fit Low-Rise Distressed Jeans',  price:999,  original:1999, disc:50, img:IMGS.jeans,  sizes:['28','30','32','34'],     colors:['Mid Blue','Dark Blue'],           cat:'Jeans',         isNew:false, isTrend:false, rating:3.8, reviews:2100, desc:'Low-rise slim fit jeans with distressing details.' },
  // TROUSERS
  { id:31, brand:'Arrow',         name:'Men Khaki Slim Fit Chinos',                price:999,  original:1999, disc:50, img:IMGS.chino,  sizes:['28','30','32','34','36'], colors:['Khaki','Beige','Olive','Navy'],   cat:'Trousers',      isNew:false, isTrend:false, rating:4.2, reviews:2890, desc:'Versatile slim fit chinos in classic khaki. Stretch cotton for ease of movement.' },
  { id:32, brand:'Peter England', name:'Men Formal Flat-Front Slim Trousers',      price:899,  original:1799, disc:50, img:IMGS.chino2, sizes:['28','30','32','34','36','38'], colors:['Black','Navy','Grey'],       cat:'Trousers',      isNew:false, isTrend:true,  rating:4.3, reviews:3100, desc:'Smart flat-front formal trousers in slim fit. Wrinkle-resistant fabric.' },
  { id:33, brand:'Zara',          name:'Men Tapered Fit Linen Trousers',           price:1499, original:2799, disc:46, img:IMGS.chino,  sizes:['28','30','32','34','36'], colors:['Ecru','Sand','Light Blue'],       cat:'Trousers',      isNew:true,  isTrend:true,  rating:4.1, reviews:2200, desc:'Relaxed tapered linen trousers for warm weather.' },
  { id:34, brand:'Van Heusen',    name:'Men Regular Fit Pleated Formal Trousers',  price:1099, original:2199, disc:50, img:IMGS.chino2, sizes:['30','32','34','36','38'], colors:['Charcoal','Dark Grey','Navy'],    cat:'Trousers',      isNew:false, isTrend:false, rating:4.2, reviews:1760, desc:'Classic pleated trousers for a refined formal look.' },
  { id:35, brand:'Jack & Jones',  name:'Men Marco Slim Fit Chino Trousers',        price:1099, original:2199, disc:50, img:IMGS.chino,  sizes:['28','30','32','34','36'], colors:['Olive','Khaki','Navy'],           cat:'Trousers',      isNew:true,  isTrend:true,  rating:4.3, reviews:3450, desc:'Marco slim fit chinos with stretch comfort. Smart casual versatility.' },
  { id:36, brand:'Louis Philippe', name:'Men Slim Fit Formal Wool-Blend Trousers', price:2299, original:4599, disc:50, img:IMGS.chino2, sizes:['28','30','32','34','36'], colors:['Charcoal','Navy','Mid Grey'],     cat:'Trousers',      isNew:false, isTrend:true,  rating:4.6, reviews:980,  desc:'Premium wool-blend formal trousers from Louis Philippe.' },
  // ETHNIC WEAR
  { id:37, brand:'Manyavar',      name:'Men Royal Blue Embroidered Kurta',         price:1299, original:2499, disc:48, img:IMGS.kurta,  sizes:['S','M','L','XL','XXL'],  colors:['Royal Blue','Maroon','Beige'],   cat:'Ethnic Wear',   isNew:false, isTrend:false, rating:4.4, reviews:2104, desc:'Elegant kurta with intricate embroidery. Premium cotton-silk blend for festivals.' },
  { id:38, brand:'Fabindia',      name:'Men White Handloom Cotton Kurta',          price:999,  original:1799, disc:44, img:IMGS.kurta2, sizes:['S','M','L','XL','XXL'],  colors:['White','Off-White','Cream'],     cat:'Ethnic Wear',   isNew:false, isTrend:true,  rating:4.3, reviews:3560, desc:'Handloom pure cotton kurta with natural texture.' },
  { id:39, brand:'Manyavar',      name:'Men Maroon Sherwani Kurta Set',            price:3499, original:6999, disc:50, img:IMGS.kurta,  sizes:['S','M','L','XL','XXL'],  colors:['Maroon','Gold','Burgundy'],      cat:'Ethnic Wear',   isNew:false, isTrend:true,  rating:4.6, reviews:1280, desc:'Regal sherwani kurta set with heavy embroidery. Perfect for weddings.' },
  { id:40, brand:'Fabindia',      name:'Men Indigo Block Print Kurta Pajama Set',  price:1799, original:3299, disc:45, img:IMGS.kurta2, sizes:['S','M','L','XL'],       colors:['Indigo','Sage Green','Terracotta'],cat:'Ethnic Wear', isNew:true,  isTrend:false, rating:4.4, reviews:2230, desc:'Block print kurta pajama set with artisanal charm.' },
  { id:41, brand:'Manyavar',      name:'Men Green Sequin Jodhpuri Kurta',          price:2499, original:4999, disc:50, img:IMGS.kurta,  sizes:['S','M','L','XL'],       colors:['Bottle Green','Teal','Emerald'],  cat:'Ethnic Wear',   isNew:true,  isTrend:true,  rating:4.5, reviews:890,  desc:'Statement Jodhpuri kurta with sequin embroidery. Perfect for mehndi and receptions.' },
  { id:42, brand:'Roadster',      name:'Men Regular Fit Straight Hem Kurta',       price:699,  original:1299, disc:46, img:IMGS.kurta2, sizes:['S','M','L','XL','XXL'],  colors:['White','Grey','Black','Navy'],   cat:'Ethnic Wear',   isNew:false, isTrend:false, rating:4.0, reviews:4100, desc:'Modern minimal kurta with straight hem and mandarin collar.' },
  // JACKETS
  { id:43, brand:'Jack & Jones',  name:'Men Black Slim Fit Bomber Jacket',         price:1799, original:3999, disc:55, img:IMGS.jacket, sizes:['S','M','L','XL'],       colors:['Black','Olive','Navy'],           cat:'Jackets',       isNew:true,  isTrend:true,  rating:4.1, reviews:892,  desc:'Edgy bomber jacket with ribbed cuffs, hem and collar. Multiple pockets.' },
  { id:44, brand:'H&M',           name:'Men Regular Fit Puffer Jacket',            price:1999, original:3999, disc:50, img:IMGS.jacket2,sizes:['S','M','L','XL','XXL'],  colors:['Black','Navy','Olive','Red'],    cat:'Jackets',       isNew:false, isTrend:true,  rating:4.3, reviews:5680, desc:'Lightweight puffer jacket with quilted channels. Warm insulation without the bulk.' },
  { id:45, brand:'Roadster',      name:'Men Slim Fit Biker Leather Jacket',        price:2499, original:4999, disc:50, img:IMGS.jacket3,sizes:['S','M','L','XL'],       colors:['Black','Brown','Dark Red'],       cat:'Jackets',       isNew:true,  isTrend:true,  rating:4.4, reviews:3200, desc:'Classic biker jacket in faux leather. Asymmetric zip, quilted shoulders.' },
  { id:46, brand:'Adidas',        name:'Men Tiro Track Jacket',                    price:1799, original:3499, disc:49, img:IMGS.jacket, sizes:['S','M','L','XL','XXL'],  colors:['Black & White','Navy & White'],  cat:'Jackets',       isNew:false, isTrend:true,  rating:4.3, reviews:6700, desc:'Iconic Adidas Tiro training jacket. Moisture-absorbing fabric with 3-stripe detailing.' },
  { id:47, brand:'Tommy Hilfiger',name:'Men Regular Fit Logo Tape Track Jacket',   price:2999, original:5999, disc:50, img:IMGS.jacket2,sizes:['S','M','L','XL'],       colors:['Navy','White','Red'],             cat:'Jackets',       isNew:true,  isTrend:true,  rating:4.5, reviews:4120, desc:'Retro-inspired track jacket with stripe logo tape. Full zip front.' },
  { id:48, brand:'Wildcraft',     name:'Men Waterproof Windcheater Jacket',        price:1499, original:2999, disc:50, img:IMGS.jacket3,sizes:['S','M','L','XL','XXL'],  colors:['Blue','Black','Olive'],           cat:'Jackets',       isNew:false, isTrend:false, rating:4.2, reviews:2100, desc:'Lightweight waterproof windcheater. DWR coated shell keeps you dry.' },
  { id:49, brand:'Woodland',      name:'Men Fleece-Lined Hooded Parka Jacket',     price:2199, original:4399, disc:50, img:IMGS.jacket, sizes:['S','M','L','XL','XXL'],  colors:['Olive','Dark Brown','Black'],    cat:'Jackets',       isNew:false, isTrend:false, rating:4.2, reviews:1890, desc:'Heavy-duty parka with fleece inner lining. Multi-pocket design.' },
  // SUITS & BLAZERS
  { id:50, brand:'Van Heusen',    name:'Men Slim Fit Navy Suit Blazer',            price:3499, original:6999, disc:50, img:IMGS.blazer, sizes:['36','38','40','42','44'], colors:['Navy Blue','Charcoal','Black'],   cat:'Suits & Blazers',isNew:false, isTrend:true,  rating:4.5, reviews:1203, desc:'Sophisticated navy blazer with tailored fit. Notched lapels, two-button closure.' },
  { id:51, brand:'Raymond',       name:'Men Tailored Fit 3-Piece Suit',            price:8999, original:17999,disc:50, img:IMGS.blazer2,sizes:['36','38','40','42','44','46'],colors:['Charcoal Grey','Navy'],        cat:'Suits & Blazers',isNew:false, isTrend:true,  rating:4.7, reviews:760,  desc:'Complete 3-piece suit from Raymond premium collection. Jacket, trouser, and waistcoat.' },
  { id:52, brand:'Louis Philippe', name:'Men Regular Fit Pinstripe Blazer',        price:4999, original:9999, disc:50, img:IMGS.blazer, sizes:['36','38','40','42','44'], colors:['Navy Pinstripe','Grey Pinstripe'],cat:'Suits & Blazers',isNew:false, isTrend:true,  rating:4.6, reviews:540,  desc:'Classic pinstripe blazer from Louis Philippe. Peak lapels and double vent.' },
  { id:53, brand:'Arrow',         name:'Men Slim Fit Solid Casual Blazer',         price:2499, original:4999, disc:50, img:IMGS.blazer2,sizes:['36','38','40','42','44'], colors:['Black','Navy','Olive','Camel'],  cat:'Suits & Blazers',isNew:true,  isTrend:false, rating:4.3, reviews:1870, desc:'Versatile casual blazer. Pairs with jeans or trousers.' },
  { id:54, brand:'H&M',           name:'Men Slim Fit Linen Blazer',                price:2999, original:5499, disc:45, img:IMGS.blazer, sizes:['36','38','40','42','44'], colors:['Beige','White','Light Blue'],    cat:'Suits & Blazers',isNew:false, isTrend:true,  rating:4.2, reviews:3400, desc:'Lightweight linen blazer for warm weather. Unstructured silhouette.' },
  // SPORTSWEAR
  { id:55, brand:'Nike',          name:'Men Tech Fleece Jogger Pants',             price:3499, original:6999, disc:50, img:IMGS.sport,  sizes:['S','M','L','XL','XXL'],  colors:['Black','Dark Grey','Navy'],      cat:'Sportswear',    isNew:true,  isTrend:true,  rating:4.7, reviews:6700, desc:'Premium Tech Fleece joggers with tapered fit. Lightweight yet warm.' },
  { id:56, brand:'Adidas',        name:'Men Essentials 3-Stripe Jogger Pants',     price:1199, original:2299, disc:48, img:IMGS.sport2, sizes:['S','M','L','XL','XXL'],  colors:['Black','Navy','Dark Grey'],      cat:'Sportswear',    isNew:false, isTrend:true,  rating:4.3, reviews:9200, desc:'Classic Adidas joggers with iconic 3-stripe taping.' },
  { id:57, brand:'Puma',          name:'Men Active Full-Zip Hoodie',               price:1499, original:2999, disc:50, img:IMGS.sport3, sizes:['S','M','L','XL'],       colors:['Black','Navy','Red'],             cat:'Sportswear',    isNew:true,  isTrend:false, rating:4.2, reviews:4500, desc:'Versatile full-zip hoodie for gym and street. Soft fleece lining.' },
  { id:58, brand:'HRX',           name:'Men Grey Marl Graphic Sweatshirt',         price:699,  original:1299, disc:46, img:IMGS.sport,  sizes:['S','M','L','XL'],       colors:['Grey','Black','Navy'],            cat:'Sportswear',    isNew:false, isTrend:false, rating:4.0, reviews:1456, desc:'Cozy fleece sweatshirt with kangaroo pocket. Anti-pilling fabric.' },
  { id:59, brand:'Nike',          name:'Men Dri-FIT Training Shorts',              price:1299, original:2499, disc:48, img:IMGS.sport2, sizes:['S','M','L','XL','XXL'],  colors:['Black','Navy','Red'],             cat:'Sportswear',    isNew:false, isTrend:true,  rating:4.4, reviews:7800, desc:'Sweat-wicking Dri-FIT training shorts. Built-in brief for added support.' },
  { id:60, brand:'Puma',          name:'Men Borussia Track Suit Set',              price:2299, original:4599, disc:50, img:IMGS.sport3, sizes:['S','M','L','XL','XXL'],  colors:['Black','Navy','Dark Green'],     cat:'Sportswear',    isNew:false, isTrend:true,  rating:4.3, reviews:1870, desc:'Complete track suit set with jacket and jogger pants.' },
  // FOOTWEAR
  { id:61, brand:'Nike',          name:'Men Air Max 270 Running Shoes',            price:5499, original:9999, disc:45, img:IMGS.shoes,  sizes:['6','7','8','9','10','11'],colors:['White/Black','Black/Red'],       cat:'Footwear',      isNew:true,  isTrend:true,  rating:4.6, reviews:7832, desc:'Iconic Air Max 270 with large heel Air unit. Engineered mesh upper.' },
  { id:62, brand:'Adidas',        name:'Men Stan Smith Leather Sneakers',          price:3999, original:7999, disc:50, img:IMGS.shoes2, sizes:['6','7','8','9','10','11'],colors:['White/Green','White/Navy'],      cat:'Footwear',      isNew:false, isTrend:true,  rating:4.7, reviews:12450,desc:'Timeless Stan Smith in premium leather. Clean court silhouette.' },
  { id:63, brand:'Puma',          name:'Men Suede Classic Sneakers',               price:2999, original:5999, disc:50, img:IMGS.shoes3, sizes:['6','7','8','9','10','11'],colors:['Black','Navy','Red'],            cat:'Footwear',      isNew:false, isTrend:true,  rating:4.4, reviews:9800, desc:'Classic Suede silhouette that started a culture. Suede upper with formstrip.' },
  { id:64, brand:'Woodland',      name:'Men Leather Casual Lace-Up Shoes',         price:2499, original:4999, disc:50, img:IMGS.shoes,  sizes:['6','7','8','9','10','11','12'],colors:['Tan','Dark Brown','Olive'],    cat:'Footwear',      isNew:false, isTrend:false, rating:4.3, reviews:5600, desc:'Rugged genuine leather casual shoes with thick rubber sole.' },
  { id:65, brand:'Bata',          name:'Men Formal Derby Leather Shoes',           price:1499, original:2999, disc:50, img:IMGS.shoes2, sizes:['6','7','8','9','10','11'],colors:['Black','Dark Brown'],            cat:'Footwear',      isNew:false, isTrend:false, rating:4.2, reviews:8700, desc:'Classic Derby formal shoes in genuine leather. Cushioned insole.' },
  { id:66, brand:'Skechers',      name:'Men Go Walk 6 Slip-On Shoes',              price:2299, original:4599, disc:50, img:IMGS.shoes3, sizes:['6','7','8','9','10','11'],colors:['Black','Navy','Grey'],           cat:'Footwear',      isNew:false, isTrend:true,  rating:4.4, reviews:6800, desc:'Ultra-lightweight slip-on with 5Gen cushioning. Air-cooled Goga Mat insole.' },
  { id:67, brand:'Tommy Hilfiger',name:'Men Court Leather Cupsole Sneakers',       price:4999, original:9999, disc:50, img:IMGS.shoes,  sizes:['7','8','9','10','11'],   colors:['White/Navy','White/Red'],        cat:'Footwear',      isNew:true,  isTrend:true,  rating:4.6, reviews:3200, desc:'Premium court sneakers with leather upper and cupsole construction.' },
  { id:68, brand:'Adidas',        name:'Men Ultraboost 22 Running Shoes',          price:8999, original:15999,disc:44, img:IMGS.shoes2, sizes:['7','8','9','10','11'],   colors:['Core Black','Cloud White'],      cat:'Footwear',      isNew:false, isTrend:true,  rating:4.8, reviews:4500, desc:'Premium Ultraboost with BOOST midsole for unmatched energy return.' },
  // ACCESSORIES
  { id:69, brand:'Fastrack',      name:'Men Black Analogue Chronograph Watch',     price:1299, original:2599, disc:50, img:IMGS.watch,  sizes:['Free Size'],            colors:['Black','Silver','Brown'],        cat:'Accessories',   isNew:false, isTrend:true,  rating:4.3, reviews:6780, desc:'Trendy chronograph watch with multi-function display. Water-resistant.' },
  { id:70, brand:'Titan',         name:'Men Gold Tone Formal Watch',               price:2499, original:4999, disc:50, img:IMGS.watch,  sizes:['Free Size'],            colors:['Gold','Silver','Rose Gold'],     cat:'Accessories',   isNew:false, isTrend:true,  rating:4.5, reviews:3420, desc:'Elegant formal watch with gold-toned stainless steel case and mesh bracelet.' },
  { id:71, brand:'Wildcraft',     name:'Men Laptop Backpack 30L',                  price:1299, original:2599, disc:50, img:IMGS.bag,    sizes:['30L'],                  colors:['Black','Navy','Olive'],           cat:'Accessories',   isNew:false, isTrend:false, rating:4.2, reviews:9800, desc:'Spacious 30L laptop backpack with dedicated 15.6 inch laptop compartment.' },
  { id:72, brand:'Fastrack',      name:'Men Square Gradient Sunglasses',           price:899,  original:1799, disc:50, img:IMGS.watch,  sizes:['Free Size'],            colors:['Black','Brown Gradient'],        cat:'Accessories',   isNew:true,  isTrend:true,  rating:4.3, reviews:7800, desc:'UV400 protected square frame sunglasses with gradient lens.' },
  { id:73, brand:'Roadster',      name:'Men Braided Leather Belt',                 price:349,  original:699,  disc:50, img:IMGS.watch,  sizes:['28','30','32','34','36'],colors:['Black','Brown','Tan'],            cat:'Accessories',   isNew:false, isTrend:false, rating:4.0, reviews:5600, desc:'Premium braided leather belt with silver-tone pin buckle.' },
  // SHORTS
  { id:74, brand:'Nike',          name:'Men Dri-FIT Challenger Running Shorts',    price:1299, original:2499, disc:48, img:IMGS.shorts, sizes:['S','M','L','XL','XXL'],  colors:['Black','Navy','Blue'],           cat:'Shorts',        isNew:false, isTrend:true,  rating:4.4, reviews:8900, desc:'Lightweight Dri-FIT shorts with built-in brief and side pockets.' },
  { id:75, brand:'HRX',           name:'Men Dry Tech Running Shorts',              price:449,  original:899,  disc:50, img:IMGS.shorts2,sizes:['S','M','L','XL'],       colors:['Black','Navy','Grey'],            cat:'Shorts',        isNew:false, isTrend:false, rating:4.1, reviews:5600, desc:'Lightweight running shorts with moisture-wicking fabric.' },
  { id:76, brand:'H&M',           name:'Men Regular Fit Chino Shorts',             price:699,  original:1299, disc:46, img:IMGS.shorts, sizes:['28','30','32','34','36'], colors:['Beige','Navy','Olive'],          cat:'Shorts',        isNew:true,  isTrend:false, rating:4.0, reviews:4500, desc:'Versatile chino shorts in cotton blend. Smart casual style for warm days.' },
  { id:77, brand:'Adidas',        name:'Men 3-Stripe Mesh Swim Shorts',            price:999,  original:1999, disc:50, img:IMGS.shorts2,sizes:['S','M','L','XL'],       colors:['Black','Navy','Blue'],            cat:'Shorts',        isNew:false, isTrend:true,  rating:4.2, reviews:3200, desc:'Quick-dry swim shorts with signature 3-stripe detailing.' },
  { id:78, brand:'Roadster',      name:'Men Cargo Shorts with Multiple Pockets',   price:599,  original:1199, disc:50, img:IMGS.shorts, sizes:['28','30','32','34','36'], colors:['Khaki','Olive','Black'],         cat:'Shorts',        isNew:false, isTrend:false, rating:3.9, reviews:2800, desc:'Relaxed cargo shorts with multiple utility pockets. Durable twill fabric.' },
  // INNERWEAR
  { id:79, brand:'Jockey',        name:'Men Pack of 3 Brief',                      price:399,  original:699,  disc:43, img:IMGS.tshirt3,sizes:['S','M','L','XL','XXL'],  colors:['White','Black','Grey'],          cat:'Innerwear',     isNew:false, isTrend:false, rating:4.4, reviews:12000,desc:'Super combed cotton briefs with classic waistband. Pack of 3.' },
  { id:80, brand:'Jockey',        name:'Men Striped Trunk Pack of 2',              price:349,  original:599,  disc:42, img:IMGS.tshirt,  sizes:['S','M','L','XL'],       colors:['Multi Stripe'],                  cat:'Innerwear',     isNew:false, isTrend:false, rating:4.3, reviews:8700, desc:'Striped cotton trunks with wide waistband. Pack of 2.' },
  { id:81, brand:'Lux Cozi',      name:'Men Thermal Set Top & Bottom',             price:499,  original:999,  disc:50, img:IMGS.tshirt2, sizes:['S','M','L','XL','XXL'],  colors:['White','Grey'],                 cat:'Innerwear',     isNew:false, isTrend:false, rating:4.1, reviews:3200, desc:'Thermal top and bottom set for winter comfort. Soft knit fabric.' },
  { id:82, brand:'Jockey',        name:'Men Cotton Ribbed Vest Pack of 2',         price:299,  original:499,  disc:40, img:IMGS.tshirt3, sizes:['S','M','L','XL','XXL'],  colors:['White'],                        cat:'Innerwear',     isNew:false, isTrend:false, rating:4.2, reviews:9800, desc:'Classic ribbed cotton vests. Breathable, regular fit. Pack of 2.' },
];

const TOP_BRANDS = ['Levis','Nike','Adidas','Puma','H&M','Zara','Tommy Hilfiger','Jack & Jones','Manyavar','Fabindia','Van Heusen','Arrow','Raymond','Peter England','HRX','Roadster'];

// ==================== STATE ====================
const state = {
  page: 'home',
  category: null,
  product: null,
  searchQuery: null,
  cart: [],
  wishlist: [],
  selectedSize: '',
  selectedColor: '',
  sortBy: 'recommended',
  filterBrands: [],
  filterSizes: [],
  priceRange: [0, 20000],
  mobileSearchOpen: false,
  mobileFilterOpen: false,
};

// ==================== HELPERS ====================
function fmt(n) { return '\u20B9' + Number(n).toLocaleString('en-IN'); }

function showToast(msg, type = 'success') {
  const toast = document.getElementById('appToast');
  const msgEl = document.getElementById('toastMsg');
  msgEl.textContent = msg;
  toast.className = `toast align-items-center text-white border-0 ${type}`;
  const bsToast = bootstrap.Toast.getOrCreateInstance(toast, { delay: 2200 });
  bsToast.show();
}

function navigate(page, data) {
  state.page = page;
  state.category = data || null;
  state.product = null;
  state.searchQuery = null;
  state.selectedSize = '';
  state.selectedColor = '';
  state.sortBy = 'recommended';
  state.filterBrands = [];
  state.filterSizes = [];
  window.scrollTo({ top: 0 });
  render();
}

function openProduct(product) {
  state.page = 'product';
  state.product = product;
  state.selectedSize = '';
  state.selectedColor = product.colors[0] || '';
  window.scrollTo({ top: 0 });
  render();
}

function handleSearch(e) {
  e.preventDefault();
  const q = document.getElementById('searchInput')?.value?.trim() ||
            document.getElementById('searchInputMobile')?.value?.trim() || '';
  if (!q) return;
  state.page = 'search';
  state.searchQuery = q;
  state.category = null;
  window.scrollTo({ top: 0 });
  render();
}

function toggleMobileSearch() {
  state.mobileSearchOpen = !state.mobileSearchOpen;
  const bar = document.getElementById('mobileSearchBar');
  if (state.mobileSearchOpen) { bar.style.display = 'block'; }
  else { bar.style.display = 'none'; }
}

// ==================== CART ====================
function addToCart(productId, size, color) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const sz = size || p.sizes[0];
  const col = color || p.colors[0] || 'Default';
  const existing = state.cart.find(i => i.product.id === productId && i.size === sz);
  if (existing) { existing.quantity++; }
  else { state.cart.push({ product: p, size: sz, color: col, quantity: 1 }); }
  updateBadges();
  showToast(`${p.brand} added to bag!`);
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.product.id !== productId);
  updateBadges();
  renderCart();
}

function openCart() {
  renderCart();
  bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('cartOffcanvas')).show();
}

function renderCart() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  const savingsEl = document.getElementById('cartSavingsText');
  if (state.cart.length === 0) {
    body.innerHTML = `<div class="empty-state"><i class="fa fa-shopping-bag"></i><h5>Your bag is empty</h5><p>Add items to it now</p><button class="btn btn-sm mt-2" style="background:var(--pink);color:#fff;padding:10px 28px;font-weight:700" onclick="bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas')).hide()">SHOP NOW</button></div>`;
    footer.style.display = 'none';
    savingsEl.textContent = '';
    return;
  }
  const total = state.cart.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const savings = state.cart.reduce((s, i) => s + (i.product.original - i.product.price) * i.quantity, 0);
  savingsEl.textContent = `You're saving ${fmt(savings)} on this order!`;
  body.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.product.img}" class="cart-item-img" alt="${item.product.name}" onclick="openProductFromCart(${item.product.id})" />
      <div style="flex:1;min-width:0">
        <div class="cart-item-brand">${item.product.brand}</div>
        <div class="cart-item-name">${item.product.name}</div>
        <div class="cart-item-meta">Size: <b>${item.size}</b> &nbsp; Color: <b>${item.color}</b></div>
        <div class="d-flex align-items-center justify-content-between mt-1">
          <div class="d-flex align-items-center gap-2">
            <span class="cart-item-price">${fmt(item.product.price)}</span>
            <span class="cart-item-og">${fmt(item.product.original)}</span>
            <span class="cart-item-off">${item.product.disc}% off</span>
          </div>
          <button class="cart-remove-btn" onclick="removeFromCart(${item.product.id})"><i class="fa fa-trash"></i></button>
        </div>
      </div>
    </div>`).join('');
  footer.style.display = 'block';
  footer.innerHTML = `<div class="d-flex justify-content-between align-items-center">
    <div><div class="fw-bold">${fmt(total)}</div><small class="text-muted">${state.cart.length} item(s)</small></div>
    <button class="checkout-btn">PLACE ORDER</button>
  </div>`;
}

function openProductFromCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (p) {
    bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas'))?.hide();
    setTimeout(() => openProduct(p), 300);
  }
}

// ==================== WISHLIST ====================
function toggleWishlist(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) { state.wishlist.splice(idx, 1); showToast('Removed from wishlist', 'error'); }
  else { state.wishlist.push(productId); showToast('Added to wishlist \u2764\uFE0F'); }
  updateBadges();
  // refresh heart buttons on screen
  document.querySelectorAll(`.wish-btn-${productId}`).forEach(btn => {
    btn.classList.toggle('active', state.wishlist.includes(productId));
  });
  if (document.getElementById('wishlistOffcanvas').classList.contains('show')) renderWishlist();
}

function openWishlist() {
  renderWishlist();
  bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('wishlistOffcanvas')).show();
}

function renderWishlist() {
  const body = document.getElementById('wishlistBody');
  document.getElementById('wishlistTitle').textContent = `My Wishlist (${state.wishlist.length})`;
  const items = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  if (items.length === 0) {
    body.innerHTML = `<div class="empty-state"><i class="fa fa-heart"></i><h5>Your wishlist is empty</h5><p>Save items you love</p></div>`;
    return;
  }
  body.innerHTML = items.map(p => `
    <div class="cart-item">
      <img src="${p.img}" class="cart-item-img" alt="${p.name}" onclick="openProductFromWishlist(${p.id})" />
      <div style="flex:1;min-width:0">
        <div class="cart-item-brand">${p.brand}</div>
        <div class="cart-item-name">${p.name}</div>
        <div class="d-flex align-items-center gap-2 mt-1">
          <span class="cart-item-price">${fmt(p.price)}</span>
          <span class="cart-item-og">${fmt(p.original)}</span>
          <span class="cart-item-off">${p.disc}% off</span>
        </div>
        <div class="d-flex gap-2 mt-2">
          <button class="btn btn-sm fw-bold" style="background:var(--pink);color:#fff;font-size:.72rem" onclick="wishlistMoveToBag(${p.id})">MOVE TO BAG</button>
          <button class="btn btn-sm border fw-semibold" style="font-size:.72rem;color:var(--gray)" onclick="toggleWishlist(${p.id})">REMOVE</button>
        </div>
      </div>
    </div>`).join('');
}

function wishlistMoveToBag(id) {
  addToCart(id);
  toggleWishlist(id);
  renderWishlist();
}

function openProductFromWishlist(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (p) {
    bootstrap.Offcanvas.getInstance(document.getElementById('wishlistOffcanvas'))?.hide();
    setTimeout(() => openProduct(p), 300);
  }
}

// ==================== BADGES ====================
function updateBadges() {
  const cb = document.getElementById('cartBadge');
  const wb = document.getElementById('wishlistBadge');
  if (state.cart.length > 0) { cb.style.setProperty('display', 'flex', 'important'); cb.textContent = state.cart.length; }
  else { cb.style.setProperty('display', 'none', 'important'); }
  if (state.wishlist.length > 0) { wb.style.setProperty('display', 'flex', 'important'); wb.textContent = state.wishlist.length; }
  else { wb.style.setProperty('display', 'none', 'important'); }
}

// ==================== PRODUCT CARD HTML ====================
function productCardHTML(p, idx) {
  const wishlisted = state.wishlist.includes(p.id);
  return `<div class="product-card" onclick="openProduct(PRODUCTS.find(x=>x.id===${p.id}))">
    <div class="product-img-wrap">
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
      <div class="product-badges">
        ${p.isNew ? '<span class="badge-new">NEW</span>' : ''}
        ${p.isTrend ? '<span class="badge-trending">TRENDING</span>' : ''}
      </div>
      <button class="wishlist-btn wish-btn-${p.id} ${wishlisted ? 'active' : ''}" onclick="event.stopPropagation();toggleWishlist(${p.id})">
        <i class="fa${wishlisted ? 's' : 'r'} fa-heart" style="color:${wishlisted ? 'var(--pink)' : 'var(--gray)'}"></i>
      </button>
      <button class="add-to-bag-btn" onclick="event.stopPropagation();addToCart(${p.id})">ADD TO BAG</button>
    </div>
    <div class="product-info">
      <div class="product-brand">${p.brand}</div>
      <div class="product-name">${p.name}</div>
      <div class="d-flex align-items-center gap-1 mt-1 flex-wrap">
        <span class="product-price">${fmt(p.price)}</span>
        <span class="product-original">${fmt(p.original)}</span>
        <span class="product-discount">(${p.disc}% OFF)</span>
      </div>
      <div class="d-flex align-items-center gap-1 mt-1">
        <span class="product-rating"><i class="fa fa-star" style="font-size:8px"></i> ${p.rating}</span>
        <span class="product-reviews">(${p.reviews.toLocaleString('en-IN')})</span>
      </div>
    </div>
  </div>`;
}

// ==================== HOME PAGE ====================
function renderHome() {
  const trending = PRODUCTS.filter(p => p.isTrend).slice(0, 20);
  return `
  <!-- Hero -->
  <section class="hero-section">
    <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1400&h=500&fit=crop" alt="Men's Fashion" />
    <div class="hero-overlay">
      <div>
        <p class="hero-subtitle mb-2">New Season</p>
        <h1 class="hero-title">Men's<br/><span>Fashion</span></h1>
        <p class="hero-desc mt-2">Up to 70% off on top brands</p>
        <button class="hero-btn mt-4" onclick="navigate('category','T-Shirts')">SHOP NOW</button>
      </div>
    </div>
  </section>

  <div class="container-fluid px-3 px-md-4 py-4">
    <!-- Promo banners -->
    <div class="row g-3 mb-4">
      <div class="col-12 col-sm-6">
        <div class="promo-card" style="background:linear-gradient(135deg,#1a2a4a,#0d1b2a)" onclick="navigate('category','Suits & Blazers')">
          <div class="promo-text">
            <p class="promo-subtitle" style="color:rgba(255,255,255,.7)">Formal Collection</p>
            <p class="promo-name">Suits &<br/>Blazers</p>
            <p class="promo-off text-pink">Upto 50% OFF</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="promo-card" style="background:linear-gradient(135deg,#5c2d0a,#3b1a06)" onclick="navigate('category','Ethnic Wear')">
          <div class="promo-text">
            <p class="promo-subtitle" style="color:rgba(251,191,36,.8)">Festive Ready</p>
            <p class="promo-name">Ethnic<br/>Wear</p>
            <p class="promo-off" style="color:#fbbf24">Starting ${fmt(799)}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Categories -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="section-title mb-0">Shop by Category</h2>
    </div>
    <div class="category-scroll mb-5">
      ${CATEGORIES.map(c => `
        <div class="category-card" onclick="navigate('category','${c.name}')">
          <img src="${c.image}" alt="${c.name}" loading="lazy" />
          <div class="category-card-name">${c.name}</div>
        </div>`).join('')}
    </div>

    <!-- Trending -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="section-title mb-0">Trending Now</h2>
    </div>
    <div class="product-grid mb-5">${trending.map((p, i) => productCardHTML(p, i)).join('')}</div>
  </div>

  <!-- Top Brands -->
  <div class="brands-section">
    <div class="container">
      <h2 class="section-title text-center mb-4">Top Brands</h2>
      <div class="d-flex flex-wrap justify-content-center gap-2">
        ${TOP_BRANDS.map(b => `<button class="brand-chip" onclick="searchBrand('${b}')">${b}</button>`).join('')}
      </div>
    </div>
  </div>`;
}

function searchBrand(brand) {
  state.page = 'search';
  state.searchQuery = brand;
  window.scrollTo({ top: 0 });
  render();
}

// ==================== PRODUCT LIST PAGE ====================
function getFilteredProducts() {
  let list = [...PRODUCTS];
  if (state.page === 'category' && state.category) {
    list = list.filter(p => p.cat === state.category);
  } else if (state.page === 'search' && state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q));
  }
  if (state.filterBrands.length > 0) list = list.filter(p => state.filterBrands.includes(p.brand));
  if (state.filterSizes.length > 0) list = list.filter(p => p.sizes.some(s => state.filterSizes.includes(s)));
  list = list.filter(p => p.price >= state.priceRange[0] && p.price <= state.priceRange[1]);
  if (state.sortBy === 'price-low') list.sort((a,b) => a.price - b.price);
  else if (state.sortBy === 'price-high') list.sort((a,b) => b.price - a.price);
  else if (state.sortBy === 'rating') list.sort((a,b) => b.rating - a.rating);
  else if (state.sortBy === 'popularity') list.sort((a,b) => b.reviews - a.reviews);
  return list.length > 0 ? list : PRODUCTS.slice(0, 20);
}

const FILTER_BRANDS = ['Roadster','Peter England','Levis','Jack & Jones','Manyavar','Nike','HRX','Arrow','Van Heusen','Puma','Adidas','H&M','Zara'];
const FILTER_SIZES = ['S','M','L','XL','XXL','28','30','32','34','36'];

function filterPanelHTML() {
  return `
  <div class="mb-4">
    <div class="filter-section-title">Brand</div>
    ${FILTER_BRANDS.map(b => `
      <div class="form-check mb-1">
        <input class="form-check-input" type="checkbox" id="fb-${b}" value="${b}" ${state.filterBrands.includes(b)?'checked':''} onchange="toggleFilterBrand('${b}')" />
        <label class="form-check-label filter-label" for="fb-${b}">${b}</label>
      </div>`).join('')}
  </div>
  <div class="mb-4">
    <div class="filter-section-title">Price Range</div>
    ${[[0,500],[500,1000],[1000,2000],[2000,5000],[5000,20000]].map(([mn,mx]) => `
      <div class="form-check mb-1">
        <input class="form-check-input" type="radio" name="priceRange" id="pr-${mn}" ${state.priceRange[0]===mn&&state.priceRange[1]===mx?'checked':''} onchange="setPriceRange(${mn},${mx})" />
        <label class="form-check-label filter-label" for="pr-${mn}">${fmt(mn)} &ndash; ${fmt(mx)}</label>
      </div>`).join('')}
  </div>
  <div class="mb-4">
    <div class="filter-section-title">Size</div>
    <div class="d-flex flex-wrap gap-2">
      ${FILTER_SIZES.map(s => `<button class="size-btn ${state.filterSizes.includes(s)?'active':''}" onclick="toggleFilterSize('${s}')">${s}</button>`).join('')}
    </div>
  </div>`;
}

function toggleFilterBrand(brand) {
  const i = state.filterBrands.indexOf(brand);
  if (i > -1) state.filterBrands.splice(i, 1);
  else state.filterBrands.push(brand);
  renderProductGrid();
}

function toggleFilterSize(size) {
  const i = state.filterSizes.indexOf(size);
  if (i > -1) state.filterSizes.splice(i, 1);
  else state.filterSizes.push(size);
  renderProductGrid();
}

function setPriceRange(mn, mx) {
  state.priceRange = [mn, mx];
  renderProductGrid();
}

function setSortBy(val) {
  state.sortBy = val;
  renderProductGrid();
}

function renderProductGrid() {
  const products = getFilteredProducts();
  const grid = document.getElementById('productGrid');
  const count = document.getElementById('productCount');
  if (grid) grid.innerHTML = products.map((p, i) => productCardHTML(p, i)).join('');
  if (count) count.textContent = products.length + ' items';
  // refresh filter panel
  const sidebar = document.getElementById('filterSidebar');
  const mobilePanel = document.getElementById('mobileFilterPanel');
  if (sidebar) sidebar.innerHTML = filterPanelHTML();
  if (mobilePanel) mobilePanel.innerHTML = filterPanelHTML();
}

function renderProductList() {
  const title = state.page === 'search' ? `Search: "${state.searchQuery}"` : state.category;
  const products = getFilteredProducts();
  return `
  <div class="container-fluid px-3 px-md-4 py-3">
    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#" onclick="navigate('home');return false;">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Men</a></li>
        <li class="breadcrumb-item active">${title}</li>
      </ol>
    </nav>

    <!-- Header + Sort -->
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <h4 class="fw-bold mb-0" style="color:var(--charcoal)">${title}</h4>
        <small class="text-muted" id="productCount">${products.length} items</small>
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="btn btn-sm border d-lg-none" onclick="openMobileFilter()">
          <i class="fa fa-sliders-h me-1"></i> Filter
        </button>
        <select class="sort-select" onchange="setSortBy(this.value)">
          <option value="recommended">Recommended</option>
          <option value="popularity">Popularity</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Customer Rating</option>
        </select>
      </div>
    </div>

    <div class="d-flex gap-4">
      <!-- Sidebar -->
      <div class="filters-sidebar d-none d-lg-block">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <span class="fw-bold small text-uppercase" style="letter-spacing:.05em">Filters</span>
          <button class="btn btn-sm p-0 text-pink fw-semibold" style="font-size:.78rem" onclick="clearFilters()">Clear All</button>
        </div>
        <div id="filterSidebar">${filterPanelHTML()}</div>
      </div>
      <!-- Grid -->
      <div style="flex:1">
        <div class="product-grid" id="productGrid">${products.map((p, i) => productCardHTML(p, i)).join('')}</div>
      </div>
    </div>
  </div>

  <!-- Mobile filter overlay -->
  <div class="filter-modal-overlay" id="mobileFilterOverlay" onclick="closeMobileFilter()">
    <div class="filter-modal-panel" onclick="event.stopPropagation()">
      <div class="d-flex justify-content-between align-items-center p-3 border-bottom">
        <span class="fw-bold">Filters</span>
        <button class="btn btn-sm" onclick="closeMobileFilter()"><i class="fa fa-times"></i></button>
      </div>
      <div class="p-3" id="mobileFilterPanel">${filterPanelHTML()}</div>
      <div class="p-3 border-top">
        <button class="btn w-100 fw-bold" style="background:var(--pink);color:#fff" onclick="closeMobileFilter()">APPLY FILTERS</button>
      </div>
    </div>
  </div>`;
}

function clearFilters() {
  state.filterBrands = [];
  state.filterSizes = [];
  state.priceRange = [0, 20000];
  renderProductGrid();
}

function openMobileFilter() {
  document.getElementById('mobileFilterOverlay').classList.add('show');
}
function closeMobileFilter() {
  document.getElementById('mobileFilterOverlay').classList.remove('show');
}

// ==================== PRODUCT DETAIL PAGE ====================
const COLOR_MAP = {
  'Navy Blue':'#1e3a5f','Black':'#1a1a1a','White':'#f0f0f0','Sky Blue':'#87ceeb',
  'Light Pink':'#ffb6c1','Dark Blue':'#00008b','Mid Blue':'#4169e1','Olive':'#6b7c3c',
  'Navy':'#001f5b','Royal Blue':'#4169e1','Maroon':'#800000','Beige':'#f5f0dc',
  'Grey':'#808080','Charcoal':'#36454f','Khaki':'#c3b091','Blue':'#0066cc',
  'Red':'#cc0000','Green':'#2d6a2d','Brown':'#7b4f2e','Tan':'#d2a679',
  'Ecru':'#f0e8d0','Gold':'#d4af37','Silver':'#c0c0c0','White/Black':'#e8e8e8',
  'Default':'#cccccc',
};
function getColorHex(c) { return COLOR_MAP[c] || '#bbb'; }

function renderProductDetail() {
  const p = state.product;
  if (!p) return '';
  const wishlisted = state.wishlist.includes(p.id);
  return `
  <div class="container-fluid px-3 px-md-4 py-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#" onclick="navigate('home');return false;">Home</a></li>
        <li class="breadcrumb-item"><a href="#" onclick="navigate('category','${p.cat}');return false;">${p.cat}</a></li>
        <li class="breadcrumb-item active" style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.name}</li>
      </ol>
    </nav>
    <div class="row g-4">
      <!-- Image -->
      <div class="col-12 col-lg-6">
        <div style="position:relative;background:var(--lightgray);border-radius:4px;overflow:hidden">
          <img src="${p.img}" alt="${p.name}" class="detail-img" />
          ${p.isNew ? '<span class="badge-new" style="position:absolute;top:12px;left:12px;font-size:.75rem;padding:4px 8px">NEW</span>' : ''}
        </div>
      </div>
      <!-- Info -->
      <div class="col-12 col-lg-6">
        <div class="detail-brand">${p.brand}</div>
        <div class="detail-name mt-1">${p.name}</div>

        <!-- Rating -->
        <div class="d-flex align-items-center gap-3 mt-3">
          <span class="product-rating" style="font-size:.8rem;padding:3px 8px">
            ${p.rating} <i class="fa fa-star" style="font-size:.7rem"></i>
          </span>
          <span class="text-muted" style="font-size:.85rem">${p.reviews.toLocaleString('en-IN')} Ratings</span>
        </div>

        <!-- Price -->
        <div class="d-flex align-items-baseline gap-3 mt-3 pb-3 border-bottom">
          <span class="detail-price">${fmt(p.price)}</span>
          <span class="detail-original">${fmt(p.original)}</span>
          <span class="detail-discount">${p.disc}% OFF</span>
        </div>

        <!-- Colors -->
        ${p.colors.length > 0 ? `
        <div class="mt-4">
          <p class="small fw-semibold mb-2">Color: <span id="selectedColorLabel" class="fw-normal">${state.selectedColor}</span></p>
          <div class="d-flex gap-2 flex-wrap">
            ${p.colors.map(c => `<button class="color-swatch ${c === state.selectedColor ? 'active' : ''}" style="background:${getColorHex(c)}" title="${c}" onclick="selectColor('${c}')"></button>`).join('')}
          </div>
        </div>` : ''}

        <!-- Sizes -->
        <div class="mt-4">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="small fw-semibold">Select Size</span>
            <button class="btn btn-sm p-0 text-pink fw-semibold" style="font-size:.78rem">Size Chart</button>
          </div>
          <div class="d-flex flex-wrap gap-2" id="sizeBtns">
            ${p.sizes.map(s => `<button class="size-circle ${s === state.selectedSize ? 'active' : ''}" onclick="selectSize('${s}')">${s}</button>`).join('')}
          </div>
          <small class="text-muted" id="sizeHint" style="${state.selectedSize ? 'display:none' : ''}">Please select a size</small>
        </div>

        <!-- CTAs -->
        <div class="d-flex gap-3 mt-4">
          <button id="wishlistCTA" class="cta-btn cta-wishlist ${wishlisted ? 'active' : ''}" onclick="toggleWishlist(${p.id});document.getElementById('wishlistCTA').classList.toggle('active',state.wishlist.includes(${p.id}));document.getElementById('wishlistCTAIcon').className='fa'+(state.wishlist.includes(${p.id})?'s':' far')+' fa-heart me-2';document.getElementById('wishlistCTAText').textContent=state.wishlist.includes(${p.id})?'WISHLISTED':'WISHLIST'">
            <i id="wishlistCTAIcon" class="fa${wishlisted ? 's' : 'r'} fa-heart me-2"></i>
            <span id="wishlistCTAText">${wishlisted ? 'WISHLISTED' : 'WISHLIST'}</span>
          </button>
          <button class="cta-btn cta-addbag" onclick="handleDetailAddToBag(${p.id})">
            &#128717; ADD TO BAG
          </button>
        </div>

        <!-- Delivery info -->
        <div class="delivery-box mt-4">
          <div class="row g-0 text-center">
            <div class="col-4 delivery-item">
              <i class="fa fa-truck"></i>Free Delivery
            </div>
            <div class="col-4 delivery-item border-start border-end">
              <i class="fa fa-undo"></i>14 Days Return
            </div>
            <div class="col-4 delivery-item">
              <i class="fa fa-shield-alt"></i>Secure Payment
            </div>
          </div>
        </div>

        <!-- Accordion -->
        <div class="accordion mt-4" id="detailAccordion">
          <div class="accordion-item border-0 border-bottom">
            <h2 class="accordion-header">
              <button class="accordion-button px-0 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#desc">
                Product Description
              </button>
            </h2>
            <div id="desc" class="accordion-collapse collapse show" data-bs-parent="#detailAccordion">
              <div class="accordion-body px-0">${p.desc}</div>
            </div>
          </div>
          <div class="accordion-item border-0 border-bottom">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed px-0 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#details">
                Product Details
              </button>
            </h2>
            <div id="details" class="accordion-collapse collapse" data-bs-parent="#detailAccordion">
              <div class="accordion-body px-0">
                <table class="table table-sm table-borderless" style="font-size:.82rem">
                  <tr><td class="fw-semibold text-dark pe-3">Brand</td><td>${p.brand}</td></tr>
                  <tr><td class="fw-semibold text-dark pe-3">Category</td><td>${p.cat}</td></tr>
                  <tr><td class="fw-semibold text-dark pe-3">Sizes</td><td>${p.sizes.join(', ')}</td></tr>
                  <tr><td class="fw-semibold text-dark pe-3">Colors</td><td>${p.colors.join(', ')}</td></tr>
                  <tr><td class="fw-semibold text-dark pe-3">Rating</td><td>${p.rating} / 5</td></tr>
                </table>
              </div>
            </div>
          </div>
          <div class="accordion-item border-0">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed px-0 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#returns">
                Returns &amp; Exchange
              </button>
            </h2>
            <div id="returns" class="accordion-collapse collapse" data-bs-parent="#detailAccordion">
              <div class="accordion-body px-0">Easy 14-day returns and exchange. Products must be unused with all tags attached. Free pickup from your doorstep.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function selectSize(s) {
  state.selectedSize = s;
  document.querySelectorAll('.size-circle').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === s);
  });
  const hint = document.getElementById('sizeHint');
  if (hint) hint.style.display = 'none';
}

function selectColor(c) {
  state.selectedColor = c;
  document.querySelectorAll('.color-swatch').forEach(btn => {
    btn.classList.toggle('active', btn.title === c);
  });
  const lbl = document.getElementById('selectedColorLabel');
  if (lbl) lbl.textContent = c;
}

function handleDetailAddToBag(id) {
  if (!state.selectedSize) {
    showToast('Please select a size', 'error');
    return;
  }
  addToCart(id, state.selectedSize, state.selectedColor);
}

// ==================== MAIN RENDER ====================
function render() {
  const main = document.getElementById('appMain');
  if (state.page === 'home') {
    main.innerHTML = renderHome();
  } else if (state.page === 'category' || state.page === 'search') {
    main.innerHTML = renderProductList();
  } else if (state.page === 'product') {
    main.innerHTML = renderProductDetail();
  }
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  render();
});
