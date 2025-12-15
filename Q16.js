// -----------------------------
// Question 1: Closure-Based Counter
// -----------------------------
function createCounter() {
    let count = 0; // private variable

    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current count:", count);
        },
        getCount: function () {
            return count;
        }
    };
}

// Example Usage
const counter1 = createCounter();
counter1.increment(); // Current count: 1
counter1.increment(); // Current count: 2
counter1.decrement(); // Current count: 1

// Multiple counters
const counter2 = createCounter();
counter2.increment(); // Current count: 1
counter2.increment(); // Current count: 2
console.log("Counter1:", counter1.getCount()); // 1
console.log("Counter2:", counter2.getCount()); // 2


// -----------------------------
// Question 2: Bank Account Simulation
// -----------------------------
function createBankAccount() {
    let balance = 0; // private variable
    let transactionHistory = []; // private transaction log

    return {
        deposit: function (amount) {
            balance += amount;
            transactionHistory.push(`Deposited: ${amount}`);
            console.log(`Deposited: ${amount}`);
        },
        withdraw: function (amount) {
            if (amount <= balance) {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log(`Withdrawn: ${amount}`);
            } else {
                console.log("Insufficient balance");
            }
        },
        checkBalance: function () {
            console.log(`Current balance: ${balance}`);
            return balance;
        },
        getHistory: function () {
            console.log("Transaction History:", transactionHistory);
            return transactionHistory;
        }
    };
}

// Example Usage
const account = createBankAccount();
account.deposit(500);   // Deposited: 500
account.withdraw(200);  // Withdrawn: 200
account.withdraw(400);  // Insufficient balance
account.checkBalance(); // Current balance: 300
account.getHistory();   // Transaction History: [ 'Deposited: 500', 'Withdrawn: 200' ]

console.log(account.balance); // undefined (cannot access directly!)
