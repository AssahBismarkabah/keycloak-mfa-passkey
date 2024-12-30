import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FileText, Download } from 'lucide-react';
import { format } from 'date-fns';

export function Statements() {
  const handleDownloadStatement = (month: string) => {
    // TODO: Implement PDF generation and download
    console.log('Downloading statement for:', month);
  };

  const last6Months = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    return format(date, 'MMMM yyyy');
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Account Statements</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-6 w-6" />
            Available Statements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {last6Months.map((month) => (
              <div
                key={month}
                className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-gray-500" />
                  <span>{month}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownloadStatement(month)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}