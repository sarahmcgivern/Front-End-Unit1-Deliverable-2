var tempFahr=prompt("What is the temperature (°F)?")
var eventType=prompt("How formal is the event?")


if (eventType === "casual" && tempFahr >=70) {
  console.log("It's " + tempFahr + " degrees and you are going to a " + eventType + " event, wear something comfy and no jacket.")
} else if (eventType === "casual" && tempFahr >= 54) {
  console.log("It's " + tempFahr + " degrees and you are going to a " + eventType + " event, wear something comfy and bring a jacket.")
} else if (eventType === "casual" && tempFahr <54) {
  console.log("It's " + tempFahr + " degrees and you are going to a " + eventType + " event, wear something comfy and bring a coat.")
} else if (eventType === "semi-formal" && tempFahr >=70) {
  console.log("It's " + tempFahr + " degrees and you are going to a " + eventType + " event, wear a polo and no jacket.")
} else if (eventType === "semi-formal" && tempFahr >=54) {
  console.log("It's " + tempFahr + " degrees and you are going to a " + eventType + " event, wear a polo and bring a jacket.")
} else if (eventType === "semi-formal" && tempFahr <54) {
  console.log("It's " + tempFahr + " degrees and you are going to a " + eventType + " event, wear a polo and bring a coat.")
}else if (eventType === "formal" && tempFahr >=70) {
  console.log("It's " + tempFahr + " degrees and you are going to a " + eventType + " event, wear a suit and no jacket.")
} else if (eventType === "formal" && tempFahr >=54) {
  console.log("It's " + tempFahr + " degrees and you are going to a " + eventType + " event, wear a suit and bring a jacket.")
} else if (eventType === "formal" && tempFahr <54) {
  console.log("It's " + tempFahr + " degrees and you are going to a " + eventType + " event, wear a suit and bring a coat.")
}