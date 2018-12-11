// twoStep
var ts = new TwoStep({
    elements: document.querySelectorAll('#container .slide-item'),
    // onChange: function(event) {
    //     console.log('Item '+event.index);
    // },
    stick: document.querySelector('#container .sticky-outer'),
    narrative: [
        function(event) {
            console.log('Item '+event.index);
            $('.self').fadeOut(100);
            $('.annotation').fadeOut(100);
        },
        function(event) {
          console.log('Item '+event.index);
            $('.self').fadeIn(500);
            $('.annotation').delay(600).fadeIn(200);
        },
        function(event) {
            console.log('Item '+event.index);
            $('.self').fadeOut(200);
            $('.annotation').removeClass('large-annotation').text('(that\'s me)').fadeOut(200);
            $('.platypus').fadeOut(200);
        },
        function(event) {
            console.log('Item '+event.index);
            $('.platypus').fadeIn(500);
            $('.annotation').delay(600).addClass('large-annotation').text('huh?').fadeIn(100);
        },
        function(event) {
            console.log('Item '+event.index);
            $('.platypus').fadeOut(200);
            $('.annotation').fadeOut(200).removeClass('large-annotation');
        },
        function(event) {
            console.log('Item '+event.index);
        },
        function(event) {
            console.log('Item '+event.index);
        },
        function(event) {
            console.log('Item '+event.index);
        },
        function(event) {
            console.log('Item '+event.index);
        },
        function(event) {
            console.log('Item '+event.index);
        },
        function(event) {
            console.log('Item '+event.index);
        },
        function(event) {
            console.log('Item '+event.index);
        },
        function(event) {
            console.log('Item '+event.index);
        },
        function(event) {
            console.log('Item '+event.index);
        },
        function(event) {
            console.log('Item '+event.index);
        },
        function(event) {
            console.log('Item '+event.index);
        },
        function(event) {
            console.log('Item '+event.index);
        }
    ],
    offset: {
        up: '-10%',
        down: '100%'
    }
});
