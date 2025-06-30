const divisorCountSimple = (number) => {
    let num = 0;
    let str = "(";
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            num++;
            str = str + String(i) + ","
        }
    }
    str = str + String(number) + ")"
    console.log(num + 1, str)
}

divisorCountSimple(100)
