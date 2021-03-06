// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger")
                .val()
                .trim(),
            devoured: 0
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    $(".eatburger").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the POST request.
        $.ajax("/api/burgers", + id, {
            type: "PUT",
            data: newCat
        }).then(
            function () {
                console.log("Burger devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });///!!!//

    $(".delete-burger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});