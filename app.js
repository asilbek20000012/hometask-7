// 10 dan 100 gacha bo'lgan sonlarning 2ga bo'linadiganlari va 3ga bo'linadiganlarini chiqarish
for (let i = 10; i <= 100; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i + " 2ga va 3ga bo'linadi");
    } else if (i % 2 === 0) {
        console.log(i + " 2ga bo'linadi");
    } else if (i % 3 === 0) {
        console.log(i + " 3ga bo'linadi");
    }
}

// 20 dan 50 gacha bo'lgan sonlarning faqat 5ga bo'linadiganlarini chiqarish
for (let i = 20; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i + " 5ga bo'linadi");
    }
}

// 1 dan 100 gacha bo'lgan sonlarning kvadratlarining yig'indisini hisoblash
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i * i;
}
console.log("Kvadratlar yig'indisi: " + sum);

// 1 dan 50 gacha bo'lgan sonlarning kubiklarini chiqarish
for (let i = 1; i <= 50; i++) {
    console.log(i + " ning kubi: " + i * i * i);
}

// 10 dan 100 gacha bo'lgan sonlarning juft yoki toqligini tekshirish
for (let i = 10; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " juft");
    } else {
        console.log(i + " toq");
    }
}

// 5 dan 100 gacha bo'lgan barcha sonlarning yig'indisini hisoblash, lekin 7ga bo'linadiganlarni hisoblashdan chetlatish
sum = 0;
for (let i = 5; i <= 100; i++) {
    if (i % 7 !== 0) {
        sum += i;
    }
}
console.log("Yig'indi: " + sum);

// 50 dan 150 gacha bo'lgan sonlarning faqat juftlarini chiqarish
for (let i = 50; i <= 150; i++) {
    if (i % 2 === 0) {
        console.log(i + " juft");
    }
}

// 1 dan 100 gacha bo'lgan sonlarning ko'paytmalarini topish va 10000dan kichik bo'lsa, natijani ekranga chiqarish
let product = 1;
for (let i = 1; i <= 100; i++) {
    product *= i;
    if (product >= 10000) break; // Agar ko'paytma 10000 dan katta bo'lsa, to'xtatamiz
}
console.log("Ko'paytma: " + product);

// 1 dan 100 gacha bo'lgan sonlarning 6ga bo'linadiganlarini ekranga chiqarish
for (let i = 1; i <= 100; i++) {
    if (i % 6 === 0) {
        console.log(i + " 6ga bo'linadi");
    }
}

// 1 dan 50 gacha bo'lgan sonlar uchun ular juftmi yoki toqmi ekanligini aniqlab chiqarish
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i + " juft");
    } else {
        console.log(i + " toq");
    }
}

// 1 dan 1000 gacha bo'lgan sonlar orasida faqat 4, 5 va 7ga bo'linadigan sonlarni topish va ularning yig'indisini hisoblash
sum = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 4 === 0 && i % 5 === 0 && i % 7 === 0) {
        sum += i;
    }
}
console.log("4, 5 va 7ga bo'linadigan sonlarning yig'indisi: " + sum);

// 1 dan 10000 gacha bo'lgan sonlar orasida faqat 6ga bo'linadigan va 8ga bo'linmaydigan sonlarni chiqarib, ularning kvadratlarini hisoblash
for (let i = 1; i <= 10000; i++) {
    if (i % 6 === 0 && i % 8 !== 0) {
        console.log(i + " ning kvadrati: " + i * i);
    }
}

// 100 dan 2000 gacha bo'lgan sonlar orasida faqat 9ga bo'linadigan va 5ga bo'linadigan sonlarni chiqarib, ularning yig'indisini hisoblash
sum = 0;
for (let i = 100; i <= 2000; i++) {
    if (i % 9 === 0 && i % 5 === 0) {
        sum += i;
    }
}
console.log("9 va 5ga bo'linadigan sonlarning yig'indisi: " + sum);

// 1 dan 1000 gacha bo'lgan sonlar orasida faqat 2ga, 3ga va 5ga bo'linadigan sonlarni topish va ularning kubiklarini hisoblash
for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        console.log(i + " ning kubi: " + i * i * i);
    }
}

// 1 dan 10000 gacha bo'lgan sonlar orasida 3ga bo'linadigan, 4ga bo'linadigan va 5ga bo'linmaydigan sonlarning yig'indisini hisoblash
sum = 0;
for (let i = 1; i <= 10000; i++) {
    if (i % 3 === 0 && i % 4 === 0 && i % 5 !== 0) {
        sum += i;
    }
}
console.log("3ga, 4ga bo'linadigan va 5ga bo'linmaydigan sonlarning yig'indisi: " + sum);

// 100 dan 10000 gacha bo'lgan sonlar orasida faqat 2ga bo'linadigan va 6ga bo'linmaydigan sonlarni chiqarib, ularning kubiklarini hisoblash
for (let i = 100; i <= 10000; i++) {
    if (i % 2 === 0 && i % 6 !== 0) {
        console.log(i + " ning kubi: " + i * i * i);
    }
}

// 1 dan 10000 gacha bo'lgan sonlar orasida 3ga bo'linadigan, 7ga bo'linadigan va 10ga bo'linmaydigan sonlarni ajrating va ularning kvadratlarini hisoblang
for (let i = 1; i <= 10000; i++) {
    if (i % 3 === 0 && i % 7 === 0 && i % 10 !== 0) {
        console.log(i + " ning kvadrati: " + i * i);
    }
}

// 1 dan 10000 gacha bo'lgan sonlar orasida faqat 3ga bo'linadigan va 6ga bo'linadigan sonlarning yig'indisini hisoblash, lekin 2000dan katta bo'lsa, "Katta" deb chiqaring
sum = 0;
for (let i = 1; i <= 10000; i++) {
    if (i % 3 === 0 && i % 6 === 0) {
        sum += i;
    }
}
if (sum > 2000) {
    console.log("Katta");
} else {
    console.log("Yig'indi: " + sum);
}

// 1 dan 10000 gacha bo'lgan sonlardan faqat 4, 5, va 8ga bo'linadigan sonlarni chiqarib, ularning ko'paytmasini hisoblang
let product2 = 1;
for (let i = 1; i <= 10000; i++) {
    if (i % 4 === 0 && i % 5 === 0 && i % 8 === 0) {
        product2 *= i;
    }
}
console.log("Ko'paytma: " + product2);

// 1 dan 10000 gacha bo'lgan sonlardan faqat 2ga, 3ga, va 6ga bo'linadigan sonlarni toping va ularning kvadratlarini hisoblang
for (let i = 1; i <= 10000; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 6 === 0) {
        console.log(i + " ning kvadrati: " + i * i);
    }
}

// 1 dan 10000 gacha bo'lgan sonlardan faqat 4ga bo'linadiganlarni chiqarib, ularning yig'indisini hisoblang va natijani 10000dan kichik bo'lsa, ekranga chiqarish
sum = 0;
for (let i = 1; i <= 10000; i++) {
    if (i % 4 === 0) {
        sum += i;
    }
}
if (sum < 10000) {
    console.log("Yig'indi: " + sum);
}

// 1 dan 5000 gacha bo'lgan sonlar orasida faqat 9ga bo'linadigan, 5ga bo'linadigan va 7ga bo'linmaydigan sonlarni chiqarib, ularning ko'paytmasini hisoblang
let product3 = 1;
for (let i = 1; i <= 5000; i++) {
    if (i % 9 === 0 && i % 5 === 0 && i % 7 !== 0) {
        product3 *= i;
    }
}
console.log("Ko'paytma: " + product3);

// 1 dan 5000 gacha bo'lgan sonlardan faqat 2ga, 3ga va 4ga bo'linadigan sonlarni toping va ularning yig'indisini hisoblang, 10000dan katta bo'lsa, "Boshqa" deb chiqaring
sum = 0;
for (let i = 1; i <= 5000; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 4 === 0) {
        sum += i;
    }
}
if (sum > 10000) {
    console.log("Boshqa");
} else {
    console.log("Yig'indi: " + sum);
}

// 1 dan 10000 gacha bo'lgan sonlar orasida 7ga bo'linadigan, 6ga bo'linadigan va 10ga bo'linmaydigan sonlarni chiqarib, ularning kvadratlarini hisoblang
for (let i = 1; i <= 10000; i++) {
    if (i % 7 === 0 && i % 6 === 0 && i % 10 !== 0) {
        console.log(i + " ning kvadrati: " + i * i);
    }
}

// 1 dan 5000 gacha bo'lgan sonlar orasida faqat 3ga, 4ga va 6ga bo'linadigan sonlarni ajrating va ularning kubiklarini hisoblang
for (let i = 1; i <= 5000; i++) {
    if (i % 3 === 0 && i % 4 === 0 && i % 6 === 0) {
        console.log(i + " ning kubi: " + i * i * i);
    }
}
