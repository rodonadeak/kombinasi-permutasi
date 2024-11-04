function factorial(num) {
    if (num < 0) return 0;
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
  
  function calculate() {
    const calcType = document.getElementById("calcType").value;
    const n = parseInt(document.getElementById("n").value);
    const r = parseInt(document.getElementById("r").value);
    let result = 0;
    let explanation = "";
  
    if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) {
      document.getElementById("result").innerHTML = "Masukkan nilai n dan r yang valid!";
      return;
    }
  
    if (calcType === "permutation") {
      result = factorial(n) / factorial(n - r);
      explanation = `Permutasi (P) dihitung dengan rumus:<br>
        P(n, r) = n! / (n - r)!<br>
        <br>
        Substitusi nilai n = ${n} dan r = ${r}:<br>
        P(${n}, ${r}) = ${n}! / (${n} - ${r})!<br>
        P(${n}, ${r}) = ${factorial(n)} / ${factorial(n - r)} = ${result}`;
    } else if (calcType === "combination") {
      result = factorial(n) / (factorial(r) * factorial(n - r));
      explanation = `Kombinasi (C) dihitung dengan rumus:<br>
        C(n, r) = n! / (r! * (n - r)!)<br>
        <br>
        Substitusi nilai n = ${n} dan r = ${r}:<br>
        C(${n}, ${r}) = ${n}! / (${r}! * (${n} - ${r})!)<br>
        C(${n}, ${r}) = ${factorial(n)} / (${factorial(r)} * ${factorial(n - r)}) = ${result}`;
    }
  
    document.getElementById("result").innerHTML = `Hasil: ${result}<br><br>${explanation}`;
  }
  