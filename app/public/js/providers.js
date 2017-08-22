// $(document).ready(function(){
// var providersContainer = $("#provider-container");
// var providers;
// var providerType;
// var budget;

// function getVendors(type, budget) {
//     providerType = type;
//     budget = budget;
//     $.get("/api/providers/" + type + "/" + budget, function(data) {
//         console.log("providers", data);
//         providers = data;
//         console.log(providers[0].name)
//         displayVendors();
//     })
// };

// // function displayVendors() {
// //     providersContainer.empty();
// //     var providersToAdd = []; 
// //     for (var i = 0; i < providers.length; i++ ) {
// //         providersToAdd.push(newProviderDiv(providers[i]))
// //     }
// //     providersContainer.append(providersToAdd);
// // }

// // function newProviderDiv(providers) {
// //     var newProviderTypeDiv = $("<div>");
// //     var providerTypeHeading = $("<h3>");
// //     providerTypeHeading.text(providerType)
// //     var providerTypeBody = $("<div>");
// //     var providerCard = $("div>");
// //     var providerName = $("<h4>")
// //     providerName.text(providers.name);
// //     var providerDesc = $("<h4>")
// //     providerDesc.text(providers.description);
// //     var providerCapacity = $("h4")
// //     providerCapacity.text + $(providers.capacity);
// //     var providerAddress = $("<h4>");
// //     providerAddress.text = $(providers.address);
// //     providerCard.append(providerName);
// //     providerCard.append(providerDesc);
// //     providerCard.append(providerCapacity);
// //     providerCard.append(providerAddress);
// //     providerTypeBody.append(providerCard)
// //     newProviderTypeDiv.append(providerTypeHeading);
// //     newProviderTypeDiv.append(providerTypeBody);
// //     providersContainer.append(newProviderTypeDiv);
// // }



// getVendors("photographers");




// });