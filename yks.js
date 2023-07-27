

function labelTurkceD(){


  let trkD,trkY,sum;
  trkD= parseFloat( document.getElementById("turkceD").value);
  trkY= parseFloat(document.getElementById("turkceY").value);
  sum= trkD+trkY;

 
  if(trkD>40 || sum>40){

    let point0= document.getElementById("turkceD").value=0;
    document.querySelector("#netTurkce").innerHTML=point0;
    document.getElementById("turkceY").value=0;
  
    alert("40 sorudan fazla ifade girilemez.");
 

  }


  if(parseFloat(trkD)<0){

    let point0= document.getElementById("turkceD").value=0;
    document.querySelector("#netTurkce").innerHTML=point0;
    document.getElementById("turkceY").value=0;
  
    alert("Negatif bir ifade girilemez.");
  } 
  
  
    if(trkD>=0 && trkD<=40){

    let point2 = document.getElementById("netTurkce").value= document.getElementById("turkceD").value - (document.getElementById("turkceY").value*0.25) ;
    document.querySelector("#netTurkce").innerHTML=point2;

    }

  

    // it provides putting 0 if there is no action in true point side
    else{

      let point0= document.getElementById("turkceD").value=0;
      document.querySelector("#netTurkce").innerHTML=point0;
      document.getElementById("turkceY").value=0;

    } 

}; 


function labelTurkceY(){

 let trkD,trkY,sum;
 trkD= parseFloat( document.getElementById("turkceD").value);
 trkY= parseFloat(document.getElementById("turkceY").value);
 sum= trkD+trkY;

 if(trkY>40 || sum>40){

  let point0= document.getElementById("turkceD").value=0;
  document.querySelector("#netTurkce").innerHTML=point0;
  document.getElementById("turkceY").value=0;

  alert("40 sorudan fazla ifade girilemez.");


}




if(parseFloat(trkY)<0){

  let point0= document.getElementById("turkceD").value=0;
  document.querySelector("#netTurkce").innerHTML=point0;
  document.getElementById("turkceY").value=0;

  alert("Negatif bir ifade girilemez.");
} 



    if(trkY>=0 && trkY<=40){

    let point2 = document.getElementById("netTurkce").value= document.getElementById("turkceD").value - (document.getElementById("turkceY").value*0.25) ;
    document.querySelector("#netTurkce").innerHTML=point2;

    }

    // it provides putting 0 if there is no action in true point side
    else{

      let point0= document.getElementById("turkceY").value=0;
      document.querySelector("#netTurkce").innerHTML=point0;

    }

 

};


function labelMat(){


  let matD,matY,sum;
  matD= parseFloat( document.getElementById("matD").value);
  matY= parseFloat(document.getElementById("matY").value);
  sum= matD+matY;
 


 if((matD>40 || matY>40) || sum>40){
 
  let point0= document.getElementById("matD").value=0;
  document.querySelector("#netMat").innerHTML=point0;
  document.getElementById("matY").value=0;

  alert("40 sorudan fazla ifade girilemez.");


}
 
 
 
 if(parseFloat(matY)<0){
 
   let point0= document.getElementById("matD").value=0;
   document.querySelector("#netMat").innerHTML=point0;
   document.getElementById("matY").value=0;
 
   alert("Negatif bir ifade girilemez.");
 } 

 if(parseFloat(matD)<0){
 
  let point0= document.getElementById("matD").value=0;
  document.querySelector("#netMat").innerHTML=point0;
  document.getElementById("matY").value=0;

  alert("Negatif bir ifade girilemez.");
} 
 
if((matD>=0 && matD<=40) || (matY>=0 && matY<=40)){
 
  let point2 = document.getElementById("netMat").value= document.getElementById("matD").value - (document.getElementById("matY").value*0.25) ;
  document.querySelector("#netMat").innerHTML=point2;

  }


   
 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("matY").value=0;
       document.querySelector("#netMat").innerHTML=point0;
       document.getElementById("matD").value=0;
     }
 


}


