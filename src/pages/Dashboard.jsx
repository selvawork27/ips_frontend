import { useAuth } from "../context/AuthContext";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { CalendarDays, CheckCircle, XCircle, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { user } = useAuth();

  const subscription = {
    status: "ACTIVE",
    startDate: "2024-01-01",
    endDate: "2025-01-01",
  };

  const isActive = subscription.status === "ACTIVE";

  return (
    <div className="max-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Welcome back, {user?.name} 👋
        </h1>
        <Card className="rounded-2xl shadow-2xl bg-white/90 backdrop-blur">
          <CardContent className="p-6 grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              {isActive ? (
                <CheckCircle className="text-green-600" size={40} />
              ) : (
                <XCircle className="text-red-600" size={40} />
              )}
              <div>
                <p className="text-sm text-gray-500">Subscription Status</p>
                <p
                  className={`text-xl font-semibold ${
                    isActive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {subscription.status}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CalendarDays className="text-indigo-600" size={40} />
              <div>
                <p className="text-sm text-gray-500">Valid Till</p>
                <p className="text-xl font-semibold text-gray-800">
                  {subscription.endDate}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-4">
              <Button
                className="rounded-xl px-6 py-3 text-base shadow-lg"
                variant={isActive ? "secondary" : "default"}
              >
                <RefreshCcw className="mr-2" size={18} />
                {isActive ? "Extend Plan" : "Renew Now"}
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl bg-white/90 p-6 shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-2">Usage Overview</h2>
            <p className="text-gray-600">
              You are enjoying uninterrupted access to all premium features.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl bg-white/90 p-6 shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-2">Next Renewal</h2>
            <p className="text-gray-600">
              Your subscription will expire on <b>{subscription.endDate}</b>.
              Renew early to avoid disruption.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;