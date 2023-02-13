const posts = [
    {
        photo: "https://media-cdn.tripadvisor.com/media/photo-s/15/ef/6a/1c/praia-de-sao-lourenco.jpg",
        description:"Eu na praia",
        timestamp: 978776488767988,
        autor: {
            name:"Vanessa Rodrigues",
            username:"vanessaa.rodriigues",
            photo:"https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/articulos/perfil-resilencia.jpg"
        }
    }, 
    {
        photo: "https://static1.patasdacasa.com.br/articles/0/17/40/@/8351-alguns-acessorios-para-cachorro-sao-indi-articles_media_mobile-3.jpg",
        description:"Eu na praia",
        timestamp: 978776488767988,
        autor: {
            name:"Vanessa Rodrigues",
            username:"vanessaa.rodriigues",
            photo:"https://igd-wp-uploads-pluginaws.s3.amazonaws.com/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg"
        }
    }, 
    {
        photo: "https://conteudo.imguol.com.br/c/entretenimento/cf/2022/05/04/para-deixar-os-momentos-especiais-registrados-elas-ate-contrataram-um-fotografo-em-paris-1651670878698_v2_4x3.jpg",
        description:"Eu na praia",
        timestamp: 978776488767988,
        autor: {
            name:"Vanessa Rodrigues",
            username:"vanessaa.rodriigues",
            photo:"https://dtpr0iglcwflm.cloudfront.net/profissoes/wp-content/uploads/2019/07/iStock-969233490-555x369.jpg"
        }
    }, 
    {
        photo: "https://static.wixstatic.com/media/304ce4_87bd2252f603442cab0603e9b2589841~mv2.jpg/v1/fill/w_740,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/304ce4_87bd2252f603442cab0603e9b2589841~mv2.jpg",
        description:"Eu na praia",
        timestamp: 978776488767988,
        autor: {
            name:"Vanessa Rodrigues",
            username:"vanessaa.rodriigues",
            photo:"https://images.endeavor.org.br/uploads/2016/09/deli-matsuo-2.jpg"
        }
    }, 
];
    // },
    // {
    //     photo: "lindk da foto********",
    //     description:"Eu na praia",
    //     timestamp: *****hora em que foi postado,
    //     autor: {
    //         name:"Vanessa Rodrigues",
    //         username:"@vanessaa.rodriigues",
    //         photo:***"link da foto do autor"
    //     }
    // },
    // {
    //     photo: "lindk da foto********",
    //     description:"Eu na praia",
    //     timestamp: *****hora em que foi postado,
    //     autor: {
    //         name:"Vanessa Rodrigues",
    //         username:"@vanessaa.rodriigues",
    //         photo:***"link da foto do autor"
    //     }
    // },
    // {
    //     photo: "lindk da foto********",
    //     description:"Eu na praia",
    //     timestamp: *****hora em que foi postado,
    //     autor: {
    //         name:"Vanessa Rodrigues",
    //         username:"@vanessaa.rodriigues",
    //         photo:***"link da foto do autor"
    //     }
    // },
    


for(let i=0; i<posts.length; i++) {
    let post = document.createElement("div");
    let username= document.createElement("span");
    let photo= document.createElement("img");
    // teste
    // let postTime= document.createElement("span");
    // postTime.innerText=horaAtual(posts[i].timestamp)
    // post.appendChild(postTime);

    username.innerText= "@" + posts[i].autor.username;
    photo.src= posts[i].photo;
    // photo.src= posts[i].autor.photo;

    
    post.appendChild(username);
    post.appendChild(photo);
    // post.className="post";
    document.querySelector("#posts").appendChild(post);
}
let postTimestamp = 'post'.timestamp;
let postDate = new Date(postTimestamp);
let postHour = addZero(postDate.getHours());
let postMinutes = addZero(postDate.getMinutes());
let postDay = addZero(postDate.getDate());
let postMonth = addZero(postDate.getMonth() + 1);
let postYear = postDate.getFullYear();

let postTime = postHour + ":" + postMinutes + " - " + postDay + "/" + postMonth + "/" + postYear;

let postElement = document.createElement("div");
postElement.innerHTML = postTime;
document.body.appendChild(postElement);
// teste
// function horaAtual(timestamp){
//     let currentDate=new Date(timestamp);
//     let day= addZero(currentDate.getDate());
//     let month=addZero(currentDate.getMonth()+1);
//     let year= currentDate.getFullYear();
//     let hour=addZero(currentDate.getHours());
//     let minutes=addZero(currentDate.getMinutes());
//     return day + "/" + month + "/" + year + " " + hour + ":" + minutes;
// }
// document.querySelector("#date-complete").innerText=horaAtual();

// let userPhoto = document.createElement("img");
// userPhoto.src = posts[i].autor.photo;
// userPhoto.className = "user-photo";
// post.appendChild(userPhoto);


// let description = document.createElement("p");
// description.innerText = posts[i].description;
// post.appendChild(description);