function labelSos(){


  let sosD,sosY,sum;
  sosD= parseFloat( document.getElementById("sosD").value);
  sosY= parseFloat(document.getElementById("sosY").value);
  sum= sosD+sosY;
 
  if((sosY>20 || sosD>20) || sum>20){
 
   let point0= document.getElementById("sosD").value=0;
   document.querySelector("#netSos").innerHTML=point0;
   document.getElementById("sosY").value=0;
 
   alert("20 sorudan fazla ifade girilemez.");
 
 
 }


 
 
 if(parseFloat(sosY)<0 || parseFloat(sosD)<0){
 
   let point0= document.getElementById("sosD").value=0;
   document.querySelector("#netSos").innerHTML=point0;
   document.getElementById("sosY").value=0;
 
   alert("Negatif bir ifade girilemez.");
 } 


 
 
 
     if((sosY>=0 && sosY<=20 )|| (sosD>=0 && sosD<=20)){
 
     let point2 = document.getElementById("netSos").value= document.getElementById("sosD").value - (document.getElementById("sosY").value*0.25) ;
     document.querySelector("#netSos").innerHTML=point2;
 
     }

  
 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("sosY").value=0;
       document.querySelector("#netSos").innerHTML=point0;
       document.getElementById("sosD").value=0;

     }
 


}
     



function labelFen(){


  let fenD,fenY,sum;
  fenD= parseFloat( document.getElementById("fenD").value);
  fenY= parseFloat(document.getElementById("fenY").value);
  sum= fenD+fenY;
 
  if((fenY>20 || fenD>20) || sum>20){
 
   let point0= document.getElementById("fenD").value=0;
   document.querySelector("#netFen").innerHTML=point0;
   document.getElementById("fenY").value=0;
 
   alert("20 sorudan fazla ifade girilemez.");
 
 
 }


 
 
 if(parseFloat(fenY)<0){
 
   let point0= document.getElementById("fenD").value=0;
   document.querySelector("#netFen").innerHTML=point0;
   document.getElementById("fenY").value=0;
 
   alert("Negatif bir ifade girilemez.");
 } 

 if(parseFloat(fenD)<0){
 
  let point0= document.getElementById("fenD").value=0;
  document.querySelector("#netFen").innerHTML=point0;
  document.getElementById("fenY").value=0;

  alert("Negatif bir ifade girilemez.");
} 
 
 
 
     if((fenY>=0 && fenY<=20) || (fenD>=0 && fenD<=20)){
 
     let point2 = document.getElementById("netFen").value= document.getElementById("fenD").value - (document.getElementById("fenY").value*0.25) ;
     document.querySelector("#netFen").innerHTML=point2;
 
     }

 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("fenY").value=0;
       document.querySelector("#netFen").innerHTML=point0;
       document.getElementById("fenD").value=0;

     }
 



    }





function labelEdeb(){


  let edebD,edebY,sum;
  edebD= parseFloat( document.getElementById("edebD").value);
  edebY= parseFloat(document.getElementById("edebY").value);
  sum= edebD+edebY;
 
  if((edebY>24 || edebD>24) || sum>24 ){
 
   let point0= document.getElementById("edebD").value=0;
   document.querySelector("#netTurkDili").innerHTML=point0;
   document.getElementById("edebY").value=0;
 
   alert("24 sorudan fazla ifade girilemez.");
 
 
 }


 if(edebY<0 || edebD<0 ){
 
  let point0= document.getElementById("edebD").value=0;
  document.querySelector("#netTurkDili").innerHTML=point0;
  document.getElementById("edebY").value=0;

  alert("Negatif bir ifade girilemez.");


}

 
 
 

 
 
 
     if((edebY>=0 && edebY<=24) || (edebD>=0 && edebD<=24)){
 
     let point2 = document.getElementById("netTurkDili").value= document.getElementById("edebD").value - (document.getElementById("edebY").value*0.25) ;
     document.querySelector("#netTurkDili").innerHTML=point2;
 
     }

 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("edebY").value=0;
       document.querySelector("#netTurkDili").innerHTML=point0;
       document.getElementById("edebD").value=0;

     }
 


}





