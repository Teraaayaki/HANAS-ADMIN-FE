import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  acceptCertification,
  rejectCertification,
  setPendingCertification,
} from "../../redux/actions/certificationActions";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import style from "./index.module.scss";

const renderHeaderButtons = (certificationInfo, dispatch) => {
  const handleAcceptOnClick = () => {
    dispatch(acceptCertification(certificationInfo._id));
  };

  const handleRejectOnClick = () => {
    dispatch(rejectCertification(certificationInfo._id));
  };

  const handleReopenOnClick = () => {
    dispatch(setPendingCertification(certificationInfo._id));
  };

  console.log("CINF", certificationInfo);

  switch (certificationInfo.is_certified) {
    case "Pending":
      return (
        <div>
          <Button
            className={style.acceptButton}
            onClick={() => handleAcceptOnClick()}
          >
            CERTIFY
          </Button>
          <Button
            className={style.deactButton}
            onClick={() => handleRejectOnClick()}
          >
            REJECT
          </Button>
        </div>
      );
    case "Accepted":
    case "Rejected":
      return (
        <Button
          className={style.deactButton}
          onClick={() => handleReopenOnClick()}
        >
          REOPEN
        </Button>
      );
    default:
      return;
  }
};

const renderValidIDList = (validIDData) => {
  let last = -1;
  if (validIDData !== undefined) {
    last = validIDData.length - 1;
  }
  if (last > 0) {
    return validIDData.map((valid_id, idx) => {
      if (idx < last) {
        return (
          <div className={style.container}>
            <span className={style.infoLabel}>
              VALID ID PRESENTED
              <span className="mx-3 text-success">Verified</span>
            </span>
            <img
              src={valid_id}
              alt="&nbsp; Valid ID"
              width={350}
              height={200}
            />
          </div>
        );
      } else {
        return (
          <div className={style.container}>
            <span className={`${style.infoLabel} invisible`}>_</span>
            <img
              src={valid_id}
              alt="&nbsp; Valid ID"
              width={350}
              height={200}
            />
          </div>
        );
      }
    });
  } else if (last > -1) {
    return (
      <div className={style.container}>
        <span className={style.infoLabel}>
          VALID ID PRESENTED
          <span className="mx-3 text-success">Verified</span>
        </span>
        <img
          src={validIDData[0].valid_id}
          alt="&nbsp; Valid ID"
          width={350}
          height={200}
        />
      </div>
    );
  } else {
    return (
      <div className={style.container}>
        <span className={style.infoLabel}>
          VALID ID PRESENTED
          <span className="mx-3 text-danger">Error: Not Verified</span>
        </span>
        <span className={style.info}>No Data</span>
      </div>
    );
  }
};

const renderCertificatesList = (certificatesData, is_certified) => {
  let last = -1;
  if (certificatesData !== undefined) {
    last = certificatesData.length - 1;
  }
  if (last > 0) {
    return certificatesData.map((certificate, idx) => {
      if (idx < last) {
        return (
          <div className={style.container}>
            <span className={style.infoLabel}>
              CERTIFICATES PRESENTED
              {is_certified === "Accepted" ? (
                <span className="mx-3 text-success">Certified</span>
              ) : is_certified === "Rejected" ? (
                <span className="mx-3 text-danger">Rejected</span>
              ) : (
                <span className="mx-3 text-warning">Pending</span>
              )}
            </span>
            <img
              src={certificate}
              alt="&nbsp; Valid ID"
              width={350}
              height={200}
            />
          </div>
        );
      } else {
        return (
          <div className={style.container}>
            <span className={`${style.infoLabel} invisible`}>_</span>
            <img
              src={certificate}
              alt="&nbsp; Valid ID"
              width={350}
              height={200}
            />
          </div>
        );
      }
    });
  } else if (last > -1) {
    return (
      <div className={style.container}>
        <span className={style.infoLabel}>
          CERTIFICATES PRESENTED
          {is_certified === "Accepted" ? (
            <span className="mx-3 text-success">Certified</span>
          ) : is_certified === "Rejected" ? (
            <span className="mx-3 text-danger">Rejected</span>
          ) : (
            <span className="mx-3 text-warning">Pending</span>
          )}
        </span>
        <img
          src={certificatesData[0]}
          alt="&nbsp; Valid ID"
          width={350}
          height={200}
        />
      </div>
    );
  } else {
    return (
      <div className={style.container}>
        <span className={style.infoLabel}>CERTIFICATES PRESENTED</span>
        <span className={style.info}>No Data</span>
      </div>
    );
  }
};

