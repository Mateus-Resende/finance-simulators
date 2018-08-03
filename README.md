# Financial Calculators for investments

## Description

This library was built with the intention to simulate investments and make calculations of different kinds of investments in Brazil. The investments present here are:

* Abusive Interests
* Compound Interests
* CDB with interests on the due date
* LCI with interests on the due date
* Lease or Rent
* Financial Independency

### Abusive Interests

  Calculate the real value you're paying. Four different calculations can be done: _i)_ the total amount, _ii)_ the installment value, _iii)_ the length of the payment, or _iv)_ the interest rate. Basically, you need to provide 3 of these arguments and it will calculate the 4th.

### Compound Interests

  Basic calculation for compound interests with monthly payments. Based on the length of the investment, the interest rate, the monthly payment, and the initial amount it will calculate how much you'll have in the end.

### CDB with interests on the due date

  Calculation of CDB based on the initial amount, the start and end date, the CDI index, and the CDI percent. It will return profitabilities on daily, monthly, yearly and period basis.

### LCI with interests on the due date

  Calculation of LCI based on the initial amount, the length, the CDI index, and the CDI percent. It will return profitabilities on daily, monthly, yearly and period basis.

### Lease or Rent

  A comparison of the values showing the ratio between the value paid in the end of the leasing and the amount you can have if you save and invest the money. This ratio should be enough for you to tell if it's a better option to invest the money and live renting or if you should buy the real state you want.

### Financial Independency

  A calculation to know how much you need to save every month so you can have a good retirement and stop working.

## Build

  The project uses docker, so if you have docker installed you can simply run `docker-compose build`.

## Testing

* `./bin/test.sh`
* `docker-compose run app npm run watch`
