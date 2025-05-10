let pas1 = document.getElementById('pas1')
let pas2 = document.getElementById('pas2')
let sub = document.getElementById('submit')

sub.addEventListener('click', function(){
    if (pas1 != pas2){
        alert = 'wrong ppass'
    }
})