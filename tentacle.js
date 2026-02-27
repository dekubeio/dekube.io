// shared tentacle SVG — injected inline to preserve CSS class styling
// TODO: replace relative path with https://dekube.io/tentacle.js when domains are live
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.tentacle-slot');
  if (!el) return;
  el.outerHTML = `<svg class="tentacle" viewBox="0 0 500 700" xmlns="http://www.w3.org/2000/svg">

  <!-- tentacle 1: curves up-left, outer edge then inner edge offset right -->
  <path d="M 475,700
           C 475,650 470,600 458,555
           C 442,500 415,460 390,415
           C 365,370 350,320 335,270
           C 322,225 310,180 300,145
           C 290,110 278,80 265,60
           L 258,56
           C 268,74 280,102 290,138
           C 300,175 310,222 322,268
           C 335,322 348,372 368,420
           C 390,465 412,505 425,558
           C 436,605 438,655 435,700 Z"/>

  <!-- tentacle 2: sweeps left, outer edge (bottom) then inner edge (top) offset up -->
  <path d="M 440,700
           C 425,690 400,678 370,668
           C 325,654 280,664 235,652
           C 190,640 155,654 115,636
           C 78,618 50,590 33,565
           C 20,546 15,530 18,522
           L 14,515
           C 12,520 14,535 25,552
           C 40,575 65,598 100,612
           C 138,628 170,616 215,628
           C 260,640 300,630 345,640
           C 378,648 402,660 425,672 Z"/>

  <!-- tentacle 3: curves down-left, starts high-right, plunges to bottom-left -->
  <path d="M 500,610
           C 482,618 458,628 430,640
           C 395,655 360,648 322,662
           C 285,675 252,668 218,680
           C 185,690 158,685 130,694
           C 108,700 88,698 72,700
           L 68,690
           C 84,686 102,688 122,682
           C 148,674 175,678 208,668
           C 242,658 272,664 308,652
           C 345,640 378,646 412,632
           C 442,622 465,614 482,606 Z"/>

  <!-- suckers — along inner edge of each tentacle -->
  <circle class="sucker" cx="385" cy="435" r="6"/>
  <circle class="sucker" cx="345" cy="325" r="5"/>
  <circle class="sucker" cx="315" cy="230" r="4.5"/>
  <circle class="sucker" cx="288" cy="140" r="3.5"/>
  <circle class="sucker" cx="265" cy="70" r="3"/>
  <circle class="sucker" cx="170" cy="630" r="6"/>
  <circle class="sucker" cx="75" cy="608" r="5"/>
  <circle class="sucker" cx="22" cy="545" r="4"/>
  <circle class="sucker" cx="320" cy="655" r="6"/>
  <circle class="sucker" cx="215" cy="672" r="5"/>
  <circle class="sucker" cx="125" cy="688" r="4.5"/>
  <circle class="sucker" cx="75" cy="695" r="3.5"/>
</svg>`;
});
