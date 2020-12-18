var images=["father gif.gif",
        "mother gif.gif",
        "girl 2.jpg",
        "girl 1.jpg",
        "https://thumbs.gfycat.com/QuestionableEsteemedCrab-small.gif",
        "https://images.squarespace-cdn.com/content/v1/5a260ab0e9bfdf7a6ed1d57c/1512444031232-XEZBEZLLJEKOLA9SGKVS/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmoW6VMYd7DRFXOxjGuORbJVRIz_X6uKxhFE9bwG5-diIJ9kj42L3XbtP_RiBprpp_/grandma.gif",
        "https://webstockreview.net/images/animated-clipart-child-3.gif",
        "https://www.clipartmax.com/png/middle/0-9141_young-girl-clipart.png",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37313890.jpg",
        "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/25813/adult-clipart-xl.png"];

        var names = ["Father~Anuj Goyal" ,
        "Mother~Shruti Goyal" ,
        "Sister~Navya Goyal" ,
        "Me~Vanya Goyal" ,
        "Grandfather~Umesh Chandra Goyal" ,
        "Grandmother~Beena Goyal" ,
        "Brother~Vedant Goyal" ,
        "Sister~Advaita Goyal" ,
        "Uncle~Tanuj Goyal" ,
        "Aunt~Aditi Goyal"
        ];

        var i = 0;
        function change() {
            document.getElementById("name").innerHTML=names[i];
            document.getElementById("image").src=images[i];
            i++;
        }