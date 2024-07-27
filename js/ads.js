document.addEventListener('DOMContentLoaded', function() {
    const adContainer = document.getElementById('ad-container');
    const adScripts = [
        {
            id: '1062896',
            width: '300',
            height: '262',
            adzone: 1062896
        },
        {
            id: '1062900',
            width: '300',
            height: '262',
            adzone: 1062900
        },
        {
            id: '1062903',
            width: '300',
            height: '262',
            adzone: 1062903
        },
        {
            id: '1062904',
            width: '300',
            height: '262',
            adzone: 1062904
        }
    ];

    // Function to create and insert ad elements
    function loadAd(adConfig) {
        const script = document.createElement('script');
        script.src = 'https://poweredby.jads.co/js/jads.js';
        script.type = 'text/javascript';
        script.async = true;

        const ins = document.createElement('ins');
        ins.id = adConfig.id;
        ins.setAttribute('data-width', adConfig.width);
        ins.setAttribute('data-height', adConfig.height);

        adContainer.appendChild(ins);
        adContainer.appendChild(script);

        script.onload = function() {
            (adsbyjuicy = window.adsbyjuicy || []).push({'adzone': adConfig.adzone});
        };
    }

    // Load all ads
    adScripts.forEach(adConfig => loadAd(adConfig));
});
document.addEventListener('DOMContentLoaded', function() {
    const adContainer = document.getElementById('ad-container-t');
    const adScripts = [
        {
            id: '1062896',
            width: '300',
            height: '262',
            adzone: 1062896
        },
        {
            id: '1062900',
            width: '300',
            height: '262',
            adzone: 1062900
        },
        {
            id: '1062903',
            width: '300',
            height: '262',
            adzone: 1062903
        },
        {
            id: '1062904',
            width: '300',
            height: '262',
            adzone: 1062904
        }
    ];

    // Function to create and insert ad elements
    function loadAd(adConfig) {
        const script = document.createElement('script');
        script.src = 'https://poweredby.jads.co/js/jads.js';
        script.type = 'text/javascript';
        script.async = true;

        const ins = document.createElement('ins');
        ins.id = adConfig.id;
        ins.setAttribute('data-width', adConfig.width);
        ins.setAttribute('data-height', adConfig.height);

        adContainer.appendChild(ins);
        adContainer.appendChild(script);

        script.onload = function() {
            (adsbyjuicy = window.adsbyjuicy || []).push({'adzone': adConfig.adzone});
        };
    }

    // Load all ads
    adScripts.forEach(adConfig => loadAd(adConfig));
});
document.addEventListener('DOMContentLoaded', function() {
    const adContainer = document.getElementById('Ads-one');
    
    // Create and load ad script
    const adScript = document.createElement('script');
    adScript.src = 'https://poweredby.jads.co/js/jads.js';
    adScript.type = 'text/javascript';
    adScript.async = true;

    // Create ad ins element
    const ins = document.createElement('ins');
    ins.id = '1062899';
    ins.setAttribute('data-width', '908');
    ins.setAttribute('data-height', '270');
    ins.setAttribute('data-adzone', '1062899');

    // Append elements to the ad container
    adContainer.appendChild(ins);
    adContainer.appendChild(adScript);

    // Initialize the ad after script loads
    adScript.onload = function() {
        (adsbyjuicy = window.adsbyjuicy || []).push({'adzone': 1062899});
    };
});
document.addEventListener('DOMContentLoaded', function() {
    const adContainer = document.getElementById('Ads-one');
    
    // Create and load ad script
    const adScript = document.createElement('script');
    adScript.src = 'https://poweredby.jads.co/js/jads.js';
    adScript.type = 'text/javascript';
    adScript.async = true;

    // Create ad ins element
    const ins = document.createElement('ins');
    ins.id = '1062899';
    ins.setAttribute('data-width', '908');
    ins.setAttribute('data-height', '270');
    ins.setAttribute('data-adzone', '1062899');

    // Append elements to the ad container
    adContainer.appendChild(ins);
    adContainer.appendChild(adScript);

    // Initialize the ad after script loads
    adScript.onload = function() {
        (adsbyjuicy = window.adsbyjuicy || []).push({'adzone': 1062899});
    };
});
    document.addEventListener('DOMContentLoaded', function() {
        const adContainer = document.getElementById('Ads-one-fly');

        // Create and configure the script for the second ad
        const adScript1 = document.createElement('script');
        adScript1.type = 'text/javascript';
        adScript1.textContent = "juicy_adzone = '1062901';";

        const adScript2 = document.createElement('script');
        adScript2.src = 'https://poweredby.jads.co/js/jfc.js';
        adScript2.charset = 'utf-8';

        // Append the scripts to the ad container
        adContainer.appendChild(adScript1);
        adContainer.appendChild(adScript2);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const adContainer = document.getElementById('Ads-one-fly');

        // Create and configure the script for the second ad
        const adScript1 = document.createElement('script');
        adScript1.type = 'text/javascript';
        adScript1.textContent = "juicy_adzone = '1062901';";

        const adScript2 = document.createElement('script');
        adScript2.src = 'https://poweredby.jads.co/js/jfc.js';
        adScript2.charset = 'utf-8';

        // Append the scripts to the ad container
        adContainer.appendChild(adScript1);
        adContainer.appendChild(adScript2);
    });


    document.addEventListener('DOMContentLoaded', function() {
        const adContainer = document.getElementById('Ads-tow');
        
        // Create and load ad script
        const adScript = document.createElement('script');
        adScript.src = 'https://poweredby.jads.co/js/jads.js';
        adScript.type = 'text/javascript';
        adScript.async = true;
    
        // Create ad ins element
        const ins = document.createElement('ins');
        ins.id = '1062907';
        ins.setAttribute('data-width', '908');
        ins.setAttribute('data-height', '270');
        ins.setAttribute('data-adzone', '1062907');
    
        // Append elements to the ad container
        adContainer.appendChild(ins);
        adContainer.appendChild(adScript);
    
        // Initialize the ad after script loads
        adScript.onload = function() {
            (adsbyjuicy = window.adsbyjuicy || []).push({'adzone': 1062899});
        };
    });
    document.addEventListener('DOMContentLoaded', function() {
        const adContainer = document.getElementById('Ads-tow');
        
        // Create and load ad script
        const adScript = document.createElement('script');
        adScript.src = 'https://poweredby.jads.co/js/jads.js';
        adScript.type = 'text/javascript';
        adScript.async = true;
    
        // Create ad ins element
        const ins = document.createElement('ins');
        ins.id = '1062907';
        ins.setAttribute('data-width', '908');
        ins.setAttribute('data-height', '270');
        ins.setAttribute('data-adzone', '1062907');
    
        // Append elements to the ad container
        adContainer.appendChild(ins);
        adContainer.appendChild(adScript);
    
        // Initialize the ad after script loads
        adScript.onload = function() {
            (adsbyjuicy = window.adsbyjuicy || []).push({'adzone': 1062899});
        };
    });

    document.addEventListener('DOMContentLoaded', function() {
        const adContainer = document.getElementById('ads-section-mob');
        const adScripts = [
            {
                id: '1063103',
                width: '300',
                height: '262',
                adzone: 1063103
            },
            {
                id: '1063104',
                width: '300',
                height: '262',
                adzone: 1063104
            },
        ];
    
        // Function to create and insert ad elements
        function loadAd(adConfig) {
            const script = document.createElement('script');
            script.src = 'https://poweredby.jads.co/js/jads.js';
            script.type = 'text/javascript';
            script.async = true;
    
            const ins = document.createElement('ins');
            ins.id = adConfig.id;
            ins.setAttribute('data-width', adConfig.width);
            ins.setAttribute('data-height', adConfig.height);
    
            adContainer.appendChild(ins);
            adContainer.appendChild(script);
    
            script.onload = function() {
                (adsbyjuicy = window.adsbyjuicy || []).push({'adzone': adConfig.adzone});
            };
        }
        adScripts.forEach(adConfig => loadAd(adConfig));
    });
    document.addEventListener('DOMContentLoaded', function() {
        const adContainer = document.getElementById('ads-section-mob');
        const adScripts = [
            {
                id: '1063103',
                width: '300',
                height: '262',
                adzone: 1063103
            },
            {
                id: '1063104',
                width: '300',
                height: '262',
                adzone: 1063104
            },
        ];
    
        // Function to create and insert ad elements
        function loadAd(adConfig) {
            const script = document.createElement('script');
            script.src = 'https://poweredby.jads.co/js/jads.js';
            script.type = 'text/javascript';
            script.async = true;
    
            const ins = document.createElement('ins');
            ins.id = adConfig.id;
            ins.setAttribute('data-width', adConfig.width);
            ins.setAttribute('data-height', adConfig.height);
    
            adContainer.appendChild(ins);
            adContainer.appendChild(script);
    
            script.onload = function() {
                (adsbyjuicy = window.adsbyjuicy || []).push({'adzone': adConfig.adzone});
            };
        }
        adScripts.forEach(adConfig => loadAd(adConfig));
    });

    ///
    document.addEventListener('DOMContentLoaded', function() {
        const adContainer = document.getElementById('ads-section-mob-t');
        const adScripts = [
            {
                id: '1063105',
                width: '300',
                height: '262',
                adzone: 1063105
            },
            {
                id: '1063106',
                width: '300',
                height: '262',
                adzone: 1063106
            },
        ];
    
        // Function to create and insert ad elements
        function loadAd(adConfig) {
            const script = document.createElement('script');
            script.src = 'https://poweredby.jads.co/js/jads.js';
            script.type = 'text/javascript';
            script.async = true;
    
            const ins = document.createElement('ins');
            ins.id = adConfig.id;
            ins.setAttribute('data-width', adConfig.width);
            ins.setAttribute('data-height', adConfig.height);
    
            adContainer.appendChild(ins);
            adContainer.appendChild(script);
    
            script.onload = function() {
                (adsbyjuicy = window.adsbyjuicy || []).push({'adzone': adConfig.adzone});
            };
        }
        adScripts.forEach(adConfig => loadAd(adConfig));
    });
    document.addEventListener('DOMContentLoaded', function() {
        const adContainer = document.getElementById('ads-section-mob-t');
        const adScripts = [
            {
                id: '1063105',
                width: '300',
                height: '262',
                adzone: 1063105
            },
            {
                id: '1063106',
                width: '300',
                height: '262',
                adzone: 1063106
            },
        ];
    
        // Function to create and insert ad elements
        function loadAd(adConfig) {
            const script = document.createElement('script');
            script.src = 'https://poweredby.jads.co/js/jads.js';
            script.type = 'text/javascript';
            script.async = true;
    
            const ins = document.createElement('ins');
            ins.id = adConfig.id;
            ins.setAttribute('data-width', adConfig.width);
            ins.setAttribute('data-height', adConfig.height);
    
            adContainer.appendChild(ins);
            adContainer.appendChild(script);
    
            script.onload = function() {
                (adsbyjuicy = window.adsbyjuicy || []).push({'adzone': adConfig.adzone});
            };
        }
        adScripts.forEach(adConfig => loadAd(adConfig));
    });