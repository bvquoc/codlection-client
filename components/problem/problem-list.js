import { Header } from '../header.js';
import { SideNav } from '../side-nav.js';
import { ProblemRow } from './problem-row.js';

class ProblemList {
  $container = document.createElement('div');
  $nav = new SideNav();
  $main = document.createElement('div');

  $header = new Header();
  $contentWrapper = document.createElement('div');
  $table = document.createElement('table');
  $thead = document.createElement('thead');

  constructor(headerTxt) {
    if (headerTxt) this.$header.setHeader(headerTxt);
    this.$container.appendChild(this.$nav.$container);
    this.$container.appendChild(this.$main);

    this.$main.appendChild(this.$header.$container);
    this.$main.appendChild(this.$contentWrapper);
    this.$main.style.marginLeft = '80px';

    this.$contentWrapper.classList.add('exercise-container', 'm-5');
    this.$contentWrapper.appendChild(this.$table);

    this.$table.classList.add('table', 'table-success', 'table-striped');
    this.$table.appendChild(this.$thead);
    this.$thead.innerHTML = `
    <tr>
        <th scope="col">ID</th>
        <th scope="col">Execise Name</th>
        <th scope="col">Language</th>
        <th scope="col">Difficulty Level</th>
    </tr>`;

    this.getData();
  }

  getData = () => {
    firebase
      .firestore()
      .collection('problems')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data().desc}`);
          const $problemRow = new ProblemRow(doc.data());
          this.$table.appendChild($problemRow.$container);
        });
      });
  };
}

export { ProblemList };
