var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }
   
console.log(cat);

//Add height and weight to Fluffy


cat.height = 3;
cat.weight = 8;
console.log(cat);


//Fluffy name is spelled wrongly. Update it to Fluffyy


cat.name = "Fluffyy";
console.log(cat);


//List all the activities of Fluffyy’s catFriends.


cat.catFriends.forEach((item) =>
console.log(item.activities))


//Print the catFriends names


cat.catFriends.forEach((item) =>
console.log(item.name))


//Print the total weight of catFriends


const catFriendsWeight = cat.catFriends.reduce((total,item) => total+item.weight,0);
console.log(catFriendsWeight);


//Print the total activities of all cats (op:6)


const totalCatActivities = cat.catFriends.reduce((total,item) => total+item.activities.length,0);
console.log(cat.activities.length + totalCatActivities);


//Add 2 more activities to bar & foo cats

cat.catFriends.map((item) => {
    item.activities.push("walk","run");
})

console.log(cat);


//Update the fur color of bar

cat.catFriends[0].furcolor = "grey";
console.log(cat);

