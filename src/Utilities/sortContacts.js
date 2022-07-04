const sortContactsByLastName = (contacts) => {
    return contacts.sort(function (a, b) {
        const textA = a.last_name.toLowerCase();
        var textB = b.last_name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
}

export default sortContactsByLastName