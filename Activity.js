/* Items to add to a Javascript object array
{ Type: 'StockCar', IdNumber: 101, Model: 'S1', Insured: 'True', YearBuilt: '', Condition: 'Fair' }
{ Type: '145', IdNumber: '', Model: 'T1', Insured: 'Black', YearBuilt: '1975', Condition: 'Good' }
{ Type: '228', IdNumber: '22H', Model: '22', Insured: 'null', YearBuilt: 2002, Condition: 'null' }
{ Type: 'Gondola', IdNumber: '205', Model: 'G1', Insured: 'True', YearBuilt: 'null', Condition: 'Fair' }
{ Type: 'Lorrie', IdNumber: 783, Model: '', Insured: 'False', YearBuilt: '1968', Condition: 'Poor' }*/


//Create array of all Items purchased from SilverTrack
let purchasedCars = [

  { Type: 22,         IdNumber: 21101,  Model: 'S1', Insured: "true",     YearBuilt: '1922' },
  { Type: 'StockCar', IdNumber: 4654,   Model: 'S1', Insured: 'true',   YearBuilt: '2011' },
  { Type: '145',      IdNumber: '',     Model: 'T1', Insured: 'false',  YearBuilt: '1975', Condition: 'Good' },
  { Type: '228',      IdNumber: '22H',  Model: '22', Insured: 'true',   YearBuilt: 2002, Condition: 'null' },
  { Type: 'Gondola',  IdNumber: '205',  Model: 'G1', Insured: 'True',   YearBuilt: 'null', Condition: 'Fair' },
  { Type: 'Lorrie',   IdNumber: 783,    Model: '',   Insured: 'False',  YearBuilt: '1968', Condition: 'Poor' }
]

//loop through purchasedCars array
for (let i=0; i<purchasedCars.length; i++) {

  //use typeof to get data type
  let getTypeDataType = typeof purchasedCars[i].Type  //expecting String
    if (getTypeDataType !== 'string') {
    //if the data type is not a string, explicitly convert to string
    purchasedCars[i].Type = String(purchasedCars[i].Type);
  }
    //continue checking the data type for each item in the array
    let getIdNumberDataType = typeof purchasedCars[i].IdNumber
      if(getIdNumberDataType !== "number"){
        purchasedCars[i].IdNumber = Number(purchasedCars[i].IdNumber)
      }
    //add conversion logic to the correct datatype based on PART ONE insructions.
    let getModelDataType = typeof purchasedCars[i].Type
      if (getIdNumberDataType !== "string"){
        purchasedCars[i].Model = String(purchasedCars[i].Model)
      }

    let getInsuredDataType = typeof purchasedCars[i].Insured
    if(getInsuredDataType !== "boolean") {
      purchasedCars[i] = Boolean(purchasedCars[i].Insured)
    }
    
    let getYearBuiltDataType = typeof purchasedCars[i].YearBuilt
    if(getYearBuiltDataType !== "number"){
      purchasedCars[i] = Number(purchasedCars[i].YearBuilt)
    } 

    // List of cars where it is insured and built after 1962
    
    // Approach One
      let carsBuiltAfter1962 = purchasedCars;
      for(i=1962;i<purchasedCars.length;i++){
        console.log(purchasedCars);

        //if cars insured and built after 1962
        if(purchasedCars.insured=="true" && YearBuilt > 1962){
          carsBuiltAfter1962.push(carsBuiltAfter1962)

        }
      }  
      console.log(purchasedCars)


//output array with the required dataTypes
// console.log(purchasedCars);

}