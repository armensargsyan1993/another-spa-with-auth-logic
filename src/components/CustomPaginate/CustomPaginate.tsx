
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { BootCampsData } from '../../api/requestMethod'
import img1 from '../../pictures/image_1.jpg'
import img2 from '../../pictures/image_2.jpg'
import img3 from '../../pictures/image_3.jpg'
import img4 from '../../pictures/image_4.jpg'
import { bootCampsThunk } from '../../redux/bootCampsReducer/bootCampsActions'
import { Card } from '../Card/Card'
import { useSelector } from '../overrideHooks'

interface CustomPaginateHandlePageClick{
    selected:number
}

export const CustomPaginate:React.FC = () => {
    
    const imgArr:Array<string> = [img1,img2,img3,img4]
    const [currentPage, setCurrentPage] = useState(0);
    const {data} = useSelector(state => state.bootCamps)
    
    //what parameter giving api the count in reducer??????????????????

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(bootCampsThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function handlePageClick({ selected: selectedPage }:CustomPaginateHandlePageClick) {
        setCurrentPage(() => selectedPage);
    }

    const PER_PAGE:number = 4;
    const offset:number = currentPage * PER_PAGE;
    const currentPageData = data.slice(offset, offset + PER_PAGE)
    

    const pageCount = Math.ceil(data.length / PER_PAGE);

    return (
            <div className="testingPaginate">
                {!data.length && imgArr.map((e,i) => {
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
