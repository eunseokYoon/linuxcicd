const sum = (a,b) =>{
    return a+ b;
};

const abs = (a,b) =>{
    if (a<0){
        a*=-1;
    }
    if (b<0){
        b*= -1;
    }
    return a+b;
}

exports.sum = sum;
exports.abs = abs;
