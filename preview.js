// HERO SECTIONS *****************************

$('input:radio[name="Hero"]').change(
  function(){
    var $src = "";

    // Hero - 1
    if ($(this).attr('alt') == 'hero-1') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146d9de8975d061758d3a5_Header-3.png";
    }

    // Hero - 2
    else if ($(this).attr('alt') == 'hero-2') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146dab6b429ff3c8346a09_Header-4.png";
    }

    else{
      $( "#hero" ).hide
    }

    $('#hero').attr('src',$src);

});

// FEATURE SECTIONS *****************************

$('input:radio[name="Features"]').change(
  function(){
    var $src = "";

    // Feat - 1
    if ($(this).attr('alt') == 'feature-1') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146d686b429f7a2c3468f7_Features-1.png";
    }

    // Feat - 2
    else if ($(this).attr('alt') == 'feature-2') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146d574fc03a58a8fa9ba5_Features-2.png";
    }

    // Feat - 3
    else if ($(this).attr('alt') == 'feature-3') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146d4675bd8add8c6e04dd_Features-3.png";
    }

    // Feat - 4
    else if ($(this).attr('alt') == 'feature-4') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146d0cb40f80c9bd59b4ce_Features-4.png";
    }

    // Feat - 5
    else if ($(this).attr('alt') == 'feature-5') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146cfdb40f80fa7059b4c7_Features-5.png";
    }

    // Feat - 6
    else if ($(this).attr('alt') == 'feature-6') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146288e635dbb1c22380ac_Features-6.png";
    }

    // Feat - 7
    else if ($(this).attr('alt') == 'feature-7') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/6014627c464267f0cfa94f80_Features-7.png";
    }

    else{
      $( "#feature" ).hide
    }

    $('#feature').attr('src',$src);

});


// PROJECT SECTIONS *****************************

$('input:radio[name="Projects"]').change(
  function(){
    var $src = "";

    // Project - 1
    if ($(this).attr('alt') == 'project-1') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146242d80c9f720aa79295_Projects-2.png";
    }

    // Project - 2
    else if ($(this).attr('alt') == 'project-2') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146ce9129a25b3fbe66765_Projects-3.png";
    }

    // Project - 3
    else if ($(this).attr('alt') == 'project-3') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601462a4592d96c32432f0be_Projects-4.png";
    }

    // Project - 4
    else if ($(this).attr('alt') == 'project-4') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146295507e276522a6ae7c_Projects-5.png";
    }

    else{
      $( "#project" ).hide
    }

    $('#project').attr('src',$src);

});


// Testimonials SECTIONS *****************************

$('input:radio[name="Testimonials"]').change(
  function(){
    var $src = "";

    // Testi - 1
    if ($(this).attr('alt') == 'testimonials-1') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146cde56d0874e7e97bcdf_Testi%20-1.png";
    }

    // Testi - 2
    else if ($(this).attr('alt') == 'testimonials-2') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146cd5507e276924a6f77e_Testi%20-2.png";
    }

    // Testi - 3
    else if ($(this).attr('alt') == 'testimonials-3') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601462dea89f0b7b071e9693_Testi%20-3.png";
    }

    // Testi - 4
    else if ($(this).attr('alt') == 'testimonials-4') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601462bf6d04c03138cb0361_Testi%20-4.png";
    }

    // Testi - 5
    else if ($(this).attr('alt') == 'testimonials-5') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601462afceb1553f3add2a80_Testi%20-5.png";
    }

    else{
      $( "#testimonial" ).hide
    }

    $('#testimonial').attr('src',$src);

});


// CTA SECTIONS *****************************

$('input:radio[name="CTA"]').change(
  function(){
    var $src = "";

    // CTA - 1
    if ($(this).attr('alt') == 'cta-1') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146351ceb1551724dd2b62_CTA%20-1.png";
    }

    // CTA - 2
    else if ($(this).attr('alt') == 'cta-2') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/6014634aaa8e5ab2edc79202_CTA%20-2.png";
    }

    // CTA - 3
    else if ($(this).attr('alt') == 'cta-3') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60146271919ee6a1f1125aec_CTA%20-3.png";
    }

    // CTA - 4
    else if ($(this).attr('alt') == 'cta-4') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/6014626774e2235efff05c79_CTA%20-4.png";
    }

    // CTA - 5
    else if ($(this).attr('alt') == 'cta-5') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/6014625c75bd8a36e46dc19a_CTA%20-5.png";
    }

    // CTA - 6
    else if ($(this).attr('alt') == 'cta-6') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601462504f9d8b381b89d98f_CTA%20-6.png";
    }

    else{
      $( "#cta" ).hide
    }

    $('#cta').attr('src',$src);

});

