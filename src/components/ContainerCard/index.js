import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import style from './index.module.scss';

const ContainerCard = ({ link, userInfo }) => {
  return (
    <Card className={style.card}>
      <Card.Header className={style.cardHeader}>
        <Link to={`/${link}`} className={style.backButton}>
          BACK
        </Link>

        {link === 'verification-requests' ? (
          <div>
            <Button className={style.acceptButton}>ACCEPT</Button>
            <Button className={style.deactButton}>DECLINE</Button>
          </div>
        ) : (
          <Button className={style.deactButton}>DEACTIVATE</Button>
        )}
      </Card.Header>
      <Card.Body className={style.cardBody}>
        <img
          className={style.profile}
          src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
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
              <span className={style.info}>{userInfo.birthdate}</span>
            </div>
            <div className={style.container}>
              <span className={style.infoLabel}>MOBILE / TELEPHONE NUMBER</span>
              <span className={style.info}>{userInfo.mobile_no}</span>
            </div>
          </section>
          <section className={style.userDetailRow}>
            {link === 'verification-requests' ? (
              <div className={style.container}>
                <span className={style.infoLabel}>USER TYPE</span>
                <span className={style.info}>{userInfo.user_type}</span>
              </div>
            ) : (
              ''
            )}
            {link === 'skilledworkers' ? (
              <div className={style.container}>
                <span className={style.infoLabel}>SERVICE/S OFFERED</span>
                <span className={style.info}>{userInfo.services}</span>
              </div>
            ) : (
              ''
            )}
            <div className={style.container}>
              <span className={style.infoLabel}>MEMBER SINCE</span>
              <span className={style.info}>{userInfo.member_since}</span>
            </div>
          </section>
          <section className={style.userDetailRow}>
            <div className={style.container}>
              <span className={style.infoLabel}>
                VALID ID PRESENTED
                {userInfo.isVerified ? (
                  <span className="mx-3 text-success">Verified</span>
                ) : (
                  <span className="mx-3 text-danger">Not Verified</span>
                )}
              </span>
              <span className={style.info}>{userInfo.valid_id} (Front)</span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPXgF-CoOqxHlNPkKSjzelM_kh6bcxHSUkQ&usqp=CAU"
                alt="&nbsp; Valid ID"
                width={350}
                height={200}
              />
            </div>
            <div className={style.container}>
              <span className={`${style.infoLabel} invisible`}>
                VALID ID PRESENTED
              </span>
              <span className={style.info}>(Back)</span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0R9dMhaJkiNudJ0UZFmerq-rGBCem5df6VHPExtoe03ELyZeFv1Cl4NJzuzmS3avo_yc&usqp=CAU"
                alt="&nbsp; Valid ID"
                width={350}
                height={200}
              />
            </div>
            <div className={style.container}>
              <span className={style.infoLabel}>NBI / POLICE CLEARANCE</span>
              <span className={style.info}>NBI Clearance</span>
              <img
                src="https://i0.wp.com/governmentph.com/wp-content/uploads/2018/05/Sample-NBI-Clearance.jpg?ssl=1"
                alt="&nbsp; Valid ID"
                width={350}
                height={200}
              />
            </div>
          </section>
        </section>
      </Card.Body>
    </Card>
  );
};

export default ContainerCard;
