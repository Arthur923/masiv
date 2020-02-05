var name = ["a","b","c"];

function abc(arg){
    for(element in name){
        console.log(arg[element])
    }
}
abc(name)