// HERO SECTIONS *****************************

$('input:radio[name="Hero"]').change(
  function(){
    var $src = "";

    // Hero - 1
    if ($(this).attr('alt') == 'hero-1') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601256ec989b34b28faafbca_Header-3.png";
    }

    // Hero - 2
    else if ($(this).attr('alt') == 'hero-2') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601256f9146007f66ca4cf7e_Header-4.png";
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
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/600b65d12208dbc7a14c2f36_Feat%20-%202-sm.png";
    }

    // Feat - 2
    else if ($(this).attr('alt') == 'feature-2') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/600b65d12208db66ec4c2f32_Feat-2-sm.png";
    }

    // Feat - 3
    else if ($(this).attr('alt') == 'feature-3') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/600b65d12208db2d244c2f3a_Feat-3-sm.png";
    }

    // Feat - 4
    else if ($(this).attr('alt') == 'feature-4') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601257773d335ed8de76cf28_Features-4.png";
    }

    // Feat - 5
    else if ($(this).attr('alt') == 'feature-5') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60125793b6df97238e859bcb_Features-5.png";
    }

    // Feat - 6
    else if ($(this).attr('alt') == 'feature-6') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601257bbb735ac20eb2219b1_Features-6.png";
    }

    // Feat - 7
    else if ($(this).attr('alt') == 'feature-7') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601257e07e98192cb6154f4a_Features-7.png";
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
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60125f077e9819a15e155855_Projects-2.png";
    }

    // Project - 2
    else if ($(this).attr('alt') == 'project-2') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/6012533966efc15ae7f9b5df_Projects-3.png";
    }

    // Project - 3
    else if ($(this).attr('alt') == 'project-3') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/600b65d12208db5c6b4c2f37_Projects-1.png";
    }

    // Project - 4
    else if ($(this).attr('alt') == 'project-4') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/60125394c9c8576981644534_Projects-5.png";
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
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/600b65d12208db9fde4c2f35_Testi%20-1.png";
    }

    // Testi - 2
    else if ($(this).attr('alt') == 'testimonials-2') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/600b65d12208db3e904c2f3c_Testi%20-2.png";
    }

    // Testi - 3
    else if ($(this).attr('alt') == 'testimonials-3') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/600ca0eff37a2211488dd84d_Testi%20-3.png";
    }

    // Testi - 4
    else if ($(this).attr('alt') == 'testimonials-4') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/600ca11572173e218b8a203b_Testi%20-4.png";
    }

    // Testi - 5
    else if ($(this).attr('alt') == 'testimonials-5') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/600b65d12208db93434c2f30_image-2.png";
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
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/600b65d12208db01874c2f38_CTA%20-1.png";
    }

    // CTA - 2
    else if ($(this).attr('alt') == 'cta-2') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/600b65d12208db00a04c2f3b_CTA%20-2.png";
    }

    // CTA - 3
    else if ($(this).attr('alt') == 'cta-3') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/6012585732b8c92597eb26d7_CTA%20-3.png";
    }

    // CTA - 4
    else if ($(this).attr('alt') == 'cta-4') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601258725367224c65d240b5_CTA%20-4.png";
    }

    // CTA - 5
    else if ($(this).attr('alt') == 'cta-5') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601258a2b09eff1aaa0ffc64_CTA%20-5.png";
    }

    // CTA - 6
    else if ($(this).attr('alt') == 'cta-6') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/601258be3b214d23b71d47c8_CTA%20-6.png";
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
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/600b65d12208db5b674c2f33_Footer-1-sm.png";
    }

    // Footer - 2
    else if ($(this).attr('alt') == 'footer-2') {
      $src = "https://uploads-ssl.webflow.com/600b65d12208dbc4934c2eb4/600b65d12208db38c14c2f3d_Footer-2-sm.png";
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

