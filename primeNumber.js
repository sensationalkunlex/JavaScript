var value=prompt("Supply any numerical value to test");
function primeNumber(val)
{
  var vertify=0;
  var counter=2;
  var limit= value;
  if(value==counter)
  {
  vertify++;
  }
for(counter=2; counter<limit; counter++)
{

  if(limit%counter===0)
{

    vertify++;

}

}
return vertify;
}
if(primeNumber(value)>=1)
{
  alert("it is not a primeNumber");
}
else
{
  alert("it is a primeNumber");
}
