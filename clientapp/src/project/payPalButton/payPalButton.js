import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

class PayPalBtn extends React.Component {
    render() {
      const { amount, onSuccess, currency } = this.props;
        return (
            <PayPalButton
              amount={amount}
              currency={currency}
              onSuccess={(details, data) => onSuccess(details, data)}
              options={{
                clientId: "AVeB4BShCHng1jpP8MRvKUhLsiQQITfACNWEbpes2KU_FEuFCe-DGE5FIkvzEHaXMy9A73yMnbKQ5SQw"
              }}
          />
        );
    }
}
export default PayPalBtn;