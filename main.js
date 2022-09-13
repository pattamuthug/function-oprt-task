var box1 = document.getElementById("box1");
var box2 = document.getElementById('box2');
var oprt = document.getElementById('oprt');
var result = document.getElementById('result')

oprt.addEventListener('change',()=>{
   if(oprt.value=="add"){
    result.innerText = parseInt(box1.value)+parseInt(box2.value)
   }
   else if(oprt.value=="sub"){
    result.innerText = parseInt(box1.value)-parseInt(box2.value)
   }
   else if(oprt.value=="div"){
    result.innerText = parseInt(box1.value)/parseInt(box2.value)
   }
   else if(oprt.value=="mult"){
    result.innerText = parseInt(box1.value)*parseInt(box2.value)
   }
   else if(oprt.value=="pow"){
    result.innerText = parseInt(box1.value)**parseInt(box2.value)
   }
   else{
    result.innerText = "enter the number"
   }
});