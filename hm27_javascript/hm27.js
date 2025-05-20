// Вправа 1. Створи базу даних notesDB версії 1 з об’єктним сховищем notes, де ключем є поле noteId.

const request = indexedDB.open("notesDB", 1);
request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore("notes", { keyPath: "noteId" });
    // request.onsuccess = function(event) {
    //     const db = event.target.result;
    //     console.log("Базу 'notesDB' відкрито успішно", db);
    // };
    // request.onerror = function (event) {
    //     console.error("Помилка відкриття бази:", event.target.error);
    // }
}

// Підказка: використай keyPath: "noteId" у методі createObjectStore.

// Вправа 2. Додай нову нотатку { noteId: 101, text: "Підготувати звіт" } до сховища notes.

request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction("notes", "readwrite");
    const store = transaction.objectStore("notes");
    const note = {
        noteId: 101,
        text: "Підготувати звіт"
    };
    const addRequest = store.add(note);

    // Підказка: відкрий транзакцію в режимі "readwrite".

    // Вправа 3. Зчитай нотатку з noteId = 101 і виведи її текст у консоль.

    const getRequest = store.get(101);
    getRequest.onsuccess = function (event) {
        const result = event.target.result;
        console.log(result.text);
    };

    // Підказка: метод get(noteId) і обробка в onsuccess.

    // Вправа 4. Онови текст нотатки з noteId = 101 на "Підготувати фінальний звіт".

    const updateTr = db.transaction("notes", "readwrite");
    const updateSt = updateTr.objectStore("notes");
    const updateReq = updateSt.put({ noteId: 101, text: "Підготувати фінальний звіт" });
// Підказка: метод put(...) замінює запис, якщо ключ уже існує.

    // Вправа 5. Видали нотатку з noteId = 101 зі сховища.
    
    const deleteTransaction = db.transaction("notes", "readwrite");
    const storeDelete = deleteTransaction.objectStore("notes");
    const requestDelete = storeDelete.delete(101);
    requestDelete.onsuccess = function () {
        console.log("Нотатку видалено");
    }
}

// Підказка: використай метод delete(noteId) у транзакції.