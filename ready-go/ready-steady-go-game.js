var num = document.getElementById('number');
var choosebtn = document.getElementById('change');



choosebtn.addEventListener('click', trafic);

function trafic() {


    if (num.value == 1) {
        document.getElementById('img1').src = 'red.png';
        document.getElementById('img2').src = 'gray.png';
        document.getElementById('img3').src = 'gray.png';
        document.getElementsByClassName('message')[0].innerHTML = "<p>Ready</p>";
        document.getElementsByClassName('message')[0].style.color = 'red';

    }
    else if (num.value == 2) {
        document.getElementById('img1').src = 'gray.png';
        document.getElementById('img2').src = 'orange.png';
        document.getElementById('img3').src = 'gray.png';
        document.getElementsByClassName('message')[0].innerHTML = "<p>Steady</p>";
        document.getElementsByClassName('message')[0].style.color = 'orange';

    } else if (num.value == 3) {
        document.getElementById('img1').src = 'gray.png';
        document.getElementById('img2').src = 'gray.png';
        document.getElementById('img3').src = 'green.png';
        document.getElementsByClassName('message')[0].innerHTML = "<p>Go</p>";
        document.getElementsByClassName('message')[0].style.color = 'green';

    } else {
        document.getElementById('img1').src = 'gray.png';
        document.getElementById('img2').src = 'gray.png';
        document.getElementById('img3').src = 'gray.png';
    }


}

