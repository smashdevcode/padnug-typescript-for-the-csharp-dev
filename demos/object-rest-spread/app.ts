
const person = {
  firstName: 'Gandalf',
  age: 2019,
  email: 'graywizard1@hotmail.com'
};

const { firstName, ...other } = person;

// const firstName: string

// const other: {
//   age: number;
//   email: string;
// }

const newPerson = { firstName, ...other };

// const newPerson: {
//   age: number;
//   email: string;
//   firstName: string;
// }
