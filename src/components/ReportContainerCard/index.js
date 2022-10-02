import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import ReactImageMagnify from "react-image-magnify";

import {
  resolveReport,
  rejectReport,
  reopenReport,
  resetError,
  resetSuccess,
} from "../../redux/actions/reportActions.js";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./index.module.scss";

const renderAttachedImages = (imageData) => {
  let last = -1;
  if (imageData !== undefined) {
    last = imageData.length - 1;
  }
  if (last > -1) {
    return imageData.map((image, idx) => {
      if (idx < 1) {
        return (
          <div key={idx} className={style.container}>
            <span className={style.infoLabel}>ATTACHED IMAGES</span>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Valid ID",
                  isFluidWidth: true,
                  src: `${image}`,
                },
                largeImage: {
                  src: `${image}`,
                  width: 1600,
                  height: 1200,
                },
                enlargedImagePosition: "over",
                enlargedImageClassName: style.ReportIMG,
              }}
            />
          </div>
        );
      } else {
        if (idx <= 2) {
          return (
            <div key={idx} className={style.container}>
              <span className={`${style.infoLabel} invisible`}>_</span>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Valid ID",
                    isFluidWidth: true,
                    src: `${image}`,
                  },
                  largeImage: {
                    src: `${image}`,
                    width: 1600,
                    height: 1200,
                  },
                  enlargedImagePosition: "over",
                  enlargedImageClassName: style.ReportIMG,
                }}
              />
            </div>
          );
        }
      }
    });
  } else {
    return (
      <div className={style.container}>
        <span className={style.infoLabel}>ATTACHED IMAGES</span>
        <span className={style.info}>No Data</span>
      </div>
    );
  }
};

const renderAttachedImages2 = (imageData) => {
  let last = -1;
  if (imageData !== undefined) {
    last = imageData.length - 1;
  }
  if (last > -1) {
    return imageData.map((image, idx) => {
      if (idx >= 3) {
        return (
          <div key={idx} className={style.container}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Valid ID",
                  isFluidWidth: true,
                  src: `${image}`,
                },
                largeImage: {
                  src: `${image}`,
                  width: 1600,
                  height: 1200,
                },
                enlargedImagePosition: "over",
                enlargedImageClassName: style.ReportIMG,
              }}
            />
          </div>
        );
      }
    });
  } else {
    return "";
  }
};

const renderHeaderButtons = (dispatch, reportInfo) => {
  const handleResolveOnClick = () => {
    dispatch(resolveReport(reportInfo._id));
  };

  const handleRejectOnClick = () => {
    dispatch(rejectReport(reportInfo._id));
  };

  const handleReopenOnClick = () => {
    dispatch(reopenReport(reportInfo._id));
  };

  switch (reportInfo.status) {
    case "Pending":
      return (
        <div>
          <Button
            className={style.resolveButton}
            onClick={() => handleResolveOnClick()}
          >
            RESOLVE
          </Button>
          <Button
            className={style.rejectButton}
            onClick={() => handleRejectOnClick()}
          >
            REJECT
          </Button>
        </div>
      );
    case "Resolved":
      return (
        <div>
          <Button
            className={style.pendingButton}
            onClick={() => handleReopenOnClick()}
          >
            REOPEN
          </Button>
        </div>
      );
    case "Rejected":
      return (
        <div>
          <Button
            className={style.pendingButton}
            onClick={() => handleReopenOnClick()}
          >
            REOPEN
          </Button>
        </div>
      );
    default:
      return;
  }
};

const ReportContainerCard = ({ link, reportInfo }) => {
  const { success, error, successMessage } = useSelector(
    (state) => state.report
  );

  const dispatch = useDispatch();

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
    <Card className={style.card}>
      <Card.Header className={style.cardHeader}>
        <Link to={`/${link}`} className={style.backButton}>
          BACK
        </Link>
        {renderHeaderButtons(dispatch, reportInfo)}
      </Card.Header>
      <Card.Body className={style.cardBody}>
        <section className={style.userDetails}>
          <section className={style.userDetailRow}>
            <div className={style.container}>
              <span className={style.infoLabel}>CONCERN</span>
              <span className={style.info}>{reportInfo.concern}</span>
            </div>
            <div className={style.container}>
              <span className={style.infoLabel}>DATE RAISED</span>
              <span className={style.info}>
                {moment(reportInfo.createdAt).format("LL") +
                  " " +
                  moment(reportInfo.createdAt).format("LT")}
              </span>
            </div>
            <div className={style.container}>
              <span className={style.infoLabel}>LAST UPDATED</span>
              <span className={style.info}>
                {moment(reportInfo.updatedAt).format("LL") +
                  " " +
                  moment(reportInfo.updatedAt).format("LT")}
              </span>
            </div>
          </section>
          <section className={style.userDetailRow}>
            <div className={style.messageContainer}>
              <span className={style.infoLabel}>MESSAGE</span>
              <span className={style.info}>{reportInfo.message}</span>
            </div>
          </section>
          <section className={style.userDetailRow}>
            <div className={style.container}>
              <span className={style.infoLabel}>REPORTER</span>
              <span className={style.info}>
                <Link
                  to={
                    reportInfo.reporterData[0].is_worker
                      ? `/skilledworkers/${reportInfo.reporterData[0]._id}`
                      : `/clients/${reportInfo.reporterData[0]._id}`
                  }
                >
                  {reportInfo.reporterData[0].first_name + " "}
                  {reportInfo.reporterData[0].middle_name + " "}
                  {reportInfo.reporterData[0].family_name + " "}
                  {reportInfo.reporterData[0].suffix}
                </Link>
              </span>
            </div>
            <div className={style.container}>
              <span className={style.infoLabel}>REPORTER TYPE</span>
              <span className={style.info}>
                {reportInfo.reporterData[0].is_worker
                  ? "Skilled Worker"
                  : "Client"}
              </span>
            </div>
          </section>
          {reportInfo.reportedUserData[0] !== undefined ? (
            <section className={style.userDetailRow}>
              <div className={style.container}>
                <span className={style.infoLabel}>REPORTEE</span>
                <span className={style.info}>
                  <Link
                    to={
                      reportInfo.reportedUserData[0].is_worker
                        ? `/skilledworkers/${reportInfo.reportedUserData[0]._id}`
                        : `/clients/${reportInfo.reportedUserData[0]._id}`
                    }
                  >
                    {reportInfo.reportedUserData[0].first_name + " "}
                    {reportInfo.reportedUserData[0].middle_name + " "}
                    {reportInfo.reportedUserData[0].family_name + " "}
                    {reportInfo.reportedUserData[0].suffix}
                  </Link>
                </span>
              </div>

              <div className={style.container}>
                <span className={style.infoLabel}>REPORTEE TYPE</span>
                <span className={style.info}>
                  {reportInfo.reporterData[0].is_worker
                    ? "Skilled Worker"
                    : "Client"}
                </span>
              </div>
            </section>
          ) : (
            ""
          )}
          <section className={style.userDetailRow}>
            {renderAttachedImages(reportInfo.attached_images)}
          </section>
          <section className={style.userDetailRow}>
            {renderAttachedImages2(reportInfo.attached_images)}
          </section>
        </section>
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
  );
};

export default ReportContainerCard;
