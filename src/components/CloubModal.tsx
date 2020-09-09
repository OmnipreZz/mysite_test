import React, { useState } from 'react';
import '../scss/portfolio.scss';

const CloubModal = () => {
    const [count, setCount] = useState(0)
    return (
      <div className="ModalContent">

        <div className="ModalButtonLeft">
          <button className="ButtonArrow" onClick={() => setCount(count - 1)} disabled={count === 0}><i className="fas fa-angle-double-left"></i></button>
        </div>

        <div className="ModalContentPic">
        <img className={count === 0 ? "ProjetPic picOpen" : "ProjetPic picClose"} src="/images/cloub/mediaMacbook.png" alt="" />
        <img className={count === 1 ? "ProjetPic picOpen" : "ProjetPic picClose"} src="/images/cloub/mediaIphone.png" alt="" />
        <img className={count === 2 ? "ProjetPic picOpen" : "ProjetPic picClose"} src="/images/cloub/macbook01-min.png" alt="" />
        <img className={count === 3 ? "ProjetPic picOpen" : "ProjetPic picClose"} src="/images/cloub/iphone01-min.png" alt="" />
        <img className={count === 4 ? "ProjetPic picOpen" : "ProjetPic picClose"} src="/images/cloub/macbook02-min.png" alt="" />
        <img className={count === 5 ? "ProjetPic picOpen" : "ProjetPic picClose"} src="/images/cloub/iphone02-min.png" alt="" />
        <img className={count === 6 ? "ProjetPic picOpen" : "ProjetPic picClose"} src="/images/cloub/macbook04-min.png" alt="" />
        <img className={count === 7 ? "ProjetPic picOpen" : "ProjetPic picClose"} src="/images/cloub/iphone04-min.png" alt="" />
        <img className={count === 8 ? "ProjetPic picOpen" : "ProjetPic picClose"} src="/images/cloub/macbook05-min.png" alt="" />
        <img className={count === 9 ? "ProjetPic picOpen" : "ProjetPic picClose"} src="/images/cloub/iphone05-min.png" alt="" />
        <img className={count === 10 ? "ProjetPic picOpen" : "ProjetPic picClose"} src="/images/cloub/macbook06-min.png" alt="" />
        <img className={count === 11 ? "ProjetPic picOpen" : "ProjetPic picClose"} src="/images/cloub/iphone06-min.png" alt="" />
        </div>

        <div className="ModalButtonRight">
          <button className="ButtonArrow" onClick={() => setCount(count + 1)} disabled={count === 11}><i className="fas fa-angle-double-right"></i></button>
        </div>

      </div>
    );
  };

  export default CloubModal;