// Footers SECTIONS *****************************

$('input:radio[name="Footers"]').change(
  function(){
    var $src = "";

    // Footer - 1
    if ($(this).attr('alt') == 'footer-1') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601462fe129a2571b7e645ba_Footer-1.png";
    }

    // Footer - 2
    else if ($(this).attr('alt') == 'footer-2') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601462f7e635db0ee523883e_Footer-2.png";
    }

    else{
      $( "#footer" ).hide
    }

    $('#footer').attr('src',$src);

});



// Hero **************************
function hero1(){
  document.getElementById('hero-1').style.display ='block';
  document.getElementById('hero-2').style.display ='none';
}

function hero2(){
  document.getElementById('hero-1').style.display ='none';
  document.getElementById('hero-2').style.display ='block';
}

// Features *****************************

function feature1(){
  document.getElementById('feature-1').style.display ='flex';
  document.getElementById('feature-2').style.display ='none';
  document.getElementById('feature-3').style.display ='none';
  document.getElementById('feature-4').style.display ='none';
  document.getElementById('feature-5').style.display ='none';
  document.getElementById('feature-6').style.display ='none';
  document.getElementById('feature-7').style.display ='none';
}

function feature2(){
  document.getElementById('feature-1').style.display ='none';
  document.getElementById('feature-2').style.display ='flex';
  document.getElementById('feature-3').style.display ='none';
  document.getElementById('feature-4').style.display ='none';
  document.getElementById('feature-5').style.display ='none';
  document.getElementById('feature-6').style.display ='none';
  document.getElementById('feature-7').style.display ='none';
}

function feature3(){
  document.getElementById('feature-1').style.display ='none';
  document.getElementById('feature-2').style.display ='none';
  document.getElementById('feature-3').style.display ='flex';
  document.getElementById('feature-4').style.display ='none';
  document.getElementById('feature-5').style.display ='none';
  document.getElementById('feature-6').style.display ='none';
  document.getElementById('feature-7').style.display ='none';
}

function feature4(){
  document.getElementById('feature-1').style.display ='none';
  document.getElementById('feature-2').style.display ='none';
  document.getElementById('feature-3').style.display ='none';
  document.getElementById('feature-4').style.display ='flex';
  document.getElementById('feature-5').style.display ='none';
  document.getElementById('feature-6').style.display ='none';
  document.getElementById('feature-7').style.display ='none';
}

function feature5(){
  document.getElementById('feature-1').style.display ='none';
  document.getElementById('feature-2').style.display ='none';
  document.getElementById('feature-3').style.display ='none';
  document.getElementById('feature-4').style.display ='none';
  document.getElementById('feature-5').style.display ='flex';
  document.getElementById('feature-6').style.display ='none';
  document.getElementById('feature-7').style.display ='none';
}

function feature6(){
  document.getElementById('feature-1').style.display ='none';
  document.getElementById('feature-2').style.display ='none';
  document.getElementById('feature-3').style.display ='none';
  document.getElementById('feature-4').style.display ='none';
  document.getElementById('feature-5').style.display ='none';
  document.getElementById('feature-6').style.display ='flex';
  document.getElementById('feature-7').style.display ='none';
}

function feature7(){
  document.getElementById('feature-1').style.display ='none';
  document.getElementById('feature-2').style.display ='none';
  document.getElementById('feature-3').style.display ='none';
  document.getElementById('feature-4').style.display ='none';
  document.getElementById('feature-5').style.display ='none';
  document.getElementById('feature-6').style.display ='none';
  document.getElementById('feature-7').style.display ='flex';
}

// Projects *****************************

function project1(){
  document.getElementById('project-1').style.display ='flex';
  document.getElementById('project-2').style.display ='none';
  document.getElementById('project-3').style.display ='none';
  document.getElementById('project-4').style.display ='none';
}

function project2(){
  document.getElementById('project-1').style.display ='none';
  document.getElementById('project-2').style.display ='flex';
  document.getElementById('project-3').style.display ='none';
  document.getElementById('project-4').style.display ='none';
}

