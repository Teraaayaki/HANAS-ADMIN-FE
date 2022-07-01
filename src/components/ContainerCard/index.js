import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import style from "./index.module.scss";

const renderMyServicesList = (myServicesData) => {
  let last = myServicesData.length - 1;
  if (last > 0) {
    return myServicesData.map((myService, idx) => {
      if (idx < last) {
        return (
          <span key={idx}>{myService.servicesData[0].service_type}, </span>
        );
      } else {
        return <span key={idx}>{myService.servicesData[0].service_type}</span>;
      }
    });
  } else if (last > -1) {
    return <span>{myServicesData[0].servicesData[0].service_type}</span>;
  } else {
    return;
  }
};

const renderValidIDList = (validIDData, is_verified) => {
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
              {is_verified ? (
                <span className="mx-3 text-success">Verified</span>
              ) : (
                <span className="mx-3 text-danger">Not Verified</span>
              )}
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
          {is_verified ? (
            <span className="mx-3 text-success">Verified</span>
          ) : (
            <span className="mx-3 text-danger">Not Verified</span>
          )}
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
          <span className="mx-3 text-danger">Not Verified</span>
        </span>
        <span className={style.info}>No Data</span>
      </div>
    );
  }
};

const ContainerCard = ({ link, userInfo }) => {
  return (
    <Card className={style.card}>
      <Card.Header className={style.cardHeader}>
        <Link to={`/${link}`} className={style.backButton}>
          BACK
        </Link>

        {link === "verification-requests" ? (
          <div>
            <Button className={style.acceptButton}>ACCEPT</Button>
            <Button className={style.deactButton}>DECLINE</Button>
          </div>
        ) : userInfo.is_deactivated ? (
          <Button className={style.deactButton}>ACTIVATE</Button>
        ) : (
          <Button className={style.deactButton}>DEACTIVATE</Button>
        )}
      </Card.Header>
      <Card.Body className={style.cardBody}>
        <img
          className={style.profile}
          src={
            userInfo.profile_pic
              ? userInfo.profile_pic
              : "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
          }
          alt="&nbsp; Profile Pic"
        />
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
              <span className={style.infoLabel}>MOBILE / TELEPHONE NUMBER</span>
              <span className={style.info}>{userInfo.mobile_no}</span>
            </div>
          </section>
          <section className={style.userDetailRow}>
            {link === "verification-requests" ? (
              <div className={style.container}>
                <span className={style.infoLabel}>USER TYPE</span>
                <span className={style.info}>{userInfo.user_type}</span>
              </div>
            ) : (
              ""
            )}
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
          {link === "verification-requests" || link === "skilledworkers" ? (
            <section className={style.userDetailRow}>
              {renderValidIDList(
                userInfo.verificationData.valid_id,
                userInfo.is_verified
              )}
              <div className={style.container}>
                <span className={style.infoLabel}>NBI / POLICE CLEARANCE</span>
                {userInfo.verificationData.nbi_brgy_clearance ? (
                  <img
                    src={userInfo.verificationData.nbi_brgy_clearance}
                    alt="&nbsp; NBI/Brgy Clearance"
                    width={350}
                    height={200}
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
      </Card.Body>
    </Card>
  );
};

export default ContainerCard;
