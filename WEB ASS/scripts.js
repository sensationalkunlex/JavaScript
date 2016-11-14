var bigsection=document.getElementById('bigsection');
var smallsection=document.getElementById('smallsection');
var count_id=document.getElementById('counterId');
var arrayBigColor=  ["#FF29CC", "#808080", "#60b92d", "#55a428", "#4b9023", "#407b1e", "#356719", "#2b5214", "#203e0f","#15290a",
                    "#0b1505","#3399ff" ,"#0080ff" ,"#0080ff" ,"#0073e6" ,"#0059b3", "#004d99", "#004080",  "#003366" ,"#C0C0C0"];
var arraySmallColor=["#AF29DD","#C0C0C0", "#15290a","#0b1505", "#3399ff","#0080ff","#0080ff","#0073e6","#0059b3", "#004d99", "#004080",
                    "#60b92d", "#55a428", "#4b9023","#407b1e", "#356719","#2b5214","#203e0f","#15290a","#0b1505","#3399ff", "#0080ff"]
var index=0;
var counter=20;

function backgrdChanger(){
bigsection.style.backgroundColor=arrayBigColor[index];
smallsection.style.backgroundColor=arraySmallColor[index];
labelChanger();
index++;

if(index>=arrayBigColor.length-1){
index=0;
}
if(counter===1)
{
  counter=21;
}
counter--;

}
function labelChanger()
{

  var margValue=(7*index);
  count_id.innerHTML=counter;
  count_id.style.marginTop=margValue+"px";
  count_id.style.color=arrayBigColor[index];
  console.log(index);
}


setInterval(backgrdChanger,2000 );
