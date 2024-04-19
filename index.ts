import inquirer from 'inquirer';

interface Student {
    id : number
    name : string
    courses : string[]
    balance : number
}
let id : number = 10005;
// let isss = arraystds.std.id
class sdmsclass{
    arraystds : Student[] = [
        { id: 10001, name: 'Muhammad Sajjad', courses: [], balance: 0 },
        { id: 10002, name: 'Muhammad Talha', courses: [], balance: 0 },
        { id: 10003, name: 'Imad Yousaf', courses: [], balance: 0 },
        { id: 10004, name: 'Shakir Khan', courses: [], balance: 0 },
        { id: 10005, name: 'Ijaz Khan', courses: [], balance: 0 },
    ];

    idfunc(){
        let idcopy = id;
        id = idcopy + 1;
        return id;
    }

    async addstd(){

        let nstd = await inquirer.prompt(
            {
                type : "input",
                name : "name",
                message : "Enter student name...",
            }
        )
        let nstudent : Student ={
            id : this.idfunc(),
            name : nstd.name,
            courses : [],
            balance : 0
        }
        this.arraystds.push(nstudent);
        console.log("Student added successfully!");
        // console.log(sdms.arrystds);
    }

    async enrollstd(){
        let  find = await inquirer.prompt([
            {
                type : "number",
                name : "sid",
                message : "Please enter student ID...",
            }
        ])
        let std = this.arraystds.find(sid => sid.id === find.sid);
        if(!std){
            console.log("Student not found!");
            return;
        }
        else{
            let enroll = await inquirer.prompt(
                {
                    type : "list",
                    name : "course",
                    choices : ["DIT","DAE","Webdevelopment","Dental","Computer Operator"],
                    message : "Select a course you want to enroll in..."
                }
            )
            std.courses.push(enroll.course);
            std.balance = 50000;
            console.log(std.name,"enrolled in",enroll.course,"course successfully!");
            // console.log(this.arrystds);
        }

    }
    async payment(){
        let  find = await inquirer.prompt([
            {
                type : "number",
                name : "sid",
                message : "Please enter student ID...",
            }
        ])
        let std = this.arraystds.find(sid => sid.id === find.sid);
        if(!std){
            console.log("Student not found!");
            return;
        }
        else{
            let pay = await inquirer.prompt(
                {
                    type : "number",
                    name : "amount",
                    message : "Enter amount :"
                }
            )
            if(pay.amount>std.balance){
                console.log("Insufficient funds!")
            }
            else{
                std.balance = std.balance-pay.amount;
                console.log("Tution fee paid successfully!");
            }
            // console.log(this.arrystds);
        }

    }
    async viewbalance(){
        let  find = await inquirer.prompt([
            {
                type : "number",
                name : "sid",
                message : "Please enter student ID...",
            }
        ])
        let std = this.arraystds.find(sid => sid.id === find.sid);
        if(!std){
            console.log("Student not found!");
            return;
        }
        else{
            console.log(std.name,"balance :",std.balance);
        }

    }
    async stdstatus(){
        let  find = await inquirer.prompt(
            {
                type : "number",
                name : "sid",
                message : "Enter student ID...",
            }
        )
        let std = this.arraystds.find(sid => sid.id === find.sid);
        if(!std){
            console.log("Student not found!");
            return;
        }
        console.log("Student details :");
        console.log("Name :",std.name);
        console.log("ID Number :",std.id);
        console.log("Cources Enrolled :",std.courses);
        console.log("Balance :",std.balance);
    }
    
}

async function main() {

   let sdms = new sdmsclass();

    let getstarted = await inquirer.prompt(
        {
            type : "list",
            name : "sdms",
            choices : ["Add new student","Enroll student in a course","Pay tutions fee","Veiw student balance","View student status","View all students data"],
            message : "What you want to do within << Student Database >>"
        }
    )

    if(getstarted.sdms === "Add new student"){
        sdms.addstd();
    }
    else if(getstarted.sdms === "Enroll student in a course"){
        sdms.enrollstd();
    }
    else if(getstarted.sdms === "Pay tutions fee"){
        sdms.payment()
    }
    else if(getstarted.sdms === "Veiw student balance"){
        sdms.viewbalance();
    }
    else if(getstarted.sdms === "View student status"){
        sdms.stdstatus();
    }
    else if(getstarted.sdms === "View all students data"){
        console.log(sdms.arraystds)
    }
    // main();
}
main();
