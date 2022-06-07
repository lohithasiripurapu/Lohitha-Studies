function singSong(){
    console.log("DO")
}

function add(i,j=10){
    console.log(`${i+j}`)
}
const repeat=function(message, times=1){
    let result = ""

    for(let i=0;i<times;i++){
        result+=message
    }
    return result
}
repeat("hi")
add(2,3)
//singSong()