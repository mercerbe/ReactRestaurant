import React from "react";
import OrderEntry from "../OrderEntry/OrderEntry";
//order data
import Orders from "../../data/orders";

export default class MyComponent extends React.Component {
  //contructor
  constructor(props, ctx) {
    super(props, ctx);
    this.finishOrder = this.finishOrder.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.updateOrders = this.updateOrders.bind(this);
    this.orderService = Orders.shared();
    this.orderService.on("updated", this.updateOrders);
    this.state = {
      orders: []
    };
  }
  async componentWillMount() {
    const orders = await this.orderService.init();
    this.setState({ orders });
  }
  updateOrders({ orders }) {
    this.setState({ orders });
  }
  //function to finish an order
  finishOrder(order) {
    console.log("Finish");
    this.orderService.updateStatus(order, "finished");
  }
  //cancel an incomming order
  cancelOrder(order) {
    console.log("Cancel");
    this.orderService.updateStatus(order, "cancelled");
  }

  render() {
    return (
      <div className="order-list">
        {this.state.orders.map(entry => (
          <OrderEntry
            key={entry.number}
            order={entry}
            onCancel={this.cancelOrder}
            onFinished={this.finishOrder}
          />
        ))}
      </div>
    );
  }
}
