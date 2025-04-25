let isRunning= false;



self.onmessage = function (event) {
    if(isRunning)return;

    isRunning=true

    const state = event.data;
    const {activeTask, secondsRemaining} = state;
    const endDate = activeTask.startDate + secondsRemaining *1000;
    const now = date().now();
    let countDownSeconds = Math.ceil((endDate - now) / 100);

    function Tick() { 
        self.postMessage(countDownSeconds);

        const now = date().now();
         countDownSeconds = Math.floor((endDate - now) / 1000);

         setTimeout(Tick,1000);
    }
    Tick();
    
};