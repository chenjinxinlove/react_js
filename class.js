//用class创建对象
class Leader {
    constructor(name) { //constructor构造函数
        this.name = name;
    }
    hello() { //定义在原型上的函数
        alert('Hello, ' + this.name + '!');
    }
}
var liyi = new Leader('liyi');
//用extends继承扩展
class extendLeader extends Leader {
    constructor(name, grade, skill) { //若是不扩展Leader的构造函数，就可以将constructor这一步省去
        super(name);
        this.grade = grade;
        this.skill = skill;
    }
    run() {
        console.log(this.name + '职位：' + this.grade + ' 技能：' + this.skill);
    }
    inti() {
        this.hello()
    }
}
var liyi = new extendLeader('liyi', '研发经理', '精通各种技术');

liyi.inti();