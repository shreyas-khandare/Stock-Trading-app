import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        setAllOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setError("Failed to fetch orders");
        setLoading(false);
      });
  }, []);

  // Handle order cancellation
  const handleCancelOrder = async (orderId) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      try {
        setLoading(true);
        await axios.put(`http://localhost:3002/cancelOrder/${orderId}`);
        
        // Refresh orders list
        const response = await axios.get("http://localhost:3002/allOrders");
        setAllOrders(response.data);
        setLoading(false);
        
        alert("Order cancelled successfully!");
      } catch (error) {
        console.error("Error cancelling order:", error);
        alert("Failed to cancel order. Please try again.");
        setLoading(false);
      }
    }
  };

  // Handle order completion
  const handleCompleteOrder = async (orderId) => {
    if (window.confirm("Mark this order as completed?")) {
      try {
        setLoading(true);
        await axios.put(`http://localhost:3002/completeOrder/${orderId}`);
        
        // Refresh orders list
        const response = await axios.get("http://localhost:3002/allOrders");
        setAllOrders(response.data);
        setLoading(false);
        
        alert("Order completed successfully!");
      } catch (error) {
        console.error("Error completing order:", error);
        alert("Failed to complete order. Please try again.");
        setLoading(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="orders">
        <h3 className="title">Orders</h3>
        <p>Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="orders">
        <h3 className="title">Orders</h3>
        <p style={{ color: "red" }}>{error}</p>
        <Link to="/" className="btn">
          Go to Dashboard
        </Link>
      </div>
    );
  }

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Instrument</th>
              <th>Type</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => {
              const modeClass = order.mode === "BUY" ? "profit" : "loss";
              
              return (
                <tr key={order._id || index}>
                  <td>
                    {order.createdAt 
                      ? new Date(order.createdAt).toLocaleString('en-IN', {
                          hour: '2-digit',
                          minute: '2-digit',
                          day: '2-digit',
                          month: 'short'
                        })
                      : "N/A"
                    }
                  </td>
                  <td>{order.name}</td>
                  <td>
                    <span className={modeClass}>
                      {order.mode}
                    </span>
                  </td>
                  <td>{order.qty}</td>
                  <td>₹{parseFloat(order.price).toFixed(2)}</td>
                  <td>
                    <span className={`status-${(order.status || 'PENDING').toLowerCase()}`}>
                      {order.status || 'PENDING'}
                    </span>
                  </td>
                  <td>
                    {order.status === "PENDING" ? (
                      <div>
                        <button 
                          className="btn btn-small btn-green"
                          onClick={() => handleCompleteOrder(order._id)}
                          style={{ marginRight: "5px" }}
                        >
                          Complete
                        </button>
                        <button 
                          className="btn btn-small btn-red"
                          onClick={() => handleCancelOrder(order._id)}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <span style={{ color: "#666", fontSize: "12px" }}>
                        {order.status === "CANCELLED" ? "Cancelled" : "Completed"}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="order-summary">
        <div className="row">
          <div className="col">
            <h5>{allOrders.filter(order => order.mode === "BUY").length}</h5>
            <p>Buy Orders</p>
          </div>
          <div className="col">
            <h5>{allOrders.filter(order => order.mode === "SELL").length}</h5>
            <p>Sell Orders</p>
          </div>
          <div className="col">
            <h5>{allOrders.length}</h5>
            <p>Total Orders</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;