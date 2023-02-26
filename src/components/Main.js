
const Main = () => {
  return (
    <main>
        <div className="main_title">
            <h2>This week specials!</h2>
            <button className="main_btn btn">Online Menu</button>
        </div>
        <div className="main_cards">
            <div className="card">
                <img className="card_img" src="../asets/greek salad.jpg" alt="#" />
                <div className="card_title">
                    <h5>Greek salad</h5>
                    <span className="price">$10.00</span>
                </div>
                <p className="card_desc">lorem20This week specials!This week specials!This week specials!</p>
                <button className="card_btn">Order a delivery</button>
            </div>
            <div className="card">
                <img className="card_img" src="../asets/greek_salad.jpg" alt="#" />
                <div className="card_title">
                    <h5>Greek salad</h5>
                    <span className="price">$10.00</span>
                </div>
                <p className="card_desc">lorem20This week specials!This week specials!This week specials!</p>
                <button className="card_btn">Order a delivery</button>
            </div>
            <div className="card">
                <img className="card_img" src="../asets/greek salad.jpg" alt="#" />
                <div className="card_title">
                    <h5>Greek salad</h5>
                    <span className="price">$10.00</span>
                </div>
                <p className="card_desc">lorem20This week specials!This week specials!This week specials!</p>
                <button className="card_btn">Order a delivery</button>
            </div>
        </div>
    </main>
  )
}

export default Main