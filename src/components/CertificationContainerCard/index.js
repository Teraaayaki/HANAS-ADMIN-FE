import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import ReactImageMagnify from "react-image-magnify";
import {
  acceptCertification,
  rejectCertification,
  reopenCertification,
} from "../../redux/actions/certificationActions";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import defaultProf from "../../assets/Logo/defaultProf.jpg";
import hanasLogoBG from "../../assets/Logo/hanas-logo-bg.png";
import service1 from "../../assets/Services/service1.png";
import service2 from "../../assets/Services/service2.png";
import service3 from "../../assets/Services/service3.png";
import service4 from "../../assets/Services/service4.png";
import service5 from "../../assets/Services/service5.png";
import service6 from "../../assets/Services/service6.png";
import service7 from "../../assets/Services/service7.png";
import service8 from "../../assets/Services/service8.png";
import service9 from "../../assets/Services/service9.png";
import service10 from "../../assets/Services/service10.png";
import service11 from "../../assets/Services/service11.png";
import service12 from "../../assets/Services/service12.png";
import service13 from "../../assets/Services/service13.png";
import service14 from "../../assets/Services/service14.png";
import service15 from "../../assets/Services/service15.png";
import service16 from "../../assets/Services/service16.png";
import service17 from "../../assets/Services/service17.png";
import service18 from "../../assets/Services/service18.png";
import service19 from "../../assets/Services/service19.png";
import service20 from "../../assets/Services/service20.png";
import style from "./index.module.scss";

const renderHeaderButtons = (certificationInfo, dispatch) => {
  const handleAcceptOnClick = () => {
    dispatch(acceptCertification(certificationInfo._id));
  };

  const handleRejectOnClick = () => {
    dispatch(rejectCertification(certificationInfo._id));
  };

  const handleReopenOnClick = () => {
    dispatch(reopenCertification(certificationInfo._id));
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
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Valid ID",
                  isFluidWidth: true,
                  src: `${valid_id}`,
                },
                largeImage: {
                  src: `${valid_id}`,
                  width: 1620,
                  height: 1214,
                },
                enlargedImagePosition: "over",
                enlargedImageClassName: style.certificateIMG,
              }}
            />
          </div>
        );
      } else {
        return (
          <div className={style.container}>
            <span className={`${style.infoLabel} invisible`}>_</span>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Valid ID",
                  isFluidWidth: true,
                  src: `${valid_id}`,
                },
                largeImage: {
                  src: `${valid_id}`,
                  width: 1620,
                  height: 1214,
                },
                enlargedImagePosition: "over",
                enlargedImageClassName: style.certificateIMG,
              }}
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
        {console.log("validIDData", validIDData)}
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Valid ID",
              isFluidWidth: true,
              src: `${validIDData[0]}`,
            },
            largeImage: {
              src: `${validIDData[0]}`,
              width: 1620,
              height: 1214,
            },
            enlargedImagePosition: "over",
            enlargedImageClassName: style.certificateIMG,
          }}
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
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Certificate",
                  isFluidWidth: true,
                  src: `${certificate}`,
                },
                largeImage: {
                  src: `${certificate}`,
                  width: 1620,
                  height: 1214,
                },
                enlargedImagePosition: "over",
                enlargedImageClassName: style.certificateIMG,
              }}
            />
          </div>
        );
      } else {
        return (
          <div className={style.container}>
            <span className={`${style.infoLabel} invisible`}>_</span>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Certificate",
                  isFluidWidth: true,
                  src: `${certificate}`,
                },
                largeImage: {
                  src: `${certificate}`,
                  width: 1620,
                  height: 1214,
                },
                enlargedImagePosition: "over",
                enlargedImageClassName: style.certificateIMG,
              }}
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
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Certificate",
              isFluidWidth: true,
              src: `${certificatesData[0]}`,
            },
            largeImage: {
              src: `${certificatesData[0]}`,
              width: 1620,
              height: 1214,
            },
            enlargedImagePosition: "over",
            enlargedImageClassName: style.certificateIMG,
          }}
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

const renderServiceImage = (image) => {
  let ID;
  if (image !== "none") {
    ID = image.substring(15, 17);
    switch (ID) {
      case "1.":
        return service1;
      case "2.":
        return service2;
      case "3.":
        return service3;
      case "4.":
        return service4;
      case "5.":
        return service5;
      case "6.":
        return service6;
      case "7.":
        return service7;
      case "8.":
        return service8;
      case "9.":
        return service9;
      case "10":
        return service10;
      case "11":
        return service11;
      case "12":
        return service12;
      case "13":
        return service13;
      case "14":
        return service14;
      case "15":
        return service15;
      case "16":
        return service16;
      case "17":
        return service17;
      case "18":
        return service18;
      case "19":
        return service19;
      case "20":
        return service20;
      default:
        return;
    }
  }
  return hanasLogoBG;
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
              src={renderServiceImage(certificationInfo.serviceData[0].image)}
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
                certificationInfo.workerData[0].profile_pic !== "none"
                  ? certificationInfo.workerData[0].profile_pic
                  : defaultProf
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
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "NBI/Brgy Clearance",
                        isFluidWidth: true,
                        src: `${certificationInfo.workerData[0].verificationData[0].nbi_brgy_clearance}`,
                      },
                      largeImage: {
                        src: `${certificationInfo.workerData[0].verificationData[0].nbi_brgy_clearance}`,
                        width: 1620,
                        height: 1214,
                      },
                      enlargedImagePosition: "over",
                      enlargedImageClassName: style.certificateIMG,
                    }}
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
