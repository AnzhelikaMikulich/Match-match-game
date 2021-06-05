let db: IDBDatabase;

function addProfile(e: { preventDefault: () => void; }) {
  e.preventDefault();
  const surname = (<HTMLInputElement>document.querySelector("#formSurname")).value;
  const name = (<HTMLInputElement>document.querySelector("#formName")).value;
  const email = (<HTMLInputElement>document.querySelector("#formEmail")).value;

  const transaction = db.transaction("profiles", "readwrite");
  const store = transaction.objectStore("profiles");
  console.log(store);
  // Define a person
  const person = {
    id: "1",
    name,
    email,
    surname,
    created: new Date(),
  };

  // Perform the add
  const request = store.add(person);

  request.onerror = function () {
    console.log("Error");
  };

  request.onsuccess = function () {
    console.log("Woot! Did it");
  };
}
document.addEventListener("DOMContentLoaded", () => {
  const Request = indexedDB.open("AnzhelikaMikulich", 1);
  Request.onupgradeneeded = function () {
    const DB = Request.result;
    if (!DB.objectStoreNames.contains("profiles")) {
      DB.createObjectStore("profiles", { autoIncrement: true }); 
    }
  };

  Request.onsuccess = function () {
    db = Request.result;
    const btn = (<HTMLButtonElement> document.querySelector("#formButton"));
    btn.addEventListener("submit", addProfile);
  };

  Request.onerror = function (e) {
    console.log("Error");
    console.dir(e);
  };
});