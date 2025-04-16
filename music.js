function toggleSongs(button) {
    const songList = button.nextElementSibling;

    if (songList.style.display === "none" || songList.style.display === "") {
        songList.style.display = "block"; 
    } else {
        songList.style.display = "none";
    }
}