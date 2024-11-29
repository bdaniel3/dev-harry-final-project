$(() => {
  console.log("ready!");

  $("#btnSubmit").on("click", (event) => {
    event.preventDefault();

    // Gather data from the form
    const selectedDestination = $("#inputLocationNames")
      .find(":selected")
      .val();
    const activities = [];
    $("input[type=checkbox]").each(function () {
      if ($(this).is(":checked")) {
        activities.push($(this).val());
      }
    });
    const selectedAccommodation = $('input[name="location"]:checked').val();
    const tripStartDate = $("#tripStart").val();

    // Form validation
    if (
      !selectedDestination ||
      selectedDestination === "Select where would you like to go?"
    ) {
      alert("Please select a destination.");
      return;
    }
    if (!selectedAccommodation) {
      alert("Please select an accommodation.");
      return;
    }
    if (!tripStartDate) {
      alert("Please select a start date.");
      return;
    }

    // Prepare JSON data
    const formData = {
      destination: selectedDestination,
      activities: activities,
      accommodation: selectedAccommodation,
      startDate: tripStartDate
    };

    // Log data as JSON
    console.log("Form Data:", JSON.stringify(formData, null, 2));

    // Update the DOM with results
    const resultContainer = $("#resultContainer");
    resultContainer.empty(); // Clear previous results

    // Populate result container
    resultContainer.append(`
      <h3>Your Travel Plan</h3>
      <p><strong>Destination:</strong> ${formData.destination}</p>
      <p><strong>Activities:</strong> ${
        formData.activities.length > 0 ? formData.activities.join(", ") : "None"
      }</p>
      <p><strong>Accommodation:</strong> ${formData.accommodation}</p>
      <p><strong>Start Date:</strong> ${formData.startDate}</p>
    `);

    // Show the result container
    resultContainer.fadeIn(); // Adds a smooth fade-in effect
  });
});