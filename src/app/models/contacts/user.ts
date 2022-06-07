

enum Gender {
    Female = "female",
    Male = "male",
}

export class User{

    constructor
    (
        public id:          string,
        public age:         number,
        public name:        string,
        public gender:      Gender,
        public company:     string,
        public email:       string,
        public photo:       string,
        public connections: string[]
    ){}
    
    //metodos
    getSplitName(){
        let name = this.name.split(" ")
        return `${name[0]} <br/> ${name[1]}`
    }

}   
