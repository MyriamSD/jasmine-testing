
it('should calculate the monthly rate correctly', function () {
  const values  = { amount: 11000, years: 4, rate: 11.9 }
  expect(calculateMonthlyPayment(values)).toEqual('289.13');
  // ...
});


it("should return a result with 2 decimal places", function() {
  const values  = { amount: 1200, years: 1, rate: 12 }
  expect(calculateMonthlyPayment(values)).toEqual('106.62');

  // ..
});

/// etc
