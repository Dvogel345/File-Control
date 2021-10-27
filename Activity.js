/* Items to add to a Javascript object array
{ Type: 'StockCar', IdNumber: 101, Model: 'S1', Insured: 'True', YearBuilt: '', Condition: 'Fair' }
{ Type: '145', IdNumber: '', Model: 'T1', Insured: 'Black', YearBuilt: '1975', Condition: 'Good' }
{ Type: '228', IdNumber: '22H', Model: '22', Insured: 'null', YearBuilt: 2002, Condition: 'null' }
{ Type: 'Gondola', IdNumber: '205', Model: 'G1', Insured: 'True', YearBuilt: 'null', Condition: 'Fair' }
{ Type: 'Lorrie', IdNumber: 783, Model: '', Insured: 'False', YearBuilt: '1968', Condition: 'Poor' }*/


//Create array of all Items purchased from SilverTrack
let purchasedCars = [

  { Type: 22, IdNumber: 21101, Model: 'S1', Insured: true, YearBuilt: '1922' },
  { Type: 'StockCar', IdNumber: 4654, Model: 'S1', Insured: 'True', YearBuilt: '2011' },
  //...
]

//loop through purchasedCars array
for (//loop logic goes here ) {

  //use typeof to get data type
  let getTypeDataType = typeof purchasedCars[i].Type  //expecting String
  if (getTypeDataType !== 'string') {
    //if the data type is not a string, explicitly convert to string
    purchasedCars[i].Type = String(purchasedCars[i].Type);
  }
    //continue checking the data type for each item in the array

    //add conversion logic to the correct datatype based on PART ONE insructions.
}

//output array with the required dataTypes
console.log(purchasedCars);





