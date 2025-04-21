/*=============== MENU ===============*/
     const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle');
/* Menu show - hidden */
 
   navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show-menu');
     navToggle.classList.toggle('animate-toggle');

   });

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SERVICES SWIPER ===============*/
     var servicesSwiper = new Swiper(".services-swiper", {
       spaceBetween: 32,
       pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        breakpoints: {
          // 640: {
          //   slidesPerView: 2,
          //   spaceBetween: 20,
          // },
          768: {
            slidesPerView: 2,
            
          },
          1208: {
               slidesPerView: 3,
           
          },
        },

     });




/*=============== MIXITUP FILTER PORTFOLIO ===============*/

        var mixer = mixitup('.work-container', {
          selectors: {
              target: '.mix',
          },
          animation: {
              duration: 300,
          }
        });

/* Active work */

     const LinkWork = document.querySelectorAll('.work-item');
     function activeWork() {
      LinkWork.forEach((a) => {
         a.classList.remove('active-work')

      });

           this.classList.add('active-work');
     }

       LinkWork.forEach((a) => a.addEventListener('click', activeWork));


/*=============== RESUME ===============*/

/*=============== TESTIMONIALS SWIPER ===============*/

/*=============== EMAIL JS ===============*/

/*=============== STYLE SWITCHER ===============*/

      const styleSwitcher = document.getElementById('style-switcher'),
      switcherToggle = document.getElementById('switcher-toggle'),
      switcherClose = document.getElementById('switcher-close');



       /* Switcher show */
    
         switcherToggle.addEventListener('click', () => {
         styleSwitcher.classList.toggle('show-switcher');
       
         });
       /* Switcher hidden */

            switcherClose.addEventListener('click', () => {
            styleSwitcher.classList.remove('show-switcher');  

            });

      /*=============== THEME COLORS ===============*/
        const colors = document.querySelectorAll('style-switcher-color');

        colors.forEache((color) => {
            color.onclick = () => {
               const activeColor = color.style.getProperyValue('--hue');

               colors.forEach((c) => c.classList.remove('active-color'));
               color.classList.add('active-color');

               document.documentElement.style.setProperty('--hue', activeColor);
            };
         });
      /*=============== LIGHT/DARK MODE ===============*/


           let currenTheme = 'light';
           document.body.className = currenTheme;

         document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
              input.addEventListener('change', () => {
                currenTheme = input.value;
                document.body.className = currenTheme;

          
              });
      });













