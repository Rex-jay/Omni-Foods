 $(document).ready(function(){

    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
        {
            offset: '60px;'
        }
    });

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate(scrollTop: $())
    })

    /* Maps */
    var map = new GMaps({
        div: '.map',
        lat: 38.7436057,
        lng: -9.2302438,
        zoom: 12
    });

    map.addMarker({
        lat: 38.7436057,
        lng: -9.2302438,
        title: 'Lima',
        infoWindow: {
            content: '<p>Our Lisbon HQ</p>'
          }
      });

})