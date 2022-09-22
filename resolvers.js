const { default: fetch } = require("node-fetch");
const API_URL = 'http://localhost:3002';

const Query = {
    user: async (parent, args) => {
        const response = await fetch(`${API_URL}/api/users/${args.id}`);
        const result = await response.json();
        return result;
    },
};

const User = {
    subjects: async(parent,args) => {
        const response = await (await fetch(`${API_URL}/api/subjects`)).json();
        const result = response.filter(x => x.userId === parent.id);
        return result;
    },
    children: async(parent,args) => { //for parents
        const response = await (await fetch(`${API_URL}/api/students`)).json();
        const result = response.filter(x => x.parentId === parent.id);
        return result;
    }
}

const Subject = {
    sections: async(parent, args) => { //WIP
        const response = await (await fetch(`${API_URL}/api/classes`)).json();
        const classes = await response.filter(x => x.subjectId === parent.id);
        const sections = await (await fetch(`${API_URL}/api/sections`)).json();
        const sectionIds = await classes.map(element => {
            return element["sectionId"];
        });
        const result = sectionIds.forEach(element => {
            const filtered = sections.find(sections => sections.id === element);
            return filtered;
        })
        console.log(result);
    }
}

const Section = {
    students: async(parent, args) => {
        const response = await (await fetch(`${API_URL}/api/students`)).json();
        const result = response.filter(x => x.sectionId === parent.id);
        return result;
    },
    subjects: async(parent, args) => { //WIP
        const response = await (await fetch(`${API_URL}/api/students`)).json();
        return result;
    }
}

const Student = {
    attendances: async(parent, args) => {
        const response = await (await fetch(`${API_URL}/api/attendances`)).json();
        const result = response.filter(x => x.studentId === parent.id);
        return result;
    },
    exams: async(parent, args) => {
        const response = await (await fetch(`${API_URL}/api/exams`)).json();
        const result = response.filter(x => x.studentId === parent.id);
        return result;
    },
    remarks: async(parent, args) => {
        const response = await (await fetch(`${API_URL}/api/exams`)).json();
        const result = response.filter(x => x.studentId === parent.id);
        return result;
    }
}

module.exports = { Query, User, Student, Section, Subject};