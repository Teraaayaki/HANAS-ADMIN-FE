import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import style from './index.module.scss';
import moment from 'moment';

const TransactionDetail = ({ show, handleClose, data }) => {

  // console.log("SPECIFIC DATA", data.myServiceData[0].serviceData[0].service_type);
  if(!data){
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
              <span className={style.infoLabel}>DATA UNAVAILABLE</span>
            </section>
          </div>
        </Modal.Body>
        <Modal.Footer className={style.modalFooter}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  
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
              <span className={style.info}>{data.myServiceData[0].serviceData[0].service_type}</span>
            </div>
            <div className={style.transInfoContainer}>
              <span className={style.infoLabel}>CLIENT NAME</span>
              <span className={style.info}>
                {`${data.clientData[0].first_name} ${data.clientData[0].middle_name} ${data.clientData[0].family_name}`}
              </span>
            </div>
            <div className={style.transInfoContainer}>
              <span className={style.infoLabel}>BOOKING DATE</span>
              <span className={style.info}>{moment(data.createdAt).format('LL')}</span>
            </div>
          </section>

          <div className={style.secondColumnDetails}>
            <div className={style.transInfoContainer}>
              <span className={style.infoLabel}>SKILLED WORKER NAME</span>
              <span className={style.info}>
              {`${data.workerData[0].first_name} ${data.workerData[0].middle_name} ${data.workerData[0].family_name}`}
              </span>
            </div>
            <div className={style.transInfoContainer}>
              <span className={style.infoLabel}>ADDRESS</span>
              <span className={style.address}>{data.clientData[0].address}</span>
            </div>
            {/* <div className={style.transInfoContainer}>
              <span className={style.infoLabel}>DATE PAID</span>
              <span className={style.info}>{data.}</span>
            </div> */}
          </div>
        </div>

        <div className={style.paymentInfos}>
          <div className={style.paymentInfoContainer}>
            <span className={style.paymentInfoLabels}>DESCRIPTION</span>
            <span className={style.paymentInfoLabels}>AMOUNT</span>
          </div>
          <div className={style.paymentInfoContainer}>
            <span className={style.paymentInfo}>Rate Per Hour</span>
            <span className={style.paymentInfo}>₱ {data.myServiceData[0].hourly_rate.toFixed(2)}</span>
          </div>
          <div className={style.paymentInfoContainer}>
            <span className={style.paymentInfo}>Total Hours Rendered</span>
            <span className={style.paymentInfo}>{data.total_hours} hour(s)</span>
          </div>
          <div className={style.paymentInfoContainer}>
            <span className={style.paymentInfo}>Convenience Fee</span>
            <span className={style.paymentInfo}>₱ {data.conv_fee.toFixed(2)}</span>
          </div>
          {/* <div className={style.paymentInfoContainer}>
            <span className={style.paymentInfo}>Discount/Promo</span>
            <span className={style.paymentInfo}>N/A</span>
          </div> */}

          <hr />
          <div className={style.paymentInfoContainer}>
            <span className={style.paymentInfoLabels}>Total Amount Paid</span>
            <span className={style.paymentInfoLabels}>₱ {data.total_cost.toFixed(2)}</span>
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
