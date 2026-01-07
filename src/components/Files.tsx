import { FileText, Image, Music, Video, Archive, File } from 'lucide-react';

const mockFiles = [
  {
    id: 1,
    name: 'project_backup_2025.zip',
    type: 'archive',
    size: '2.4 GB',
    device: 'SSD-01',
    dateAdded: '2025-01-07 14:32',
    path: '/mnt/ssd01/backups/'
  },
  {
    id: 2,
    name: 'presentation.pdf',
    type: 'document',
    size: '15.2 MB',
    device: 'SSD-01',
    dateAdded: '2025-01-07 12:15',
    path: '/mnt/ssd01/documents/'
  },
  {
    id: 3,
    name: 'vacation_photos.zip',
    type: 'archive',
    size: '1.8 GB',
    device: 'HDD-02',
    dateAdded: '2025-01-06 18:45',
    path: '/mnt/hdd02/photos/'
  },
  {
    id: 4,
    name: 'song_collection.mp3',
    type: 'audio',
    size: '45 MB',
    device: 'SSD-03',
    dateAdded: '2025-01-06 10:20',
    path: '/mnt/ssd03/music/'
  },
  {
    id: 5,
    name: 'tutorial_video.mp4',
    type: 'video',
    size: '850 MB',
    device: 'HDD-02',
    dateAdded: '2025-01-05 16:30',
    path: '/mnt/hdd02/videos/'
  },
  {
    id: 6,
    name: 'logo_design.png',
    type: 'image',
    size: '5.2 MB',
    device: 'SSD-01',
    dateAdded: '2025-01-05 09:15',
    path: '/mnt/ssd01/images/'
  },
  {
    id: 7,
    name: 'database_dump.sql',
    type: 'file',
    size: '320 MB',
    device: 'SSD-03',
    dateAdded: '2025-01-04 22:10',
    path: '/mnt/ssd03/databases/'
  },
  {
    id: 8,
    name: 'meeting_notes.docx',
    type: 'document',
    size: '2.1 MB',
    device: 'SSD-01',
    dateAdded: '2025-01-04 14:45',
    path: '/mnt/ssd01/documents/'
  },
];

function getFileIcon(type: string) {
  const icons = {
    document: FileText,
    image: Image,
    audio: Music,
    video: Video,
    archive: Archive,
    file: File,
  };
  return icons[type as keyof typeof icons] || File;
}

function getFileColor(type: string) {
  const colors = {
    document: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900',
    image: 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900',
    audio: 'text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900',
    video: 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900',
    archive: 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900',
    file: 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800',
  };
  return colors[type as keyof typeof colors] || colors.file;
}

export function FilesLayout() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Recent Files</h1>
        <p className="text-gray-600 dark:text-gray-400">View recently added files across all devices</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  File Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Device
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date Added
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Path
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockFiles.map((file) => {
                const Icon = getFileIcon(file.type);
                const colorClasses = getFileColor(file.type);
                
                return (
                  <tr key={file.id} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${colorClasses}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {file.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {file.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {file.device}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {file.dateAdded}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                        {file.path}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
