// Вам необхідно створити конструктор Студента, у якого мають бути властивості:
//     ім'я, прізвище, рік народження, оцінки, відвідуваність, курс. ' +
// 'Кількість оцінок і відвіданих занять залежить від курсу, на якому займається студент. ' +
// 'Так само у Студента є методи: додати оцінку, додати відвідування, отримати середню успішність,' +
// ' отримати середнє відвідування, отримати кількість пройдених занять, змінити курс(мають оновитися дані про курс),' +
// ' а також отримати всю інформацію про студента.

function Student(firstName, lastName, birthYear, course) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.course = course;
    this.grades = [];
    this.attendance = [];
}

Student.prototype.addGrade = function(grade) {
    if (this.course === 1 && grade >= 1 && grade <= 5) {
        this.grades.push(grade);
    } else if (this.course > 1 && grade >= 1 && grade <= 100) {
        this.grades.push(grade);
    } else {
        console.log("Неправильна оцінка для даного курсу.");
    }
};

Student.prototype.addAttendance = function(attendance) {
    if (this.course === 1 && attendance >= 0 && attendance <= 20) {
        this.attendance.push(attendance);
    } else if (this.course > 1 && attendance >= 0 && attendance <= 40) {
        this.attendance.push(attendance);
    } else {
        console.log("Неправильна кількість відвідувань для даного курсу.");
    }
};

Student.prototype.getAverageGrade = function() {
    if (this.grades.length === 0) {
        return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
};

Student.prototype.getAverageAttendance = function() {
    if (this.attendance.length === 0) {
        return 0;
    }
    const sum = this.attendance.reduce((total, attendance) => total + attendance, 0);
    return sum / this.attendance.length;
};

Student.prototype.getLecturesAttended = function() {
    return this.attendance.length;
};

Student.prototype.changeCourse = function(newCourse) {
    this.course = newCourse;
};

Student.prototype.getStudentInfo = function() {
    return `Ім'я: ${this.firstName}, Прізвище: ${this.lastName}, Рік народження: ${this.birthYear}, Курс: ${this.course}, Середня успішність: ${this.getAverageGrade()}, Середня відвідуваність: ${this.getAverageAttendance()}, Кількість пройдених занять: ${this.getLecturesAttended()}`;
};

const student1 = new Student("Vlad", "Khrolenko", 2000, 5);
student1.addGrade(4);
student1.addGrade(5);
student1.addAttendance(35);
student1.addAttendance(40);
student1.changeCourse(4);

console.log(student1.getStudentInfo());