function labelTarih1(){


  let tarih1D,tarih1Y,sum;
  tarih1D= parseFloat( document.getElementById("tarih1D").value);
  tarih1Y= parseFloat(document.getElementById("tarih1Y").value);
  sum= tarih1D+tarih1Y;
 
  if((tarih1Y>10 || tarih1D>10) || sum>10){
 
   let point0= document.getElementById("tarih1D").value=0;
   document.querySelector("#netTarih1").innerHTML=point0;
   document.getElementById("tarih1Y").value=0;
 
   alert("10 sorudan fazla ifade girilemez.");
 
 
 }


 
 
 if(parseFloat(tarih1Y)<0 || parseFloat(tarih1D)<0){
 
   let point0= document.getElementById("tarih1D").value=0;
   document.querySelector("#netTarih1").innerHTML=point0;
   document.getElementById("tarih1Y").value=0;
 
   alert("Negatif bir ifade girilemez.");
 } 


 
 
 
     if((tarih1Y>=0 && tarih1Y<=10)|| (tarih1D>=0 && tarih1D<=10)){
 
     let point2 = document.getElementById("netTarih1").value= document.getElementById("tarih1D").value - (document.getElementById("tarih1Y").value*0.25) ;
     document.querySelector("#netTarih1").innerHTML=point2;
 
     }

    
 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("tarih1Y").value=0;
       document.querySelector("#netTarih1").innerHTML=point0;
       document.getElementById("tarih1D").value=0;

     }
 


}





function labelGeography(){


  let geogD,geogY,sum;
  geogD= parseFloat(document.getElementById("geogD").value);
  geogY= parseFloat(document.getElementById("geogY").value);
  sum= geogD+geogY;
 
  if((geogY>6 || geogD>6) || sum>6){
 
   let point0= document.getElementById("geogD").value=0;
   document.querySelector("#netCografya").innerHTML=point0;
   document.getElementById("geogY").value=0;
 
   alert("6 sorudan fazla ifade girilemez.");
 
 
 }


 
 
 if(parseFloat(geogY)<0 || parseFloat(geogD)<0){
 
   let point0= document.getElementById("geogD").value=0;
   document.querySelector("#netCografya").innerHTML=point0;
   document.getElementById("geogY").value=0;
 
   alert("Negatif bir ifade girilemez.");
 } 



 
 
     if((geogY>=0 && geogY<=6) || (geogD>=0 && geogD<=6)){
 
     let point2 = document.getElementById("netCografya").value= document.getElementById("geogD").value - (document.getElementById("geogY").value*0.25) ;
     document.querySelector("#netCografya").innerHTML=point2;
 
     }

  
 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("geogY").value=0;
       document.querySelector("#netCografya").innerHTML=point0;
       document.getElementById("geogD").value=0;

     }
 


}







