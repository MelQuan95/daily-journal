/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let journal = []
    


/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}


export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(dirtyMoney => dirtyMoney.json())  // Parse as JSON
        .then(cleanMoney => {
            journal = cleanMoney
            //rWhat should happen when we finally have the array?
        })
}

export const saveEntries = (entries) => {
    return fetch('http://localhost:8088/entries', { //fetch says go to host to retrieve data
        method: "POST",  
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entries)
    })
    .then(getEntries) // After we add a note, get them all again so our new note appears in our collection
}