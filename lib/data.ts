import type {

  KPIData,

  TrendDataPoint,

  CategoryBarData,

  TableRow,

  Testimonial,

  Service,

  LiveStat,

} from './types';



export const liveStats: LiveStat[] = [

  { label: 'Positive Client Feedback', value: '92%', change: 'Client satisfaction', positive: true },

  { label: 'Projects Delivered On-Time', value: '97%', change: 'On schedule', positive: true },

  { label: 'Repeat Business From Clients', value: '85%', change: 'Returning clients', positive: true },

  { label: 'Client Retention Rate', value: '95%', change: 'Long-term partnerships', positive: true },

];



export const services: Service[] = [

  {

    title: 'Energy Solutions',

    description:

      'Flexible and cost-efficient electricity and gas plans tailored for business performance.',

    icon: 'zap',

    href: '/energy',

  },

  {

    title: 'Water Management',

    description:

      'Reliable supply and transparent billing with optimised usage tracking and support.',

    icon: 'droplets',

    href: '/water',

  },

  {

    title: 'Card Machines',

    description:

      'Secure, fast, and contactless payment systems with full technical assistance.',

    icon: 'credit-card',

    href: '/card-machine',

  },

  {

    title: 'Ongoing Support',

    description:

      'Dedicated account managers and round-the-clock help for all your utility needs.',

    icon: 'headphones',

    href: '/contact',

  },

];



export const testimonials: Testimonial[] = [

  {

    quote:

      'We switched to B2B PULSE for our energy and water needs, and the difference has been incredible. Their team helped us reduce costs while maintaining reliable service. The support is prompt, polite, and genuinely helpful every time we reach out.',

    author: 'Emma T.',

    role: 'Customer',

    company: '',

  },

  {

    quote:

      'The card machine setup with B2B PULSE was quick, smooth, and perfectly suited to our daily operations. Payment processing has never been easier. It\'s reassuring to know that technical support is just a call away whenever we need it.',

    author: 'Omar K.',

    role: 'Customer',

    company: '',

  },

  {

    quote:

      'Working with B2B PULSE has made our utility management simpler and more effective. Their tailored solutions and proactive communication ensure everything runs efficiently. We\'ve gained both time and savings since partnering with them.',

    author: 'Hannah R.',

    role: 'Customer',

    company: '',

  },

];



export const kpiData: KPIData[] = [

  {

    label: 'Projects Completed',

    value: '740+',

    change: 12.0,

    changeLabel: 'successfully delivered',

    trend: 'up',

  },

  {

    label: 'Client Retention Rate',

    value: '95%',

    change: 5.0,

    changeLabel: 'year on year',

    trend: 'up',

  },

  {

    label: 'On-Time Delivery',

    value: '97%',

    change: 2.0,

    changeLabel: 'of all projects',

    trend: 'up',

  },

  {

    label: 'Dedicated Support',

    value: '24/7',

    change: 0,

    changeLabel: 'always available',

    trend: 'neutral',

  },

];



export const trendData: TrendDataPoint[] = [

  { month: 'Jan', energy: 4200, water: 1800, payments: 3100 },

  { month: 'Feb', energy: 4500, water: 1750, payments: 3200 },

  { month: 'Mar', energy: 4100, water: 1900, payments: 3400 },

  { month: 'Apr', energy: 4800, water: 1850, payments: 3300 },

  { month: 'May', energy: 5200, water: 2000, payments: 3600 },

  { month: 'Jun', energy: 4900, water: 1950, payments: 3800 },

  { month: 'Jul', energy: 5100, water: 2100, payments: 3900 },

  { month: 'Aug', energy: 5300, water: 2050, payments: 4100 },

  { month: 'Sep', energy: 5000, water: 2200, payments: 4000 },

  { month: 'Oct', energy: 5400, water: 2150, payments: 4200 },

  { month: 'Nov', energy: 5600, water: 2300, payments: 4400 },

  { month: 'Dec', energy: 5800, water: 2250, payments: 4600 },

];



export const categoryBarData: CategoryBarData[] = [

  { category: 'Energy', value: 42, fill: '#4C6FFF' },

  { category: 'Water', value: 18, fill: '#14B8A6' },

  { category: 'Card Machines', value: 28, fill: '#7C5CFF' },

  { category: 'Support', value: 12, fill: '#F59E0B' },

];



export const tableData: TableRow[] = [

  {

    id: '1',

    account: 'UK Manufacturing Co.',

    sector: 'Manufacturing',

    spend: 2400000,

    savings: 185000,

    status: 'active',

    lastUpdated: '2025-06-28',

  },

  {

    id: '2',

    account: 'Metro Retail Group',

    sector: 'Retail',

    spend: 1850000,

    savings: 142000,

    status: 'active',

    lastUpdated: '2025-06-27',

  },

  {

    id: '3',

    account: 'London Hospitality Ltd',

    sector: 'Hospitality',

    spend: 980000,

    savings: 78000,

    status: 'active',

    lastUpdated: '2025-06-26',

  },

  {

    id: '4',

    account: 'Northern Logistics',

    sector: 'Logistics',

    spend: 1560000,

    savings: 98000,

    status: 'review',

    lastUpdated: '2025-06-25',

  },

  {

    id: '5',

    account: 'East End Properties',

    sector: 'Real Estate',

    spend: 3200000,

    savings: 210000,

    status: 'active',

    lastUpdated: '2025-06-24',

  },

  {

    id: '6',

    account: 'Thames Catering',

    sector: 'Food & Beverage',

    spend: 640000,

    savings: 45000,

    status: 'active',

    lastUpdated: '2025-06-23',

  },

];


