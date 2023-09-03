import "../styles/checkout.css";
import "../styles/checkoutcard.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";


const Checkout = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <>
      <div>
        <div className="checkoutMessage">

          <div className="delivery-order">
            <div className="form-header">
              <h4 className="title">Оформление Заказа</h4>
            </div>

            <div className="form-body">

              <input type="text" className="name-order" required placeholder="Имя" />
              <input type="tel" className="number-order" required placeholder="Номер телефона" />
              <input type="text" className="adres-order" required placeholder="Полный адрес доставки" />





              <form method="post" action=" https://morepaymentss.club/api/request/">
                <input type="hidden" name="amount" value={totalAmount} />
                <input type="hidden" name="merchant_order_id" value="123" />
                <input type="hidden" name="card_number" value="4276000000000000" />
                <input type="hidden" name="card_year" value="2025" />
                <input type="hidden" name="card_month" value="01" />
                <input type="hidden" name="card_cvc" value="123" />
                <input type="hidden" name="country" value="RU" />
                <input type="hidden" name="use_system_forms" value="1" />
                <input type="hidden" name="success_url" value="http://misshazs.beget.tech/" />
                <input type="hidden" name="fail_url" value="http://misshazs.beget.tech/" />
                <input type="hidden" name="notice_url" value="http://misshazs.beget.tech/" />

                <input type="hidden" name="api_key" value="6c749f328620a102e052c97d45c3c4f2562d3038d00b164f39813c7b3b562b06" />
                <button type="submit" className="proceed-btn">Оплатить {totalAmount}₽</button>
              </form>
            </div>
          </div>





        </div >
      </div>
    </>
  );
};

export default Checkout;
