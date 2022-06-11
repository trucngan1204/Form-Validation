const initialState = {
    students : [],
    selectedStudent: {},
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_STUDENT": {
            const students = [...state.students, action.student];
            return { ...state, students };
          }
          case "SELECT_STUDENT": {
            return { ...state, selectedStudent: action.student };
          }
          case "UPDATE_STUDENT": {
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
}
export  default studentReducer;