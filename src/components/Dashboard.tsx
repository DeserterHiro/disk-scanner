import { HardDrive, Activity, Database, FileText, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

// Mock data for the dashboard
const mockData = {
  totalDevices: 4,
  activeDevices: 3,
  inactiveDevices: 1,
  totalCapacity: '8 TB',
  usedCapacity: '4.5 TB',
  remainingCapacity: '3.5 TB',
  lastFileAdded: {
    name: 'project_backup_2025.zip',
    device: 'SSD-01',
    timestamp: '2025-01-07 14:32',
    size: '2.4 GB'
  },
  devices: [
    { id: 1, name: 'SSD-01', status: 'online', capacity: '2 TB', used: '1.2 TB' },
    { id: 2, name: 'HDD-02', status: 'online', capacity: '4 TB', used: '2.8 TB' },
    { id: 3, name: 'SSD-03', status: 'online', capacity: '1 TB', used: '0.5 TB' },
    { id: 4, name: 'HDD-04', status: 'offline', capacity: '1 TB', used: '0 TB' },
  ]
};

function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  subtitle, 
  linkTo 
}: { 
  title: string; 
  value: string | number; 
  icon: any; 
  subtitle?: string;
  linkTo?: string;
}) {
  const content = (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm text-gray-600 dark:text-gray-400">{title}</h3>
        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      </div>
      <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
        {value}
      </div>
      {subtitle && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  );

  return linkTo ? <a href={linkTo}>{content}</a> : content;
}

function StatusBadge({ status }: { status: string }) {
  const statusConfig = {
    online: { color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300', icon: CheckCircle },
    warning: { color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300', icon: AlertTriangle },
    offline: { color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300', icon: XCircle },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.offline;
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${config.color}`}>
      <Icon className="w-3 h-3" />
      {status}
    </span>
  );
}

export function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Devices"
          value={mockData.totalDevices}
          icon={HardDrive}
          subtitle={`${mockData.activeDevices} active, ${mockData.inactiveDevices} offline`}
          linkTo="/devices"
        />
        <StatCard
          title="Device Status"
          value={mockData.activeDevices}
          icon={Activity}
          subtitle="Devices online"
        />
        <StatCard
          title="Total Capacity"
          value={mockData.totalCapacity}
          icon={Database}
          subtitle={`${mockData.usedCapacity} used`}
        />
        <StatCard
          title="Remaining Space"
          value={mockData.remainingCapacity}
          icon={Database}
          subtitle="Available storage"
        />
      </div>

      {/* Last File Added */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Last File Added</h2>
        <a href="/files" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
                  {mockData.lastFileAdded.name}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>Device: <span className="font-medium">{mockData.lastFileAdded.device}</span></span>
                  <span>Size: <span className="font-medium">{mockData.lastFileAdded.size}</span></span>
                  <span>Time: <span className="font-medium">{mockData.lastFileAdded.timestamp}</span></span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Device List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Connected Devices</h2>
          <a href="/devices" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
            View All →
          </a>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Device
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Capacity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Used
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockData.devices.map((device) => (
                <tr key={device.id} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <HardDrive className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {device.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={device.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {device.capacity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {device.used}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}