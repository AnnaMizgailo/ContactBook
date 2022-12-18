import process from 'process';
import Contact from './contact.js';
import ContactDAO from './contact_dao.js';

(function main() {
    console.log("ContactBook CLI v1.0.0");
    console.log("   add - Add contact");
    console.log("   delete - Delete contact");
    console.log("   update - Update contact");
    console.log("   searchBy[Id, Phone, LastName, FirstName] - Search by [id, phone, lastName, firstName]");
    console.log("   list - Get list of contacts");
    console.log("   exit - EXIT");

    process.stdin.setEncoding("utf8");
    process.stdin.setRawMode(false);
    process.stdin.on("data", (text) => {
        if (text === "exit" || text === "exit\r\n") {
            process.exit(0);
        }
        if (text === "add" || text === "add\r\n") {
            // code here
            return;
        }
        if (text === "delete" || text === "delete\r\n") {
            // code here
            return;
        }
        if (text === "update" || text === "update\r\n") {
             // code here
             return;
        }
        if (text === "searchById" || text === "searchById\r\n") {
            // code here
            return;
        }
        if (text === "searchByPhone" || text === "searchByPhone\r\n") {
            // code here
            return;
        }
        if (text === "searchByLastName" || text === "searchByLastName\r\n") {
            // code here
            return;
        }
        if (text === "searchByFirstName" || text === "searchByFirstName\r\n") {
             // code here
             return;
        }

        console.log("Wrong answer. You should wtite the rigth statements ;)");
    });
    process.stdin.on('end', () => {
        process.exit(0);
    });
}());
