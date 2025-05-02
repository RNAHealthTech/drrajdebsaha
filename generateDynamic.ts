import { writeFileSync, readdirSync, writeFile } from "fs";
import { join } from "path";
import {SitemapStream ,streamToPromise} from 'sitemap';

const hostname = "https://drrajdebsaha.com/";

// function to get image urls from public/images folder
function getImageUrls(){
    const imagesDir = join(process.cwd(), 'public','images');
    const images = readdirSync(imagesDir);
    return images.map(image=> `${hostname}/images/${image}`);
}

function getStaticRoutes(){
    return [
        '/',
        '/about',
        '/services',
        '/media',
        '/services/aki',
        '/services/ckd',
        '/services/glomerulonephritis',
        '/services/electrolyte-imbalance',
        '/services/diabetic-kidney-disease',
        '/services/hypertension', 
        '/services/kidney-transplant', 
        '/services/interventional-procedures', 
        '/blog/diabetic-kidney-disease-prevention-signs-treatment',
        '/blog/understanding-kidney-transplants-patients-guide',
        '/blog/chronic-kidney-disease-understanding-silent-epidemic',
        '/blog/dialysis-demystified-understanding-treatment-options',   
        '/blogs',
        '/contact',
 
       
    ]
}

async function generateSitemap(){
    try {
        const staticRoutes = getStaticRoutes();
        const imageUrls = getImageUrls();

        const stream = new SitemapStream({ hostname });

        [...staticRoutes].forEach(route => {
            stream.write({url: route});
        });

        stream.write({
            url: '/images',
            img: imageUrls.map(url => ({
                url, 
                caption: 'Image from our gallery',
                title: url.split('/').pop()
            }))
        });

        stream.write({
            url: '/gallery', 
            img: imageUrls.map(url => ({url}))
        });

        stream.end();

        const data = await streamToPromise(stream);
        writeFileSync('./public/sitemap.xml', data.toString());

        console.log('Sitemap with images generated successfully.');

    } catch (error){
        console.error('Error generating sitemap : ', error);
    }
}

generateSitemap();