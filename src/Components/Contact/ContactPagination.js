import React from 'react'
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'react-bootstrap'


const ContactPagination = ({ nextPage, prevPage, selectPage, getPages, page, lastPageIndex }) => (
    <div className="w-100 d-flex justify-content-center mt-4">
        <ButtonGroup>
            <Button onClick={() => selectPage(1)} className="border border-secondary bg-secondary">First page</Button>
            <Button onClick={() => prevPage()} className="border border-secondary bg-secondary">Previous</Button>
            {getPages().map(pageIndex => <Button key={`${pageIndex}-page`} onClick={() => selectPage(pageIndex)} className={page === pageIndex ? 'bg-dark border border-secondary' : 'bg-secondary border border-secondary'}>{pageIndex}</Button>)}
            <Button onClick={() => nextPage()} className="border border-secondary bg-secondary">Next</Button>
            <Button onClick={() => selectPage(lastPageIndex)} className="border border-secondary bg-secondary">Last page</Button>
        </ButtonGroup>
    </div>
)


ContactPagination.propTypes = {
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired,
    selectPage: PropTypes.func.isRequired,
    getPages: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    lastPageIndex: PropTypes.number.isRequired,
};


export default ContactPagination