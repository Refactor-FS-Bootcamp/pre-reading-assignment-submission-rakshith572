const result=document.querySelector('.result');


const getData=()=>{
    return new Promise((resolve,reject)=>{
        resolve(fetch('https://fakestoreapi.com/products').then(res=>res.json()));
    });
}
getData().then(res=>{
    const div = document.createElement('div');
    for(var i in res){
        const data=res[i];

        const div1=document.createElement('div');

        const image = data['image'];
        const title=data['title'];
        const price = data['price'];
        div1.innerHTML=`
        
            <img src=${image} >
            <br>
            
            <h1>${title}</h1>
            <br>
            <h4>${price}</h4>
        `;
        console.log(image);
        result.appendChild(div1);
    }
    // result.innerHTML=div;
});