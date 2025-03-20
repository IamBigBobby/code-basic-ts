// https://code-basics.com/ru/languages/typescript/lessons/variability

type Transaction = {
    apply: (amount: number) => number
}

type Wallet = {
    transactions: Transaction[],
    balance: number
}

function applyTransactions(wallet: Wallet): number{
    const stratBalance = wallet.balance;
    let currentBalance = wallet.balance;
    for (let transaction of wallet.transactions){
        try{
            currentBalance = transaction.apply(currentBalance);
        } catch {
            return stratBalance;
        }
    }

    return currentBalance;
}

const wallet: Wallet = {
    balance: 100,
    transactions: [
      {
        apply: (amount: number) => amount + 10,
      },
    //   {
    //     apply: () => {
    //       throw new Error('Error');
    //     },
    //   },
      {
        apply: (amount: number) => amount + 10,
      },
      {
        apply: (amount: number) => amount + 30,
      },
    ],
};

const wallet2: Wallet = {
    balance: 10,
    transactions: [
      {
        apply: (amount: number) => amount + 10,
      },
      {
        apply: () => {
          throw new Error('Error');
        },
      },
      {
        apply: (amount: number) => amount + 30,
      },
    ],
  };

console.log(applyTransactions(wallet2));
