// app/admin/visitors/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Users, 
  TrendingUp, 
  Calendar,
  Globe,
  Clock,
  MapPin,
  Laptop,
  Smartphone,
  Tablet,
  Download,
  RefreshCw
} from 'lucide-react';

const VisitorStatsPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('today');

  // Mock data - In real implementation, you'd fetch from your analytics API
  const mockStats = {
    totalVisitors: 12547,
    todayVisitors: 342,
    weeklyVisitors: 2189,
    monthlyVisitors: 8743,
    onlineNow: 23,
    countries: [
      { name: 'India', visitors: 8456, percentage: 67 },
      { name: 'United States', visitors: 2156, percentage: 17 },
      { name: 'United Kingdom', visitors: 987, percentage: 8 },
      { name: 'Canada', visitors: 456, percentage: 4 },
      { name: 'Australia', visitors: 289, percentage: 2 },
      { name: 'Others', visitors: 203, percentage: 2 }
    ],
    devices: [
      { type: 'Desktop', visitors: 6547, percentage: 52 },
      { type: 'Mobile', visitors: 5123, percentage: 41 },
      { type: 'Tablet', visitors: 877, percentage: 7 }
    ],
    hourlyData: [
      { hour: '00:00', visitors: 23 },
      { hour: '04:00', visitors: 12 },
      { hour: '08:00', visitors: 156 },
      { hour: '12:00', visitors: 289 },
      { hour: '16:00', visitors: 342 },
      { hour: '20:00', visitors: 198 }
    ],
    popularPages: [
      { page: '/courses', visitors: 4567 },
      { page: '/', visitors: 3987 },
      { page: '/courses/data-science', visitors: 2345 },
      { page: '/courses/web-development', visitors: 1876 },
      { page: '/about', visitors: 1234 }
    ]
  };

  useEffect(() => {
    // Simulate API call
    const fetchStats = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStats(mockStats);
      setLoading(false);
    };

    fetchStats();
  }, [timeRange]);

  const refreshStats = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const getDeviceIcon = (deviceType) => {
    switch (deviceType.toLowerCase()) {
      case 'mobile': return <Smartphone className="w-4 h-4" />;
      case 'tablet': return <Tablet className="w-4 h-4" />;
      default: return <Laptop className="w-4 h-4" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading visitor statistics...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 lg:pt-20">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {stats.totalVisitors.toLocaleString()}
            </h3>
            <p className="text-gray-600 text-sm">Total Visitors</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 text-xs font-bold">LIVE</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {stats.onlineNow}
            </h3>
            <p className="text-gray-600 text-sm">Online Now</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {stats.todayVisitors.toLocaleString()}
            </h3>
            <p className="text-gray-600 text-sm">Today's Visitors</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {stats.countries.length}
            </h3>
            <p className="text-gray-600 text-sm">Countries</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Countries Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                Visitors by Country
              </h2>
              <button className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
            <div className="space-y-4">
              {stats.countries.map((country, index) => (
                <div key={country.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      {country.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{country.name}</p>
                      <p className="text-gray-500 text-xs">{country.visitors.toLocaleString()} visitors</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900 text-sm">{country.percentage}%</p>
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                        style={{ width: `${country.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Device Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg"
          >
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-6">
              <Laptop className="w-5 h-5 text-green-600" />
              Devices Used
            </h2>
            <div className="space-y-4">
              {stats.devices.map((device, index) => (
                <div key={device.type} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                      {getDeviceIcon(device.type)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{device.type}</p>
                      <p className="text-gray-500 text-xs">{device.visitors.toLocaleString()} visitors</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900 text-sm">{device.percentage}%</p>
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"
                        style={{ width: `${device.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg lg:col-span-2"
          >
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Most Popular Pages
            </h2>
            <div className="space-y-3">
              {stats.popularPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <p className="font-medium text-gray-900 text-sm">{page.page}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{page.visitors.toLocaleString()}</p>
                    <p className="text-gray-500 text-xs">visitors</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Real-time Visitor Counter Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-center mt-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Live Visitor Counter</h2>
          <div className="flex items-center justify-center gap-4">
            <img 
              src="https://visitor-badge.laobi.icu/badge?page_id=gogaledu.academy" 
              alt="visitor badge"
              className="h-8"
            />
            {/* <div className="text-white">
              <p className="text-lg">Use this badge on your website:</p>
              <code className="bg-black/30 px-3 py-1 rounded text-sm font-mono">
                {`<img src="https://visitor-badge.laobi.icu/badge?page_id=gogaledu.academy" />`}
              </code>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisitorStatsPage;