// \s — white space, tab, new line
const fullName = "John Bowie";

const regex2 = /John\sBowie/;
console.log(regex2.test(fullName)); // true

const regex3 = /[A-Z][a-z]{3}\s[A-Z][a-z]{4}/; // если бы мы знали длину имени и фамилии
console.log(regex3.test(fullName)); // true

// хотя бы одна маленькая буква после заглавной, пробел, снова заглавная и хотя бы одна маленькая
const regex4 = /[A-Z][a-z]+\s[A-Z][a-z]+/;
console.log(regex4.test("Al Key")); // true
console.log(regex4.test("A Key"));  // false

// символы, которые обозначают количество, называются кванторами
// с помощью знака ?  мы можем обозначать опциональный элемент (0 или 1 вхождение)
// вопрос ставится справа от нужного символа

const cameraModel = "Canon 5R";
const cameraModel2 = "Canon 5RD";
const cameraModel3 = "Canon 12RD";

// сделаем выражение, которое бы подошло под оба варианта
const regex5 = /Canon \d\d?RD?/;

console.log(regex5.test(cameraModel));   // true
console.log(regex5.test(cameraModel2));  // true
console.log(regex5.test(cameraModel3));  // true

// * - неопределенное количество вхождение (0 или более)

const regex6 = /\d*/; // 1 12 15 - ok 

// Группировка 

const text ="I am programmer but you can never say. I am sure";

const regex7 = /(I) (am)/gi;

console.log(text.replace(regex7,`$2 $1`));

// поиск имени фамилии

const fullNameReg = /([A-Z][a-z]+)\s([A-Z][a-z]+)/g;

const text2 ="I am Alisher Khamidov, I am looking for Eva Dieterle";

console.log(text2.replace(fullNameReg, `$2 $1`));

const phoneNumber ="0151 52466512";

// +49 (151) 524 665 12

const phoneRegex = /0(\d{3})\s(\d{3})(\d{3})(\d{2})/;

const maskedPhone = phoneNumber.replace(phoneRegex,`+49 ($1) $2 $3 $4`); //

console.log(maskedPhone);  //+49 (151) 524 665 12







