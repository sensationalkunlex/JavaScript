var stringInp=prompt("");
var arrString=[];
var arrReverse=[];
function reverseFuct() {
  var lengthArr=stringInp.length;
  arrString=stringInp;
  for(var i=lengthArr-1; i>=0; i--)
  {
  arrReverse+=arrString[i];
  }
  alert(arrReverse);
}
reverseFuct();
