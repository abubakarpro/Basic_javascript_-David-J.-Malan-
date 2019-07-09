const fieldNames = ["Name", "Email", "Msg"];
//Zconst uppercase = [];
//for (let i = 0; i < fieldNames.length; i++) {
//uppercase.push(fieldNames[i].toUpperCase());
//}

const uppercase = fieldNames.map(function(fieldName) {
  return fieldName.toUpperCase();
});

const uppercase = fieldNames.map(fieldName => fieldName.toUpperCase());
console.log(uppercase);

const MainHeader = () => (<div><h1>LOGO</h1> Search <input type="text" /></div>);

const Page = (props) => (<MainHeader /> <div>{props.content}</div>);

<Page content="This is page content" />

<Page content="asdfjn asd hj" />

const mobiles = [{
  imagelink: 'http://google.com/asdf.jpg',
  title: 'Oppo',
  price: 10000
},
{
  imagelink: 'http://google.com/asdf.jpg',
  title: 'Samsung',
  price: 20000
},
{
  imagelink: 'http://google.com/asdf.jpg',
  title: 'Oppo',
  price: 10000
},
{
  imagelink: 'http://google.com/asdf.jpg',
  title: 'Samsung',
  price: 20000
}]

const Mobile = (props) => (<div class="mobile-item"><img src={props.imagelink} /><h2>{props.title}</h2><p>Rs. {prop.price}</p></div>);

const allMobiles = mobiles.map(function (mobile) {
  return <Mobile imagelink={mobile.imagelink} title={mobile.title} price={mobile.price}/>
});

{allMobiles}