import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { formatCurrency } from '../lib/utils';
import { Wallet, ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';

export function Dashboard() {
  const accountBalance = 25000.75;
  const recentTransactions = [
    {
      id: 1,
      type: 'credit',
      amount: 1500,
      description: 'Salary deposit',
      date: '2024-02-28',
    },
    {
      id: 2,
      type: 'debit',
      amount: 85.50,
      description: 'Grocery shopping',
      date: '2024-02-27',
    },
    // Add more transactions as needed
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Balance Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Wallet className="mr-2 h-6 w-6" />
            Current Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{formatCurrency(accountBalance)}</p>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-6 w-6" />
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center">
                  {transaction.type === 'credit' ? (
                    <ArrowDownLeft className="mr-2 h-5 w-5 text-green-500" />
                  ) : (
                    <ArrowUpRight className="mr-2 h-5 w-5 text-red-500" />
                  )}
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <span
                  className={`font-medium ${
                    transaction.type === 'credit'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {transaction.type === 'credit' ? '+' : '-'}
                  {formatCurrency(transaction.amount)}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}