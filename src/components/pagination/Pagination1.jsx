import { useDispatch, useSelector } from "react-redux";
import { PaginationWrap } from "./paginationStyle";
import { useEffect } from "react";
import { currentPage, nextPage, prevPage, totalData } from "../../store/modules/paginationSlice";
 
 
const Pagination1 = () => {
    const { portfolioData } = useSelector(state => state.HomeR)
    const { careerData } = useSelector(state => state.CareerR)

    const { currPage, totalPage } = useSelector( state => state.pagination )
    const dispatch = useDispatch()

    //데이터 바뀌면 totalPage이 바뀔때마다 
    useEffect(() => {
        dispatch( totalData() )
    },[portfolioData, careerData])

    //강제 배열처리, 안해본방법
    const arr = [...Array(totalPage)]

  return (
    <PaginationWrap>
      <div>
        <button onClick={() => dispatch(prevPage())}>{`<<`}</button>
        {//값이 필요없을때 _  currPage 1부터고 idx는 0부터
            arr.map((_, idx) => <button className={currPage === (idx + 1) ? 'on' : ''} onClick={() => dispatch( currentPage(idx + 1))} key={idx}>{ idx + 1 }</button>)
        }
        <button onClick={() => dispatch(nextPage())} >{`>>`}</button>
      </div>
    </PaginationWrap>
  );
};

export default Pagination1;