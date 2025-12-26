import { useState } from "react";
import "./Subscriptions.css";
const Subscriptions = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      id: 1,
      name: "Basic",
      monthly: 499,
      yearly: 4999,
      features: ["5 Projects", "Email Support"],
    },
    {
      id: 2,
      name: "Pro",
      monthly: 999,
      yearly: 9999,
      features: ["Unlimited Projects", "Priority Support"],
    },
  ];

  return (
    <>
      <h1>Subscriptions</h1>

      {/* Toggle */}
      <div className="billing-toggle">
        <button
          className={billing === "monthly" ? "active" : ""}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          className={billing === "yearly" ? "active" : ""}
          onClick={() => setBilling("yearly")}
        >
          Yearly (Save 20%)
        </button>
      </div>

      <div className="subscription-grid">
        {plans.map((plan) => (
          <div key={plan.id} className="subscription-card">
            <h2>{plan.name}</h2>
            <h1>
              ₹{billing === "monthly" ? plan.monthly : plan.yearly}
            </h1>
            <p>{billing}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Subscriptions;


