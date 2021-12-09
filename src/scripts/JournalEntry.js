/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <p>Date of Entry:${entry.DateOfEntry}</p>
        <p>Concepts Covered: ${entry.CoceptsCovered}</p>
        <p>Journal Entry: ${entry.JournalEntry}</p>
        <p>Mood: ${entry.mood}</p>
        </section>
    `
}
