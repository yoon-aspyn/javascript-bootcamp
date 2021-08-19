/* 노테이션 종류 */
//Object Literal Notaion:
var object = {};
//Bracket Notation:
object['property'] = value;
//Dot Notation
object.property = value;

/* Object Constructor Functions 생성자 함수 */
// 1. 빈 객체 생성
var person = new Object();
// 2. 프로퍼티 추가
person.name = 'lee';
person.gender = 'male';
console.log(typeof person); // object
console.log(person); // {name:"lee", gender:"male"}

//1. 생성자 함수를 작성하여 객체를 정의.
//2. new 키워드를 사용하여 객체의 인스턴스 생성
function book(page, writer, years, novel, codeNumnber) {
    this.book = book;
    this.writer = writer;
    this.years = years;
    this.novel = novel;
    this.codeNumnber = codeNumnber;
}
var book1 = new Book(500, 'yoon', '1995', true, 56);
console.log(book1);
