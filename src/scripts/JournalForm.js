import { EntryListComponent } from "./JournalEntryList.js" 
import { saveEntries } from"./JournalDataProvider.js"


//This form prints new entries and stores them to server

const contentTarget = document.querySelector("#entries")


// Handle browser-generated click event in component
document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntries") {
            //^^^object representation of a note
        // let entryText = document.querySelector("#noteText").value

        // console.dir(entryText);

         const newEntry = {

            // noteText: entryText
            // Key/value pairs here
          
            ConceptsCovered: document.querySelector("#concept").value,
            DateOfEntry: document.querySelector("#journalDate").value,
            JournalEntry: document.querySelector("#entry").value,
            mood: document.querySelector("#mood").value
            
           
           
        }
            console.log(newEntry)
            document.querySelector("#concept").value = ""
            document.querySelector("#journalDate").value = ""
            document.querySelector("#entry").value = ""
            document.querySelector("#mood").value = ""
           
            // document.querySelector("#suspectId").value = ""
        // }
        // Make a new object representation of a note
       
        // const 
        // Change API state and application state
        saveEntries(newEntry)
        .then(EntryListComponent) // Refresh your list of notes once you've saved your new one
    }
})

export const JournalForm = () => {
    contentTarget.innerHTML = `
    <section class="journal-form">
    <h2 id="journal-heading">Daily Journal</h2>
        <form action="">
        <fieldset>
        <section class="data">   
           <label for="journalData">Data of entry</label> 
           <input type="date" name="journalData" id="journalData">
       </fieldset>
       
       <fieldset>
       <section class="concepts">   
      <label for="conceptsCovered">Concepts covered</label>
      <input type="text" name="conceptscovered" id="conceptsCovered">
      </fieldset>
      </section>
      
          <fieldset class="journal-entry">
            <label for="journalEntry">Journal Entry</label>
            <textarea
              name="text"
              id="entry-text"
              cols="30"
              rows="4"
            ></textarea>
          </fieldset>


          <fieldset class="journal-mood">
            <label for="journalMood">Mood</label>
            <select name="" id="mood-text">
            <option value="happy">happy</option>
            <option value="sad">sad</option>
            <option value="mad">mad</option>
            <option value="cipper">cipper</option>
            </select>
          </fieldset>
        </form>
        <button type="button" class="btn btn-light btn-outline-dark" id="saveEntries">
          <i class="bi bi-journal-check"></i>
          Record Journal Entry
        </button>
    </section>
    `
}  

