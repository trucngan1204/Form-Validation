import { CREATE_STUDENT, DELETE_STUDENT, SELECT_STUDENT, UPDATE_STUDENT } from "../constants/constants";

const initialState = {
    students: [
        {
            id: 1,
            fullName: "Nguyễn Trọng Kha",
            phoneNum: "0833786698",
            email: "trongkha256@gmail.com",
        },
    ],
    selectedStudent: {},
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_STUDENT: {
            const students = [...state.students, action.student];
            return { ...state, students };
        }
        case DELETE_STUDENT: {
            const students = state.students.filter((student) => student.id !== action.studentId);
            return { ...state, students };
        }
        case SELECT_STUDENT: {
            return { ...state, selectedStudent: action.student };
        }
        case UPDATE_STUDENT: {
            const students = state.students.map((student) => {
                if (student.id === action.studentId) {
                    return { ...action.student, id: action.studentId };
                }
                return student;
            });
            return { ...state, students, selectedStudent: {} };
        }
        default:
            return state;
    }
};

export default studentReducer;
