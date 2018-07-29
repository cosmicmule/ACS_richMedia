// script.js
// =============================================================================
// =============================================================================
var banner = banner || {} ;
var getParent;
// Start
// =============================================================================
// =============================================================================
function startAd(){

    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, banner.platform_REFER.bannerSetup);
    }else{
        banner.platform_REFER.bannerSetup();
    }
}

// BANNER OBJECT CONFIGURATION
banner.configure = {
    bannerParent_ID: "banner",
    bannerParent: null,
    bannerLast_ELEMENT: 'banner',
    bannerLoop_COUNT: 1 ,
    bannerLoop_CURRENT_COUNT: 0 ,
    bannerLoop_TOTAL_COUNT: 0 ,
    bannerLoop_Animation_START: 'playing' ,
    bannerLoop_Animation_END: 'stop' ,
    bannerLoop_Animation_CURRENTSTATE: null,
}

// BANNER OBJECT METHODS
banner.platform = {

    platform_Methods: {

        startAd: function(){

            if (typeof EB != "undefined") {
               if (!EB.isInitialized() ) {
                EB.addEventListener(EBG.EventName.EB_INITIALIZED, banner.platform_REFER.bannerSetup);
                }else{
                    banner.platform_REFER.bannerSetup();
                }
            }else{
                banner.platform_REFER.bannerSetup();
            }

        },

        // PLATFORM TARGET
        platform_TARGET: "sizmek",

        // CLICKTHROUGH LOGIC
        clickThrough_router: function(e){

            if(banner.platform_REFER.platform_TARGET == 'sizmek'){
                EB.clickthrough();
                console.log("Sizmek clickthrough")
            }else{
                window.open(clickTag)
                console.log('GDN_CLICKTHROUGH')
            }

        },

        // BANNER SETUP LOGIC
        bannerSetup: function(){

            // SET BANNER STATE.
            banner.configure.bannerLoop_Animation_CURRENTSTATE = banner.configure.bannerLoop_Animation_START;
            // GET BANNER PARENT
            bannerInstance = document.getElementById(banner.config_REFER.bannerParent_ID);
            // SETUP BANNER CLICKTHROUGH
            bannerInstance.addEventListener('click',banner.platform_REFER.clickThrough_router)
            // SETUP BANNER LOOP MECHANIC
            //banner.config_REFER.bannerParent = document.getElementById(banner.config_REFER.bannerParent_ID);
            // UPDATE LOOP COUNT
            //  banner.config_REFER.bannerLoop_COUNT = banner.config_REFER.bannerParent.getAttribute("data-loopCount");
            // SET ANIMATION END LISTENER
            /*banner.platform_REFER.PrefixedEvent(
                    document.getElementById(banner.config_REFER.bannerLast_ELEMENT),
                    "AnimationEnd",
                    banner.platform_REFER.AnimationListener
                );*/


          // declare elements to Animation
          var comeCelebrate,
              yr20Super,
              atAutoClubSpeedway,
              jeff,
              matt,
              kyle,
              jimmy,
              yr20Large,
              yr20Small,
              pricePoint,
              buy,
              sign,
              jeff_car,
              matt_car,
              kyle_car,
              jimmy_car,
              cargroup,
              cargroup2,
              bgChange,
              dDisplay_1,
              dDisplay_2,
              dDisplay_3,
              dDisplay_4,
              dDisplay_5,
              pricePoint,
              buy,
              time;

              time = 1;
              bg_2 = document.getElementById('bg_2');
              comeCelebrate = document.getElementById('comeCelebrate');
              yr20Super = document.getElementById('yr20Super');
              atAutoClubSpeedway = document.getElementById('atAutoClubSpeedway');
              jeff = document.getElementById('jeff');
              matt = document.getElementById('matt');
              kyle = document.getElementById('kyle');
              jimmy = document.getElementById('jimmy');

              yr20Large = document.getElementById('yr20Large');
              yr20Small = document.getElementById('yr20Small');
              pricePoint = document.getElementById('pricePoint');
              buy = document.getElementById('buy');
              sign = document.getElementById('sign');

              // date elements
              dDisplay_1 = document.getElementById('dDisplay_1');
              dDisplay_2 = document.getElementById('dDisplay_2');
              dDisplay_3 = document.getElementById('dDisplay_3');
              dDisplay_4 = document.getElementById('dDisplay_4');
              dDisplay_5 = document.getElementById('dDisplay_5');

              // cars elements
              jeff_car = document.getElementById('jeff_car');
              matt_car = document.getElementById('matt_car');
              kyle_car = document.getElementById('kyle_car');
              jimmy_car = document.getElementById('jimmy_car');
              cargroup = document.getElementById('cargroup');
              cargroup2 = document.getElementById('cargroup2');

              pricePoint = document.getElementById('pricePoint');
              buy = document.getElementById('buy');



              //start Animation
              TweenLite.set(comeCelebrate,  {opacity: 0,top:'+=50px'});
              TweenLite.to(comeCelebrate, 1, {opacity: 1,top: 29,delay: time});

              time += .5;
              TweenLite.set(yr20Super, {scale: .25, opacity: 0});
              TweenLite.to(yr20Super, .5, {scale: 1, opacity: 1, delay: time});
              time += .5;
              TweenLite.to(atAutoClubSpeedway, 1, {opacity: 1,delay: time});

              time += 4;
              TweenLite.to(yr20Super, .5, {scale: .25, opacity: 0, delay: time});
              TweenLite.to(dDisplay_1, .5, {opacity: 0, delay: time});
              TweenLite.to(dDisplay_2, .5, {opacity: 1, delay: time});
              TweenLite.set(jeff, {scale: 0, opacity: 0});
              TweenLite.to(jeff, .5, {scale: 1, opacity: 1, delay: time,onComplete:loop});
              TweenLite.to(jeff_car, 3, {x:600,y: 210, opacity: 1, delay: time});



              time += 4;
              TweenLite.to(jeff, .5, {scale: 0, opacity: 0, delay: time});
              TweenLite.to(dDisplay_2, .5, {opacity: 0, delay: time});
              TweenLite.to(dDisplay_3, .5, {opacity: 1, delay: time});
              TweenLite.set(matt, {scale: 0, opacity: 0});
              TweenLite.to(matt, .5, {scale: 1, opacity: 1, delay: time});
              TweenLite.set(matt_car, {scale:1.25});
              TweenLite.to(matt_car, 3, {x:600,y: 210, opacity: 1, delay: time});

              time += 4;
              TweenLite.to(matt, .5, {scale: 0, opacity: 0, delay: time});
              TweenLite.to(dDisplay_3, .5, {opacity: 0, delay: time});
              TweenLite.to(dDisplay_4, .5, {opacity: 1, delay: time});
              TweenLite.set(kyle, {scale: 0, opacity: 0});
              TweenLite.to(kyle, .5, {scale: 1, opacity: 1, delay: time});
              TweenLite.to(kyle_car, 3, {x:600,y: 210, opacity: 1, delay: time});

              time += 4;
              TweenLite.to(kyle, .5, {scale: 0, opacity: 0, delay: time});
              TweenLite.to(dDisplay_4, .5, {opacity: 0, delay: time});
              TweenLite.to(dDisplay_5, .5, {opacity: 1, delay: time});
              TweenLite.set(jimmy, {scale: 0, opacity: 0});
              TweenLite.to(jimmy, .5, {scale: 1, opacity: 1, delay: time});
              TweenLite.to(jimmy_car, 3, {x:600,y: 210, opacity: 1, delay: time});

              time += 4;
              TweenLite.to(jimmy, .5, {scale: 0, opacity: 0, delay: time});
              TweenLite.to(dDisplay_5, .5, {opacity: 0, delay: time});
              TweenLite.to(atAutoClubSpeedway, .5, {opacity: 0,delay: time});
              TweenLite.to(sign, .5, {opacity: 0,delay: time});
              TweenLite.set(yr20Large, {scale: 0, opacity: 0});
              TweenLite.to(yr20Large, .5, {scale: 1, opacity: 1, delay: time});
              TweenLite.set(atAutoClubSpeedway,  {top: 197,delay: time});
              TweenLite.to(atAutoClubSpeedway, .5, {opacity: 1,delay: time});
              TweenLite.to(cargroup, 3, {x:820,y: 110,scale:1.25, opacity: 1, delay: time});

              //time += 1;

              time += 3.25;
              TweenLite.to(yr20Small, .5, {opacity: 1, delay: time});
              TweenLite.to(yr20Large, .5, {opacity: 0, delay: time});
              TweenLite.to(atAutoClubSpeedway, .5, {opacity: 0,delay: time});
              TweenLite.to(pricePoint, .5, {opacity: 1,delay: time,onComplete:loop});
              TweenLite.to(cargroup2, 3, {x:437,y:30,opacity: 1, delay: time});
              time += .25;
              TweenLite.set(buy, {scale: 0,});
              TweenLite.to(buy, .5, {scale: 1,opacity: 1,delay: time,
                          onComplete: function()
                          {
                            clearInterval(timer);
                            pointer.style.opacity = '0';

                          }
                      });




              console.log(timer + 'timer');


        },



        PrefixedEvent: function(element, type, callback) {

            var pfx = ["webkit", "moz", "MS", "o", ""];

            for (var p = 0; p < pfx.length; p++) {
                if (!pfx[p]) type = type.toLowerCase();
                element.addEventListener(pfx[p]+type, callback, false);
            }

        },

        AnimationListener: function(event){

           if( (banner.config_REFER.bannerLoop_COUNT - 1) > banner.config_REFER.bannerLoop_CURRENT_COUNT){
              banner.config_REFER.bannerLoop_CURRENT_COUNT ++;

                banner.config_REFER.bannerParent.classList.remove("MC_animation_playing");

                setTimeout(function(){
                    banner.config_REFER.bannerParent.classList.add("MC_animation_playing");
                }, 1)

           }else{
                banner.config_REFER.bannerParent.classList.remove("MC_animation_playing");
                banner.config_REFER.bannerParent.classList.add("MC_animation_endFrame");
           }

        }


    }

}



// BANNER CONFIGURE/METHODS SHORTCUTS
banner.config_REFER = banner.configure;
banner.platform_REFER = banner.platform.platform_Methods;

// ONLOAD LISTENER
//=================================================================
window.addEventListener("load", banner.platform_REFER.startAd);
