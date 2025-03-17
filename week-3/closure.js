function double(x){
    return new Promise((resolve,reject) => {
        resolve(2*x);
    });
}

async function print() {
    let a = await double(10);
    let b = await double(a);
    let c = await double(b);

    console.log(a+b+c);
}

print();