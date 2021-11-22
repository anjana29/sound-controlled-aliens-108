function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vHBGgBgaA/model.json',modelready);
    
}
function modelready(){
    classifier.classify(gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_Number_r=Math.floor(Math.random()*255)+1;
        random_Number_g=Math.floor(Math.random()*255)+1;
        random_Number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("resultlabel").innerHTML='I can hear-'+results[0].label;
        document.getElementById("resultconfidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("resultlabel").style.color="rgb("+random_Number_r+","+random_Number_g+","+random_Number_b+")";
        document.getElementById("resultconfidence").style.color="rgb("+random_Number_r+","+random_Number_g+","+random_Number_b+")";
        var img_1=document.getElementById('alien1');  
        var img_2=document.getElementById('alien2');
        var img_3=document.getElementById('alien3');
        var img_4=document.getElementById('alien4');
        if(results[0].label=="clap"){
            img_1.src='aliens-01.gif';
            img_2.src='aliens-02.png';
            img_3.src='aliens-03.png';
            img_4.src='aliens-04.png';
        }
        else if(results[0].label=="bell"){
            img_1.src='aliens-01.png';
            img_2.src='aliens-02.gif';
            img_3.src='aliens-03.png';
            img_4.src='aliens-04.png';
        }
        else if(results[0].label=="ringtone"){
            img_1.src='aliens-01.png';
            img_2.src='aliens-02.png';
            img_3.src='aliens-03.gif';
            img_4.src='aliens-04.png';
        }
        else{
            img_1.src='aliens-01.png';
            img_2.src='aliens-02.png';
            img_3.src='aliens-03.png';
            img_4.src='aliens-04.gif';   
        }

    }

}