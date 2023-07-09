const music = new Audio('audio/1.mp3');
//music.play();

const songs = [
    {
        id: '1',
        SongName: `Watermelon sugar <br><div class="subtitle">Harry styles</div>`,
        poster: "img/1.png",
    },
    {
        id: '2',
        SongName: `Night Changes<br><div class="subtitle">One Direction</div>`,
        poster: "img/2.png",
    },
    {
        id: "3",
        SongName: `As it was<br><div class="subtitle">Harry styles</div>`,
        poster: "img/3.png",
    },
    {
        id: "4",
        SongName: `Pehli Dafa <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/4.png",
    },
    {
        id: "5",
        SongName: `Who says <br><div class="subtitle">Selena Gomez</div>`,
        poster: "img/5.png",
    },
    {
        id: "6",
        SongName: `Tera Zikr<br><div class="subtitle">Darshan Raval</div>`,
        poster: "img/6.png",
    },
    {
        id: "7",
        SongName: `She move it like <br><div class="subtitle">Badshah</div>`,
        poster: "img/7.png",
    },
    {
        id: "8",
        SongName: `Sun saiyan <br><div class="subtitle">Masroor Fateh Ali Khan</div>`,
        poster: "img/8.png",
    },
    {
        id: "9",
        SongName: `Dandelions <br><div class="subtitle">Ruth.B</div>`,
        poster: "img/9.png",
    },
    {
        id: "10",
        SongName: `Pagaal<br> <div class="subtitle">Badshah</div>`,
        poster: "img/10.png",
    },
    {
        id: "11",
        SongName: `Heat waves <br><div class="subtitle">Weekend</div>`,
        poster: "img/11.png",
    },
    {
        id: "12",
        SongName: `Until I found you <br><div class="subtitle">Stephen Sanchez</div>`,
        poster: "img/12.png",
    },
    {
        id: "13",
        SongName: `I wanna be yours <br><div class="subtitle">Harry styles</div>`,
        poster: "img/13.png",
    },
    {
        id: "14",
        SongName: `At my worst <br><div class="subtitle">Pink Sweats</div>`,
        poster: "img/14.png",
    },
    {
        id: "15",
        SongName: `Steal My Girl <br><div class="subtitle">One Direction</div>`,
        poster: "img/15.png",
    },
    {
        id: "16",
        SongName: `Bareshein <br><div class="subtitle">Anuv Jain</div>`,
        poster: "img/16.png",
    },
    {
        id: "17",
        SongName: `People You Know <br><div class="subtitle">Selena Gomez</div>`,
        poster: "img/17.png",
    },
    {
        id: "18",
        SongName: `Pasoori <br><div class="subtitle">Shae Gill</div>`,
        poster: "img/18.png",
    },
    {
        id: "19",
        SongName: `Jaaniye <br><div class="subtitle"></div>`,
        poster: "img/19.png",
    },
    {
        id: "20",
        SongName: `Woh din <br><div class="subtitle">Arijith Singh</div>`,
        poster: "img/20.png",
    },
    {
        id: "21",
        SongName: `Tere Hawale <br><div class="subtitle">Arijith Singh</div>`,
        poster: "img/21.png",
    }
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].SongName;

});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
    }
});
const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) =>{
        el.classList.add('fa-play-circle');
        el.classList.remove('fa-pause-cirlce');
    })
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
        el.style.background = 'rgba(209, 193, 193, 0.0)';
    })
}



let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        //console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.png`;
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

        let songTitles = songs.filter((els) => {
            return els.id == index;

        });

        songTitles.forEach(elss =>{
            let { SongName } = elss;
            title.innerHTML = SongName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgba(209, 193, 193, 0.1)";
        makeAllplays();
        el.target.classList.add('fa-play-circle');
        el.target.classList.remove('fa-pause-circle');
        wave.classList.add('active1');

    });

})
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`; 

    let min2 = Math.floor(music_curr / 60); 
    let sec2 = Math.floor(music_curr % 60); 
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;


});
seek.addEventListener('change', () =>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar');
let vol_dot = document.getElementById('vol_dot');
vol.addEventListener('change', ()=>{
    if (vol.value == 0){
        vol_icon.classList.remove('fa-volume-up');
        vol_icon.classList.remove('fa-volume-down');
        vol_icon.classList.add('fa-volume-off');

    }
    if (vol.value > 0){
        vol_icon.classList.remove('fa-volume-up');
        vol_icon.classList.add('fa-volume-down');
        vol_icon.classList.remove('fa-volume-off');

    }
    if (vol.value > 50){
        vol_icon.classList.add('fa-volume-up');
        vol_icon.classList.remove('fa-volume-down');
        vol_icon.classList.remove('fa-volume-off');

    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left - `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');
index = Array.from(document.getElementsByClassName('songItem')).length;


back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.png`;
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

        let songTitles = songs.filter((els) => {
            return els.id == index;

        });

        songTitles.forEach(elss =>{
            let { SongName } = elss;
            title.innerHTML = SongName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgba(209, 193, 193, 0.1)";
        makeAllplays();
        el.target.classList.add('fa-play-circle');
        el.target.classList.remove('fa-pause-circle');
        wave.classList.add('active1');

})
next.addEventListener('click', ()=>{
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;

    }
    
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.png`;
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

        let songTitles = songs.filter((els) => {
            return els.id == index;

        });

        songTitles.forEach(elss =>{
            let { SongName } = elss;
            title.innerHTML = SongName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgba(209, 193, 193, 0.1)";
        makeAllplays();
        el.target.classList.add('fa-play-circle');
        el.target.classList.remove('fa-pause-circle');
        wave.classList.add('active1');
})











let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft +=390;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=390;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -=390;
})
pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft +=390;
})



function search_music() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('SongName');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].parentNode.style.display="none";
        }
        else {
            x[i].parentNode.style.display="block";                 
        }
    }
}


