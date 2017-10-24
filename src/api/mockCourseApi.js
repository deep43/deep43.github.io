import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "react-ui",
    title: "React and Redux basics",
    watchHref: "https://www.youtube.com/watch?v=fd2Cayhez58&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b",
    authorId: "deep-hazra",
    length: "5:10",
    category: "React"
  },
  {
    id: "node-js-basics",
    title: "Building Applications with NODE.JS",
    watchHref: "https://www.youtube.com/watch?v=-u-j7uqU7sI&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_",
    authorId: "deep-hazra",
    length: "5:08",
    category: "Node JS"
  },
  {
    id: "mongodb-edureka",
    title: "Become an professional in MongoDB with Edureka",
    watchHref: "https://www.youtube.com/watch?v=XohG9yQe3Ps&list=PLkxGnfO94IKKR8pU29qs8OLO8rx7DYeWL",
    authorId: "deep-hazra",
    length: "2:30",
    category: "MongoDB"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans Instructed by Google",
    watchHref: "https://www.youtube.com/watch?v=4F72VULWFvc&list=PL693EFD059797C21E",
    authorId: "deep-hazra",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Learn software architecture design",
    watchHref: "https://www.youtube.com/watch?v=XohG9yQe3Ps&list=PLkxGnfO94IKKR8pU29qs8OLO8rx7DYeWL",
    authorId: "deep-hazra",
    length: "2:52",
    category: "Software Architecture"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

// This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.courseId == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
