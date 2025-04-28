export interface Employee {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    selected?: boolean;
}

export const AllEmployees = [
    {'id': 1, 'name': 'Alice Johnson', 'email': 'alice.johnson@example.com', 'phone': '555-123-0001', 'address': '123 Maple St, Springfield'},
    {'id': 2, 'name': 'Bob Smith', 'email': 'bob.smith@example.com', 'phone': '555-123-0002', 'address': '456 Oak St, Springfield'},
    {'id': 3, 'name': 'Carol Davis', 'email': 'carol.davis@example.com', 'phone': '555-123-0003', 'address': '789 Pine St, Springfield'},
    {'id': 4, 'name': 'David Lee', 'email': 'david.lee@example.com', 'phone': '555-123-0004', 'address': '321 Elm St, Springfield'},
    {'id': 5, 'name': 'Eva Moore', 'email': 'eva.moore@example.com', 'phone': '555-123-0005', 'address': '654 Birch St, Springfield'},
    {'id': 6, 'name': 'Frank White', 'email': 'frank.white@example.com', 'phone': '555-123-0006', 'address': '987 Cedar St, Springfield'},
    {'id': 7, 'name': 'Grace Kim', 'email': 'grace.kim@example.com', 'phone': '555-123-0007', 'address': '159 Spruce St, Springfield'},
    {'id': 8, 'name': 'Henry Adams', 'email': 'henry.adams@example.com', 'phone': '555-123-0008', 'address': '753 Willow St, Springfield'},
    {'id': 9, 'name': 'Ivy Turner', 'email': 'ivy.turner@example.com', 'phone': '555-123-0009', 'address': '258 Cherry St, Springfield'},
    {'id': 10, 'name': 'Jack Carter', 'email': 'jack.carter@example.com', 'phone': '555-123-0010', 'address': '147 Walnut St, Springfield'}
];