function labelTarih2(){


  let tarih2D,tarih2Y,sum;
  tarih2D= parseFloat( document.getElementById("tarih2D").value);
  tarih2Y= parseFloat(document.getElementById("tarih2Y").value);
  sum= tarih2D+tarih2Y;
 
  if((tarih2Y>11 || tarih2D>11)|| sum>11){
 
   let point0= document.getElementById("tarih2D").value=0;
   document.querySelector("#netTarih2").innerHTML=point0;
   document.getElementById("tarih2Y").value=0;
 
   alert("11 sorudan fazla ifade girilemez.");
 
 
 }

 

 
 if(parseFloat(tarih2Y)<0 || parseFloat(tarih2D)<0){
 
   let point0= document.getElementById("tarih2D").value=0;
   document.querySelector("#netTarih2").innerHTML=point0;
   document.getElementById("tarih2Y").value=0;
 
   alert("Negatif bir ifade girilemez.");
 } 


 
 
     if((tarih2Y>=0 && tarih2Y<=11) || (tarih2D>=0 && tarih2D<=11)){
 
     let point2 = document.getElementById("netTarih2").value= document.getElementById("tarih2D").value - (document.getElementById("tarih2Y").value*0.25) ;
     document.querySelector("#netTarih2").innerHTML=point2;
 
     }

 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("tarih2Y").value=0;
       document.querySelector("#netTarih2").innerHTML=point0;
       document.getElementById("tarih2D").value=0;

     }
 


}




function labelGeography2(){


  let geog2D,geog2Y,sum;
  geog2D= parseFloat( document.getElementById("geog2D").value);
  geog2Y= parseFloat(document.getElementById("geog2Y").value);
  sum= geog2D+geog2Y;

 
  if(geog2Y>11 || geog2D>11 || sum>11){
 
   let point0= document.getElementById("geog2D").value=0;
   document.querySelector("#netCografya2").innerHTML=point0;
   document.getElementById("geog2Y").value=0;
 
   alert("11 sorudan fazla ifade girilemez.");
 
 
 }

 
 
 if(parseFloat(geog2Y)<0 || parseFloat(geog2D)<0){
 
   let point0= document.getElementById("geog2D").value=0;
   document.querySelector("#netCografya2").innerHTML=point0;
   document.getElementById("geog2Y").value=0;
 
   alert("Negatif bir ifade girilemez.");
 } 


 
 
 
     if((geog2Y>=0 && geog2Y<=11) || (geog2D>=0 && geog2D<=11)){
 
     let point2 = document.getElementById("netCografya2").value= document.getElementById("geog2D").value - (document.getElementById("geog2Y").value*0.25) ;
     document.querySelector("#netCografya2").innerHTML=point2;
 
     }

 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("geog2Y").value=0;
       document.querySelector("#netCografya2").innerHTML=point0;
       document.getElementById("geog2D").value=0;

     }
 


}




function labelPhilosophy(){


  let philD,philY,sum;
  philD= parseFloat( document.getElementById("philD").value);
  philY= parseFloat(document.getElementById("philY").value);
  sum= philD+philY;
  
 
  if(philY>11 || philD>11 || sum>11){
 
   let point0= document.getElementById("philD").value=0;
   document.querySelector("#netFelsefe").innerHTML=point0;
   document.getElementById("philY").value=0;
 
   alert("11 sorudan fazla ifade girilemez.");
 
 
 }

 
 
 if(parseFloat(philY)<0 || parseFloat(philD)<0){
 
   let point0= document.getElementById("philD").value=0;
   document.querySelector("#netFelsefe").innerHTML=point0;
   document.getElementById("philY").value=0;
 
   alert("Negatif bir ifade girilemez.");
 } 


 
 
 
     if((philY>=0 && philY<=11) || (philD>=0 && philD<=11)){
 
     let point2 = document.getElementById("netFelsefe").value= document.getElementById("philD").value - (document.getElementById("philY").value*0.25) ;
     document.querySelector("#netFelsefe").innerHTML=point2;
 
     }

 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("philY").value=0;
       document.querySelector("#netFelsefe").innerHTML=point0;
       document.getElementById("philD").value=0;

     }
 


}




