import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import ReactImageMagnify from "react-image-magnify";

import {
  activateClient,
  deactivateClient,
} from "../../redux/actions/clientActions.js";
import {
  activateWorker,
  deactivateWorker,
} from "../../redux/actions/workerActions.js";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import defaultProf from "../../assets/Logo/defaultProf.jpg";
import style from "./index.module.scss";

import history from "../../utils/history";

const renderMyServicesList = (myServicesData) => {
  let last = -1;
  if (myServicesData && myServicesData !== undefined) {
    last = myServicesData.length - 1;
    if (last > 0) {
      return myServicesData.map((myService, idx) => {
        if (idx < last) {
          return (
            <span key={idx}>{myService.servicesData[0].service_type}, </span>
          );
        } else {
          return (
            <span key={idx}>{myService.servicesData[0].service_type}</span>
          );
        }
      });
    } else if (last > -1) {
      return <span>{myServicesData[0].servicesData[0].service_type}</span>;
    } else {
      return;
    }
  } else {
    return;
  }
};

const renderValidIDList = (validIDData, is_verified) => {
  let last = -1;
  if (validIDData !== undefined) {
    last = validIDData.valid_id.length - 1;

    if (last > 0) {
      return validIDData.valid_id.map((valid_id, idx) => {
        if (idx < last) {
          return (
            <div className={style.container}>
              <span className={style.infoLabel}>
                VALID ID PRESENTED
                {is_verified ? (
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
                    src: `${valid_id}`,
                  },
                  largeImage: {
                    src: `${valid_id}`,
                    width: 1620,
                    height: 1214,
                  },
                  enlargedImagePosition: "over",
                  enlargedImageClassName: style.IDIMG,
                }}
              />
            </div>
          );
        } else {
          return (
            <div className={style.container}>
              <span className={`${style.infoLabel} invisible`}>_</span>
              <span className={style.info}>(Back)</span>
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
                  enlargedImageClassName: style.IDIMG,
                }}
              />
              <img
                className={style.IDIMG}
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
            {is_verified ? (
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
                src: `${validIDData.valid_id}`,
              },
              largeImage: {
                src: `${validIDData.valid_id}`,
                width: 1620,
                height: 1214,
              },
              enlargedImagePosition: "over",
              enlargedImageClassName: style.IDIMG,
            }}
          />
        </div>
      );
    } else {
      return (
        <div className={style.container}>
          <span className={style.infoLabel}>
            VALID ID PRESENTED
            <span className="mx-3 text-danger">Not Verified</span>
          </span>
          <span className={style.info}>No Data</span>
        </div>
      );
    }
  } else {
    return (
      <div className={style.container}>
        <span className={style.infoLabel}>
          VALID ID PRESENTED
          <span className="mx-3 text-danger">Not Verified</span>
        </span>
        <span className={style.info}>No Data</span>
      </div>
    );
  }
};

const UserContainerCard = ({ link, userInfo }) => {
  const dispatch = useDispatch();
  const handleActivateOnClick = () => {
    if (userInfo.is_worker) {
      dispatch(activateWorker(userInfo._id));
    } else {
      dispatch(activateClient(userInfo._id));
    }
  };

  const handleDeactivateOnClick = () => {
    if (userInfo.is_worker) {
      dispatch(deactivateWorker(userInfo._id));
    } else {
      dispatch(deactivateClient(userInfo._id));
    }
  };

  return (
    <Card className={style.card}>
      <Card.Header className={style.cardHeader}>
        <Link className={style.backButton} onClick={() => history.goBack()}>
          BACK
        </Link>

        {userInfo.is_deactivated ? (
          <Button
            className={style.acceptButton}
            onClick={() => handleActivateOnClick()}
          >
            ACTIVATE
          </Button>
        ) : (
          <Button
            className={style.deactButton}
            onClick={() => handleDeactivateOnClick()}
          >
            DEACTIVATE
          </Button>
        )}
      </Card.Header>
      <Card.Body className={style.cardBody}>
        <div className={style.infoContainer}>
          <div className={style.column}>
            <img
              className={style.profile}
              src={
                userInfo.profile_pic !== "none"
                  ? userInfo.profile_pic
                  : defaultProf
              }
              alt="&nbsp; Profile Pic"
            />
          </div>
          <section className={style.userDetails}>
            <section className={style.userDetailRow}>
              <div className={style.container}>
                <span className={style.infoLabel}>NAME</span>
                <span className={style.info}>{userInfo.name}</span>
              </div>
              <div className={style.container}>
                <span className={style.infoLabel}>EMAIL</span>
                <span className={style.info}>{userInfo.email}</span>
              </div>
              <div className={style.container}>
                <span className={style.infoLabel}>ADDRESS</span>
                <span className={style.info}>{userInfo.address}</span>
              </div>
            </section>
            <section className={style.userDetailRow}>
              <div className={style.container}>
                <span className={style.infoLabel}>SEX</span>
                <span className={style.info}>{userInfo.sex}</span>
              </div>
              <div className={style.container}>
                <span className={style.infoLabel}>BIRTHDATE</span>
                <span className={style.info}>
                  {moment(userInfo.birthDate).format("LL")}
                </span>
              </div>
              <div className={style.container}>
                <span className={style.infoLabel}>
                  MOBILE / TELEPHONE NUMBER
                </span>
                <span className={style.info}>{userInfo.mobile_no}</span>
              </div>
            </section>
            <section className={style.userDetailRow}>
              {link === "skilledworkers" ? (
                <div className={style.container}>
                  <span className={style.infoLabel}>SERVICE/S OFFERED</span>
                  <span className={style.info}>
                    {renderMyServicesList(userInfo.myServicesData)}
                  </span>
                </div>
              ) : (
                ""
              )}
              <div className={style.container}>
                <span className={style.infoLabel}>MEMBER SINCE</span>
                <span className={style.info}>
                  {moment(userInfo.createdAt).format("LL")}
                </span>
              </div>
            </section>
            {link === "skilledworkers" ? (
              <section className={style.userDetailRow}>
                {renderValidIDList(
                  userInfo.verificationData[0],
                  userInfo.is_verified
                )}
                <div className={style.container}>
                  <span className={style.infoLabel}>
                    NBI / POLICE CLEARANCE
                  </span>
                  {userInfo.verificationData[0] !== undefined &&
                  userInfo.verificationData[0].nbi_brgy_clearance ? (
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "NBI/Brgy Clearance",
                          isFluidWidth: true,
                          src: `${userInfo.verificationData[0].nbi_brgy_clearance}`,
                        },
                        largeImage: {
                          src: `${userInfo.verificationData[0].nbi_brgy_clearance}`,
                          width: 1620,
                          height: 1214,
                        },
                        enlargedImagePosition: "over",
                        enlargedImageClassName: style.IDIMG,
                      }}
                    />
                  ) : (
                    <span className={style.info}>No Data</span>
                  )}
                </div>
              </section>
            ) : (
              ""
            )}
          </section>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserContainerCard;
