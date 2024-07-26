const students = [
    {
      student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
      }
    },
    {
      student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
      }
    },
    {
      student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
      }
    }
  ];
  
  const result = students.map(student => {
    const studentObject = Object.values(student)[0];
    const average = Object.values(studentObject).reduce((acc, curr) => acc + curr, 0) / Object.keys(studentObject).length;
    return { [Object.keys(student)[0]]: { average } };
  });
  
  console.log(result);