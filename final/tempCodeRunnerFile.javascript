function runProgram(input) {
    input=input.trim().split("\n")
    let dim=+input[0].trim()
    input.shift()
    let newarr=new Array(dim).fill(null).map(e=>new Array(dim).fill(null))
    let arr=[]
    for(let i=0;i<dim;i++){
        arr[i]=input[i].trim().split(" ")
    }
    
    for(let i=dim-1;i>=0;i--){
        for(let j=0;j<dim;j++){
            newarr[j][dim-i-1]=arr[j][i]
        }
    }
    newarr.forEach(e=>console.log(e.join(" ")))
}
if (process.env.USERNAME === "jotsa") {
    runProgram(`4
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4`);
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