// twoStep
var ts = new TwoStep({
    elements: document.querySelectorAll('#container .slide-item'),
    onChange: function(event) {
        console.log('Item '+event.index);
    },
    stick: document.querySelector('#container .sticky-outer')
    // narrative: [
    //     function(event) {
    //         $('#container .images').text('Item '+event.index);
    //     },
    //     function(event) {
    //         $('#container .images').text('Item '+event.index);
    //     },
    //     function(event) {
    //         $('#container .images').text('Item '+event.index);
    //     },
    //     function(event) {
    //         $('#container .images').text('Item '+event.index);
    //     }
    // ]
});
