var Checkboxes = document.querySelectorAll('input[type=checkbox]');
function changeHandler() {
    /*if ( this.value === '0' ) {
        var chang = this.parentElement.parentElement;
        chang.className = 'sit';
    } else if ( this.value === '1' ) {
        var chang = this.parentElement.parentElement;
        chang.className = 'voc';
    }  
    else if ( this.value === '2' ) {
        var chang = this.parentElement.parentElement;
        chang.className = 'idk';
     } */
    // for checkbox
    if ( this.checked) {
        var chang = this.parentElement.parentElement;
        chang.className = 'NULLs';
     }
    else
    {
        var chang = this.parentElement.parentElement;
        chang.className = 'sit';
    }
 }
 
 Array.prototype.forEach.call(Checkboxes, function(checkbox){
    checkbox.addEventListener('change', changeHandler);
 });

 