function labelDin(){


  let dinD,dinY,sum;
  dinD= parseFloat( document.getElementById("dinD").value);
  dinY= parseFloat(document.getElementById("dinY").value);
  sum= dinD+dinY;
  
 
  if(dinY>6 || dinD>6 || sum>6){
 
   let point0= document.getElementById("dinD").value=0;
   document.querySelector("#netDin").innerHTML=point0;
   document.getElementById("dinY").value=0;
 
   alert("6 sorudan fazla ifade girilemez.");
 
 
 }

 
 
 if(dinD<0 || dinY<0){
 
   let point0= document.getElementById("dinD").value=0;
   document.querySelector("#netDin").innerHTML=point0;
   document.getElementById("dinY").value=0;
 
   alert("Negatif bir ifade girilemez.");
 } 


 
 
 
     if((dinY>=0 && dinY<=6) || (dinD>=0 && dinD<=6)){
 
     let point2 = document.getElementById("netDin").value= document.getElementById("dinD").value - (document.getElementById("dinY").value*0.25) ;
     document.querySelector("#netDin").innerHTML=point2;
 
     }

 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("dinY").value=0;
       document.querySelector("#netDin").innerHTML=point0;
       document.getElementById("dinD").value=0;

     }
 


}



function labelMat2(){


  let mat2D,mat2Y,sum;
  mat2D= parseFloat( document.getElementById("mat2D").value);
  mat2Y= parseFloat(document.getElementById("mat2Y").value);
  sum= mat2D+mat2Y;
  
 
  if(mat2Y>40 || mat2D>40 || sum>40){
 
   let point0= document.getElementById("mat2D").value=0;
   document.querySelector("#netMat2").innerHTML=point0;
   document.getElementById("mat2Y").value=0;
 
   alert("40 sorudan fazla ifade girilemez.");
 
 
 }

 
 
 if(mat2D<0 || mat2Y<0){
 
   let point0= document.getElementById("mat2D").value=0;
   document.querySelector("#netMat2").innerHTML=point0;
   document.getElementById("mat2Y").value=0;
 
   alert("Negatif bir ifade girilemez.");
 } 


 
 
 
     if((mat2Y>=0 && mat2Y<=40) || (mat2D>=0 && mat2D<=40)){
 
     let point2 = document.getElementById("netMat2").value= document.getElementById("mat2D").value - (document.getElementById("mat2Y").value*0.25) ;
     document.querySelector("#netMat2").innerHTML=point2;
 
     }

 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("mat2Y").value=0;
       document.querySelector("#netMat2").innerHTML=point0;
       document.getElementById("mat2D").value=0;

     }
 


}




function labelFizik(){


  let fizikD,fizikY,sum;
  fizikD= parseFloat( document.getElementById("fizikD").value);
  fizikY= parseFloat(document.getElementById("fizikY").value);
  sum= dinD+dinY;
  
 
  if(fizikY>14 || fizikD>14 || sum>14){
 
   let point0= document.getElementById("fizikD").value=0;
   document.querySelector("#netFizik").innerHTML=point0;
   document.getElementById("fizikY").value=0;
 
   alert("14 sorudan fazla ifade girilemez.");
 
 
 }

 
 
 if(fizikD<0 || fizikY<0){
 
   let point0= document.getElementById("fizikD").value=0;
   document.querySelector("#netFizik").innerHTML=point0;
   document.getElementById("fizikY").value=0;
 
   alert("Negatif bir ifade girilemez.");
 } 


 
 
 
     if((fizikY>=0 && fizikY<=14) || (fizikD>=0 && fizikD<=14)){
 
     let point2 = document.getElementById("netFizik").value= document.getElementById("fizikD").value - (document.getElementById("fizikY").value*0.25) ;
     document.querySelector("#netFizik").innerHTML=point2;
 
     }

 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("fizikY").value=0;
       document.querySelector("#netFizik").innerHTML=point0;
       document.getElementById("fizikD").value=0;

     }
 


}






