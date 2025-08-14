import { zodResolver } from '@hookform/resolvers/zod';
import type { TFunction } from 'i18next';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const createCommissionSchema = (t: TFunction) =>
  z.object({
    name: z.string().min(1, t('commissionForm.validation.nameRequired')),
    fromAmount: z
      .string()
      .min(1, t('commissionForm.validation.fromAmountRequired')),
    toAmount: z
      .string()
      .min(1, t('commissionForm.validation.toAmountRequired')),
    percentage: z.number().min(1).max(100),
  });

type CommissionFormValues = z.infer<ReturnType<typeof createCommissionSchema>>;

export const CommissionForm = ({
  onSubmit,
}: {
  onSubmit?: (data: CommissionFormValues) => void;
}) => {
  const { t } = useTranslation();
  const types = [
    t('commissionForm.types.user'),
    t('commissionForm.types.employee'),
    t('commissionForm.types.corporate'),
    t('commissionForm.types.agent'),
    t('commissionForm.types.lender'),
    t('commissionForm.types.vendor'),
  ];

  const commissionSchema = createCommissionSchema(t);

  const form = useForm<CommissionFormValues>({
    resolver: zodResolver(commissionSchema),
    defaultValues: {
      name: '',
      fromAmount: '',
      toAmount: '',
      percentage: 1,
    },
  });

  const [selectedType, setSelectedType] = useState<string>('');

  const percentage = form.watch('percentage');

  return (
    <Form {...form}>
      <form
        className="grid w-full grid-cols-2 rounded-xl bg-gray-50 p-6 shadow"
        onSubmit={form.handleSubmit((data) => onSubmit?.(data))}
      >
        <div className="">
          <div className="mb-8 flex gap-4">
            {types.map((type) => (
              <Button
                className={`rounded-full border-2 bg-transparent text-gray-700 transition-colors duration-150 ${selectedType === type ? 'border-primary bg-primary/10 text-primary' : 'border-gray-300'}hover:border-primary hover:bg-primary/10 hover:text-primary`}
                key={type}
                onClick={() => setSelectedType(type)}
                type="button"
                variant="outline"
              >
                {type}
              </Button>
            ))}
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-lg">
                  {t('commissionForm.giveNameLabel')}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t('commissionForm.placeholder')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mb-4 flex gap-4">
            <FormField
              control={form.control}
              name="fromAmount"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-lg">
                    {t('commissionForm.fromAmountLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t('commissionForm.placeholder')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="toAmount"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-lg">
                    {t('commissionForm.toAmountLabel')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t('commissionForm.placeholder')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="percentage"
            render={() => (
              <FormItem className="mb-4 flex items-center gap-5">
                <div className="">
                  <FormLabel className="text-lg">
                    {t('commissionForm.percentageLabel')}
                  </FormLabel>
                  <p className="mb-2 text-muted-foreground">
                    {t('commissionForm.percentageDescription')}
                  </p>
                </div>
                <div className="mb-8 flex items-center gap-4">
                  <Button
                    aria-label={t('commissionForm.decreasePercentage')}
                    className="rounded-full bg-blue-100 text-primary hover:bg-blue-200"
                    onClick={() =>
                      form.setValue('percentage', Math.max(1, percentage - 1))
                    }
                    size="icon"
                    type="button"
                    variant="ghost"
                  >
                    <MinusIcon className="h-6 w-6" />
                  </Button>
                  <span className="font-bold text-2xl text-primary">
                    {percentage}%
                  </span>
                  <Button
                    aria-label={t('commissionForm.increasePercentage')}
                    className="rounded-full bg-blue-100 text-primary hover:bg-blue-200"
                    onClick={() =>
                      form.setValue('percentage', Math.min(100, percentage + 1))
                    }
                    size="icon"
                    type="button"
                    variant="ghost"
                  >
                    <PlusIcon className="h-6 w-6" />
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-end">
          <Button className="w-32 bg-primary-gradient" type="submit">
            {t('commissionForm.createButton')}
          </Button>
        </div>
      </form>
    </Form>
  );
};
