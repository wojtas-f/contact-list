const filterByPhrase = (contacts, searchPhrase) => {
    if (!searchPhrase) return contacts

    const tempContactsTab = contacts.filter((contact) =>
        `${contact.first_name} ${contact.last_name}`
            .toLowerCase()
            .includes(searchPhrase)
    );

    return tempContactsTab
}

export default filterByPhrase