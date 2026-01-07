import { HardDrive, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const mockDevices = [
  {
    id: 1,
    name: 'SSD-01',
    type: 'SSD',
    status: 'online',
    capacity: '2 TB',
    used: '1.2 TB',
    available: '800 GB',
    health: 'Excellent',
    temperature: '42°C',
    mountPoint: '/mnt/ssd01'
  },
  {
    id: 2,
    name: 'HDD-02',
    type: 'HDD',
    status: 'online',
    capacity: '4 TB',
    used: '2.8 TB',
    available: '1.2 TB',
    health: 'Good',
    temperature: '38°C',
    mountPoint: '/mnt/hdd02'
  },
  {
    id: 3,
    name: 'SSD-03',
    type: 'SSD',
    status: 'online',
    capacity: '1000 GB',
    used: '500 GB',
    available: '500 GB',
    health: 'Excellent',
    temperature: '40°C',
    mountPoint: '/mnt/ssd03'
  },
  {
    id: 4,
    name: 'HDD-04',
    type: 'HDD',
    status: 'offline',
    capacity: '1 TB',
    used: '0 GB',
    available: '0 GB',
    health: 'Unknown',
    temperature: 'N/A',
    mountPoint: 'N/A'
  },
];

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

export function DevicesLayout() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Storage Devices</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor and manage all connected storage devices</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockDevices.map((device) => (
          <div
            key={device.id}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <HardDrive className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {device.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{device.type}</p>
                </div>
              </div>
              <StatusBadge status={device.status} />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Capacity</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{device.capacity}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Used</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{device.used}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Available</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{device.available}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Health</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{device.health}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Temperature</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{device.temperature}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Mount Point</span>
                <span className="font-mono text-xs font-medium text-gray-900 dark:text-gray-100">{device.mountPoint}</span>
              </div>
            </div>

            {/* Usage Bar */}
            {device.status !== 'offline' && (
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                  <span>Storage Usage</span>
                  <span>{Math.round((parseFloat(device.used) / parseFloat(device.capacity)) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                    style={{ width: `${Math.round((parseFloat(device.used) / parseFloat(device.capacity)) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
