addEventListener('DOMContentLoaded', function(){
    var gallerybox1 = document.querySelector('.gallery-box1');
    var gallerybox2 = document.querySelector('.gallery-box2');
    var name1 = document.querySelector('.product-name1');
    var name2 = document.querySelector('.product-name2');

    gallerybox1.addEventListener('mouseover', function() {
        name1.classList.add('hide');
    });

    gallerybox1.addEventListener('mouseout', function() {
        name1.classList.remove('hide');
    });

    gallerybox2.addEventListener('mouseover', function() {
        name2.classList.add('hide');
    });

    gallerybox2.addEventListener('mouseout', function() {
        name2.classList.remove('hide');
    });
    //Slider krzesła

    var leftarrow = document.querySelector('.left-arrow');
    var rightarrow = document.querySelector('.right-arrow');
    var slideimg = document.querySelector('.slideimg');
        slideimg.classList.add('slider');
    var list = slideimg.querySelector('ul').children;
    var index = 0;
        list[index].classList.add('visible');

    rightarrow.addEventListener('click', function(){

        list[index].classList.remove('visible');
        index += 1;
        if(index > 2) {
            index = 0;
        }
        list[index].classList.add('visible');
});

    leftarrow.addEventListener('click', function(){

        list[index].classList.remove('visible');
        index -= 1;
        if(index < 0) {
            index = 0;
        }
        list[index].classList.add('visible');
});

// kalkulator
        var dropDown = document.querySelectorAll('.drop_down_list');
        var elements = document.querySelectorAll('.list_panel>li');
        var checkbox = document.querySelector('#transport');
        var twojFotel = document.querySelector('.panel_left h4');
        var color =  document.querySelector('.panel_left .color');
        var pattern =  document.querySelector('.panel_left .pattern');
        var transport =  document.querySelector('.panel_left .transport');
        var chairPrice = document.querySelector('.panel_right h4');
        var colorPrice = document.querySelector('.panel_right .color');
        var patternPrice = document.querySelector('.panel_right .pattern');
        var transportPrice = document.querySelector('.panel_right .transport');
        var labels = document.querySelectorAll('.list_label');

        //sumowanie
        function calculatePrice() {
            var values = document.querySelectorAll('.panel_right .value'); //pobieram wszystkie wartosci
            var sum = 0; //zeruje sumę
            for(var i = 0; i<values.length; ++i) {
                var value = parseFloat(values[i].innerText);

                if(!isNaN(value)) {
                    //sumuje liczby różne od NaN
                    sum += parseFloat(values[i].innerText);//dodaje kolejne wartości
                }
            }

            var price = document.querySelector('.sum'); //pobieram element, gdzie chce zapisać sumę
            price.innerText = sum; //przyisuję wyliczoną sumę
        }

        //rozwijana lista

        for (var i=0 ; i < dropDown.length; i++) {
            dropDown[i].addEventListener('click', function(){
                 this.querySelector('.list_panel').classList.toggle('visible');
            });
        }




        //wybór krzesła

        for(var i = 0; i < elements.length; i++){

            if(i < 3) {
            elements[i].addEventListener('click', function(){
                twojFotel.innerText = this.innerText;
                chairPrice.innerText = this.dataset.price;
                labels[0].innerText = this.innerText;
                calculatePrice();

            });
        }
        //wybór materiału
        else if(i < 6) {
        elements[i].addEventListener('click', function(){
            color.innerText = this.innerText;
            colorPrice.innerText = this.dataset.price;
            labels[1].innerText = this.innerText;
            calculatePrice();

            });
        }
        //wybór wzoru
        else {
        elements[i].addEventListener('click', function(){
            pattern.innerText = this.innerText;
            patternPrice.innerText = this.dataset.price;
            labels[2].innerText = this.innerText;
            calculatePrice();
            });
        }
    }

    //checkbox transport

    checkbox.addEventListener('click', function(){
        if(checkbox.checked) {
            transport.innerText = 'Transport';
            transportPrice.innerText = checkbox.dataset.price;
        }
        else {
            transport.innerText = '';
            transportPrice.innerText = '';
        }
        calculatePrice();
    });
});