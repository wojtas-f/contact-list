import React from 'react'
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'react-bootstrap'


const ContactPagination = ({ setPage, page,lastPageIndex }) => {
    const nextPage = () => {
        if (page < lastPageIndex) setPage(() => page + 1);
    };

    const prevPage = () => {
        if (page > 1) setPage(() => page - 1);
    };


    return (
        <div className="w-100 d-flex justify-content-center mt-4">
            <ButtonGroup>
                <Button onClick={() => setPage(0)} className="border border-secondary bg-secondary me-1">First page</Button>
                <Button onClick={() => prevPage()} className="border border-secondary bg-secondary me-1">{"<"}</Button>
                {/* {getPages().map(pageIndex => <Button key={`${pageIndex}-page`} onClick={() => selectPage(pageIndex)} className={page === pageIndex ? 'bg-dark border border-secondary' : 'bg-secondary border border-secondary'}>{pageIndex}</Button>)} */}
                <Button onClick={() => nextPage()} className="border border-secondary bg-secondary ms-1">{">"}</Button>
                {/* <Button onClick={() => selectPage(lastPageIndex)} className="border border-secondary bg-secondary ms-1">Last page</Button> */}
            </ButtonGroup>
        </div>
    )
}

ContactPagination.propTypes = {
    setPage: PropTypes.func.isRequired,
    // getPages: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    lastPageIndex: PropTypes.number.isRequired,
};


export default ContactPagination