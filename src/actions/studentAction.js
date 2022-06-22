import { CREATE_STUDENT, DELETE_STUDENT, SELECT_STUDENT, UPDATE_STUDENT } from "../constants/constants.js";

export const createStudent = (student) => {
    return {
        type: CREATE_STUDENT,
        student,
    };
}

export const updateStudent = (studentId, student) => {
    return {
        type: UPDATE_STUDENT,
        studentId,
        student,
    };
}

export const selectStudent = (student) => {
    return {
        type: SELECT_STUDENT,
        student,
    };
}

export const deleteStudent = (studentId) => {
    return {
        type: DELETE_STUDENT,
        studentId,
    };
}