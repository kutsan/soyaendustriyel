if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise((async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},a=(a,i)=>{Promise.all(a.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(a)};self.define=(a,r,u)=>{i[a]||(i[a]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+a.slice(1)};return Promise.all(r.map((a=>{switch(a){case"exports":return i;case"module":return c;default:return e(a)}}))).then((e=>{const a=u(...e);return i.default||(i.default=a),i}))})))}}define("./sw.js",["./workbox-224ec2e5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"0f2998b316ba7bddb63d213ae4eb30fb"},{url:"/992.a58c6df9f68e9ffca39a.js",revision:null},{url:"/caykur-altinbas-cayi-500gr.jpg",revision:"0339e70a98e1ff39bc5ed2b12b088670"},{url:"/caykur-altinbas-cayi-500gr.webp",revision:"1b75bdd1fafbd5b31d55e6e03156398a"},{url:"/caykur-rize-turist-cayi-1000gr.jpg",revision:"b1344b16a7657972c2ab1f07b6865d6a"},{url:"/caykur-rize-turist-cayi-1000gr.webp",revision:"1f80180757e8b4eeeb4db261e9458720"},{url:"/coffee-mate-500gr.jpg",revision:"a27fef036c82c0dc67ccac25bce95b72"},{url:"/coffee-mate-500gr.webp",revision:"aa3c015a7a26ed5a7decb02f00b7f531"},{url:"/desodor-d57-kuvvetli-yuzey-temizleyici-sari-su-750ml.jpg",revision:"722a7f28bf7e97225f88e0000f86ae3b"},{url:"/desodor-d57-kuvvetli-yuzey-temizleyici-sari-su-750ml.webp",revision:"a4ecf56cbb3b3dd716cb934852bdd5f5"},{url:"/domestos-camasir-suyu-810gr.jpg",revision:"991278b526774e7b032f67399959a358"},{url:"/domestos-camasir-suyu-810gr.webp",revision:"923a48a223956a8384ab453dfaaed198"},{url:"/fairy-bulasik-deterjani-5l.jpg",revision:"c8b3198ebcbdf3c51d67ed44fcf43c44"},{url:"/fairy-bulasik-deterjani-5l.webp",revision:"e0b0512268e4612a47c663fb0f3c1798"},{url:"/fairy-bulasik-deterjani-675ml.jpg",revision:"0905de79f9d600573f3017f8086a9c27"},{url:"/fairy-bulasik-deterjani-675ml.webp",revision:"df545a5d39f1938aea0b59e935c4561d"},{url:"/favicon-16x16.png",revision:"ee272a2344189e658d430d928fcc22e3"},{url:"/favicon-32x32.png",revision:"ae482ee05c6c63a0d2dab9d8a3856df8"},{url:"/favicon.ico",revision:"d130c4fec3245733874ade999b217df5"},{url:"/focus-dispenser-pecete-aparati-beyaz-8027963.jpg",revision:"817bc034f32f64aba0ef7dfbf14dad6a"},{url:"/focus-dispenser-pecete-aparati-beyaz-8027963.webp",revision:"ac0f3b775001141e4c2ae11407c582ff"},{url:"/focus-dispenser-pecete-aparati-metalik-8027964.jpg",revision:"76e47d13f8e394680c71d1b0caefbf26"},{url:"/focus-dispenser-pecete-aparati-metalik-8027964.webp",revision:"59d48ec1971d53f56abdf4bbb2437b28"},{url:"/focus-extra-dispenser-pecete-350-li-paket-5038154.jpg",revision:"27a3599dc65e30de827390c5054407dc"},{url:"/focus-extra-dispenser-pecete-350-li-paket-5038154.webp",revision:"6e5e5fda164712ea6fb9e2a134db5016"},{url:"/focus-extra-icten-cekmeli-gofrajsiz-tuvalet-kagidi-200-metre-5038366.jpg",revision:"70ab6e9d8988a61f87a8141ad754288e"},{url:"/focus-extra-icten-cekmeli-gofrajsiz-tuvalet-kagidi-200-metre-5038366.webp",revision:"3f1ffe8cbe51f64a4063659fce9ef753"},{url:"/focus-extra-icten-cekmeli-tuvalet-kagidi-120-metre-5038367.jpg",revision:"c5a12a0517e08cfda86904203412b4fb"},{url:"/focus-extra-icten-cekmeli-tuvalet-kagidi-120-metre-5038367.webp",revision:"0dfdece6dd70c756e441d2a609dc08f1"},{url:"/focus-extra-jumbo-havlu-125-metre-5038389.jpg",revision:"ed1d9ade3311b7f5cf2f1f9e55584148"},{url:"/focus-extra-jumbo-havlu-125-metre-5038389.webp",revision:"4459282e5bbd81055a18df805a84e504"},{url:"/focus-extra-kare-pecete-100-lu-paket-5038149.jpg",revision:"4cdc3aa1ab757397aef5346d745ba5e6"},{url:"/focus-extra-kare-pecete-100-lu-paket-5038149.webp",revision:"9ec06ae19280273d59c67f17bdd1f4f6"},{url:"/focus-extra-klozet-kapak-ortusu-250-li-paket-8033648.jpg",revision:"4f41fc7ebb9ee76513f86685f1709db9"},{url:"/focus-extra-klozet-kapak-ortusu-250-li-paket-8033648.webp",revision:"547e0cc1974787a0ad72bfcb728b6bb0"},{url:"/focus-extra-mini-jumbo-tuvalet-kagidi-5038369.jpg",revision:"fb2ad29c7e07c4de9f9731608c643b4f"},{url:"/focus-extra-mini-jumbo-tuvalet-kagidi-5038369.webp",revision:"56381ca55dfc0f45e8848fe0bfde2b68"},{url:"/focus-extra-muayene-masa-ortusu-5038392.jpg",revision:"d3c1dfa064f4aa13d465b0976dfed3b8"},{url:"/focus-extra-muayene-masa-ortusu-5038392.webp",revision:"4fb559aa3ede869608487a08e8d37a69"},{url:"/focus-extra-tuvalet-kagidi-24-lu-paket-5038073.jpg",revision:"7883e85e087620e2c449265c9baa9a5c"},{url:"/focus-extra-tuvalet-kagidi-24-lu-paket-5038073.webp",revision:"20aaf12b569ff5dde9b31e199ba768b0"},{url:"/focus-extra-z-katli-havlu-200-lu-paket-5038372.jpg",revision:"89fc5b5dc4da9de003d6888737d8ce84"},{url:"/focus-extra-z-katli-havlu-200-lu-paket-5038372.webp",revision:"343db43183cd8624b23a8a3ccd3ea96d"},{url:"/focus-icten-cekmeli-tuvalet-kagidi-dispenseri-8027965.jpg",revision:"2298a5dd590a8ecef74872d4ac200d0b"},{url:"/focus-icten-cekmeli-tuvalet-kagidi-dispenseri-8027965.webp",revision:"96ebf055dd6f0f0dd2ed636914c578d3"},{url:"/focus-jumbo-fotoselli-havlu-dispenseri-8035465.jpg",revision:"d93b0c38a233b0e36908aa17583b9ce9"},{url:"/focus-jumbo-fotoselli-havlu-dispenseri-8035465.webp",revision:"5dd0ad3a890c881e0e0b69fe3b853dab"},{url:"/focus-klozet-kapak-ortusu-aparati-8027968.jpg",revision:"99a5a807c721c4446166aa099062f8ba"},{url:"/focus-klozet-kapak-ortusu-aparati-8027968.webp",revision:"489f5b145b64b6a7882a586ebdf3e3c2"},{url:"/focus-mini-jumbo-tuvalet-kagidi-dispenseri-8027966.jpg",revision:"561fbeac9670c4e5ac1b4f4457339940"},{url:"/focus-mini-jumbo-tuvalet-kagidi-dispenseri-8027966.webp",revision:"dfceebcaef88a822492feae563eec9e1"},{url:"/focus-muayene-masa-ortusu-dispenseri-8027969.jpg",revision:"7f8d5ec47c24e174509ea85c777cb667"},{url:"/focus-muayene-masa-ortusu-dispenseri-8027969.webp",revision:"4994935913c2399a87c2947ac8ac3ed6"},{url:"/focus-optimum-dispenser-pecete-250-li-paket-5051792.jpg",revision:"440e248342466ed1724b1031615f69e1"},{url:"/focus-optimum-dispenser-pecete-250-li-paket-5051792.webp",revision:"1d0066f024c50472c3b88e31fc9bcdf7"},{url:"/focus-optimum-icten-cekmeli-havlu-70-metre-5050156.jpg",revision:"eb77682a415d32e29ac12fb65f282bd5"},{url:"/focus-optimum-icten-cekmeli-havlu-70-metre-5050156.webp",revision:"6a99e2a38905971e8a30897798d5d644"},{url:"/focus-optimum-icten-cekmeli-tuvalet-kagidi-140-metre-5050158.jpg",revision:"f733014787adb5be72fa4d96e4475d49"},{url:"/focus-optimum-icten-cekmeli-tuvalet-kagidi-140-metre-5050158.webp",revision:"ebb682510afd99a830d13741b9919016"},{url:"/focus-optimum-icten-cekmeli-tuvalet-kagidi-80-metre-5050157.jpg",revision:"43a25ad569bce44fa2cae17a4f08d9ed"},{url:"/focus-optimum-icten-cekmeli-tuvalet-kagidi-80-metre-5050157.webp",revision:"19373c6a1d0f00928031600ebc7516fd"},{url:"/focus-optimum-jumbo-havlu-60-metre-5050155.jpg",revision:"48e6f77304681a0b16c3d3962f85fe00"},{url:"/focus-optimum-jumbo-havlu-60-metre-5050155.webp",revision:"e7e19b34b008940c0cb9578511fd8676"},{url:"/focus-optimum-jumbo-havlu-70-metre-5052184.jpg",revision:"73fa3674d576a19420bf3bfbe464bf47"},{url:"/focus-optimum-jumbo-havlu-70-metre-5052184.webp",revision:"a1edaedfd65798df10dbf1c590a9bab2"},{url:"/focus-optimum-kare-pecete-100-lu-paket-5053498.jpg",revision:"3ff2df65d8a702a7a51d51983a95bd04"},{url:"/focus-optimum-kare-pecete-100-lu-paket-5053498.webp",revision:"29224f9b0e72c0e43a1c3522cb0e2146"},{url:"/focus-optimum-mini-jumbo-tuvalet-kagidi-5038368.jpg",revision:"bf4afa018da03830d204feb5b42b2ba0"},{url:"/focus-optimum-mini-jumbo-tuvalet-kagidi-5038368.webp",revision:"278080d6523b6a9136741de6207726c3"},{url:"/focus-optimum-rulo-havlu-24-lu-paket-5038155.jpg",revision:"452dd402679d8abed1f1660c8964d66e"},{url:"/focus-optimum-rulo-havlu-24-lu-paket-5038155.webp",revision:"5fdb07f79fcf0ceffe1b2de1a40cad87"},{url:"/focus-optimum-tuvalet-kagidi-16-li-paket-5038145.jpg",revision:"c39fc546e1012f3368bae61b3dcfda4e"},{url:"/focus-optimum-tuvalet-kagidi-16-li-paket-5038145.webp",revision:"f814f5aad4baee05da6ab06bc8d3cfcf"},{url:"/focus-optimum-tuvalet-kagidi-24-lu-paket-5038144.jpg",revision:"a25db6171b7d1fdb0269a00ae2c2832b"},{url:"/focus-optimum-tuvalet-kagidi-24-lu-paket-5038144.webp",revision:"2f449683a6f9d4d0f1aa91b8c955765f"},{url:"/focus-optimum-z-katli-havlu-150-li-paket-5050167.jpg",revision:"2109a1c84e31f3b3c1d81fbc714bea88"},{url:"/focus-optimum-z-katli-havlu-150-li-paket-5050167.webp",revision:"faafc994a32af8ea01ecd45d4970162e"},{url:"/focus-optimum-z-katli-havlu-200-lu-paket-5050407.jpg",revision:"2109a1c84e31f3b3c1d81fbc714bea88"},{url:"/focus-optimum-z-katli-havlu-200-lu-paket-5050407.webp",revision:"faafc994a32af8ea01ecd45d4970162e"},{url:"/focus-ultra-1-8-ozel-katlamali-kare-pecete-50-li-paket-5037971.jpg",revision:"b40fd0ce2cdb047a0edf2001176df503"},{url:"/focus-ultra-1-8-ozel-katlamali-kare-pecete-50-li-paket-5037971.webp",revision:"f40664fcb1733347c8f0add67005ffad"},{url:"/focus-ultra-dispenser-pecete-250-li-paket-5051791.jpg",revision:"4b0c78cf26cf2c15bf010a424d99fd99"},{url:"/focus-ultra-dispenser-pecete-250-li-paket-5051791.webp",revision:"d8c18c16ee5a7b5914eece7baad1efec"},{url:"/focus-ultra-jumbo-havlu-150-metre-5038387.jpg",revision:"fcb0b4150463292010daa33fd2d8c125"},{url:"/focus-ultra-jumbo-havlu-150-metre-5038387.webp",revision:"7e2e61882c1c880519a599624a867f9a"},{url:"/focus-ultra-jumbo-havlu-510-metre-5038390.jpg",revision:"75cd7869b71e09af48e17ed061357d19"},{url:"/focus-ultra-jumbo-havlu-510-metre-5038390.webp",revision:"bbd38dbde62c99d41dd72af1e1a9c952"},{url:"/focus-ultra-kare-pecete-50-li-paket-5038148.jpg",revision:"0b451a24e22c24ddceb39acb380e5d16"},{url:"/focus-ultra-kare-pecete-50-li-paket-5038148.webp",revision:"2a5c2a2185761cd04c3dacc81a0a3b97"},{url:"/focus-ultra-premium-kare-pecete-1-4-katlama-50-li-paket-5053137.jpg",revision:"b2668d0b608faee40aeeb6946f0e6e21"},{url:"/focus-ultra-premium-kare-pecete-1-4-katlama-50-li-paket-5053137.webp",revision:"90cf927bb750ad43450f59581770391d"},{url:"/focus-ultra-premium-kare-pecete-1-8-katlama-50-li-paket-5053138.jpg",revision:"c09c7cc740ec2816476fc82fc02685a4"},{url:"/focus-ultra-premium-kare-pecete-1-8-katlama-50-li-paket-5053138.webp",revision:"5112652e81bc481ea57888f82fad4415"},{url:"/focus-ultra-rulo-havlu-24-lu-paket-5038370.jpg",revision:"8986155c56aeb5df8e0d119d134e26c6"},{url:"/focus-ultra-rulo-havlu-24-lu-paket-5038370.webp",revision:"c531183da9df7a024fd7a09b599560b0"},{url:"/focus-ultra-tuvalet-kagidi-24-lu-paket-5038071.jpg",revision:"b752bbf53fb433f655ba9a7cbce10ef1"},{url:"/focus-ultra-tuvalet-kagidi-24-lu-paket-5038071.webp",revision:"f8f23bb9cdef2b5ec3d786739f96fbf1"},{url:"/focus-ultra-z-katli-havlu-200-lu-paket-5038146.jpg",revision:"bbf7456514711953d1317a419ad4925e"},{url:"/focus-ultra-z-katli-havlu-200-lu-paket-5038146.webp",revision:"9ca147685a8e60dc259de33412932093"},{url:"/focus-z-katli-havlu-dispenseri-8027956.jpg",revision:"f23e117c0abc456f3d8066dab73d228a"},{url:"/focus-z-katli-havlu-dispenseri-8027956.webp",revision:"7c67ed325c6d143e0ffc530a0989ffe3"},{url:"/index.html",revision:"3c5dcc21d0118c82e9336643c0fcbaaf"},{url:"/jacobs-monarch-filtre-kahve-500gr.jpg",revision:"0eee07a09ddc78da104a2bad8e999880"},{url:"/jacobs-monarch-filtre-kahve-500gr.webp",revision:"f630c7dae13c38fba9ecac83de39d28d"},{url:"/logo-192x192.png",revision:"ca51e21d093907e67575b9923e52a093"},{url:"/logo-512x512.png",revision:"79e7cb7829982fe15a72dffb6ba78bec"},{url:"/main.66ac7c911a87caac1ec3.js",revision:null},{url:"/manifest.json",revision:"0738bb4c4c2f994298d2e964e11ef8a2"},{url:"/nescafe-gold-kahve-200gr.jpg",revision:"35ce3616f34e0071e6fd2e5eece89e32"},{url:"/nescafe-gold-kahve-200gr.webp",revision:"33016dd838a46c3236e7fb50de7b0cfc"},{url:"/papia-maxi-kutu-mendil-80-yaprak.jpg",revision:"484f1cc11f27fe4b563e447eefeaa1a0"},{url:"/papia-maxi-kutu-mendil-80-yaprak.webp",revision:"89984a62a8d973db606d9ee8b80e7c46"},{url:"/papia-rulo-havlu-8-li-paket.jpg",revision:"454ef54d6c1a0110214d1b47d42afa69"},{url:"/papia-rulo-havlu-8-li-paket.webp",revision:"e782f3ae40554b689a651e11e9d37d47"},{url:"/papia-tuvalet-kagidi-24-lu-paket.jpg",revision:"9c5a569d37c237d65da1451ffabca802"},{url:"/papia-tuvalet-kagidi-24-lu-paket.webp",revision:"de849025067ab9c8d746390b21d2964a"},{url:"/pg-flash-no-8-hijyenik-cok-amacli-yuzey-temizleyici-750ml.jpg",revision:"98363da47b2a11ecfc1c7e728fee44be"},{url:"/pg-flash-no-8-hijyenik-cok-amacli-yuzey-temizleyici-750ml.webp",revision:"473567af5fda2eafd0502863245c7d88"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/styles.cfbd6035b0b4c3eafadb.css",revision:null}],{})}));