function labelKimya(){


  let kimyaD,kimyaY,sum;
  kimyaD= parseFloat( document.getElementById("kimyaD").value);
  kimyaY= parseFloat(document.getElementById("kimyaY").value);
  sum= kimyaD+kimyaY;
  
 
  if(kimyaY>13 || kimyaD>13 || sum>13){
 
   let point0= document.getElementById("kimyaD").value=0;
   document.querySelector("#netKimya").innerHTML=point0;
   document.getElementById("kimyaY").value=0;
 
   alert("13 sorudan fazla ifade girilemez.");
 
 
 }

 
 
 if(kimyaD<0 || kimyaY<0){
 
   let point0= document.getElementById("kimyaD").value=0;
   document.querySelector("#netKimya").innerHTML=point0;
   document.getElementById("kimyaY").value=0;
 
   alert("Negatif bir ifade girilemez.");
 } 


 
 
 
     if((kimyaY>=0 && kimyaY<=13) || (kimyaD>=0 && kimyaD<=13)){
 
     let point2 = document.getElementById("netKimya").value= document.getElementById("kimyaD").value - (document.getElementById("kimyaY").value*0.25) ;
     document.querySelector("#netKimya").innerHTML=point2;
 
     }

 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("kimyaY").value=0;
       document.querySelector("#netKimya").innerHTML=point0;
       document.getElementById("kimyaD").value=0;

     }
 


}



//Biology


function labelBio(){


  let bioD,bioY,sum;
  bioD= parseFloat( document.getElementById("bioD").value);
  bioY= parseFloat(document.getElementById("bioY").value);
  sum= bioD+bioY;
  
 
  if(bioY>13 || bioD>13 || sum>13){
 
   let point0= document.getElementById("bioD").value=0;
   document.querySelector("#netBio").innerHTML=point0;
   document.getElementById("bioY").value=0;
 
   alert("13 sorudan fazla ifade girilemez.");
 
 
 }

 
 
 if(bioD<0 || bioY<0){
 
   let point0= document.getElementById("bioD").value=0;
   document.querySelector("#netBio").innerHTML=point0;
   document.getElementById("bioY").value=0;
 
   alert("Negatif bir ifade girilemez.");
 } 


 
 
 
     if((bioY>=0 && bioY<=13) || (bioD>=0 && bioD<=13)){
 
     let point2 = document.getElementById("netBio").value= document.getElementById("bioD").value - (document.getElementById("bioY").value*0.25) ;
     document.querySelector("#netBio").innerHTML=point2;
 
     }

 
     // it provides putting 0 if there is no action in true point side
     else{
 
       let point0= document.getElementById("bioY").value=0;
       document.querySelector("#netBio").innerHTML=point0;
       document.getElementById("bioD").value=0;

     }
 


}



// OBP , Diploma section

function inputDiploma(){

let diplomaMark = parseFloat(document.getElementById("diplomaMark").value);


if(diplomaMark>=50 && diplomaMark<=100){

document.getElementById("obpMark").value=parseFloat(document.getElementById("diplomaMark").value)*5;


}


if(diplomaMark<50 || diplomaMark>100){

  document.getElementById("obpMark").value="";
  document.getElementById("diplomaMark").value="";

  alert("Diploma notunu 50 ila 100 arasında giriniz.");
  
}

if(isNaN(diplomaMark)==true){

  alert("Lütfen geçerli karakterlerle işlem yapınız.");
  document.getElementById("obpMark").value="";
  document.getElementById("diplomaMark").value="";

}



}


