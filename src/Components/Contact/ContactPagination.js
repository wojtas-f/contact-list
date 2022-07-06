import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'


const ContactPagination = ({ nextPage, prevPage, selectPage, getPages, page, lastPageIndex }) => {
    return (
        <div className="w-100 d-flex justify-content-center mt-4">
            {console.log(lastPageIndex)}
            <ButtonGroup>
                <Button onClick={() => selectPage(1)} className="border border-secondary bg-secondary">First page</Button>
                <Button onClick={() => prevPage()} className="border border-secondary bg-secondary">Previous</Button>
                {getPages().map(pageIndex => <Button onClick={() => selectPage(pageIndex)} className={page === pageIndex ? 'bg-dark border border-secondary' : 'bg-secondary border border-secondary'}>{pageIndex}</Button>)}
                <Button onClick={() => nextPage()} className="border border-secondary bg-secondary">Next</Button>
                <Button onClick={() => selectPage(lastPageIndex)} className="border border-secondary bg-secondary">Last page</Button>
            </ButtonGroup>
        </div>
    )
}

export default ContactPagination