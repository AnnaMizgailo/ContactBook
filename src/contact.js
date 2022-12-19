export default class Contact {
    id;
    phones;
    lastName;
    firstName;
    middleName;
    comment;

    constructor(id, phones, lastName, firstName, middleName, comment){
        this.id = id;
        if(this.phones.isArray()){
            this.phones = phones;
        }
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.comment = comment;
    }
} 
