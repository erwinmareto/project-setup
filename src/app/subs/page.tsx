import { Subscription, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Subscription[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      subscription: 'Netflix',
      category: 'Entertainment',
      pricing: 12.99,
      nextPayment: '31 August 2024',
      status: 'Active'
    },
    {
      id: '2',
      subscription: 'Office 365',
      category: 'Work',
      pricing: 9.99,
      nextPayment: '31 August 2024',
      status: 'Upcoming'
    },
    {
      id: '3',
      subscription: 'Spotify',
      category: 'Entertainment',
      pricing: 9.99,
      nextPayment: '31 July 2024',
      status: 'Overdue'
    },
    {
      id: '4',
      subscription: 'Gym Membership',
      category: 'Health',
      pricing: 29.99,
      nextPayment: '31 July 2024',
      status: 'Inactive'
    },
    {
      id: '5',
      subscription: 'Udemy',
      category: 'Education',
      pricing: 49.99,
      nextPayment: '8 August 2024',
      status: 'Active'
    },
    {
      id: '6',
      subscription: 'PlayStation Plus',
      category: 'Games',
      pricing: 59.99,
      nextPayment: '31 July 2024',
      status: 'Overdue'
    },
    {
      id: '7',
      subscription: 'Amazon Prime',
      category: 'Entertainment',
      pricing: 14.99,
      nextPayment: '31 August 2024',
      status: 'Upcoming'
    },
    {
      id: '8',
      subscription: 'Canva',
      category: 'Work',
      pricing: 12.99,
      nextPayment: '31 August 2024',
      status: 'Active'
    },
    {
      id: '9',
      subscription: 'Dropbox',
      category: 'Work',
      pricing: 19.99,
      nextPayment: '31 August 2024',
      status: 'Upcoming'
    },
    {
      id: '10',
      subscription: 'Disney+',
      category: 'Entertainment',
      pricing: 7.99,
      nextPayment: '31 July 2024',
      status: 'Overdue'
    },
    {
      id: '11',
      subscription: 'Hulu',
      category: 'Entertainment',
      pricing: 11.99,
      nextPayment: '15 August 2024',
      status: 'Active'
    },
    {
      id: '12',
      subscription: 'Microsoft Teams',
      category: 'Work',
      pricing: 6.99,
      nextPayment: '15 August 2024',
      status: 'Upcoming'
    },
    {
      id: '13',
      subscription: 'Apple Music',
      category: 'Entertainment',
      pricing: 9.99,
      nextPayment: '15 July 2024',
      status: 'Overdue'
    },
    {
      id: '14',
      subscription: 'Headspace',
      category: 'Health',
      pricing: 12.99,
      nextPayment: '15 July 2024',
      status: 'Inactive'
    },
    {
      id: '15',
      subscription: 'Coursera',
      category: 'Education',
      pricing: 39.99,
      nextPayment: '10 August 2024',
      status: 'Active'
    },
    {
      id: '16',
      subscription: 'Xbox Game Pass',
      category: 'Games',
      pricing: 14.99,
      nextPayment: '15 July 2024',
      status: 'Overdue'
    },
    {
      id: '17',
      subscription: 'HBO Max',
      category: 'Entertainment',
      pricing: 15.99,
      nextPayment: '15 August 2024',
      status: 'Upcoming'
    },
    {
      id: '18',
      subscription: 'Notion',
      category: 'Work',
      pricing: 8.99,
      nextPayment: '15 August 2024',
      status: 'Active'
    },
    {
      id: '19',
      subscription: 'Trello',
      category: 'Work',
      pricing: 10.99,
      nextPayment: '15 August 2024',
      status: 'Upcoming'
    },
    {
      id: '20',
      subscription: 'Paramount+',
      category: 'Entertainment',
      pricing: 9.99,
      nextPayment: '15 July 2024',
      status: 'Overdue'
    }
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
