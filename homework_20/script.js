function makeFibonacciFunction() {
    let a=1
    let b=1
    return (current=a)=>{
        a=b
        b=current+b
        console.log(current)
    }
}

const fibonacci = makeFibonacciFunction();

fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 2
fibonacci(); // Вывод в консоль: 3
fibonacci(); // Вывод в консоль: 5
