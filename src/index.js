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

    let exitFlag = false;
    while(!exitFlag){
        process.stdin.setEncoding("utf8");
        process.stdin.setRawMode(false);

        let text = readlineSync.question('');
            if(text === "exit" || text === "add\r\n"){
                exitFlag = true;
                continue;
            }
        }
        process.stdin.on("data", (text) => {
            if (text === "exit" || text === "exit\r\n") {
                process.exit(0);
            }
            if (text === "add" || text === "add\r\n") {
                let firstName = readlineSync.question('Insert first name: ');
                let lastName = readlineSync.question('Insert last name: ');
                console.log('Type `end` to finish the enter of phone');
                let endPhonesFlag = false;
                let phones = [];
                while(!endPhonesFlag){
                    let phone = readlineSync.question('Insert phone: ');
                    if(phone === 'end' || phone === 'end\r\n') break;
                    if(Contact.validatPhone(phone)){
                        phones.push(phone);
                    }else{
                        console.log("phone is not valid");
                    }
                    console.log('phones: ${JSON.stringify(phones)}');
                    let comment = readlineSync.question('Insert comment: ');
                }
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

            console.log("Wrong answer. You should write the right statements ;)");
        });
        process.stdin.on('end', () => {
            process.exit(0);
        });
    }

    
}());
//JSON.stringify(obj);
//JSON.parse();
//readFileSync();
//writeFileSync();
