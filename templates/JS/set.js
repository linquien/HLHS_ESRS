var radios = document.querySelectorAll('input[type=checkbox]');
function changeHandler(event) {
    if ( this.value === '0' ) {
        var chang = this.parentElement.parentElement;
        chang.className = 'sit';
    } else if ( this.value === '1' ) {
        var chang = this.parentElement.parentElement;
        chang.className = 'voc';
    }  
    else if ( this.value === '2' ) {
        var chang = this.parentElement.parentElement;
        chang.className = 'idk';
     }
    // for checkbox
    else if ( this.value == 'on' ) {
        var chang = this.parentElement.parentElement;
        chang.className = 'idk';
     }   
 }
 
 Array.prototype.forEach.call(radios, function(radio) {
    radio.addEventListener('change', changeHandler);
 });