// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer. 
// But you could have it be an empty array as well.
// ===============================================================================


var friendsArray = [

    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }, 

    {
        "name": "Aaron",
        "photo": "http://speakingaboutpresenting.com/wp-content/uploads/2009/01/istock_businessman.jpg",
        "scores": [
            5,
            5,
            5,
            4,
            2,
            1,
            3,
            2,
            1,
            2
        ]
    },

    {
        "name": "Jordan",
        "photo": "https://assets3.thrillist.com/v1/image/1299823/size/tl-horizontal_main/7-weird-stock-images-of-people-struggling-with-basic-cooking.jpg",
        "scores": [
            5,
            3,
            5,
            3,
            2,
            3,
            3,
            2,
            3,
            2
        ]
    },
     
    {
        "name": "David",
        "photo": "http://thumbs.dreamstime.com/x/african-american-school-boy-making-thumbs-up-black-people-isolated-white-background-33563255.jpg",
        "scores": [
            1,
            1,
            1,
            4,
            5,
            1,
            5,
            2,
            4,
            4
        ]
    }

];

// Note how we export the array. This makes it accessible to other files using require. 
module.exports = friendsArray;
