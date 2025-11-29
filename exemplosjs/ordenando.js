// ordenando.js

// a) Função swap
const swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
};

// b) Função shuffle
const shuffle = (vetor, trocas) => {
    for (let i = 0; i < trocas; i++) {
        let pos1 = Math.floor(Math.random() * vetor.length);
        let pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};

// c) Função bubble_sort
const bubble_sort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

// d) Função selection_sort
const selection_sort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[min_idx]) {
                min_idx = j;
            }
        }
        swap(vetor, min_idx, i);
    }
};

// e) Função quick_sort
const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        let pivoIndex = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, pivoIndex - 1);
        quick_sort(vetor, pivoIndex + 1, fim);
    }
};

// f) Função particionamento (apoio ao quick_sort)
const particionamento = (vetor, inicio, fim) => {
    let pivo = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] <= pivo) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};