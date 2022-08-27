import React from "react";
import Prodact from "../../componint/Prodact/Prodact";
import "./Home.css";
import {Link} from "react-router-dom"
function Home({categ,setCategory,data}) {
  const allCotegores = data?.map(item => item.category);
  const categories = ["all", ...new Set(allCotegores)];
  const categoryhandle = category => {
    if (category === "all") {
      setCategory(data);
      return;
    }
    const filtred = data.filter(item => item.category === category);
    setCategory(filtred);
  };
  return (
    <main>
      <div className="button">
        {categories.map((category, index) => (
          <button key={index} onClick={() => categoryhandle(category)}>
            {category}
          </button>
        ))}
      </div>
      {categ.length > 0 ? (
        <div className="prodacts_list">
          {categ.map(item => (
            <Prodact key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <hr></hr>
      <div className="social">
          <div className="tarmoqlar">
      <h1>Social networks</h1>
          </div>
          <div className="icon">
              <Link to={"contact"}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNCPbhNK65WAFP-dkVwUTywlGTx8QDTYwU3Jhu2xlODFxq0PBuouyOTdPOJ7z7nG1eAY&usqp=CAU" /></Link>
              <Link to={"contact"}><img src=" https://pyxis.nymag.com/v1/imgs/11d/582/c7b0487c6e26db4f5be6eb679e3620d2ce-facebook.rsquare.w330.jpg" /></Link>
              <Link to={"contact"}><img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg" /></Link>
              <Link to={"contact"}><img src="https://play-lh.googleusercontent.com/ZU9cSsyIJZo6Oy7HTHiEPwZg0m2Crep-d5ZrfajqtsH-qgUXSqKpNA2FpPDTn-7qA5Q" /></Link>
          </div>
      </div>
      <p className="p">Catigory.data 25.08.2022</p>
    </main>
  );
}

export default Home;
