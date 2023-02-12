const samples=[{
    title: "Gato",
    src: "./audios/cat.mp3",
    speed: 0.5
},
{
    title: "Frango",
    src: "./audios/chickens.mp3",
    speed: 0.5
    
},
{
    title: "Cachorro",
    src: "./audios/dog.mp3",
    speed: 2
},
{
    title: "Pássaro",
    src: "./audios/pardal.mp3",
    speed: 1.5
}
];

let currentAudio= null;

for(let i=0; i<samples.length; i++){
let button= document.createElement("button");
button.innerText=samples[i].title;
button.addEventListener("click",function(){
    if (currentAudio != null){
        currentAudio.pause();
        currentAudio=null;
    }
    const audio = new Audio(samples[i].src);
    audio.playbackRate=samples[i].speed;
    audio.play();
    currentAudio= audio;
});
document.querySelector("#samples").appendChild(button);
}