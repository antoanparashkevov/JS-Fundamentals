function demo(){
   let cat = {
      name:"Pesho"
   }
   console.log(cat.name)
   console.log(cat)
   console.log('type of cat is: ',typeof(cat))
   cat.age = 32;
   console.log('Adding fone more key(property)')
   console.log(cat.age)
   console.log(cat)
   cat['color'] = 'black'//we can do this and like this
   console.log('Adding one more key(property)')
   console.log(cat.color)
   console.log(cat)
   delete cat.color//we can delete like this
   console.log(cat);
   let object = [1]//arrays, object are reference type of data

   let object1  = object
   object1.name = {name:'Konstantin'}

   console.log(object)
}
demo()
