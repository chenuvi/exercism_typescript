type Student = string;
type Grade = number;
type StudentRooster = Record<string, Student[]>;
type StudentGrades = Map<Student, Grade>;

export class GradeSchool {
  private students: StudentGrades;

  constructor() {
    this.students = new Map();
  }

  roster() {
    const result: StudentRooster = {};
    Array.from(this.students.entries()).forEach(([, grade]) => {
      result[grade] = this.grade(grade);
    });
    return result;
  }

  add(student: Student, level: Grade) {
    this.students.set(student, level);
  }

  grade(level: Grade): Student[] {
    return Array.from(this.students.entries())
      .filter(([, studentGrade]) => studentGrade === level)
      .map(([student]) => student)
      .sort();
  }
}
