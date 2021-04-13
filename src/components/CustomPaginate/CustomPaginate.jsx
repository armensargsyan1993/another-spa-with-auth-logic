
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import img1 from '../../pictures/image_1.jpg'
import img2 from '../../pictures/image_2.jpg'
import img3 from '../../pictures/image_3.jpg'
import img4 from '../../pictures/image_4.jpg'
import { bootCampsThunk } from '../../redux/bootCampsReducer/bootCampsActions'
import { Card } from '../Card/Card'


export const CustomPaginate = () => {
    
    const imgArr = [img1,img2,img3,img4]
    const [currentPage, setCurrentPage] = useState(0);
    const bootcamps = useSelector(state => state.bootcamps.data)
    
    //what parameter giving api the count in reducer??????????????????

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(bootCampsThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(() => selectedPage);
    }

    const PER_PAGE = 4;
    const offset = currentPage * PER_PAGE;
    const currentPageData = bootcamps.slice(offset, offset + PER_PAGE)

    const pageCount = Math.ceil(bootcamps.length / PER_PAGE);

    return (
            <div className="testingPaginate">
                {!bootcamps.length && imgArr.map((e,i) => {
                    return <Card key={i} src={e}/>
                })}
                {currentPageData?.map((e) => <Card key={e.id} address = {e.address} name={e.name} careers={e.careers}/>)}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    pageCount={pageCount || 1}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={3}
                    breakLabel={'...'}
                />
            </div>
    )
}
