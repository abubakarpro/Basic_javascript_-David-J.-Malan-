function addone(num)
{
    throw new Error ("Erro");

}

function getnum()
{
  return  addone(10);
}

function c()
{
    console.log(getnum() + getnum());
}

 c();