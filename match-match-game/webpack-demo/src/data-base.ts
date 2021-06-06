let db: IDBDatabase;

function addProfile(e: { preventDefault: () => void; }) {
  e.preventDefault();
  const surname = (<HTMLInputElement>document.querySelector('#formSurname')).value;
  const name = (<HTMLInputElement>document.querySelector('#formName')).value;
  const email = (<HTMLInputElement>document.querySelector('#formEmail')).value;
  const transaction = db.transaction('profiles', 'readwrite');
  const store = transaction.objectStore('profiles');

  // Define a person
  const person = {
    id: '1',
    name,
    email,
    surname,
    created: new Date(),
  };

  // Perform the add
  store.add(person);
}

document.addEventListener('DOMContentLoaded', () => {
  const Request = indexedDB.open('AnzhelikaMikulich', 1);
  Request.onupgradeneeded = function () {
    const DB = Request.result;
    if (!DB.objectStoreNames.contains('profiles')) {
      DB.createObjectStore('profiles', { autoIncrement: true });
    }
  };

  Request.onsuccess = function () {
    db = Request.result;
    const btn = (<HTMLButtonElement> document.querySelector('#formButton'));
    btn.addEventListener('submit', addProfile);
  };
});
