import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const transferSchema = z.object({
  accountNumber: z.string().min(1, 'Account number is required'),
  amount: z.string().min(1, 'Amount is required'),
  description: z.string().min(1, 'Description is required'),
});

type TransferFormData = z.infer<typeof transferSchema>;

export function Transfer() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TransferFormData>({
    resolver: zodResolver(transferSchema),
  });

  const onSubmit = async (data: TransferFormData) => {
    // TODO: Implement transfer logic
    console.log('Transfer data:', data);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Transfer Money</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Make a Transfer</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Recipient Account Number</label>
              <Input
                {...register('accountNumber')}
                placeholder="Enter account number"
              />
              {errors.accountNumber && (
                <p className="text-sm text-red-500">{errors.accountNumber.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Amount</label>
              <Input
                {...register('amount')}
                type="number"
                step="0.01"
                placeholder="Enter amount"
              />
              {errors.amount && (
                <p className="text-sm text-red-500">{errors.amount.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Input
                {...register('description')}
                placeholder="Enter transfer description"
              />
              {errors.description && (
                <p className="text-sm text-red-500">{errors.description.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full" isLoading={isSubmitting}>
              Send Money
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}