function project3(){
  document.getElementById('project-1').style.display ='none';
  document.getElementById('project-2').style.display ='none';
  document.getElementById('project-3').style.display ='flex';
  document.getElementById('project-4').style.display ='none';
}

function project4(){
  document.getElementById('project-1').style.display ='none';
  document.getElementById('project-2').style.display ='none';
  document.getElementById('project-3').style.display ='none';
  document.getElementById('project-4').style.display ='flex';
}

// Testimonials ****************************

function testi1(){
  document.getElementById('testi-1').style.display ='flex';
  document.getElementById('testi-2').style.display ='none';
  document.getElementById('testi-3').style.display ='none';
  document.getElementById('testi-4').style.display ='none';
  document.getElementById('testi-5').style.display ='none';
}

function testi2(){
  document.getElementById('testi-1').style.display ='none';
  document.getElementById('testi-2').style.display ='flex';
  document.getElementById('testi-3').style.display ='none';
  document.getElementById('testi-4').style.display ='none';
  document.getElementById('testi-5').style.display ='none';
}

function testi3(){
  document.getElementById('testi-1').style.display ='none';
  document.getElementById('testi-2').style.display ='none';
  document.getElementById('testi-3').style.display ='flex';
  document.getElementById('testi-4').style.display ='none';
  document.getElementById('testi-5').style.display ='none';
}

function testi4(){
  document.getElementById('testi-1').style.display ='none';
  document.getElementById('testi-2').style.display ='none';
  document.getElementById('testi-3').style.display ='none';
  document.getElementById('testi-4').style.display ='flex';
  document.getElementById('testi-5').style.display ='none';
}

function testi5(){
  document.getElementById('testi-1').style.display ='none';
  document.getElementById('testi-2').style.display ='none';
  document.getElementById('testi-3').style.display ='none';
  document.getElementById('testi-4').style.display ='none';
  document.getElementById('testi-5').style.display ='flex';
}

// CTA *****************************************

function cta1(){
  document.getElementById('cta-1').style.display ='flex';
  document.getElementById('cta-2').style.display ='none';
  document.getElementById('cta-3').style.display ='none';
  document.getElementById('cta-4').style.display ='none';
  document.getElementById('cta-5').style.display ='none';
  document.getElementById('cta-6').style.display ='none';
}

function cta2(){
  document.getElementById('cta-1').style.display ='none';
  document.getElementById('cta-2').style.display ='flex';
  document.getElementById('cta-3').style.display ='none';
  document.getElementById('cta-4').style.display ='none';
  document.getElementById('cta-5').style.display ='none';
  document.getElementById('cta-6').style.display ='none';
}

function cta3(){
  document.getElementById('cta-1').style.display ='none';
  document.getElementById('cta-2').style.display ='none';
  document.getElementById('cta-3').style.display ='flex';
  document.getElementById('cta-4').style.display ='none';
  document.getElementById('cta-5').style.display ='none';
  document.getElementById('cta-6').style.display ='none';
}

function cta4(){
  document.getElementById('cta-1').style.display ='none';
  document.getElementById('cta-2').style.display ='none';
  document.getElementById('cta-3').style.display ='none';
  document.getElementById('cta-4').style.display ='flex';
  document.getElementById('cta-5').style.display ='none';
  document.getElementById('cta-6').style.display ='none';
}

function cta5(){
  document.getElementById('cta-1').style.display ='none';
  document.getElementById('cta-2').style.display ='none';
  document.getElementById('cta-3').style.display ='none';
  document.getElementById('cta-4').style.display ='none';
  document.getElementById('cta-5').style.display ='flex';
  document.getElementById('cta-6').style.display ='none';
}

function cta6(){
  document.getElementById('cta-1').style.display ='none';
  document.getElementById('cta-2').style.display ='none';
  document.getElementById('cta-3').style.display ='none';
  document.getElementById('cta-4').style.display ='none';
  document.getElementById('cta-5').style.display ='none';
  document.getElementById('cta-6').style.display ='flex';
}

// Footers **********************************

function footer1(){
  document.getElementById('footer-1').style.display ='flex';
  document.getElementById('footer-2').style.display ='none';
}

function footer2(){
  document.getElementById('footer-1').style.display ='none';
  document.getElementById('footer-2').style.display ='flex';
}

