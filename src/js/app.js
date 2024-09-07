"use strict"

import { DotLottie } from '@lottiefiles/dotlottie-web';

const dotLottie = new DotLottie({
  canvas: document.querySelector('#logo_anim'),
  src: 'https://app.lottiefiles.com/animation/8f18c756-8969-4615-ab8f-24d594206765',
});


window.addEventListener('load', ()=> {
  document.body.classList.add('dom_loaded')
  dotLottie.load({autoplay: true})
  setTimeout(()=> {
    document.getElementById('loader').remove()
  }, 1000)
})

