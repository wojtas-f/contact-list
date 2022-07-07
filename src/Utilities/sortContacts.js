const sortContactsByLastName = (contacts) => contacts.sort((a, b) => {
    const firstElementLastName = a.last_name.toLowerCase();
    const secondElementLastName = b.last_name.toLowerCase();

    return firstElementLastName.localeCompare(secondElementLastName);
})


export default sortContactsByLastName