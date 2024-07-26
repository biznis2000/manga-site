document.addEventListener('DOMContentLoaded', function() {
    const adsone = document.getElementById('Ads-one');

    // Create a new div element for the ad content
    const productItem = document.createElement('div');
    // productItem.classList.add('container');

    // Set the inner HTML of the new div to include the ad script and ad zone
    productItem.innerHTML = `
                <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
                <ins id="1062899" data-width="908" data-height="270"></ins>
                <script type="text/javascript" data-cfasync="false" async>
                    (adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1062899});
                </script>
       
    `;

    // Append the new div to the #ADs-one element
    adsone.appendChild(productItem);
});
