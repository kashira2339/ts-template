import Person from './Person'
import American from './American'
import Japanese from './Japanese'

function greeting(person: Person) {
    alert(person.sayHello());
}

const american = new American('Taro', 'Yamada');
const japanese = new Japanese('太郎', '山田');

greeting(american);
greeting(japanese);
