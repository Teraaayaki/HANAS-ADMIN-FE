import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import ReactPaginate from 'react-paginate';
import DataTable from "../../../components/Table";
import StatusBadge from "../../../components/StatusBadge";
import { MdOutlineDeleteOutline } from "react-icons/md";
import {
  getVerificationList,
  removeSpecificVerification,
  resetSuccess,
  resetError,
  sortVerification,
  filterVerification,
} from "../../../redux/actions/verificationActions.js";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import style from "./index.module.scss";

/*bootstrap module for easier styling for the pagination*/
import 'bootstrap/dist/css/bootstrap.min.css';

const renderVerificationRequestList = (verificationData, handleOpen) => {
  return verificationData.map((verificationData, idx) => {
    return (
      <tr key={verificationData._id} className={style.tableDataRow}>
        <td className={style.tableData}>
          <img
            className={style.profilePic}
            src={verificationData.workerData[0].profile_pic}
            alt="&nbsp; Profile Pic"
          />
          <Link to={`/verification-requests/${verificationData.user_id}`}>
            <span className={style.truncate}>Request for Verification</span>
          </Link>
        </td>
        <td className={style.tableData}>
          <span>{verificationData.workerData[0].name}</span>
        </td>
        <td className={style.tableData}>
          <span>{moment(verificationData.createdAt).format("LL")}</span> <br />
          <span className={style.time}>
            {moment(verificationData.createdAt).format("LT")}
          </span>
        </td>
        <td className={style.tableData}>
          <StatusBadge
            status={verificationData.verify_status.toUpperCase()}
          />
        </td>
        <td className={style.tableData}>
          <MdOutlineDeleteOutline
            size={25}
            className={style.deleteIcon}
            onClick={handleOpen}
          />
        </td>
      </tr>
    );
  });
};

const VerificationRequestList = ({ itemsPerPage }) => {
  const headerNames = [
    "Verification Requests",
    "Name",
    "Verification Date",
    "Request Status",
  ];


  const handleSortVerification = (e) => {
    dispatch(sortVerification(e));
  };

  const handleFilterVerification = (e) => {
    dispatch(filterVerification(e));
  }

  const sortItems = [
    {
      name: 'Name (A-Z)',
      event_key: 'name',
      onClick: () => { dispatch(handleSortVerification('name'))}
    },
    {
      name: 'Date of Account Creation',
      event_key: 'date',
      onClick: () => { dispatch(handleSortVerification('date'))}
    }
  ];

  const filterItems = [
    {
      name: 'Pending',
      event_key: 'pending',
      onClick: () => { dispatch(handleFilterVerification('Pending'))}
    },
    {
      name: 'Accepted',
      event_key: 'accepted',
      onClick: () => { dispatch(handleFilterVerification('Accepted'))}
    },
    {
      name: 'Rejected',
      event_key: 'rejected',
      onClick: () => { dispatch(handleFilterVerification('Rejected'))}
    },
  ]
    

  const dispatch = useDispatch();

  //LOCAL STATES
  const [show, setShow] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const { verificationData, success, error, successMessage } = useSelector(
    (state) => state.verification
  );

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % verificationData.length;
    setItemOffset(newOffset);
  };

  const handleRemove = (id) => {
    dispatch(removeSpecificVerification(id));
    dispatch(resetSuccess());
    handleClose();
  };

  useEffect(() => {
      dispatch(getVerificationList());
  }, [dispatch]);

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
  }, [success]);

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
  }, [error]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(verificationData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(verificationData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, verificationData]);
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this from the list of verification?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="danger"
            onClick={() => handleRemove(verificationData[0].workerData[0]._id)}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="main-content">
        <DataTable
          tableTitle="All Requests"
          headerNames={headerNames}
          renderData={() =>
            renderVerificationRequestList(currentItems, handleOpen)
          }
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
            // className={style.paginationContainer}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
  
};

const PaginatedVerificationRequestList = () => {
  return (
    <div>
      {
          <VerificationRequestList itemsPerPage={1} />
      }
    </div>
    
  );
}

export default PaginatedVerificationRequestList;
