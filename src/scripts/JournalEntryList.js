import { JournalEntryComponent } from "./JournalEntry.js"
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#mainContainer")

export const EntryListComponent = () => {
    getEntries()
    .then(() => {
        let journalArray = useJournalEntries();

        let JournalHTML = "";

        journalArray.forEach((singleJournalObj) => {

        JournalHTML += JournalEntryComponent(singleJournalObj);


        });

        entryLog.innerHTML = `
        ${JournalHTML}
        `


 })
    
    
    // Use the journal entry data from the data provider component
}
