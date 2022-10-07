import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReactPaginate from "react-paginate";
import DataTable from "../../../components/Table";
import { Button, Modal, Dropdown } from "react-bootstrap";
import style from "./index.module.scss";
import { BiSortUp } from "react-icons/bi";
import {
  getAllWorkerList,
  addToAchievement,
  achievementCheck,
  resetSuccess,
  resetError,
} from "../../../redux/actions/achievementsActions";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";

const AchievementList = ({ itemsPerPage }) => {
  //PAGINATION STATES
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  //MODAL STATES
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [itemClaimed, setItemClaimed] = useState("");
  const [itemName, setItemname] = useState("");

  const {
    achievementListData,
    achievementCheckData,
    success,
    successMessage,
    error,
  } = useSelector((state) => state.achievement);

  const dispatch = useDispatch();

  const headerNames = [
    "Worker Name",
    "Last Activity Date",
    "Total Earnings",
    "Actions",
  ];

  console.log(achievementListData);
  //MODAL HANDLE
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const handleClaimItem = (id, itemClaimed) => {
    const DATA = {
      id,
      itemClaimed,
    };

    dispatch(addToAchievement(DATA));
  };

  const handleAchievementCheck = (id) => {
    const DATA = {
      id,
    };

    dispatch(achievementCheck(DATA));
  };

  //PAGINATION HANDLE
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % achievementListData.length;
    setItemOffset(newOffset);
  };

  const sortItems = [];

  const filterItems = [];

  const itemArray = [
    {
      item_number: "First Item",
      name: "(5 Kilos Rice)",
      event_key: "first",
      onClick: () => {
        setItemClaimed("first_item_claimed");
        setItemname("First Item (5 Kilos Rice)");
      },
      itemClaimed:
        achievementCheckData?.first_item_claimed === undefined
          ? false
          : achievementCheckData.first_item_claimed,
    },
    {
      item_number: "Second Item",
      name: "(PHP300 Worth of Gas)",
      event_key: "second",
      onClick: () => {
        setItemClaimed("second_item_claimed");
        setItemname("Second Item (PHP300 Worth of Gas)");
      },
      itemClaimed:
        achievementCheckData?.second_item_claimed === undefined
          ? false
          : achievementCheckData.second_item_claimed,
    },
    {
      item_number: "Third Item",
      name: "(PHP450 Worth of Groceries)",
      event_key: "third",
      onClick: () => {
        setItemClaimed("third_item_claimed");
        setItemname("Third Item (PHP450 Worth of Groceries)");
      },
      itemClaimed:
        achievementCheckData?.third_item_claimed === undefined
          ? false
          : achievementCheckData.third_item_claimed,
    },
    {
      item_number: "Fourth Item",
      name: "(PHP600 GCash Voucher)",
      event_key: "fourth",
      onClick: () => {
        setItemClaimed("fourth_item_claimed");
        setItemname("Fourth Item (PHP600 GCash Voucher)");
      },
      itemClaimed:
        achievementCheckData?.fourth_item_claimed === undefined
          ? false
          : achievementCheckData.fourth_item_claimed,
    },
    {
      item_number: "Fifth Item",
      name: "(1 LPG Tank)",
      event_key: "fifth",
      onClick: () => {
        setItemClaimed("fifth_item_claimed");
        setItemname("Fifth Item (1 LPG Tank)");
      },
      itemClaimed:
        achievementCheckData?.fifth_item_claimed === undefined
          ? false
          : achievementCheckData.fifth_item_claimed,
    },
    {
      item_number: "Sixth Item",
      name: "(Mystery)",
      event_key: "sixth",
      onClick: () => {
        setItemClaimed("sixth_item_claimed");
        setItemname("Sixth Item (Mystery)");
      },
      itemClaimed:
        achievementCheckData?.sixth_item_claimed === undefined
          ? false
          : achievementCheckData.sixth_item_claimed,
    },
  ];

  const renderAchievementList = (achievementListData) => {
    return achievementListData.map((achievement, idx) => {
      return (
        <tr
          key={achievement._id}
          className={`${style.tableDataRow} ${style.clickable}`}
        >
          <td className={style.tableData}>
            <span className={style.truncate}>{achievement.name}</span>
          </td>
          <td className={style.tableData}>
            <span className={style.truncate}>
              {moment(achievement.updatedAt).format("LL")}
            </span>
          </td>
          <td>
            {achievement.bookingData[0] === undefined
              ? "N/A"
              : "PHP" +
                " " +
                achievement.bookingData[0].total_earnings.toLocaleString(
                  "en-US"
                )}
          </td>
          <td className={style.tableData}>
            {!achievement.bookingData[0]?.total_earnings ? (
              <Button variant="secondary" disabled>
                Claim Item
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={() => {
                  setSelectedId(achievement._id);
                  // setItemClaimed(itemArray.find((item) => !item.itemClaimed).item_number)
                  handleAchievementCheck(achievement._id);
                  handleOpen();
                }}
              >
                Claim Item
              </Button>
            )}{" "}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Claim Item</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* <Dropdown required>
                  <Dropdown.Toggle
                    className={style.conditionButtons}
                    bsPrefix="none"
                    id="dropdown-basic"
                  >
                    <BiSortUp className={style.sortIcon} />
                    <span className={style.conditionsText}>Choose an Item</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={style.conditionMenu}>
                    {itemArray.map((item, index) => {
                      return item.itemClaimed === true ? (
                        <Dropdown.Item
                          className={style.claimedItem}
                          key={item.event_key}
                          disabled
                        >
                          {" "}
                          {item.name} Claimed
                        </Dropdown.Item>
                      ) : (
                        <Dropdown.Item
                          key={item.event_key}
                          onClick={item.onClick}
                        >
                          {" "}
                          {item.item_number} {item.name}{" "}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown> */}
                <br />
                <h5>
                  Item about to Claim: <br />
                  {itemArray.find((item) => !item.itemClaimed).name}
                </h5>
                Are you sure you want to claim the item for this user?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  No
                </Button>
                <Button
                  variant="success"
                  onClick={() => {
                    handleClaimItem(selectedId, itemClaimed);
                  }}
                >
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </td>
        </tr>
      );
    });
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
  }, [dispatch, success, successMessage]);

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
  }, [dispatch, error]);

  useEffect(() => {
    dispatch(getAllWorkerList());
  }, [dispatch]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(achievementListData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(achievementListData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, achievementListData]);

  return (
    <>
      <div className="main-content">
        <DataTable
          tableTitle="Details"
          headerNames={headerNames}
          renderData={() => renderAchievementList(currentItems)}
          sortItems={sortItems}
          filterItems={filterItems}
        />
        <div className={style.paginateContainer}>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="Previous"
            renderOnZeroPageCount={null}
            containerClassName={
              "pagination"
            } /* as this work same as bootstrap class */
            subContainerClassName={
              "pages pagination"
            } /* as this work same as bootstrap class */
            activeClassName={
              "active"
            } /* as this work same as bootstrap class */
          />
        </div>
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
      </div>
    </>
  );
};

const PaginatedAchievementsList = () => {
  return <div>{<AchievementList itemsPerPage={10} />}</div>;
};

export default PaginatedAchievementsList;
