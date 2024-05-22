document.addEventListener('DOMContentLoaded', function() {
    let currentSongIndex = 0;
    let isPlaying = false;

    const playPauseButton = document.getElementById('play-pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const audioPlayer = document.getElementById('audio-player');
    const currentSongTitle = document.querySelector('.current-song .song-info h3');
    const currentSongArtist = document.querySelector('.current-song .song-info p');
    const currentSongCover = document.querySelector('.current-song img');

    const songs = [
        {
            title: "Janiye",
            artist: "Vishal Mishra",
            cover: "coversongimg/janiye.jpg",
            file: "Songs/Janiye.mp3"
        },
        {
            title: "Kaise Hua",
            artist: "Vishal Mishra",
            cover: "coversongimg/kaisehua.jpg",
            file: "Songs/Kaise Hua.mp3"
        },
        {
            title: "Kaun Tujhe",
            artist: "Palak Muchhal",
            cover: "coversongimg/kauntujhe.jpg",
            file: "Songs/Kaun Tujhe.mp3"
        },
        {
            title: "Pehle Bhi Main",
            artist: "Vishal Mishra",
            cover: "coversongimg/pehlebhimain.jpg",
            file: "Songs/Pehle Bhi Main.mp3"
        },
        {
            title: "Phir Kabhi",
            artist: "Arjit Singh",
            cover: "coversongimg/phirkabhi.jpg",
            file: "Songs/Phir Kabhi.mp3"
        }
    ];

    function loadSong(songIndex) {
        const song = songs[songIndex];
        currentSongTitle.textContent = song.title;
        currentSongArtist.textContent = song.artist;
        currentSongCover.src = song.cover;
        audioPlayer.src = song.file;
    }

    function playPauseSong() {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseButton.textContent = 'Play';
        } else {
            audioPlayer.play();
            playPauseButton.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        if (isPlaying) {
            audioPlayer.play();
        }
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        if (isPlaying) {
            audioPlayer.play();
        }
    }

    playPauseButton.addEventListener('click', playPauseSong);
    prevButton.addEventListener('click', prevSong);
    nextButton.addEventListener('click', nextSong);

    // Add event listeners to play buttons on each song
    document.querySelectorAll('.song .play-button').forEach((button, index) => {
        button.addEventListener('click', () => {
            loadSong(index);
            audioPlayer.play();
            playPauseButton.textContent = 'Pause';
            isPlaying = true;
        });
    });

    // Load the first song initially
    loadSong(currentSongIndex);
});
