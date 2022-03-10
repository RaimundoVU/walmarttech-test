db.createUser(
    {
        user: "productListUser",
        pwd: "productListUser",
        roles:[
            {
                role: "readWrite",
                db:   "promotions"
            }
        ]
    }
);


testsDB = db.getSiblingDB('testsDB');

testsDB.createUser(
    {
        user: "tests",
        pwd: "password",
        roles:[
            {
                role: "readWrite",
                db:   "testsDB"
            }
        ]
    }
);

