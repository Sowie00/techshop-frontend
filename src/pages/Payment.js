import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Form,
  Col,
  Button,
  FormLabel,
  FormGroup,
  FormControl,
  FormCheck,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { cartSavePaymentInfo } from "../actions/cartActions";

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [paymentMethod, setPaymentMethod] = useState("Paypal");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!shippingAddress) {
    navigate("/shipping");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(cartSavePaymentInfo(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <FormLabel as="legend">Select Method</FormLabel>

          <Col>
            <FormCheck
              type="radio"
              label="Paypal or Credit Card"
              id="Paypal"
              name="paymentmethod"
              value="Paypal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></FormCheck>
          </Col>
        </FormGroup>
        <Button className="mt-3" type="submit" variant="primary">
          Next
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Payment;
