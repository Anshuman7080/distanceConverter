(function () {
    "use strict";
    let convertType='miles'

    document.addEventListener('keydown',function(evt) {
        let key=evt.key;
        if(key==='k' || key==='K'){
            convertType='kilometers';

            document.querySelector('h1').innerHTML='Kilometers To Miles Converter';
            document.querySelector('p').innerHTML='Type in a number of Kilometers and click the button to convert the distance to Miles';
        }
        else if(key==='M' || key==='m'){
            convertType='miles';
            document.querySelector('h1').innerHTML='Miles To Kilometers Converter';
            document.querySelector('p').innerHTML='Type in a number of Miles and click the button to convert the distance to Kilometers';
        }
        
    });
    document.getElementById('convert').addEventListener('submit',function(event){
        event.preventDefault();
        let distance=document.getElementById('distance').value;
        distance=parseFloat(distance);
        if(distance){ 
            if(convertType==='miles'){
            let conversion=(distance*1.609334).toFixed(2);
            document.getElementById('answer').innerHTML=`<h2>${distance} Miles converted into Kilometers ${conversion}</h2>`
            }
            else if(convertType==='kilometers'){
                let conversion=(distance*0.621371).toFixed(2);
                document.getElementById('answer').innerHTML=`<h2>${distance} Kilometers converted into Miless ${conversion}`
            }
        }
         else{
            document.getElementById('answer').innerHTML='Enter correct Value  '
        }
    });
        
})();
