let array = [1, 1, 0];
let partArray = 'true';
for (let i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) {
        partArray = 'false';
        break
    }
} console.log(partArray)