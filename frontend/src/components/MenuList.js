import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";

function MenuList({ menu, addToCart }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <div className="row">
        {menu.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card" onClick={() => handleShow(item)}>
              <img
                src={`${process.env.PUBLIC_URL}/img/menu/${item.img}`}
                alt={item.category}
                className="card-img-top img-fluid"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 Offcanvas Modal */}
      <Offcanvas show={show} onHide={handleClose} placement="bottom" className="offcanvas-custom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{selectedItem?.category || "메뉴 상세보기"}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-center">
          {selectedItem && (
            <img
              src={`${process.env.PUBLIC_URL}/img/menu/${selectedItem.popupImg}`}
              alt="메뉴 이미지"
              className="img-fluid menu-image"
            />
          )}
        </Offcanvas.Body>
        {/* 🛒 장바구니 담기 버튼 */}
        <div className="text-center mb-3">
          <Button className="cart-button" >장바구니 담기</Button>
          {/* <Button className="cart-button" onClick={() => addToCart(selectedItem)}>장바구니 담기</Button> */}
        </div>
      </Offcanvas>
    </>
  );
}

export default MenuList;
