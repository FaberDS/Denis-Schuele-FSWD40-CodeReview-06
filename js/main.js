$(document).ready(function() {
    $('#formAddContentForm').hide();
    

    //show formAddContent
    $('#showFormContentBtn').on('click', function() {
        $('#formAddContentForm').show();
        $('#showFormContentBtn').hide();

    });
    // Display Content from Json -------------------------------------------------------------------------------------------------------------
    function printMedia(content, titleHeadline, className) {
        //grabs connection to the main Content div
        var row = document.getElementById("mainContent");
        row.innerHTML += "<div class='row " + className + "-Row mediaRow' id='" + className + "Row'><p class='rowHeadline'>" + titleHeadline + "</p></div>";
        var mediaContent = '';
        //Loop through each selected Element and display them inside of HTML Structure
        for (var i = 0; i < content.length; i++) {
            var tempDetail = content[i];
            
            starCalc(tempDetail.rating);
            checkType(tempDetail.type)          

            //HTML Content --------------------------------------
            mediaContent +=
                '<div class="col-lg-4 col-md-4 col-sm-4 container-media ' + className + ' media">' +
                '<div class="item-media '+className+'MediaClass">' +
                '<img  class="mediaImg" src="' + tempDetail.image + '" alt="">' +
                '<p class="rating">' + stars + '</p>' +
                '<div class="detail-media">' +
                '<h3 class="titleItemMedia">' + tempDetail.title + '</h3>';
            if (className == "book") {
                mediaContent +=
                    '<p class="subTitles">Autor: </p><p>' + tempDetail.autor + '</p><br>';
            } else if (className == "dvd") {
                mediaContent +=
                    '<p class="subTitles">Autor: </p><p>' + tempDetail.regisseur + '</p><br>';
            };
            mediaContent +=
                '<p class="subTitles">Genre: </p><p>' + tempDetail.genre + '</p><br>' +
                '<p class="subTitles">Description</p><p class="description">' + tempDetail.description.substring(0, 50) + ' ...</p><br>' + 
                '<p class="type">'+ type + tempDetail.type + '</p></br>' +
                // Trigger the modal with a button 
  				'<button type="button" class="btn btn-info btn-lg detailBtn" id="showDetailBtn" data-toggle="modal" data-target="#'+ tempDetail.id +'">Show more Details</button>' +
                '</div></div>';
            //modal window ------------------------------------------------------------------------------------------
            mediaContent +=
				'<div class="modal fade" id="'+ tempDetail.id +'" role="dialog">'+
					'<div class="modal-dialog">'+
					// Modal content
						'<div class="modal-content">'+
							'<div class="modal-header">'+
								'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
									'<h3>' + tempDetail.title + '</h3>'+
                                    '<p class="type">' + type + tempDetail.type + '</p>' +
							'</div>'+
							'<div class="modal-body">'+
								'<img class="mediaImg" src="'+ tempDetail.image + '" alt="">' +
								
								'<p>' + tempDetail.description+'</p>' + 
								
							'</div>'+
							'<div class="modal-footer">'+
								
								'<p >' + stars + '</p>' +
								'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';

        }
        //Output on page
        document.getElementById(className + "Row").innerHTML += mediaContent;
    }
    
    // Display Content from Input -------------------------------------------------------------------------------------------------------------
    function printInput(inputArray, inputIndex) {
        //grabs connection to the main Content div
        var inputContent = '';
        inputContent +=
            '<div class="col-lg-4 col-md-4 col-sm-4 container-media ' + inputArray[0].value + ' media">' +
            '<div class="item-media '+inputArray[0].value+'MediaClass">' +
            '<img class="mediaImg" src="' + inputArray[4].value + '" alt="">' +
            '<p class="rating">'+ inputArray[8].value + ' Stars</p>' +
            '<div class="detail-media">' +
            '<h3 class="titleItemMedia">' + inputArray[1].value + '</h3>';
        if (inputArray[0].value == "book") {
            inputContent +=
                '<p class="subTitles">Autor: ' + inputArray[5].value + '</p><br>';
        } else if (inputArray[0].value == "dvd") {
            inputContent +=
                '<p class="subTitles">Regissseur: ' + inputArray[6].value + '</p><br>';
        };
        inputContent +=
            '<p class="subTitles">Genre ' + inputArray[2].value + '</p><br>' +
            '<p class="subTitles">Description: </p><br><p class="description">' + inputArray[7].value.substring(0, 100) + ' ...</p><br>' +
            '<p class="type" >'+ inputArray[0].value + '</p>' +
           
            // Trigger the modal with a button 
            '<button type="button" class="btn btn-info btn-lg detailBtn" id="showDetailBtn" data-toggle="modal" data-target="#'+ inputIndex+'">Show more Details</button>' +
            '</div></div></div>';

        //modal window ------------------------------------------------------------------------------------------
        inputContent +=
         '<div class="modal fade" id="'+ inputIndex+'" role="dialog">'+
             '<div class="modal-dialog">'+
             // Modal content
                 '<div class="modal-content">'+
                     '<div class="modal-header">'+
                         '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                            '<h3>' + inputArray[1].value + '</h3>'+
                            '<p class="type">'+ inputArray[0].value + '</p>' +
                     '</div>'+
                     '<div class="modal-body">'+
                         '<img src="'+ inputArray[4].value + '" alt="">' +
                         
                         '<p class="description">' + inputArray[7].value+'</p>' + 
                            
                     '</div>'+
                     '<div class="modal-footer">'+
                         '<p class="rating">'+ inputArray[8].value+' Stars</p>' +
                         '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                     '</div>'+
                 '</div>'+
             '</div>'+
        '</div>';


        //Output on page
        var row = document.getElementById(inputArray[0].value + "Row")
        row.innerHTML += inputContent;
    };
    //Check rating and return the right stars ----------------------------------------------------------------------------------------
    function starCalc(rating){
        stars = "";
        switch (rating){
                case 1:
                    stars = "&#x2605 &#x2606 &#x2606 &#x2606 &#x2606"
                    return stars;
                    break;
                case 2:
                    stars = "&#x2605 &#x2605 &#x2606 &#x2606 &#x2606"
                    return stars;
                    break;
                case 3:
                    stars = "&#x2605 &#x2605 &#x2605 &#x2606 &#x2606"
                    return stars;
                    break;
                case 4:
                    stars = "&#x2605 &#x2605 &#x2605 &#x2605 &#x2606"
                    return stars;
                    break;
                case 5:
                    stars = "&#x2605 &#x2605 &#x2605 &#x2605 &#x2605"
                    return stars;
                    break;
                default:
                    stars = "&#x2606 &#x2606 &#x2606 &#x2606 &#x2606"
                    return stars;
                    break;
                    
            }

    }
    //Check Type and return the right glyphicon ----------------------------------------------------------------------------------------
    function checkType(typ){
        type = "";
        switch (typ){
                case 'Book':
                    type = "<i class='iType glyphicon glyphicon-book'></i>"
                    return type;
                    break;
                case 'DVD':
                    type = "<i class='iType glyphicon glyphicon-film'></i>"
                    return type;
                    break;
                case 'CD':
                    type = "<i class='iType glyphicon glyphicon-music'></i>"
                    return type;
                    break;
                case 'Poster':
                    type = "<i class='iType glyphicon glyphicon-file'></i>"
                    return type;
                    break;
                case 'Game':
                    type = "<i class='iType glyphicon glyphicon-king'></i>"
                    return type;
                    break;
                default:
                    type = ""
                    return type;
                    break;
            }
    }
    //Create the names for the media Rows and Items Names ------------
    var medias = ["book", "game", "cd", "poster", "dvd"];
    //Collects all Functions in one
    function displayMediaContent() {
        printMedia(books, "Book's", medias[0]);
        printMedia(games, "Game's", medias[1]);
        printMedia(cds, "CD's", medias[2]);
        printMedia(posters, "Poster's", medias[3]);
        printMedia(dvds, "DVD's", medias[4]);

    }

    displayMediaContent();

    //Filter Function
    //Hide functions works very well ----------------------------------------
    $('#filterOptions li a').click(function() {
        //Save the ID of the clicked Element in ourClass
        var ourClass = $(this).attr('id');
        //remove active from all filterOptions li
        $('#filterOptions li').removeClass('active');
        //Add .active to the clicked Element
        $(this).parent().addClass('active');
        //if Element with ID all was clicked all mediaRow Divs are shown
        if (ourClass == 'all') {
            $('#mainContent').children('div.mediaRow').show();
            //Else the Children of the #mainContent without the class name of the Clicked Element + Row are hidden the once with are shown
        } else {
            $('#mainContent').children('div:not(.' + ourClass + '-Row)').hide();
            $('#mainContent').children('div.' + ourClass + '-Row').show();
        }
        return false
    });
    // Sort based on likes---------------------------------------------------------------------------------------------------------------------
       //Problems because of the rows
        // $('#likeSortBtn').on('click', function() {
        //     console.log("Btn");
        //     var sorted = $(".container-media").sort(function(a, b) {
        //         // var first = parseInt($(a).find(".likesDisplay").text());
        //         // var second = parseInt($(b).find(".likesDisplay").text());
        //         // return  first < second;
        //         console.log(Number($(a).find("#rating")));
        //         console.log(Number($(b).find("#rating")));
        //         return Number($(a).find("#rating").text()) < Number($(b).find("#rating").text());
        //     });
        //     sorted.detach().appendTo('.mediaRow');
        //     // $("#content").html(sorted);
        //     //change the parent of Element for the trash button


        // });

    //Get Value from Input Field---------------------------------------------------------------------------------------------
    $('#formAddContentForm').submit(function(e) {
        //Prevent the Default Form Function
        e.preventDefault();
        // To get an Index number for the added Content
        var clicks = 0;
        function click() {
            clicks += 1;
            document.getElementById("inputContentBtn").innerHTML = clicks;
        };
        // $("#displayContent")
        var inputValue = $(this).serializeArray();
        if(inputValue[1].value == "" || inputValue[2].value == "" || inputValue[3].value == "" || inputValue[4].value == "" || inputValue[7].value == ""){
            alert("Please complete the form,\n Regisseur and Auto aren't mandatory");
 
        } else{
            if (inputValue[0].value == "book" && inputValue[5].value == "Danielle Steel") {
                alert("This book is not worth to be safed");
            } else if (inputValue[0].value == "dvd" && inputValue[6].value == "Roland Emmerich") {
                alert("This Movie is not worth to be safed");
            } else {
                printInput(inputValue, clicks);
                $('#formAddContentForm').hide();
                $('#showFormContentBtn').show();
            };
        }
        


        //Controll of the Input Values 1. Way-----------------------------------------------------
        // $.each(inputValue, function(i, item) {
        //     $("#displayContent").append(item.name + " " + item.value + " <br>");
        // })

        // //Controll of the Input field 2. Way-----------------------------------------------------
        // $("#displayContent").append("name 0: " + inputValue[0].name + "<br>" + "value 0: " + inputValue[0].value + "<br><hr>");
        // $("#displayContent").append("name 1: " + inputValue[1].name + "<br>" + "value 1: " + inputValue[1].value + "<br><hr>");
        // $("#displayContent").append("name 2: " + inputValue[2].name + "<br>" + "value 2: " + inputValue[2].value + "<br><hr>");
        // $("#displayContent").append("name 3: " + inputValue[3].name + "<br>" + "value 3: " + inputValue[3].value + "<br><hr>");
        // $("#displayContent").append("name 4: " + inputValue[4].name + "<br>" + "value 4: " + inputValue[4].value + "<br><hr>");
        // $("#displayContent").append("name 5: " + inputValue[5].name + "<br>" + "value 5: " + inputValue[5].value + "<br><hr>");
        // $("#displayContent").append("name 6: " + inputValue[6].name + "<br>" + "value 6: " + inputValue[6].value + "<br><hr>");
        // $("#displayContent").append("name 7: " + inputValue[7].name + "<br>" + "value 7: " + inputValue[7].value + "<br><hr>");
        // $("#displayContent").append("name 8: " + inputValue[8].name + "<br>" + "value 8: " + inputValue[8].value + "<br><hr>");
        

        //$('#formAddContentForm').reset();//Doesn't work --------------------???????????????????????????????????????????????????????????????        return false;

    });

});
