const CertificationContainerCard = ({ link, certificationInfo }) => {
  const dispatch = useDispatch();
  return (
    <Card className={style.card}>
      <Card.Header className={style.cardHeader}>
        <Link to={`/${link}`} className={style.backButton}>
          BACK
        </Link>
        {renderHeaderButtons(certificationInfo, dispatch)}
      </Card.Header>
      <Card.Body className={style.cardBody}>
        <Card.Body className={style.infoContainer}>
          <div className={style.column}>
            <img
              className={style.profile}
              src={
                certificationInfo.serviceData[0].image
                  ? certificationInfo.serviceData[0].image
                  : "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
              }
              alt="&nbsp; Service Pic"
            />
          </div>
          <section className={style.userDetails}>
            <section className={style.userDetailRow}>
              <div className={style.container}>
                <span className={style.infoLabel}>SERVICE</span>
                <span className={style.info}>
                  {certificationInfo.serviceData[0].service_type}
                </span>
              </div>
              <div className={style.container}>
                <span className={style.infoLabel}>HOURLY RATE</span>
                <span className={style.info}>
                  PHP {certificationInfo.hourly_rate}.00
                </span>
              </div>
              <div className={style.container}>
                <span className={style.infoLabel}>LAST UPDATED</span>
                <span className={style.info}>
                  {moment(certificationInfo.updatedAt).format("LL")}
                </span>
              </div>
            </section>
            {certificationInfo &&
            certificationInfo.feedbackData[0] !== undefined ? (
              <section className={style.userDetailRow}>
                <div className={style.container}>
                  <span className={style.infoLabel}>RATING</span>
                  <span className={style.info}>
                    {certificationInfo.feedbackData[0].rateAvg.toFixed(1)} /
                    5.0⭐
                  </span>
                </div>
                <div className={style.container}>
                  <span className={style.infoLabel}>VOTED</span>
                  <span className={style.info}>
                    {certificationInfo.feedbackData[0].jobs}
                  </span>
                </div>
              </section>
            ) : (
              ""
            )}

            <section className={style.userDetailRow}>
              {renderCertificatesList(
                certificationInfo.certificates,
                certificationInfo.is_certified
              )}
            </section>
          </section>
        </Card.Body>
        {/* BREAK LINE */}

        <Card.Footer className={style.infoContainer}>
          <div className={style.column}>
            <img
              className={style.profile}
              src={
                certificationInfo.workerData[0].profile_pic
                  ? certificationInfo.workerData[0].profile_pic
                  : "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
              }
              alt="&nbsp; Profile Pic"
            />
          </div>
          <section className={style.userDetails}>
            <section className={style.userDetailRow}>
              <div className={style.container}>
                <span className={style.infoLabel}>NAME</span>
                <span className={style.info}>
                  <Link
                    to={`/skilledworkers/${certificationInfo.workerData[0]._id}`}
                  >
                    {certificationInfo.workerData[0].name}
                  </Link>
                </span>
              </div>
              <div className={style.container}>
                <span className={style.infoLabel}>EMAIL</span>
                <span className={style.info}>
                  {certificationInfo.workerData[0].email}
                </span>
              </div>
              <div className={style.container}>
                <span className={style.infoLabel}>ADDRESS</span>
                <span className={style.info}>
                  {certificationInfo.workerData[0].address}
                </span>
              </div>
            </section>

            <section className={style.userDetailRow}>
              <div className={style.container}>
                <span className={style.infoLabel}>SEX</span>
                <span className={style.info}>
                  {certificationInfo.workerData[0].sex}
                </span>
              </div>
              <div className={style.container}>
                <span className={style.infoLabel}>BIRTHDATE</span>
                <span className={style.info}>
                  {moment(certificationInfo.workerData[0].birthDate).format(
                    "LL"
                  )}
                </span>
              </div>
              <div className={style.container}>
                <span className={style.infoLabel}>
                  MOBILE / TELEPHONE NUMBER
                </span>
                <span className={style.info}>
                  {certificationInfo.workerData[0].mobile_no}
                </span>
              </div>
            </section>

            <section className={style.userDetailRow}>
              <div className={style.container}>
                <span className={style.infoLabel}>MEMBER SINCE</span>
                <span className={style.info}>
                  {moment(certificationInfo.workerData[0].createdAt).format(
                    "LL"
                  )}
                </span>
              </div>
              <div className={style.container}>
                <span className={style.infoLabel}>ACCOUNT STATUS</span>
                {certificationInfo.workerData[0].is_deactivated ? (
                  <span className={style.deact}>Deactivated</span>
                ) : (
                  <span className={style.active}>Active</span>
                )}
              </div>
            </section>

            <section className={style.userDetailRow}>
              {renderValidIDList(
                certificationInfo.workerData[0].verificationData[0].valid_id,
                certificationInfo.workerData[0].verificationData[0]
                  .verift_status
              )}
              <div className={style.container}>
                <span className={style.infoLabel}>NBI / POLICE CLEARANCE</span>
                {certificationInfo.workerData[0].verificationData[0]
                  .nbi_brgy_clearance ? (
                  <img
                    src={
                      certificationInfo.workerData[0].verificationData[0]
                        .nbi_brgy_clearance
                    }
                    alt="&nbsp; NBI/Brgy Clearance"
                    width={350}
                    height={200}
                  />
                ) : (
                  <span className={style.info}>No Data</span>
                )}
              </div>
            </section>
          </section>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default CertificationContainerCard;
