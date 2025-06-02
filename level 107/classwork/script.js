function numbers(first, second, ...rest) {
    console.log(first * second);

    let sum = 0;
    for (const num of rest) {
        sum += num;
    }
    console.log(sum);
}

numbers(2, 3, 4, 5, 6, 7);