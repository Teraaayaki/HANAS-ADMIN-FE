import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import DataTable from "../../../components/Table";
import StatusBadge from "../../../components/StatusBadge";
import { MdOutlineDeleteOutline } from "react-icons/md";
import {
  getVerificationList,
  removeSpecificVerification,
  resetSuccess,
  resetError,
} from "../../../redux/actions/verificationActions.js";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./index.module.scss";

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

const VerificationRequestList = () => {
  const headerNames = [
    "Verification Requests",
    "Name",
    "Date",
    "Request Status",
  ];

  const dispatch = useDispatch();

  //LOCAL STATES
  const [show, setShow] = useState(false);

  const { verificationData, success, error, successMessage } = useSelector(
    (state) => state.verification
  );

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const handleRemove = (id) => {
    dispatch(removeSpecificVerification(id));
    dispatch(resetSuccess());
    handleClose();
  };

  useEffect(() => {
    dispatch(getVerificationList());
  }, []);

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
            renderVerificationRequestList(verificationData, handleOpen)
          }
        />
      </div>
      <ToastContainer />
    </>
  );
};

export default VerificationRequestList;
