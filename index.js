import { HomePage } from './components/home-page.js';
import { ProblemList } from './components/problem/problem-list.js';
import { ProblemPage } from './components/problem/problem-page.js';
import { SubmissionList } from './components/submission/submission-list.js';

const app = document.getElementById('app');

function setScreen($container) {
  app.innerHTML = '';
  app.appendChild($container);
}

firebase.auth().onAuthStateChanged(function (user) {
  const $home = new HomePage();
  setScreen($home.$container);

  if (user) {
    // User is logged in.
    const username = user.displayName;
    const email = user.email;
    const uid = user.uid;
    console.log(uid);
  } else {
    // const $loginPage = new Login();
    // setScreen($loginPage.$container);
  }
});

export { setScreen };

// const $tmp = new ProblemPage(
//   'id',
//   '# Hello World\n\n### Description\n\nBài tập này giúp bạn làm quen với hệ thống của chúng tôi. Và cũng là bài tập thể hiện quyết tâm học lập trình của bạn!\n\nHãy viết chương trình in ra dòng chữ "Hello World!"\n\n### Input\n\n```\n\n```\n\n### Output\n\n```\nHello World!\n```\n\n### Example\n\n#### C++\n\n```cpp\n#include <iostream> using namespace std;\nint main() {\n  cout << "Hello World!";\n  return 0;\n}\n```\n\n#### C\n\n```c\n#include <stdio.h> int main() {\n  printf(\'Hello World!\');\n  return 0;\n}\n```\n\n#### Pascal\n\n```pascal\nprogram plus;\nbegin\n  writeln("Hello World");\nend.\n```\n',
// );
// setScreen($tmp.$container);

//     const $container = document.createElement('div');
//     const $hello = document.createElement('h3');
// //     $hello.textContent = `Hello ${username} ${email}`;
//     $container.appendChild(new Header(username).$container);
//     $container.appendChild($hello);
//     setScreen($container);

//     (function show_submit_form() {
//       // submit form
//       const $div = document.createElement('div');
//       const $h4 = document.createElement('h4');
//       $h4.textContent = 'Submit form here:';
//       $div.appendChild($h4);
//       $div.appendChild(new SubmitForm().$container);
//       $container.appendChild($div);
//     })();

//     getAllSubmission((data) => {
//       data = data.reverse();
//       const $submissionList = new SubmissionList('Submissions here:', data);
//       $container.appendChild($submissionList.$container);
//     });

// (function show_some_submission() {
//   const $ul = document.createElement('ul');
//   const $div = document.createElement('div');
//   const $h4 = document.createElement('h4');
//   $h4.textContent = 'Some submission here:';
//   $container.appendChild($div);
//   $div.appendChild($h4);
//   $div.appendChild($ul);

//   getSubmission('pE31etfX1uDDvi9iagMe', (data) => {
//     $ul.appendChild(new SubmissionItem(data).$container);
//   });
//   getSubmission('pXLYEKCu4HWV2tKXydXC', (data) => {
//     $ul.appendChild(new SubmissionItem(data).$container);
//   });
//   getSubmission('hpkIAieaXWGB0O7ydFwD', (data) => {
//     $ul.appendChild(new SubmissionItem(data).$container);
//   });
//   getSubmission('uD6pVH2PvqbXBvjSDAkR', (data) => {
//     $ul.appendChild(new SubmissionItem(data).$container);
//   });
// })();
