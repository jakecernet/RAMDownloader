const progressBar = document.getElementById('file');
let value = 0;

function updateProgress() {
    if (value <= 96) {
        progressBar.value = value;
        value++;
        setTimeout(updateProgress, 100);
    }
}

updateProgress();