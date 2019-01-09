// Labeled statements

mainloop: while(token != null){
    continue mainloop;
}


// Break
for(var i = 0; i < a.length; i++){
    if (a[i] == target) break;
}

// combined with labeled statements

break labelname;
