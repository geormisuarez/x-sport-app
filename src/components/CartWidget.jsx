import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
    return(
        <div>
            <BsCart4 fontSize={'1.8rem'}/>
            <Badge bg="dark">5</Badge>
        </div>

    )
}

export default CartWidget