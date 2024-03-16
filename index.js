const product = [
    {
        id: 0,
        image: '../p2.jpg',
        title: 'Sanheiser HeadSet',
        price: 120,
    },
    {
        id: 1,
        image: '../0vFHpABa.jpeg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: '../samsung23.jpeg',
        title: 'Sumsung 23 Ultra',
        price: 799,
    },
    {
        id: 3,
        image: '../iphone12.jpeg',
        title: 'iPhone 12',
        price: 989,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')