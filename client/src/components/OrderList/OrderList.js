import React from "react";
import OrderEntry from "../OrderEntry/OrderEntry";
//order data
import Orders from "../../data/orders";
//semantic
import { Header, Icon, Segment, Container } from "semantic-ui-react";

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
        <Header as="h2" icon textAlign="center">
          <Icon name="ordered list" circular />
          <Header.Content>Current Orders and Wait Time:</Header.Content>
        </Header>
        <Container>
          <Segment raised color="yellow">
            Wait Time: insert time based on current orders
            <br />
            Also show number of orders placed and have overflow option on
            orderlist css
          </Segment>
        </Container>
        {/* if not authenticated, show orders w/o buttons on orderlist component */}
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
