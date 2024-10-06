
// = 為指定值 左側為變數

// 單行註解，該行忽略不計。
/*
多行註解，
可以做一個範圍性多行忽略不計，
直到指定符號出現。
*/
a = 100;  // "=" 指定運算子，將右側的值指定給左側的變數
b = 100;
a + b;
console.log("HELLO WORLD",  a+b);

a=200;
b=200;
console.log("得到的結果是", a+b);
console.error("得到的結果是", a+b);
console.warn("得到的結果是", a+b);
console.info("得到的結果是", a+b);

console.clear(); //清除

c="HELLO";
d="WORLD";
console.log('HELLO WORLD');
console.log(c+''+d);
console.log(`${c} ${d}`);       
