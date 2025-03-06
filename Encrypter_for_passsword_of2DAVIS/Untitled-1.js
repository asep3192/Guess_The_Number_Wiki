function setPass(elm) {

    var input = document.getElementById(elm).value

    store = ""
    
    for (var i = 0; i < input.length; i++) {
        console.log(input.charCodeAt(i).toString())
        store += input.charCodeAt(i).toString()
    
        while (store.length % 3 != 0) {
            store = "0" + store;
            console.log(store)
        }
    
    }
    
    console.log("COPY THIS NUMBER: " + store)
    
    return store
}