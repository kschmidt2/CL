// twoStep
var ts = new TwoStep({
    elements: document.querySelectorAll('.slide-item'),
    onChange: function(event) {
        console.log(event.index);
    }
});
