// console.log("Jell444 ")

// Problem 1:
function multiplyValue(value: number, multiplier: number = 2): number {
    return value * multiplier;
}

// Problem 2:
function processInput(input: string | number | boolean): string | number {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }

    if (typeof input === "number") {
        return input * 10;
    }

    if (typeof input === "boolean") {
        return input ? "Active" : "Inactive";
    }

    throw new Error("Invalid input type");

}

// Problem 3:
function formatCoordinate(coordinate: readonly [number, number, string]): string {
    const [latitude, longitude, locationName] = coordinate;
    return `"Location: ${locationName} (${latitude}, ${longitude})"`;
}

// Problem 4:
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
}

// Problem 5:
interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    return courses.filter(course => course.isPublished && course.students >= minStudents);
}

// Sample Input:
// const courses = [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Draft Course", students: 200, isPublished: false },
//   { title: "Basic HTML", students: 45, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true }
// ];


// Problem 6:
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map(item => item[key]);
}

// Sample Input:
// const users = [
//     { id: 1, name: "Rakib", role: "Admin" },
//     { id: 2, name: "Sadia", role: "Editor" },
//     { id: 3, name: "Tariq", role: "Subscriber" }
// ];

// Problem 7:
class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `"Employee: ${this.name}, Base Salary: ${this.baseSalary}"`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `"Manager of ${this.department}: ${this.name}"`;
    }
}

//Problem 8:
function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        } else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    });
}








