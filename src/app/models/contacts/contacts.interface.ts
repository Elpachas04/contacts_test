export interface ContactsI {
    contacts: User[];
}

export interface User {
    id:          string;
    age:         number;
    name:        string;
    gender:      Gender;
    company:     string;
    email:       string;
    photo:       string;
    connections: string[];
}

enum Gender {
    Female = "female",
    Male = "male",
}
