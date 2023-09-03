import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Contact = () => {
    return (
        <>
            <div className="checkoutMessage">
                <div className="checkoutTitleContainer">
                    <AiFillCheckCircle className="checkoutIcon" />
                    <h3>Тут мои контакты</h3>
                </div>
                <span>
                    пишем все сюда, и звоним тоже.
                </span>
            </div>
        </>
    );
};

export default Contact;