function inputObp(){

  let obpMark = parseFloat(document.getElementById("obpMark").value);
  
  
  if(obpMark>=250 && obpMark<=500){
  
  let to_diploma = parseFloat(document.getElementById("obpMark").value)/5;
  document.getElementById("diplomaMark").value = to_diploma;
  
  }
  
  if(obpMark<250 || obpMark>500){

    document.getElementById("obpMark").value="";
    document.getElementById("diplomaMark").value="";
  
    alert("Ortaöğretim Başarı Puanını 250 ila 500 arasında giriniz.");
    
  }
  

  if(isNaN(obpMark)==true){

    alert("Lütfen geçerli karakterlerle işlem yapınız.");
    document.getElementById("obpMark").value="";
    document.getElementById("diplomaMark").value="";
  
  }
  
  
  }


  //checkbox

     function rememberMe(){

      var checkbox = document.getElementById('rememberMe');

  


     }





    function calculateMark(){

        var calculateTyt,calculateSay,calculateEa,calculateSozel;
        var matC,trkC,sosC,fenC;
        var tytHam,tytyYer,sayHam,sayYer,eaHam,eaYer,sozelHam,sozelYer;
        var obpfor = parseFloat(document.getElementById("obpMark").value);
        var checkbox = document.getElementById('rememberMe');

        matC= parseFloat(document.getElementById("netMat").value);
        trkC= parseFloat(document.getElementById("netTurkce").value)
        sosC= parseFloat(document.getElementById("netSos").value);
        fenC= parseFloat(document.getElementById("netFen").value);


        var edebC,tarih1C, cografyaC, mat2C, tarih2C, cografya2C, felsefeC, dinC, fizikC, kimyaC, biyoC;

        edebC= parseFloat(document.getElementById("netTurkDili").value);
        tarih1C= parseFloat(document.getElementById("netTarih1").value);
        cografyaC= parseFloat(document.getElementById("netCografya").value);
        mat2C= parseFloat(document.getElementById("netMat2").value);
        tarih2C= parseFloat(document.getElementById("netTarih2").value);
        cografya2C= parseFloat(document.getElementById("netCografya2").value);
        felsefeC= parseFloat(document.getElementById("netFelsefe").value);
        dinC= parseFloat(document.getElementById("netDin").value);
        fizikC= parseFloat(document.getElementById("netFizik").value);
        kimyaC= parseFloat(document.getElementById("netKimya").value);
        biyoC= parseFloat(document.getElementById("netBio").value);

        

        if(isNaN(matC)==true){

            matC=0;
        }

        if( isNaN(trkC)==true){

          trkC=0;

        }

        if(isNaN(sosC)==true){

          sosC=0;
        }

        if(isNaN(fenC)==true){

          fenC=0;

        }

          //TYT Ham Puanı
          calculateTyt = (matC+trkC)*3.3 + (sosC+fenC)*3.4 + 100;
          document.getElementById("hamTyt").innerHTML=calculateTyt.toFixed(3);





        //for AYT Section

    if(isNaN(edebC)==true){

          edebC=0;
      }

    if(isNaN(mat2C)==true){

        mat2C=0;
    }
    
     if(isNaN(tarih1C)==true){

       tarih1C=0;
    }

     if(isNaN(tarih2C)==true){

      tarih2C=0;
   }

      if(isNaN(cografyaC)==true){

      cografyaC=0;
  }

      if(isNaN(cografya2C)==true){

      cografya2C=0;
  }


    if(isNaN(felsefeC)==true){

       felsefeC=0;
  }

    if(isNaN(fizikC)==true){

      fizikC=0;
  }

    if(isNaN(kimyaC)==true){

       kimyaC=0;
    }


    if(isNaN(biyoC)==true){

      biyoC=0;
  } 

    if(isNaN(dinC)==true){

      dinC=0;
  } 


        // EA Calculation

        calculateEa= (mat2C+edebC)*3 + (tarih1C*2.803) + (cografyaC*3.33);
        document.getElementById("hamEa").innerHTML=calculateEa.toFixed(3);

        // SAY Calculation
        calculateSay= (mat2C*3) + (fizikC*2.857) + (kimyaC*3.077) + (biyoC*3.077);
        document.getElementById("hamSay").innerHTML=calculateSay.toFixed(3);

        //SOZ Calculation
        calculateSozel= (edebC+felsefeC)*3 + (tarih1C*2.802) + (cografyaC*3.33) + (tarih2C+cografya2C)*2.91 + (dinC*3.33);
        document.getElementById("hamSozel").innerHTML=calculateSozel.toFixed(3);
       
              
        if (checkbox.checked == false)
        {

          
          document.getElementById("yerTyt").innerHTML= (calculateTyt+(obpfor*0.12)).toFixed(3);
          document.getElementById("yerEa").innerHTML=(calculateEa+(obpfor*0.12)).toFixed(3);
          document.getElementById("yerSay").innerHTML=(calculateSay+(obpfor*0.12)).toFixed(3);
          document.getElementById("yerSozel").innerHTML=(calculateSozel+(obpfor*0.12)).toFixed(3);


        }

        if (checkbox.checked != false)
        {

          
          document.getElementById("yerTyt").innerHTML= (calculateTyt+((obpfor*0.12)/2)).toFixed(3);
          document.getElementById("yerEa").innerHTML=(calculateEa+((obpfor*0.12)/2)).toFixed(3);
          document.getElementById("yerSay").innerHTML=(calculateSay+((obpfor*0.12)/2)).toFixed(3);
          document.getElementById("yerSozel").innerHTML=(calculateSozel+((obpfor*0.12)/2)).toFixed(3);

          

        }



        //Possibilities for calculation


        if(matC<0.5 || trkC<0.5){

            alert( "Temel Matematik Testi veya Türkçe Testinden en az 0,5 ham puan alma şartını sağlayamadığınız için TYT Puanınız hesaplanamamıştır.")

        }

        if(calculateTyt<150){

          document.getElementById("yerEa").innerHTML= ("0.00");
          document.getElementById("yerSay").innerHTML= ("0.00");
          document.getElementById("yerSozel").innerHTML= ("0.00");

          alert("Temel Yeterlilik Testi sınavınız 150 ham puanın altında olduğu için Alan Yeterlilik Testi yerleştirme sınavı puanınız hesaplanamamıştır. ")

      }


      if(calculateTyt<150 && (matC<0.5 || trkC<0.5)){

        document.getElementById("yerEa").innerHTML= ("0.00");
        document.getElementById("yerSay").innerHTML= ("0.00");
        document.getElementById("yerSozel").innerHTML= ("0.00");
        document.getElementById("yerTyt").innerHTML= ("0.00");

        alert("Temel Yeterlilik Testi sınavınız 150 ham puanın altında olduğu "
        +"ve Temel Matematik Testi veya Türkçe Testinden en az 0,5 ham puan alma"
        +" şartını sağlayamadığınız Alan Yeterlilik Testi yerleştirme sınavı puanınız hesaplanamamıştır. ")

    }

        if(calculateEa<180){

          document.getElementById("yerEa").innerHTML= ("0.00");


        }

        if(calculateSay<180){

          document.getElementById("yerSay").innerHTML= ("0.00");


        }

        if(calculateSozel<180){

          document.getElementById("yerSozel").innerHTML= ("0.00");


        }
      

    }






    function removeCalculation() {


     document.querySelector("#obpMark").value="";
     document.querySelector("#diplomaMark").value="";

    
     document.getElementById("yerTyt").innerHTML= "-";
     document.getElementById("yerEa").innerHTML="-";
     document.getElementById("yerSay").innerHTML="-";
     document.getElementById("yerSozel").innerHTML="-";


     document.getElementById("hamTyt").innerHTML= "-";
     document.getElementById("hamEa").innerHTML="-";
     document.getElementById("hamSay").innerHTML="-";
     document.getElementById("hamSozel").innerHTML="-";



    let inputFields = document.querySelectorAll("input");

    inputFields.forEach(input => input.value ="");


    
    //CLEARING
    let clearingLabels1 = document.querySelectorAll(".labelTyt");

    clearingLabels1.forEach(label => label.innerHTML="-");


    
    //CLEARING OTHER CLASS
    let clearingLabels2 = document.querySelectorAll(".resultsLabel");

    clearingLabels2.forEach(label => label.innerHTML="-");



    }