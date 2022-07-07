import React from 'react'
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'react-bootstrap'


const ContactPagination = ({ setPage, selectPage, getPages, page, lastPageIndex }) => {
    const nextPage = () => {
        if (page < lastPageIndex) setPage(() => page + 1);
    };

    const prevPage = () => {
        if (page > 1) setPage(() => page - 1);
    };


    return (
        <div className="w-100 d-flex justify-content-center mt-4">
            <ButtonGroup>
                <Button onClick={() => selectPage(1)} className="border border-secondary bg-secondary">First page</Button>
                <Button onClick={() => prevPage()} className="border border-secondary bg-secondary">{"<"}</Button>
                {getPages().map(pageIndex => <Button key={`${pageIndex}-page`} onClick={() => selectPage(pageIndex)} className={page === pageIndex ? 'bg-dark border border-secondary' : 'bg-secondary border border-secondary'}>{pageIndex}</Button>)}
                <Button onClick={() => nextPage()} className="border border-secondary bg-secondary">{">"}</Button>
                <Button onClick={() => selectPage(lastPageIndex)} className="border border-secondary bg-secondary">Last page</Button>
            </ButtonGroup>
        </div>
    )
}

ContactPagination.propTypes = {
    setPage: PropTypes.func.isRequired,
    selectPage: PropTypes.func.isRequired,
    getPages: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    lastPageIndex: PropTypes.number.isRequired,
};


export default ContactPagination