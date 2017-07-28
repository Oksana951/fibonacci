// massif
function fibonacci(n) {
    let n1 = [1, 1];

    for (var i = 2; i < n; i++) {
        n1[i] = n1 [i-1]+ n1 [i-2];
    }
    return n1 [n-1];
}
document.write('The result of arrays  = ');
document.write(fibonacci(prompt('Enter number')));

// cycle
function fibonacci (n) {
    let n1,
        n2;
    for (var i = 1; i <= n; i++) {
        var c = n1 + n2 || 1;
        n1 = n2;
        n2 = c;
    }
    return c;
}

document.write('The result of cycles = ');
document.write(fibonacci(prompt('Enter number')));