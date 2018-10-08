// dependencies:
// https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js
// ./thermometer.component.css

Vue.component('cmt-thermometer', {
  template: `<div class="svgCont">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="129.9" viewBox="0 0 619 129.9">
      <path d="M552 3.5c-17.4 0-34.1 6.7-46 19.7H44.8c-22.5 0-41.3 17.3-41.3 39.3v4.8c0 10.7 4.7 21.4 12.5 29 7.7 7.6 18.1 12 28.8 12h461.7c11.8 11 28.2 18.2 45.5 18.2 35 0 63.5-27.6 63.5-61.4S587 3.5 552 3.5z" class="st0"/>
      <text id="goalText" x="0" y="70">$0</text>
        <rect id="thermometerLineBody" width="500" height="42" x="520" y="44.4" class="st1"/>
        <circle id="thermometerLineHead" cx="552" cy="64.9" r="37" class="st1"/>
  <path d="M552 3.3c-17.4 0-34.1 6.7-46 19.7H44.8C22.3 23 3.5 40.3 3.5 62.3v4.8c0 10.7 4.7 21.4 12.5 29 7.7 7.6 18.1 12 28.8 12h461.7c11.8 11 28.2 18.2 45.5 18.2 35 0 63.5-27.6 63.5-61.4S587 3.3 552 3.3zm0 98.1c-14.4 0-27-7.5-33.6-18.5H44.8c-8.4 0-15.8-7.1-15.8-15.5v-4.8c0-8.3 7.4-14.8 15.8-14.8H518c6.5-11 19.3-19.4 33.9-19.4 21.3 0 38.5 16.3 38.5 36.4.1 20.3-17.2 36.6-38.4 36.6z" class="st2"/>
        <path d="M552 3.5c-17.4 0-34.1 6.7-46 19.7H44.8c-22.5 0-41.3 17.3-41.3 39.3v4.8c0 10.7 4.7 21.4 12.5 29 7.7 7.6 18.1 12 28.8 12h461.7c11.8 11 28.2 18.2 45.5 18.2 35 0 63.5-27.6 63.5-61.4S587 3.5 552 3.5z" class="st3"/>
        <text id="progressText" x="0" y="70">$0</text>
        </svg>     
    </div>
  </div>
  `,
  props: {
    progress: Number,
    goal: Number
  },
  data: function () {
    return {
      animate: {
        progress: 0
      },
      percent: null
    }
  },
  mounted: function() {
    var svgLineBody = $('#thermometerLineBody');
    var svgLineHead = $('#thermometerLineHead');
    var goalText = $('#goalText');
    var progressText = $('#progressText');
    var thermometerLineBodyDistance = 500;
    var thermometerTimeline;
    var thermometerPercent = this.progress / this.goal;
    this.percent = thermometerPercent;

    thermometerTimeline = new TimelineMax({
      paused: true,
      repeat: 0,
      delay: 0,
      repeatDelay: 3
    });
    thermometerTimeline
        .set(progressText, {
          text: '$0',
          rotation: 180,
          transformOrigin: 'center center',
          x: 550
        })
        .set(goalText, {
          text: this.$options.filters.currency(this.goal),
          rotation: 180,
          transformOrigin: 'center center',
          x: 80
        })
        .set(svgLineHead, {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        transformOrigin: 'center center'
      })
      .set(svgLineBody, { 
        opacity: 1, 
        scaleX: 1, 
        width: 0,
        rotation: 180,
        transformOrigin: 'left center'
      })
      .to(svgLineBody, 1, {
        delay: 3,
        width: thermometerLineBodyDistance * thermometerPercent,
        ease: Power3.easeInOut
      }, 0)
      .to(progressText, 1, {
        delay: 3,
        x: 560 - (thermometerPercent * 480), // pos of line
        ease: Power3.easeInOut
      }, 0)
      .call(this.animateProgress, null, null, 0)
    ;

    $('.svgCont').click(function () {
      thermometerTimeline.restart();
    });

    // play the animation
    thermometerTimeline.play();
  },
  methods: {
    animateProgress: function () {
      TweenLite
        .to(this.animate, 1, {
          delay: 3,
          progress: '+=' + this.progress, 
          roundProps: 'progress', 
          onUpdate: this.updateProgress, 
          ease: Linear.easeNone
        });
    },
    updateProgress: function () {
      progressText.innerHTML = this.$options.filters.currency(this.animate.progress);
    }
  },
  filters: {
    currency: function (value) {
      return '$' + parseInt(value).toLocaleString();
    }
  }
});
