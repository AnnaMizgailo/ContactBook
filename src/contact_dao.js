import Contact from './contact.js';
import fs from 'fs';

export default class ContactDAO {
    static add(contact) {
        if (!(contact instanceof Contact)) throw new TypeError("value is not 'Contact' type");
    }
    static delete(id) {
        
    }
    static update(contact) {
        if (!(contact instanceof Contact)) throw new TypeError("value is not 'Contact' type");
    }
    static getList() {
        
    }
    static searchById(id) {
        
    }
    static searchByPhone(phone) {
        // validate phone number with regExp
    }
    static searchByLastName(lastName) {

    }
    static searchByFirstName(firstName) {

    }
}