function reversal(r){
    var s = "";
    var i = r.length;
    while (i>0) {
        s += r.substring(i-1,i);
        i--;
    }
    document.getElementById("strrev").value = s;
}