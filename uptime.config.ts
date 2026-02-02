import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "AvgT Status Page",
  links: [
    { link: 'mailto:s9e@avgt.me', label: 'Email Me', highlight: true },
  ],
  group: {
    '🌐 Public': ['yunsea_monitor'],
    '🔐 Private': ['gayhub_monitor', 'drive_monitor', 'ts_monitor', 'rustdesk_monitor'],
  },
  favicon: 'https://www.avgt.top/favicon.ico',
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'yunsea_monitor',
      name: 'Yunsea',
      method: 'GET',
      target: 'https://yunsea.avgt.top/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'gayhub_monitor',
      name: 'Gayhub',
      method: 'GET',
      target: 'http://git.avgt.top:3000',
      tooltip: 'Private Git Service',
      timeout: 10000,
    },
    {
      id: 'drive_monitor',
      name: 'Drive',
      method: 'GET',
      target: 'http://drive.avgt.top:5212',
      timeout: 10000,
    },
    {
      id: 'ts_monitor',
      name: 'TeamSpeak',
      method: 'TCP_PING', 
      target: 'chat.avgt.top:9987',
      tooltip: 'Voice Server',
      timeout: 5000,
    },
    {
      id: 'rustdesk_monitor',
      name: 'RustDesk',
      method: 'TCP_PING',
      target: 'rustdesk.avgt.top:21116',
      tooltip: 'Remote Desktop Signal Server',
      timeout: 5000,
    },
  ],
  notification: {
    webhook: {
      url: 'https://my-webhook-url.com',
      method: 'POST',
      payloadType: 'json',
      payload: {
        title: 'Server Status Alert',
        text: '$MSG',
      },
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
}

const maintenances: MaintenanceConfig[] = [
  {
    monitors: ['yunsea_monitor'],
    title: 'Yunsea 部署中',
    body: '站点未上线',
    start: '2024-01-01T00:00:00+08:00',
    end: '2026-12-31T23:59:59+08:00',
    color: 'blue',
  },
]

export { maintenances, pageConfig, workerConfig }
