const mongoose=require('mongoose')
const mongoURI='mongodb+srv://rishabhaggarwal8011:freinds29@cluster0.rjrymwc.mongodb.net/Foodix?retryWrites=true&w=majority'

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected!');
      let fetched_data = mongoose.connection.db.collection("sample");
      let data=await fetched_data.find({}).toArray() 
      let category=mongoose.connection.db.collection("food-categories")
      let categoryData=await category.find({}).toArray()
      global.food_items=data;
      global.category=categoryData;
      //console.log(global.food_items);
    } catch (error) {
      console.log('err: ', error);
    }
  };

module.exports = mongoDB;