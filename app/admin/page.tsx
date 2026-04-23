import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard — Siri Finance',
}

const mockLeads = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@gmail.com',
    phone: '9876543210',
    salary: 65000,
    loanAmount: 500000,
    creditScore: 750,
    bank: 'HDFC Bank',
    status: 'New',
    createdAt: '15 Jan 2024, 09:30',
  },
  {
    id: 2,
    name: 'Priya Singh',
    email: 'priya.singh@yahoo.com',
    phone: '8765432109',
    salary: 45000,
    loanAmount: 300000,
    creditScore: 720,
    bank: 'ICICI Bank',
    status: 'In Review',
    createdAt: '15 Jan 2024, 10:15',
  },
  {
    id: 3,
    name: 'Arun Sharma',
    email: 'arun.sharma@gmail.com',
    phone: '7654321098',
    salary: 80000,
    loanAmount: 1000000,
    creditScore: 800,
    bank: 'SBI',
    status: 'Approved',
    createdAt: '15 Jan 2024, 11:00',
  },
  {
    id: 4,
    name: 'Meera Patel',
    email: 'meera.patel@gmail.com',
    phone: '6543210987',
    salary: 30000,
    loanAmount: 150000,
    creditScore: 680,
    bank: 'Bajaj Finance',
    status: 'Pending Docs',
    createdAt: '15 Jan 2024, 12:30',
  },
  {
    id: 5,
    name: 'Vikram Reddy',
    email: 'vikram.reddy@gmail.com',
    phone: '9988776655',
    salary: 55000,
    loanAmount: 400000,
    creditScore: 760,
    bank: 'Axis Bank',
    status: 'New',
    createdAt: '15 Jan 2024, 14:00',
  },
  {
    id: 6,
    name: 'Sunita Joshi',
    email: 'sunita.joshi@gmail.com',
    phone: '9876512345',
    salary: 42000,
    loanAmount: 250000,
    creditScore: 710,
    bank: 'Kotak Mahindra',
    status: 'Approved',
    createdAt: '16 Jan 2024, 09:00',
  },
]

const statusConfig: Record<string, { bg: string; text: string }> = {
  New: { bg: 'bg-blue-100', text: 'text-blue-700' },
  'In Review': { bg: 'bg-yellow-100', text: 'text-yellow-700' },
  Approved: { bg: 'bg-green-100', text: 'text-green-700' },
  'Pending Docs': { bg: 'bg-orange-100', text: 'text-orange-700' },
  Rejected: { bg: 'bg-red-100', text: 'text-red-700' },
}

const totalLoanValue = mockLeads.reduce((sum, l) => sum + l.loanAmount, 0)

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm mt-0.5">Loan application leads overview</p>
        </div>
        <span className="text-xs bg-yellow-100 text-yellow-700 font-semibold px-3 py-1.5 rounded-full border border-yellow-200">
          Demo Mode — Mock Data
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          {
            label: 'Total Leads',
            value: mockLeads.length,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            icon: (
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
          },
          {
            label: 'Approved',
            value: mockLeads.filter((l) => l.status === 'Approved').length,
            color: 'text-green-600',
            bg: 'bg-green-50',
            icon: (
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
          {
            label: 'Pending',
            value: mockLeads.filter((l) => l.status === 'Pending Docs' || l.status === 'In Review').length,
            color: 'text-yellow-600',
            bg: 'bg-yellow-50',
            icon: (
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
          {
            label: 'Pipeline Value',
            value: `₹${(totalLoanValue / 100000).toFixed(1)}L`,
            color: 'text-purple-600',
            bg: 'bg-purple-50',
            icon: (
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
        ].map((stat) => (
          <div key={stat.label} className={`${stat.bg} rounded-2xl p-5 border border-gray-100`}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{stat.label}</p>
              {stat.icon}
            </div>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">Recent Loan Applications</h2>
          <span className="text-xs text-gray-400">{mockLeads.length} records</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {['Applicant', 'Salary / Month', 'Loan Amount', 'CIBIL', 'Bank', 'Status', 'Applied On'].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockLeads.map((lead) => {
                const statusStyle = statusConfig[lead.status] || { bg: 'bg-gray-100', text: 'text-gray-700' }
                return (
                  <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-4">
                      <p className="font-medium text-gray-900 text-sm">{lead.name}</p>
                      <p className="text-xs text-gray-500">{lead.email}</p>
                      <p className="text-xs text-gray-400">{lead.phone}</p>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-700">
                      ₹{lead.salary.toLocaleString('en-IN')}
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-gray-800">
                      ₹{lead.loanAmount.toLocaleString('en-IN')}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`text-sm font-bold ${
                          lead.creditScore >= 750
                            ? 'text-green-600'
                            : lead.creditScore >= 650
                            ? 'text-yellow-600'
                            : 'text-red-600'
                        }`}
                      >
                        {lead.creditScore}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-600">{lead.bank}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle.bg} ${statusStyle.text}`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs text-gray-500">{lead.createdAt}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
