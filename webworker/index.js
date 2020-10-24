const workerFn=()=>{
    if(window.worker){
        var myWorker= new Worker('worker.js');
        myWorker.postMessage(['1','2']);
        myWorker.onmessage(e=>{
            console.log(e.data)
        });
    }
}

workerFn();