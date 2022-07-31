import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Modal, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import {
  acceptSpecificVerification,
  rejectSpecificVerification,
  resetSuccess,
  resetError,
} from "../../redux/actions/verificationActions.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Zoom from "react-img-zoom";
import ReactImageMagnify from "react-image-magnify";
import style from "./index.module.scss";

const ContainerCard = ({ link, userInfo }) => {
  console.log("USER INFO", userInfo);

  const [show, setShow] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const { success, error, successMessage } = useSelector(
    (state) => state.verification
  );

  const handleCloseAccept = () => setShow(false);
  const handleShowAccept = () => setShow(true);

  const handleCloseReject = () => setShowReject(false);
  const handleShowReject = () => setShowReject(true);

  const dispatch = useDispatch();

  const handleAccept = (id) => {
    dispatch(acceptSpecificVerification(id));
    handleCloseAccept();
  };

  const handleReject = (id) => {
    dispatch(rejectSpecificVerification(id));
    handleCloseReject();
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

  if (!userInfo) {
    return (
      <>
        <Card className={style.card}>
          <Card.Header className={style.cardHeader}>
            <Link to={`/${link}`} className={style.backButton}>
              BACK
            </Link>
          </Card.Header>
          <Card.Body className={style.cardBody}>
            <h1>DATA UNAVAILABLE</h1>
          </Card.Body>
        </Card>
      </>
    );
  }

  return (
    <>
      <Modal show={show} onHide={handleCloseAccept}>
        <Modal.Header closeButton>
          <Modal.Title>User Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to accept the verification?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAccept}>
            No
          </Button>
          <Button
            variant="success"
            onClick={() => handleAccept(userInfo[0].workerData[0]._id)}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showReject} onHide={handleCloseReject}>
        <Modal.Header closeButton>
          <Modal.Title>User Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to reject the verification?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReject}>
            No
          </Button>
          <Button
            variant="danger"
            onClick={() => handleReject(userInfo[0].workerData[0]._id)}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <Card className={style.card}>
        <Card.Header className={style.cardHeader}>
          <Link to={`/${link}`} className={style.backButton}>
            BACK
          </Link>

          {link === "verification-requests" ? (
            <div>
              {userInfo[0].verify_status === "Pending" ? (
                <>
                  <Button
                    className={style.acceptButton}
                    onClick={handleShowAccept}
                  >
                    ACCEPT
                  </Button>
                  <Button
                    className={style.deactButton}
                    onClick={handleShowReject}
                  >
                    DECLINE
                  </Button>
                </>
              ) : (
                ""
              )}
            </div>
          ) : (
            <Button className={style.deactButton}>DEACTIVATE</Button>
          )}
        </Card.Header>
        <Card.Body className={style.cardBody}>
          <div className={style.infoContainer}>
            <div className={style.column}>
              <img
                className={style.profile}
                src={userInfo[0].workerData[0].profile_pic}
                alt="&nbsp; Profile Pic"
              />
            </div>
            <section className={style.userDetails}>
              <section className={style.userDetailRow}>
                <div className={style.container}>
                  <span className={style.infoLabel}>NAME</span>
                  <span className={style.info}>
                    {userInfo[0].workerData[0].name}
                  </span>
                </div>
                <div className={style.container}>
                  <span className={style.infoLabel}>EMAIL</span>
                  <span className={style.info}>
                    {userInfo[0].workerData[0].email}
                  </span>
                </div>
                <div className={style.container}>
                  <span className={style.infoLabel}>ADDRESS</span>
                  <span className={style.info}>
                    {userInfo[0].workerData[0].address}
                  </span>
                </div>
              </section>
              <section className={style.userDetailRow}>
                <div className={style.container}>
                  <span className={style.infoLabel}>SEX</span>
                  <span className={style.info}>
                    {userInfo[0].workerData[0].sex}
                  </span>
                </div>
                <div className={style.container}>
                  <span className={style.infoLabel}>BIRTHDATE</span>
                  <span className={style.info}>
                    {moment(userInfo[0].workerData[0].birthdate).format("ll")}
                  </span>
                </div>
                <div className={style.container}>
                  <span className={style.infoLabel}>
                    MOBILE / TELEPHONE NUMBER
                  </span>
                  <span className={style.info}>
                    0{userInfo[0].workerData[0].mobile_no}
                  </span>
                </div>
              </section>
              <section className={style.userDetailRow}>
                {link === "verification-requests" ? (
                  <div className={style.container}>
                    <span className={style.infoLabel}>USER TYPE</span>
                    <span className={style.info}>Skilled Worker</span>
                  </div>
                ) : (
                  ""
                )}
                {link === "skilledworkers" ? (
                  <div className={style.container}>
                    <span className={style.infoLabel}>SERVICE/S OFFERED</span>
                    <span className={style.info}>{userInfo.services}</span>
                  </div>
                ) : (
                  ""
                )}
                <div className={style.container}>
                  <span className={style.infoLabel}>MEMBER SINCE</span>
                  <span className={style.info}>
                    {moment(userInfo[0].workerData[0].createdAt).format("ll")}
                  </span>
                </div>
              </section>
              <section className={style.imagesOffsetContainer}>
                <div className={style.container}>
                  <span className={style.infoLabel}>
                    VALID ID PRESENTED
                    {userInfo[0].workerData[0].is_verified ? (
                      <span className="mx-3 text-success">Verified</span>
                    ) : (
                      <span className="mx-3 text-danger">Not Verified</span>
                    )}
                  </span>
                  <span className={style.info}>(Front)</span>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Valid ID",
                        isFluidWidth: true,
                        src: `${userInfo[0].valid_id[0]}`,
                      },
                      largeImage: {
                        src: `${userInfo[0].valid_id[0]}`,
                        width: 1620,
                        height: 1214,
                      },
                      enlargedImagePosition: "over",
                      enlargedImageClassName: style.IDIMG,
                    }}
                  />
                </div>
                <div className={style.container}>
                  <span className={`${style.infoLabel} invisible`}>
                    VALID ID PRESENTED
                  </span>
                  <span className={style.info}>(Back)</span>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Valid ID",
                        isFluidWidth: true,
                        src: `${userInfo[0].valid_id[1]}`,
                      },
                      largeImage: {
                        src: `${userInfo[0].valid_id[1]}`,
                        width: 1620,
                        height: 1214,
                      },
                      enlargedImagePosition: "over",
                      enlargedImageClassName: style.IDIMG,
                    }}
                  />
                </div>
                <div className={style.container}>
                  <span className={style.infoLabel}>
                    NBI / POLICE CLEARANCE
                  </span>
                  <span className={style.info}>NBI Clearance</span>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "NBI Clearance",
                        isFluidWidth: true,
                        src: `${userInfo[0].nbi_brgy_clearance[0]}`,
                      },
                      largeImage: {
                        src: `${userInfo[0].nbi_brgy_clearance[0]}`,
                        width: 1620,
                        height: 1214,
                      },
                      enlargedImagePosition: "over",
                      enlargedImageClassName: style.IDIMG,
                    }}
                  />
                </div>
              </section>
            </section>
          </div>
        </Card.Body>
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
      </Card>
    </>
  );
};

export default ContainerCard;
