"use strict"

import { DotLottie } from '@lottiefiles/dotlottie-web';

const dotLottie = new DotLottie({
  canvas: document.querySelector('#logo_anim'),
  src: '/src/json/nomadic-logo-animation.json',
});


window.addEventListener('load', ()=> {
  document.body.classList.add('dom_loaded')
  dotLottie.load({autoplay: true})
  setTimeout(()=> {
    document.getElementById('loader').remove()
  }, 1000)
})

