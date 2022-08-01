import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ReactPaginate from 'react-paginate';
import DataTable from '../../../components/Table';
import StatusBadge from '../../../components/StatusBadge';
import { Button, Modal, OverlayTrigger, Tooltip} from "react-bootstrap";
import style from './index.module.scss';
import { FaCheckCircle } from 'react-icons/fa';
import { getConvFeeList, setConvFeeToPaid, sortConvenienceFee, resetSuccess, resetError, filterConvenienceFee, checkConvenienceFeeOverdue } from "../../../redux/actions/convFeeActions";
import { ToastContainer, toast } from "react-toastify";
import moment from 'moment';

const TransactionFeeList = ({ itemsPerPage }) => {

  const [show, setShow] = useState(false);
  const [showPaid, setShowPaid] = useState(false);

  //PAGINATION STATES
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

const { convFeeListData, success, successMessage, error } = useSelector((state) => state.convenience);

  const dispatch = useDispatch();

  const headerNames = [
    'Worker Name',
    'Last Activity Date',
    'Remaining Balance',
    'Status',
    'Actions'
  ];

  //MODAL CHECK OVERDUE HANDLE
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  //MODAL SET TO PAID HANDLE
  const handleClosePaid = () => setShowPaid(false);
  const handleOpenPaid = () => setShowPaid(true);

  //PAGINATION HANDLE
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % convFeeListData.length;
    setItemOffset(newOffset);
  };
  
  const handleSortConvenienceFee = (e) => {
    dispatch(sortConvenienceFee(e));
  };

  const handleFilterConvenienceFee = (e) => {
    dispatch(filterConvenienceFee(e));
  }

  const handleCheckOverdue = () => {
    dispatch(checkConvenienceFeeOverdue());
  }

const handlePayment = (amount, id) => {
  const DATA = {
    amount,
    id,
  }
  dispatch(setConvFeeToPaid(DATA));
};

  const sortItems = [
    {
      name: 'Default',
      event_key: 'all',
      onClick: () => { dispatch(handleSortConvenienceFee('all'))}
    },
    {
      name: 'Name (A-Z)',
      event_key: 'name',
      onClick: () => { dispatch(handleSortConvenienceFee('name'))}
    },
    {
      name: 'Last Activity Date',
      event_key: 'date',
      onClick: () => { dispatch(handleSortConvenienceFee('date'))}
    },
  ];

  const filterItems = [
    {
      name: 'Default',
      event_key: 'all',
      onClick: () => { dispatch(handleFilterConvenienceFee('all'))}
    },
    {
      name: 'Paid',
      event_key: 'pending',
      onClick: () => { dispatch(handleFilterConvenienceFee('paid'))}
    },
    {
      name: 'Pending',
      event_key: 'pending',
      onClick: () => { dispatch(handleFilterConvenienceFee('pending'))}
    },
    {
      name: 'Overdue',
      event_key: 'overdue',
      onClick: () => { dispatch(handleFilterConvenienceFee('overdue'))}
    },
  ];

  const renderTransactionFeeList = (convFeeListData) => {
    return convFeeListData.map((transaction, idx) => {
      return (
        <>
          
          <tr
            key={transaction._id}
            className={`${style.tableDataRow} ${style.clickable}`}
          >
            <td className={style.tableData}>
              <span className={style.truncate}>{transaction.workerData[0].name}</span>
            </td>
            <td className={style.tableData}>
              <span className={style.truncate}>{moment(transaction.updatedAt).format('LL')}</span>
            </td>
            <td className={style.tableData}>
              <span className={style.truncate}>₱ {transaction.total_amount.toFixed(2)}</span>
            </td>
            <td className={style.tableData}>
              <StatusBadge status={transaction.status} />
            </td>
            <td className={style.tableData}>
              {transaction.status === 'PAID'? '': <FaCheckCircle className={style.iconGreen} onClick={() => handleOpenPaid()}/> }
              <Modal show={showPaid} onHide={handleClosePaid}>
                <Modal.Header closeButton>
                  <Modal.Title>Set to Paid</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure you want to set the convenience fee for this user to 'PAID'?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePaid}>
                    No
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => {handlePayment(transaction.total_amount, transaction._id); setTimeout(() => {
                      handleClosePaid();
                    }, 1000);}}
                  >
                    Yes
                  </Button>
                </Modal.Footer>
              </Modal>
            </td>
          </tr>
        </>
        
      );
    });
  };

  useEffect(() => {
    if (success) {
      toast.success(successMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => dispatch(resetSuccess()),
      });
    }
  }, [dispatch, success, successMessage]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => dispatch(resetError()),
      });
    }
  }, [dispatch, error]);

  useEffect(() => {
    dispatch(getConvFeeList());
   }, [dispatch]);

  useEffect(() => {
  // Fetch items from another resources.
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  setCurrentItems(convFeeListData.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(convFeeListData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, convFeeListData]);

    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Check Overdue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to check the overdue for all listed items? <br/> <br/>
            <p className={style.italicBold}>Note: Doing this action will set all 'Pending' statuses to 'Overdue'</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              No
            </Button>
            <Button
              variant="success"
              onClick={() => handleCheckOverdue()}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="main-content">
          <DataTable
            tableTitle="Details"
            headerNames={headerNames}
            renderData={() => renderTransactionFeeList(currentItems)}
            sortItems={sortItems}
            filterItems={filterItems}
            buttonOverdue={handleOpen}
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

const PaginatedTransactionFeeList = () => {
  return (
    <div>
      {
          <TransactionFeeList itemsPerPage={10} />
      }
    </div>
    
  );
}

export default PaginatedTransactionFeeList;
