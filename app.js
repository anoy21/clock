class Stopwatch {
    constructor() {
        this.runtime = 0;
        this.clockElements = document.querySelectorAll(".clock");
        this.startButtons = document.querySelectorAll(".start");
        this.stopButtons = document.querySelectorAll(".stop");
        this.startAllButton = document.getElementById("startALL");
        this.stopAllButton = document.getElementById("stopALL");
        this.timers = [];
        


        this.startButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                this.start(index);
            });
        });

        this.stopButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                this.stop(index);
            });
        });

        this.startAllButton.addEventListener("click", () => {
            this.startAll();
        });

        this.stopAllButton.addEventListener("click", () => {
            this.stopAll();
        });
    }

    start(index) {
        this.timers[index] = setInterval(() => {
            this.runtime++;
            this.updateTime(index);
        }, 1000);
    }

    stop(index) {
        clearInterval(this.timers[index]);
    }

    startAll() {
        this.timers.forEach((timer, index) => {
            this.start(index);
        });
    }

    stopAll() {
        this.timers.forEach((timer, index) => {
            this.stop(index);
        });
    }

    updateTime(index) {
        const minutes = Math.floor(this.runtime / 60);
        const seconds = this.runtime % 60;

        // Update the clock display for the specific index
        this.clockElements[index].textContent = `${minutes}:${seconds}`;
    }
}

// Initialize the stopwatch
const myStopwatch = new Stopwatch();
