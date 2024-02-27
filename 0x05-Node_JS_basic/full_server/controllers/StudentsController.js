import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase('./database.csv');
      res.status(200).send('This is the list of our students\n');
      Object.entries(students).forEach(([field, names]) => {
        const list = `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        res.write(list);
      });
      res.end();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const students = await readDatabase('./database.csv');
      const names = students[major];
      const list = `List: ${names.join(', ')}\n`;
      res.status(200).send(list);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
