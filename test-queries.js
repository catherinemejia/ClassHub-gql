const TEACHER_QUERY = `
    query User {
        user(id: 1) {
          fullName
          subjects {
            name
          }
          children {
            name
          }
        }
      }
    `;

    const PARENT_QUERY = `
    query User {
        user(id: 7) {
          fullName
          subjects {
            name
          }
          children {
            name
          }
        }
      }
    `;

module.exports = { TEACHER_QUERY, PARENT_QUERY };
