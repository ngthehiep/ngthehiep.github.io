const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const heading = $('header h2')
const cd = $('.cd');
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const player = $('.player')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const repeatBtn = $('.btn-repeat')
const randomBtn = $('.btn-random')
const playList = $('.playlist')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: 'Thủ Đô Cypher',
            singer: 'RPT Orijinn, LOW G, RZMas, RPT MCK',
            path: './assets/audio/Thủ Đô Cypher - BeckStage X Bitis Hunter ( RPT Orijinn, LOW G, RZMas, RPT MCK).mp3',
            image: 'https://i1.sndcdn.com/artworks-acvKs7r8sVX92gpE-OyXAYQ-t500x500.jpg'
        },
        {
            name: 'Flexin trên Circle K',
            singer: 'Low G',
            path: './assets/audio/FlexinTrenCircleK-LowG-6667742.mp3',
            image: 'https://images.genius.com/3c1458d60e6d3342a199976d9f5bb75c.500x500x1.jpg'
        },
        {
            name: 'Chán gái 707',
            singer: 'Low G',
            path: './assets/audio/Chán Gái 707 - Low G - Rap Nhà Làm.mp3',
            image: 'https://i.ytimg.com/vi/_qPdi9D2rHA/maxresdefault.jpg'
        },
        {
            name: 'Ice Man',
            singer: 'MCK Sol7',
            path: './assets/audio/Iceman-Sol7RPTMCKDCOD-7031753.mp3',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2021/03/03/3/4/4/5/1614785212642_640.jpg'
        },
        {
            name: 'Tay To',
            singer: 'RPT MCK x RPT PhongKhin',
            path: './assets/audio/Rapitalove EP- Tay To - RPT MCK x RPT PhongKhin (Prod. by RPT PhongKhin) [Official Lyric Video].mp3',
            image: 'https://i.ytimg.com/vi/cKBRHaPdjbc/maxresdefault.jpg'
        },
        {
            name: 'Sunday Cypher',
            singer: '16 Typh, 16 BrT, Lil Wuyn, R.I.C',
            path: './assets/audio/16 Typh, 16 BrT, Lil Wuyn, R.I.C - SUNDAY HIPHOP CYPHER (Official MV).mp3',
            image: 'https://media.viezone.vn/prod/2021/11/19/large_256832223_3041639466164128_8921494775007693870_n_11f56c6ae2.jpg'
        },
        {
            name: 'An thần',
            singer: 'Low G (ft. Thắng)',
            path: './assets/audio/An Thần (ft. Thắng) - Low G - Rap Nhà Làm.mp3',
            image: 'https://i.ytimg.com/vi/J7eYhM6wXPo/maxresdefault.jpg'
        },
        {
            name: 'Cắt kéo trên Lênin',
            singer: 'Low G',
            path: './assets/audio/Cắt kéo trên Lênin - Low G - Rap Nhà Làm (Lyric video).mp3',
            image: 'https://i1.sndcdn.com/artworks-000612558101-zfgw28-t500x500.jpg'
        },
        {
            name: 'Don\'t Waste My Time',
            singer: 'Lil Wuyn x 16 Typh',
            path: './assets/audio/Lil Wuyn x 16 Typh - Dont Waste My Time (Official Video).mp3',
            image: 'https://i.ytimg.com/vi/y-Tut29zvPE/maxresdefault.jpg'
        },
        {
            name: 'ÔNG bà già tao lo hết',
            singer: 'BÌNH GOLD ft. SHADY',
            path: './assets/audio/BÌNH GOLD ft. SHADY - ÔNG BÀ GIÀ TAO LO HẾT - Official MV.mp3',
            image: 'https://i.ytimg.com/vi/siEhdhxiqHg/maxresdefault.jpg'
        }
    ],

    /************* RENDER PLAYLIST *************/
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}');"></div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        playList.innerHTML = htmls.join('')
    },
    /************* XỬ LÝ CÁC EVENTS *************/
    handleEvens: function() {
        const _this = this
        
        // XỬ LÝ PHÓNG TO / THU NHỎ CD
        const cdwidth = cd.offsetWidth
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCDWidth = cdwidth - scrollTop
            cd.style.width = newCDWidth > 0 ? newCDWidth + 'px' : 0 + 'px'
            cd.style.opacity = newCDWidth / cdwidth
        }

        // XỬ LÝ KHI QUAY / DỪNG CD
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        // XỬ LÝ KHI CLICK PLAY
        playBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }
        // Khi song play
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }
        // Khi song pause
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }
        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }
        // Khi tua bài hát - Dùng oninput thay onchange để fix bug
        progress.oninput = function(e) {
            const seekTime = audio.duration * e.target.value / 100
            audio.currentTime = seekTime
        }

        // KHI NEXT / PREV SONG
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        // KHI CLICK RANDOM SONG 
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        // XỬ LÝ TỰ NEXT KHI AUDIO ENDED
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play() // khi click repeat
            } else {
                nextBtn.click() // tự next
            }
        }

        // XỬ LÝ LẶP LẠI SONG
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        // XỬ LÝ KHI CLICK SONG PLAYLIST
        playList.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)')
            const option = e.target.closest('.option')
            // khi click vào song
            if(songNode || option) {
                if(songNode && !option) {
                    _this.currentIndex = Number(songNode.dataset.index) //data-index
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }
                // song option
                if(option) {
                }
            }
        }
    },
    /************* ĐỊNH NGHĨA PROPERTIES *************/
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get() {
                return this.songs[this.currentIndex]
            }
        })
    },
    /************* LOAD CURRENT SONG *************/
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    /************* NEXT / PREV SONG *************/
    nextSong: function() {
        this.currentIndex ++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex --
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    /*************** RANDOM SONG ***************/
    randomSong: function() {
        let arr = []
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while(this.currentIndex === newIndex)
        this.currentIndex = newIndex
        arr.push
        this.loadCurrentSong()
    },
    scrollToActiveSong: function() {
        $('.song.active').scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    },

    /*************** START ***************/
    start: function() {
        // Định nghĩa các thuộc tính cho Object
        this.defineProperties()
        // Lắng nghe / xử lý các sự kiện (DOM Events)
        this.handleEvens()
        // Tải thông tin bài hát đầu tiên vào UI 
        this.loadCurrentSong()
        // Render playlist
        this.render()
    }
}

app.start();