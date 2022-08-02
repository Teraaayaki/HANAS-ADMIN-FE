import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ReactPaginate from 'react-paginate';
import DataTable from '../../../components/Table';
import StatusBadge from '../../../components/StatusBadge';
import { Button, Modal, OverlayTrigger, Tooltip} from "react-bootstrap";
import style from './index.module.scss';
import { FaCheckCircle } from 'react-icons/fa';
import { getAllWorkerList } from "../../../redux/actions/achievementsActions";
import { ToastContainer, toast } from "react-toastify";
import moment from 'moment';

const AchievementList = ({ itemsPerPage }) => {

  //PAGINATION STATES
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const { achievementListData, success, successMessage, error } = useSelector((state) => state.achievement);

  const dispatch = useDispatch();

  const headerNames = [
    'Worker Name',
    'Last Activity Date',
    'Actions'
  ];

  //PAGINATION HANDLE
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % achievementListData.length;
    setItemOffset(newOffset);
  };
  
//   const handleSortConvenienceFee = (e) => {
//     dispatch(sortConvenienceFee(e));
//   };

//   const handleFilterConvenienceFee = (e) => {
//     dispatch(filterConvenienceFee(e));
//   }

  const sortItems = [
    
  ];

  const filterItems = [
    
  ];

  
   
  const renderAchievementList = ( achievementListData) => {
    return achievementListData.map((achievement, idx) => {
      return (
        <>
          
          <tr
            key={achievement._id}
            className={`${style.tableDataRow} ${style.clickable}`}
          >
            <td className={style.tableData}>
              <span className={style.truncate}>{achievement.name}</span>
            </td>
            <td className={style.tableData}>
              <span className={style.truncate}>{moment(achievement.updatedAt).format('LL')}</span>
            </td>
            <td className={style.tableData}>
                <Button variant="success">Claim Item 1</Button>{" "}
                <Button variant="secondary">Earn Points</Button>{" "}
                <Button variant="secondary">Earn Points</Button>{" "}
                <Button variant="secondary">Earn Points</Button>{" "}
                <Button variant="secondary">Earn Points</Button>{" "}
                <Button variant="secondary">Earn Points</Button>{" "}
            </td>
          </tr>
        </>
        
      );
    });
  };

//   useEffect(() => {
//     if (success) {
//       toast.success(successMessage, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         onClose: () => dispatch(resetSuccess()),
//       });
//     }
//   }, [dispatch, success, successMessage]);

//   useEffect(() => {
//     if (error) {
//       toast.error(error, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         onClose: () => dispatch(resetError()),
//       });
//     }
//   }, [dispatch, error]);

  useEffect(() => {
    dispatch(getAllWorkerList());
   }, [dispatch]);

  useEffect(() => {
  // Fetch items from another resources.
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  setCurrentItems(achievementListData.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(achievementListData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

    return (
      <>
        <div className="main-content">
          <DataTable
            tableTitle="Details"
            headerNames={headerNames}
            renderData={() => renderAchievementList(currentItems)}
            sortItems={sortItems}
            filterItems={filterItems}
          />
          <div className={style.paginateContainer}>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              pageCount={pageCount}
              previousLabel="Previous"
              renderOnZeroPageCount={null}
              containerClassName={'pagination'} /* as this work same as bootstrap class */
              subContainerClassName={'pages pagination'} /* as this work same as bootstrap class */
              activeClassName={'active'} /* as this work same as bootstrap class */
            />
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </>
      
    );
};

const PaginatedAchievementsList = () => {
  return (
    <div>
      {
          <AchievementList itemsPerPage={10} />
      }
    </div>
    
  );
}

export default PaginatedAchievementsList;
