function runProgram(input) {
    input=input.trim().split("\n")    

        let len=+input[0].trim()
        let arr=input[1].trim().split(" ")
        let sum=0
        for(let i=0;i<len;i++){
            if(arr[i]==0){
                sum+=+i+1
                console.log(i)
            }
        }
        console.log(sum)
     
    }
    
    if (process.env.USERNAME === "jotsa") {
        runProgram(`5
        1 0 0 1 1`);
    } else {
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function (input) {
            read += input;
        });
        process.stdin.on("end", function () {
            read = read.replace(/\n$/, "");
            read = read.replace(/\n$/, "");
            runProgram(read);
        });
        process.on("SIGINT", function () {
            read = read.replace(/\n$/, "");
            runProgram(read);
            process.exit(0);
        });
    }
    
    
    