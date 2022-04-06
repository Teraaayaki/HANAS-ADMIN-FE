import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import style from './index.module.scss';

const TransactionDetail = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="justify-content-center">
        <Modal.Title>
          <strong>Transaction Details</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={style.modalBody}>
        <div className={style.transactionDetails}>
          <section className={style.firstColumnDetails}>
            <div className={style.transInfoContainer}>
              <span className={style.infoLabel}>SERVICE RENDERED</span>
              <span className={style.info}>Electrical</span>
            </div>
            <div className={style.transInfoContainer}>
              <span className={style.infoLabel}>CLIENT NAME</span>
              <span className={style.info}>
                Protacio Rizal Mercado Alonso Realonda
              </span>
            </div>
            <div className={style.transInfoContainer}>
              <span className={style.infoLabel}>BOOKING DATE</span>
              <span className={style.info}>September 25, 2021</span>
            </div>
          </section>

          <div className={style.secondColumnDetails}>
            <div className={style.transInfoContainer}>
              <span className={style.infoLabel}>SKILLED WORKER NAME</span>
              <span className={style.info}>
                Protacio Rizal Mercado Alonso Realonda
              </span>
            </div>
            <div className={style.transInfoContainer}>
              <span className={style.infoLabel}>ADDRESS</span>
              <span className={style.info}>Bogo, City Cebu</span>
            </div>
            <div className={style.transInfoContainer}>
              <span className={style.infoLabel}>DATE PAID</span>
              <span className={style.info}>September 25, 2021</span>
            </div>
          </div>
        </div>

        <div className={style.paymentInfos}>
          <div className={style.paymentInfoContainer}>
            <span className={style.paymentInfoLabels}>DESCRIPTION</span>
            <span className={style.paymentInfoLabels}>AMOUNT</span>
          </div>
          <div className={style.paymentInfoContainer}>
            <span className={style.paymentInfo}>Rate Per Hour</span>
            <span className={style.paymentInfo}>₱ 100.00</span>
          </div>
          <div className={style.paymentInfoContainer}>
            <span className={style.paymentInfo}>Total Hours Rendered</span>
            <span className={style.paymentInfo}>3 hours</span>
          </div>
          <div className={style.paymentInfoContainer}>
            <span className={style.paymentInfo}>Convenience Fee</span>
            <span className={style.paymentInfo}>₱ 15.00</span>
          </div>
          <div className={style.paymentInfoContainer}>
            <span className={style.paymentInfo}>Discount/Promo</span>
            <span className={style.paymentInfo}>N/A</span>
          </div>

          <hr />
          <div className={style.paymentInfoContainer}>
            <span className={style.paymentInfoLabels}>Total Amount Paid</span>
            <span className={style.paymentInfoLabels}>₱ 1500.00</span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={style.modalFooter}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TransactionDetail;
