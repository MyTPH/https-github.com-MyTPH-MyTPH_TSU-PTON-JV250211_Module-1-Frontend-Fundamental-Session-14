// Tạo một danh sách quản lý sinh viên
let studentsList = [
    {
        id: 1,
        name: "Peter Parker",
        age: 20
    },
    {
        id: 2,
        name: "Tony Stark",
        age: 34
    },
    {
        id: 3,
        name: "Steve Rogers",
        age: 50
    },
];
while (true) {
    let userInput = prompt("Please input C/R/D/E to manage your students List");

    if (userInput === "C") {
        // Thêm sinh viên mới vào danh sách students List
        let name = prompt("Please input new student name");
        let age = prompt(`Please input age for ${name}`);
        let id = prompt(`Please input id for ${name}`);

        id=parseInt(id);
        age=parseInt(age);

        let newStudent = {
            id: id,
            name: name,
            age: age,
        };
        
        studentsList.push(newStudent);
        displayManage();

    } else if (userInput === "R") {
        // Hiển thị danh sách sinh viên
        displayManage();
    } else if (userInput === "D") {
        // Xóa sinh viên theo ID
        let id = prompt("Please input student id that you want to delete");
        id=parseInt(id);
        let index = studentsList.findIndex(function (el) {
            return el.id === id;
        });

        if (index === -1) {
            console.log("Student not found");
        } else {
            studentsList.splice(index, 1);
            console.log("Student deleted successfully")
            displayManage();
        }

    } else if (userInput === "E") {
        // Dừng chương trình
        console.log("Thanks for using the app");
        break;
    }

    function displayManage() {
        console.log("Your students list:")
        for (let index in studentsList) {
            console.log("Name:", studentsList[index].name);
            console.log("ID:", studentsList[index].id);
            console.log("Age:",studentsList[index].age);
            console.log("------------------------------");
        }
    }
}