let db: IDBDatabase;

function addProfile(e) {
	e.preventDefault();
	const surname = (<HTMLInputElement>document.querySelector('#formname')).value;
	const name = (<HTMLInputElement>document.querySelector('#formsurname')).value;
	const email = (<HTMLInputElement>document.querySelector('#formmail')).value;

	const transaction = db.transaction('profiles', 'readwrite');
	const store = transaction.objectStore('profiles');

	const person = {
		id: '1',
		name,
		email,
		surname,
		created: new Date(),
	};

	const request = store.add(person);
	request.onsuccess = function () {
		console.log('Woot');
	};
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
		const btn = document.querySelector('.challenger-form');
		btn.addEventListener('submit', addProfile);
	};
});
