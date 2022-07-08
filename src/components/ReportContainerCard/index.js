import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import style from "./index.module.scss";

const renderAttachedImages = (imageData) => {
  let last = -1;
  if (imageData !== undefined) {
    last = imageData.length - 1;
  }
  if (last > -1) {
    if (last < 3) {
      return imageData.map((image, idx) => {
        if (idx < 1) {
          return (
            <div key={idx} className={style.container}>
              <span className={style.infoLabel}>ATTACHED IMAGES</span>
              <img
                src={image}
                alt="&nbsp; Attached Upload"
                width={350}
                height={200}
              />
            </div>
          );
        } else {
          if (idx <= last) {
            return (
              <div key={idx} className={style.container}>
                <span className={`${style.infoLabel} invisible`}>_</span>
                <img
                  src={image}
                  alt="&nbsp; Attached Upload"
                  width={350}
                  height={200}
                />
              </div>
            );
          }
        }
      });
    } else {
      return imageData.map((image, idx) => {
        if (idx > 2 && idx <= last) {
          <div key={idx} className={style.container}>
            <img
              src={image}
              alt="&nbsp; Attached Upload"
              width={350}
              height={200}
            />
          </div>;
        }
      });
    }
  } else {
    return "";
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
            <img
              src={image}
              alt="&nbsp; Attached Upload2"
              width={350}
              height={200}
            />
          </div>
        );
      }
    });
  } else {
    return "";
  }
};

const ReportContainerCard = ({ link, reportInfo }) => {
  return (
    <Card className={style.card}>
      <Card.Header className={style.cardHeader}>
        <Link to={`/${link}`} className={style.backButton}>
          BACK
        </Link>
        <Button className={style.deactButton}>RESOLVED</Button>
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
              <span className={style.info}>{reportInfo.createdAt}</span>
            </div>
            <div className={style.container}>
              <span className={style.infoLabel}>LAST UPDATED</span>
              <span className={style.info}>{reportInfo.updatedAt}</span>
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
              <Link
                to={
                  reportInfo.reporterData[0].is_worker
                    ? `/skilledworkers/${reportInfo.reporterData[0]._id}`
                    : `/clients/${reportInfo.reporterData[0]._id}`
                }
              >
                <span className={style.info}>
                  {reportInfo.reporterData[0].first_name + " "}
                  {reportInfo.reporterData[0].middle_name + " "}
                  {reportInfo.reporterData[0].family_name + " "}
                  {reportInfo.reporterData[0].suffix}
                </span>
              </Link>
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
                <Link
                  to={
                    reportInfo.reportedUserData[0].is_worker
                      ? `/skilledworkers/${reportInfo.reportedUserData[0]._id}`
                      : `/clients/${reportInfo.reportedUserData[0]._id}`
                  }
                >
                  <span className={style.info}>
                    {reportInfo.reportedUserData[0].first_name + " "}
                    {reportInfo.reportedUserData[0].middle_name + " "}
                    {reportInfo.reportedUserData[0].family_name + " "}
                    {reportInfo.reportedUserData[0].suffix}
                  </span>
                </Link>
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
    </Card>
  );
};

export default ReportContainerCard;
