let n = 5;

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= n; j++) {
      line += 'x';
    }
    console.log(line);
  }
}

printPattern(n);
