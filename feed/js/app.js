const posts = [
    {
        photo: "https://media-cdn.tripadvisor.com/media/photo-s/15/ef/6a/1c/praia-de-sao-lourenco.jpg",
        description:"Dia de mar e sol!",
        timestamp: 9787793487679,
        autor: {
            name:"Vanessa Rodrigues",
            username:"vanessaa.rodriigues",
            photo:"https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/articulos/perfil-resilencia.jpg"
        }
    }, 
    {
        photo: "https://static1.patasdacasa.com.br/articles/0/17/40/@/8351-alguns-acessorios-para-cachorro-sao-indi-articles_media_mobile-3.jpg",
        description:"Hora do passeio (:",
        timestamp: 79337764887679,
        autor: {
            name:"Luiz Lima",
            username:"ll.lima",
            photo:"https://igd-wp-uploads-pluginaws.s3.amazonaws.com/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg"
        }
    }, 
    {
        photo: "https://conteudo.imguol.com.br/c/entretenimento/cf/2022/05/04/para-deixar-os-momentos-especiais-registrados-elas-ate-contrataram-um-fotografo-em-paris-1651670878698_v2_4x3.jpg",
        description:"Eu e elas em Paris!",
        timestamp: 67764488766798,
        autor: {
            name:"Carla Costa",
            username:"carla_costa",
            photo:"https://dtpr0iglcwflm.cloudfront.net/profissoes/wp-content/uploads/2019/07/iStock-969233490-555x369.jpg"
        }
    }, 
    {
        photo: "https://static.wixstatic.com/media/304ce4_87bd2252f603442cab0603e9b2589841~mv2.jpg/v1/fill/w_740,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/304ce4_87bd2252f603442cab0603e9b2589841~mv2.jpg",
        description:"Eu amo esse lugar!",
        timestamp: 47875637487111,
        autor: {
            name:"Antoni Filho",
            username:"fi_lho",
            photo:"https://images.endeavor.org.br/uploads/2016/09/deli-matsuo-2.jpg"
        }
    }, 
];

for(let i=0; i<posts.length; i++) {
    let post = document.createElement("div");
    let photo= document.createElement("img");
    let newPhoto = document.createElement("img");
    newPhoto.className = "autor-photo";
    let name = document.createElement("span");
    let username= document.createElement("span");
    let timestamp = document.createElement("a");
    let description = document.createElement("a")
   

    username.innerText = "@" + posts[i].autor.username;
    photo.src= posts[i].photo;
    timestamp.innerText = horaAtual(posts[i].timestamp);
    newPhoto.src= posts[i].autor.photo;
    description.innerText= posts[i].description;
    name.innerText=posts[i].autor.name;


    post.appendChild(username);
    post.appendChild(newPhoto);
    post.appendChild(name);
    post.appendChild(photo);
    post.appendChild(description);
    post.appendChild(timestamp);
    
    

    document.querySelector("#posts").appendChild(post);
}

function addZero(value){
    if(value<10){
        return"0"+value;
    }
    return value;
}

function horaAtual(timestamp){
    let currentDate=new Date(timestamp);
    let day= addZero(currentDate.getDate());
    let month=addZero(currentDate.getMonth()+1);
    let year= currentDate.getFullYear();
    let hour=addZero(currentDate.getHours());
    let minutes=addZero(currentDate.getMinutes());
    return day + "/" + month + "/" + year + " " + hour + ":" + minutes;
}